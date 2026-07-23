import { academicSources } from "../../data/academicSources.js";
import { getRelevantChunks } from "../../utils/semanticMatch.js";

const PROXY_URL = "/api/chat";

function buildAcademicSection(userMessage, kingdomId, year) {
  if (!academicSources[kingdomId]) return { section: "", sources: [] };

  const chunks = getRelevantChunks(userMessage, kingdomId, year, academicSources);
  const filledChunks = chunks.filter(c => c.text && c.text.trim() !== "");
  if (filledChunks.length === 0) return { section: "", sources: [] };

  const lines = filledChunks.map((c, i) =>
    `[${i + 1}] ${c.text}${c.citation ? `\n    Source: ${c.citation}` : ''}`
  );
  // The valid bracket numbers depend on how many sources were actually
  // retrieved for THIS question — stating a fixed "[1], [2], [3]" example
  // regardless of count anchors the model into inventing a [3] even when
  // only 1-2 sources exist.
  const validNumbers = filledChunks.map((_, i) => `[${i + 1}]`).join(', ');
  const section =
    `\n\nACADEMIC SOURCES — there are exactly ${filledChunks.length} source(s) below, numbered ${validNumbers}. `
    + `You MUST cite every claim drawn from these using ONLY these exact bracket numbers, placed right after the sentence that uses it, `
    + `e.g. "Ia naik takhta pada 1350 M [1]." Never invent a bracket number higher than ${filledChunks.length}. `
    + "This is mandatory, not optional. Do not repeat the source list again at the end of your answer:\n"
    + lines.join("\n");
  return { section, sources: filledChunks };
}

export async function askGemini(userMessage, kingdomContext = null, currentYear = null) {
  const year = currentYear ?? 1350;

  const rulerName = kingdomContext?.ruler?.name ?? kingdomContext?.ruler ?? 'Unknown';
  const rulerTitle = kingdomContext?.ruler?.title ?? '';

  // Issue 3: guard englishName which is absent on the lightweight getTerritoryInfo object
  const englishName = kingdomContext?.englishName || kingdomContext?.name || '';

  const { section: academicSection, sources } = kingdomContext
    ? buildAcademicSection(userMessage, kingdomContext.id, year)
    : { section: "", sources: [] };

  const outOfRangeNote = (kingdomContext?.startYear && kingdomContext?.endYear)
    ? (year > kingdomContext.endYear
        ? `\nIMPORTANT: The user is viewing year ${year} CE but ${kingdomContext.name} ended in ${kingdomContext.endYear} CE. Open your answer with one sentence acknowledging this, then answer based on the kingdom's actual history.`
        : year < kingdomContext.startYear
          ? `\nIMPORTANT: The user is viewing year ${year} CE but ${kingdomContext.name} was not founded until ${kingdomContext.startYear} CE. Open with one sentence noting this, then answer about the kingdom.`
          : '')
    : '';

  const citationReminder = academicSection
    ? `\nYou were given ${sources.length} ACADEMIC SOURCES above (numbered ${sources.map((_, i) => `[${i + 1}]`).join(', ')}) — place the matching marker after every sentence that draws on them, and never cite a number outside that range. Do not skip this.`
    : '';

  const systemContext = kingdomContext
    ? `You are a knowledgeable historical guide for pre-colonial Nusantara and Southeast Asian history.
The user is viewing an interactive historical atlas and has navigated to the year ${year} CE.
They are currently exploring the ${kingdomContext.name}${englishName && englishName !== kingdomContext.name ? ` (${englishName})` : ''} during the ${kingdomContext.era} period.

Key facts for this era:
- Kingdom period: ${kingdomContext.startYear ?? '?'}–${kingdomContext.endYear ?? '?'} CE (user is viewing year ${year} CE)
- Ruler: ${rulerName}${rulerTitle ? ` (${rulerTitle})` : ''}
- Capital: ${kingdomContext.capital || 'Unknown'}
- Religion: ${kingdomContext.religion || 'Unknown'}
- Government: ${kingdomContext.government || 'Unknown'}
- Economy: ${kingdomContext.economy?.primary?.join(', ') || 'Unknown'}
- Trading partners: ${kingdomContext.economy?.tradingPartners?.join(', ') || 'Unknown'}
- Architecture: ${kingdomContext.culture?.architecture || 'Unknown'}
- Summary: ${kingdomContext.summary || ''}${academicSection}

Answer questions in an educational tone suitable for Indonesian high school students (SMA level).
Lead with the direct answer in the first sentence — no preamble. Keep answers to 1–2 short paragraphs maximum.
For questions about temples, architecture, or cultural achievements, cover the kingdom's full historical period (${kingdomContext.startYear}–${kingdomContext.endYear} CE), not just year ${year}. If a notable structure was built after the current viewing year, mention it and briefly note when it was built.
If the user asks something unrelated to Nusantara or Southeast Asian history, politely redirect them in one sentence.
Do not use markdown formatting like **bold** or ## headers — write in plain paragraphs.${outOfRangeNote}${citationReminder}`
    : `You are a knowledgeable historical guide for pre-colonial Nusantara and Southeast Asian kingdoms (400–1600 CE).
The user is currently viewing the map at year ${year} CE.
Lead with the direct answer in the first sentence — no preamble. Keep answers to 1–2 short paragraphs maximum.
Write in plain paragraphs, no markdown formatting.
If asked about unrelated topics, redirect in one sentence.`;

  const response = await fetch(PROXY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek/deepseek-v4-flash",
      messages: [
        { role: "system", content: systemContext },
        { role: "user", content: userMessage },
      ],
      max_tokens: 500,
      temperature: 0.2,
    }),
  });

  // Issue 2: guard against non-JSON error bodies (502, rate-limit HTML pages, etc.)
  if (!response.ok) {
    let errMsg = `OpenRouter API error: ${response.status}`;
    try {
      const err = await response.json();
      errMsg = err?.error?.message || errMsg;
    } catch {}
    throw new Error(errMsg);
  }

  const data = await response.json();
  const rawContent = data.choices?.[0]?.message?.content;
  // Safety net: strip any [N] marker the model invented beyond the number of
  // sources actually provided (e.g. citing [3] when only 2 sources exist) —
  // the prompt asks it not to, but LLM instruction-following isn't guaranteed.
  const content = rawContent
    ? rawContent
        .replace(/\[(\d+)\]/g, (match, n) => (Number(n) >= 1 && Number(n) <= sources.length) ? match : '')
        .replace(/\s+([.,;:!?])/g, '$1')
        .replace(/[ \t]{2,}/g, ' ')
    : rawContent;
  // Only show sources the model actually cited (its [N] marker appears in the
  // text) — getRelevantChunks() retrieves up to 3 candidates, but the model
  // may only end up using a subset of them to answer the specific question.
  // Keep the ORIGINAL bracket number (citationNumber) attached to each source
  // so the reference list can display [2] as "[2]" even when [1] got dropped —
  // renumbering by filtered array position would desync it from the text.
  const citedSources = content
    ? sources
        .map((s, i) => ({ ...s, citationNumber: i + 1 }))
        .filter(s => content.includes(`[${s.citationNumber}]`))
    : [];
  return {
    text: content ?? "I could not generate a response. Please try again.",
    sources: citedSources,
  };
}
