import { territoriesData } from './territories';
import { historicalEvents } from './historicalEvents';
import { EMPIRES } from './boundaries';

let _cache = null;

export function buildSearchIndex() {
  if (_cache) return _cache;

  const index = [];

  // Kingdoms
  for (const empire of Object.values(EMPIRES)) {
    index.push({
      type: 'kingdom',
      label: empire.name,
      labelId: empire.name,
      kingdomId: empire.id,
      startYear: empire.startYear,
      endYear: empire.endYear,
      year: empire.startYear,
    });
  }

  // Rulers — deduplicated per kingdom, chronological
  for (const [id, territory] of Object.entries(territoriesData)) {
    if (!territory.timeline) continue;
    const empire = EMPIRES[id];
    if (!empire) continue;
    const seen = new Set();
    const sortedYears = Object.keys(territory.timeline).sort((a, b) => +a - +b);
    for (const yk of sortedYears) {
      const { ruler } = territory.timeline[yk];
      if (!ruler?.name || ruler.name === 'Unknown') continue;
      if (seen.has(ruler.name)) continue;
      seen.add(ruler.name);
      index.push({
        type: 'ruler',
        label: ruler.name,
        labelId: ruler.name,
        kingdomId: id,
        kingdomName: empire.name,
        reignStart: ruler.reignStart,
        reignEnd: ruler.reignEnd,
        year: ruler.reignStart,
      });
    }
  }

  // Prime ministers / chief ministers
  for (const [id, territory] of Object.entries(territoriesData)) {
    if (!territory.timeline) continue;
    const empire = EMPIRES[id];
    if (!empire) continue;
    const seen = new Set();
    for (const yk of Object.keys(territory.timeline).sort((a, b) => +a - +b)) {
      const { primeMinister } = territory.timeline[yk];
      if (!primeMinister?.name) continue;
      if (seen.has(primeMinister.name)) continue;
      seen.add(primeMinister.name);
      index.push({
        type: 'ruler',
        label: primeMinister.name,
        labelId: primeMinister.name,
        kingdomId: id,
        kingdomName: empire.name,
        reignStart: primeMinister.reignStart,
        reignEnd: primeMinister.reignEnd,
        year: primeMinister.reignStart,
      });
    }
  }

  // Historical events
  for (const ev of historicalEvents) {
    if (!ev.kingdoms?.length) continue;
    index.push({
      type: 'event',
      label: ev.title,
      labelId: ev.titleId ?? ev.title,
      icon: ev.icon ?? '📜',
      kingdomId: ev.kingdoms[0],
      year: ev.year,
    });
  }

  _cache = index;
  return _cache;
}
