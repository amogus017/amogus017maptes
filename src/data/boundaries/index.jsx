// src/data/boundaries/index.jsx
import { getTerritoryData } from '../territories.js';

let allKingdoms = null;

export async function initBoundaries() {
  const { default: data } = await import('./geojson/kerajaan_hindhu_buddha.json');
  allKingdoms = data;
  Object.values(EMPIRES).forEach(empire => { empire.geojson = allKingdoms; });
}

export const EMPIRES = {
  srivijaya: {
    id: 'srivijaya',
    name: 'Sriwijaya',
    color: '#329ccd',
    startYear: 650,
    endYear: 1090,
    geojson: null,
    featureName: 'sriwijaya',
  },
  kutai: {
    id: 'kutai',
    name: 'Kutai',
    color: '#8B5E3C',
    startYear: 400,
    endYear: 1600,
    geojson: null,
    featureName: 'kutai',
  },
  tarumanagara: {
    id: 'tarumanagara',
    name: 'Tarumanagara',
    color: '#6B8E4E',
    startYear: 362,
    endYear: 669,
    geojson: null,
    featureName: 'tarumanagara',
  },
  sunda: {
    id: 'sunda',
    name: 'Sunda',
    color: '#C4A35A',
    startYear: 684,
    endYear: 1482,
    geojson: null,
    featureName: 'sunda',
    minor: true,
  },
  galuh: {
    id: 'galuh',
    name: 'Galuh',
    color: '#B5651D',
    startYear: 669,
    endYear: 1482,
    geojson: null,
    featureName: 'galuh',
    minor: true,
  },
  mataram: {
    id: 'mataram',
    name: 'Mataram Kuno',
    color: '#9B59B6',
    startYear: 732,
    endYear: 928,
    geojson: null,
    featureName: 'mataram',
  },
  kanjuruhan: {
    id: 'kanjuruhan',
    name: 'Kanjuruhan',
    color: '#E07B39',
    startYear: 760,
    endYear: 763,
    geojson: null,
    featureName: 'kanjuruhan',
    minor: true,
  },
  kalingga: {
    id: 'kalingga',
    name: 'Kalingga',
    color: '#4CAF50',
    startYear: 632,
    endYear: 695,
    geojson: null,
    featureName: 'kalingga',
  },
  kalingga_n: {
    id: 'kalingga_n',
    name: 'Kalingga Utara',
    color: '#3CB371',
    startYear: 695,
    endYear: 732,
    geojson: null,
    featureName: 'kalingga.N',
  },
  kalingga_s: {
    id: 'kalingga_s',
    name: 'Kalingga Selatan',
    color: '#2E8B57',
    startYear: 695,
    endYear: 732,
    geojson: null,
    featureName: 'kalingga.S',
  },
  medang: {
    id: 'medang',
    name: 'Medang',
    color: '#8B008B',
    startYear: 929,
    endYear: 1016,
    geojson: null,
    featureName: 'medang',
    minor: true,
  },
  kahuripan: {
    id: 'kahuripan',
    name: 'Kahuripan',
    color: '#DAA520',
    startYear: 1019,
    endYear: 1042,
    geojson: null,
    featureName: 'kahuripan',
    minor: true,
  },
  panjalu: {
    id: 'panjalu',
    name: 'Panjalu',
    color: '#CD853F',
    startYear: 1042,
    endYear: 1135,
    geojson: null,
    featureName: 'panjalu',
  },
  janggala: {
    id: 'janggala',
    name: 'Janggala',
    color: '#2F8A8A',
    startYear: 1042,
    endYear: 1185,
    geojson: null,
    featureName: 'janggala',
    minor: true,
  },
  dharmasraya: {
    id: 'dharmasraya',
    name: 'Dharmasraya',
    color: '#7B68EE',
    startYear: 1088,
    endYear: 1288,
    geojson: null,
    featureName: 'dharmasraya',
    minor: true,
  },
  kediri: {
    id: 'kediri',
    name: 'Kediri',
    color: '#B8860B',
    startYear: 1135,
    endYear: 1250,
    geojson: null,
    featureName: 'kediri',
  },
  tumapel: {
    id: 'tumapel',
    name: 'Tumapel',
    color: '#A0522D',
    startYear: 1222,
    endYear: 1254,
    geojson: null,
    featureName: 'tumapel',
  },
  singasari: {
    id: 'singasari',
    name: 'Singasari',
    color: '#DC143C',
    startYear: 1254,
    endYear: 1292,
    geojson: null,
    featureName: 'singasari',
  },
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    color: '#FF8C00',
    startYear: 1293,
    endYear: 1527,
    geojson: null,
    featureName: 'majapahit',
  },
};

export function getEmpiresForYear(year) {
  if (!allKingdoms) return [];
  const activeEmpires = [];

  Object.values(EMPIRES).forEach(empire => {
    if (year < empire.startYear || year > empire.endYear) return;

    const filteredFeatures = empire.geojson.features.filter(f => {
      const nameMatch = empire.featureName ? f.properties.name === empire.featureName : true;
      return nameMatch && year >= f.properties.start && year < f.properties.end;
    });

    // Deduplicate by geometry string to handle accidental duplicates in QGIS
    const seen = new Set();
    const uniqueFeatures = filteredFeatures.filter(f => {
      const key = JSON.stringify(f.geometry);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    if (uniqueFeatures.length === 0) return;

    activeEmpires.push({
      ...empire,
      boundary: {
        ...empire.geojson,
        features: uniqueFeatures,
      },
      boundaryYear: year,
    });
  });

  return activeEmpires;
}

// Reads live from territoriesData/getTerritoryData (territories.js) instead of
// a hand-maintained copy — a hardcoded per-era ruler snapshot here previously
// drifted out of sync every time the actual ruler timeline was reworked (e.g.
// still saying "Hayam Wuruk" for 1310-1389 after that range was split into
// three separate reigns). Deriving from the same source the detail panel uses
// means this can never go stale again.
export function getTerritoryInfo(empireId, year, language = 'en') {
  const empire = EMPIRES[empireId];
  if (!empire) {
    return { id: 'unknown', name: 'Unknown Territory', color: '#CCCCCC', era: 'Unknown' };
  }

  const data = getTerritoryData(empireId, year);
  if (!data) {
    return { id: empireId, name: empire.name, ruler: 'Unknown', color: empire.color, era: 'Unknown' };
  }

  const useId = language === 'id';
  return {
    id: empireId,
    name: (useId && data.nameId) ? data.nameId : (data.name || empire.name),
    ruler: data.ruler?.name || 'Unknown',
    color: empire.color,
    era: (useId && data.eraId) ? data.eraId : (data.era || 'Unknown'),
  };
}
