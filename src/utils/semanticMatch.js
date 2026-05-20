const topicKeywords = {
  origins:   ["asal", "berdiri", "didirikan", "founded", "origin", "establishment", "awal"],
  maritime:  ["laut", "kapal", "maritim", "pelabuhan", "naval", "sea", "ship", "port"],
  trade:     ["dagang", "perdagangan", "ekspor", "niaga", "trade", "commerce", "ekonomi"],
  religion:  ["agama", "hindu", "buddha", "candi", "temple", "worship", "kepercayaan"],
  military:  ["perang", "serangan", "tentara", "militer", "war", "battle", "attack"],
  culture:   ["budaya", "seni", "sastra", "bahasa", "art", "literature", "culture"],
  decline:   ["runtuh", "hancur", "kemunduran", "decline", "fall", "collapse", "berakhir"],
  rulers:    ["raja", "ratu", "pemimpin", "king", "queen", "ruler", "dinasti", "dynasty"],
  territory: ["wilayah", "daerah", "kekuasaan", "territory", "region", "expansion"],
  relations: ["hubungan", "diplomasi", "sekutu", "relations", "alliance", "diplomacy"],
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

  if (topTopics.length === 0) return [];

  const matched = period.chunks.filter(chunk =>
    chunk.topic.some(t => topTopics.includes(t))
  );

  return matched.filter(c => c.text && c.text.trim() !== "").slice(0, 3);
}
