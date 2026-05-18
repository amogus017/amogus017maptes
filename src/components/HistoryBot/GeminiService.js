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
  const section =
    "\n\nACADEMIC SOURCES (cite inline as [1], [2], [3] when using them — do not list them again at the end):\n"
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

  const systemContext = kingdomContext
    ? `You are a knowledgeable historical guide for pre-colonial Nusantara and Southeast Asian history.
The user is viewing an interactive historical atlas and has navigated to the year ${year} CE.
They are currently exploring the ${kingdomContext.name}${englishName && englishName !== kingdomContext.name ? ` (${englishName})` : ''} during the ${kingdomContext.era} period.

Key facts for this era:
- Ruler: ${rulerName}${rulerTitle ? ` (${rulerTitle})` : ''}
- Capital: ${kingdomContext.capital || 'Unknown'}
- Religion: ${kingdomContext.religion || 'Unknown'}
- Government: ${kingdomContext.government || 'Unknown'}
- Economy: ${kingdomContext.economy?.primary?.join(', ') || 'Unknown'}
- Trading partners: ${kingdomContext.economy?.tradingPartners?.join(', ') || 'Unknown'}
- Summary: ${kingdomContext.summary || ''}${academicSection}

Answer questions in an educational, engaging tone suitable for Indonesian high school students (SMA level).
Keep answers concise — 2 to 4 paragraphs maximum. Use clear language.
If the user asks something unrelated to Nusantara or Southeast Asian history, politely redirect them back to the topic.
Do not use markdown formatting like **bold** or ## headers — write in plain paragraphs.`
    : `You are a knowledgeable historical guide for pre-colonial Nusantara and Southeast Asian kingdoms (400–1600 CE).
The user is currently viewing the map at year ${year} CE.
Answer in an educational tone suitable for Indonesian high school students (SMA level).
Keep answers concise — 2 to 4 paragraphs. Write in plain paragraphs, no markdown formatting.
If asked about unrelated topics, politely redirect to Nusantara history.`;

  const response = await fetch(PROXY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek/deepseek-v4-flash",
      messages: [
        { role: "system", content: systemContext },
        { role: "user", content: userMessage },
      ],
      max_tokens: 512,
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
  return {
    text: data.choices?.[0]?.message?.content ?? "I could not generate a response. Please try again.",
    sources,
  };
}
