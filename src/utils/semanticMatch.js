const topicKeywords = {
  origins:   ["asal", "berdiri", "didirikan", "founded", "origin", "establishment", "awal"],
  maritime:  ["laut", "kapal", "maritim", "pelabuhan", "naval", "sea", "ship", "port"],
  trade:     ["dagang", "perdagangan", "ekspor", "niaga", "trade", "commerce"],
  religion:  ["agama", "hindu", "buddha", "candi", "temple", "worship", "kepercayaan"],
  military:  ["perang", "serangan", "tentara", "militer", "war", "battle", "attack", "pemberontakan", "memberontak", "rebel", "rebellion"],
  culture:   ["budaya", "seni", "bahasa", "art", "culture"],
  decline:   ["runtuh", "hancur", "kemunduran", "decline", "fall", "collapse", "berakhir"],
  rulers:    ["raja", "ratu", "pemimpin", "king", "queen", "ruler", "dinasti", "dynasty"],
  territory: ["wilayah", "daerah", "kekuasaan", "territory", "region", "expansion"],
  relations: ["hubungan", "diplomasi", "sekutu", "relations", "alliance", "diplomacy"],
  // Added — these topic tags are used throughout academicSources.js but had no
  // matching keyword entry, making tagged chunks unreachable via primary
  // matching (only reachable through the text-fallback below, if at all).
  succession:     ["suksesi", "pergantian tahta", "takhta", "tahta", "penerus", "pewaris", "succession", "successor", "throne", "heir", "naik takhta"],
  sources:        ["sumber sejarah", "prasasti", "naskah", "kronik", "catatan sejarah", "source", "inscription", "chronicle", "manuscript"],
  economy:        ["ekonomi", "pertanian", "upeti", "pajak", "economy", "agriculture", "tribute", "tax"],
  administration: ["administrasi", "birokrasi", "pejabat", "struktur pemerintahan", "administration", "bureaucracy", "official"],
  governance:     ["pemerintahan", "tata kelola", "governance"],
  transition:     ["transisi", "peralihan", "berganti nama", "transition"],
  literature:     ["sastra", "kakawin", "kitab", "karya sastra", "literature", "manuscript", "poem", "poetry"],
};

export function getRelevantChunks(question, kingdomId, currentYear, academicSources) {
  const kingdom = academicSources[kingdomId];
  if (!kingdom) return [];

  const period = kingdom.periods.find(p => currentYear >= p.start && currentYear <= p.end);
  if (!period || !period.chunks.length) return [];

  const q = question.toLowerCase();

  // Score each topic by counting how many of its keywords appear in the question
  const scores = {};
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    scores[topic] = keywords.filter(kw => q.includes(kw)).length;
  }

  // Pick the top 2 scoring topics (only if they have at least 1 match)
  const topTopics = Object.entries(scores)
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([topic]) => topic);

  let matched = topTopics.length > 0
    ? period.chunks.filter(chunk => chunk.topic.some(t => topTopics.includes(t)))
    : [];

  // Fallback: the fixed topic keyword lists miss proper nouns (ruler names,
  // event names like "Ranggalawe") and synonyms not in the list. If topic
  // matching found nothing, match significant words from the question
  // directly against each chunk's text instead of giving up empty-handed.
  if (matched.length === 0) {
    const stopwords = new Set([
      'yang', 'dan', 'di', 'ke', 'dari', 'ini', 'itu', 'apa', 'siapa', 'kapan',
      'bagaimana', 'kenapa', 'mengapa', 'adalah', 'dengan', 'untuk', 'pada',
      'the', 'and', 'of', 'in', 'on', 'what', 'who', 'how', 'why', 'when', 'is', 'are', 'was', 'were',
    ]);
    const words = q
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .split(/\s+/)
      .filter(w => w.length > 3 && !stopwords.has(w));

    if (words.length > 0) {
      matched = period.chunks.filter(chunk => {
        const haystack = chunk.text.toLowerCase();
        // Also check with spaces stripped so "ranggalawe" matches source
        // text spelled "Rangga Lawe" (and vice versa).
        const haystackNoSpace = haystack.replace(/\s+/g, '');
        return words.some(w => haystack.includes(w) || haystackNoSpace.includes(w));
      });
    }
  }

  return matched.filter(c => c.text && c.text.trim() !== "").slice(0, 3);
}
