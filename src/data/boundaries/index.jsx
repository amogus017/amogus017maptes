// src/data/boundaries/index.jsx

import allKingdoms from './geojson/kerajaan_hindhu_buddha.json';

export const EMPIRES = {
  srivijaya: {
    id: 'srivijaya',
    name: 'Srivijaya',
    color: '#329ccd',
    startYear: 650,
    endYear: 1090,
    geojson: allKingdoms,
    featureName: 'sriwijaya',
  },
  kutai: {
    id: 'kutai',
    name: 'Kutai',
    color: '#8B5E3C',
    startYear: 400,
    endYear: 1600,
    geojson: allKingdoms,
    featureName: 'kutai',
  },
  tarumanagara: {
    id: 'tarumanagara',
    name: 'Tarumanagara',
    color: '#6B8E4E',
    startYear: 362,
    endYear: 669,
    geojson: allKingdoms,
    featureName: 'tarumanagara',
  },
  sunda: {
    id: 'sunda',
    name: 'Sunda',
    color: '#C4A35A',
    startYear: 684,
    endYear: 1482,
    geojson: allKingdoms,
    featureName: 'sunda',
  },
  galuh: {
    id: 'galuh',
    name: 'Galuh',
    color: '#B5651D',
    startYear: 669,
    endYear: 1482,
    geojson: allKingdoms,
    featureName: 'galuh',
  },
  mataram: {
    id: 'mataram',
    name: 'Mataram Kuno',
    color: '#9B59B6',
    startYear: 732,
    endYear: 927,
    geojson: allKingdoms,
    featureName: 'mataram',
  },
  kanjuruhan: {
    id: 'kanjuruhan',
    name: 'Kanjuruhan',
    color: '#E07B39',
    startYear: 760,
    endYear: 763,
    geojson: allKingdoms,
    featureName: 'kanjuruhan',
  },
  kalingga: {
    id: 'kalingga',
    name: 'Kalingga',
    color: '#4CAF50',
    startYear: 632,
    endYear: 695,
    geojson: allKingdoms,
    featureName: 'kalingga',
  },
  kalingga_n: {
    id: 'kalingga_n',
    name: 'Kalingga Utara',
    color: '#3CB371',
    startYear: 695,
    endYear: 732,
    geojson: allKingdoms,
    featureName: 'kalingga.N',
  },
  kalingga_s: {
    id: 'kalingga_s',
    name: 'Kalingga Selatan',
    color: '#2E8B57',
    startYear: 695,
    endYear: 732,
    geojson: allKingdoms,
    featureName: 'kalingga.S',
  },
  medang: {
    id: 'medang',
    name: 'Medang',
    color: '#8B008B',
    startYear: 929,
    endYear: 1016,
    geojson: allKingdoms,
    featureName: 'medang',
  },
  kahuripan: {
    id: 'kahuripan',
    name: 'Kahuripan',
    color: '#DAA520',
    startYear: 1019,
    endYear: 1042,
    geojson: allKingdoms,
    featureName: 'kahuripan',
  },
  panjalu: {
    id: 'panjalu',
    name: 'Panjalu',
    color: '#CD853F',
    startYear: 1042,
    endYear: 1135,
    geojson: allKingdoms,
    featureName: 'panjalu',
  },
  janggala: {
    id: 'janggala',
    name: 'Janggala',
    color: '#2F8A8A',
    startYear: 1042,
    endYear: 1185,
    geojson: allKingdoms,
    featureName: 'janggala',
  },
  dharmasraya: {
    id: 'dharmasraya',
    name: 'Dharmasraya',
    color: '#7B68EE',
    startYear: 1088,
    endYear: 1288,
    geojson: allKingdoms,
    featureName: 'dharmasraya',
  },
  kediri: {
    id: 'kediri',
    name: 'Kediri',
    color: '#B8860B',
    startYear: 1135,
    endYear: 1250,
    geojson: allKingdoms,
    featureName: 'kediri',
  },
  tumapel: {
    id: 'tumapel',
    name: 'Tumapel',
    color: '#A0522D',
    startYear: 1222,
    endYear: 1254,
    geojson: allKingdoms,
    featureName: 'tumapel',
  },
  singasari: {
    id: 'singasari',
    name: 'Singasari',
    color: '#DC143C',
    startYear: 1254,
    endYear: 1293,
    geojson: allKingdoms,
    featureName: 'singasari',
  },
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    color: '#FF8C00',
    startYear: 1293,
    endYear: 1527,
    geojson: allKingdoms,
    featureName: 'majapahit',
  },
  pajajaran: {
    id: 'pajajaran',
    name: 'Pajajaran',
    color: '#556B2F',
    startYear: 1482,
    endYear: 1579,
    geojson: allKingdoms,
    featureName: 'pajajaran',
  },
};

export function getEmpiresForYear(year) {
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

function getEmpireBoundary(empireId, year) {
  const empire = EMPIRES[empireId];
  if (!empire) return null;
  if (year < empire.startYear || year > empire.endYear) return null;

  const filteredFeatures = empire.geojson.features.filter(f => {
    const nameMatch = empire.featureName ? f.properties.name === empire.featureName : true;
    return nameMatch && year >= f.properties.start && year < f.properties.end;
  });

  if (filteredFeatures.length === 0) return null;
  return { ...empire.geojson, features: filteredFeatures };
}

export function getTerritoryInfo(empireId, year) {
  const empire = EMPIRES[empireId];
  if (!empire) {
    return { id: 'unknown', name: 'Unknown Territory', color: '#CCCCCC', era: 'Unknown' };
  }

  if (empireId === 'srivijaya') {
    if (year >= 650 && year <= 700)
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Dapunta Hyang Sri Jayanasa', color: '#329ccd', era: 'Founding Era' };
    else if (year >= 701 && year <= 900)
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Various Maharajas', color: '#329ccd', era: 'Golden Age' };
    else if (year >= 901 && year <= 1024)
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Various Maharajas', color: '#329ccd', era: 'Maritime Dominance' };
    else if (year >= 1025 && year <= 1090)
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Unknown', color: '#5a8fa8', era: 'Decline' };
  }

  if (empireId === 'kutai') {
    if (year >= 400 && year <= 499)
      return { id: 'kutai', name: 'Kutai', ruler: 'Mulawarman', color: '#8B5E3C', era: 'Early Kingdom' };
    else if (year >= 500 && year <= 1299)
      return { id: 'kutai', name: 'Kutai', ruler: 'Various Rajas', color: '#8B5E3C', era: 'Classical Period' };
    else if (year >= 1300 && year <= 1600)
      return { id: 'kutai', name: 'Kutai', ruler: 'Unknown', color: '#6b4a30', era: 'Late Period' };
  }

  if (empireId === 'tarumanagara') {
    if (year >= 362 && year <= 450)
      return { id: 'tarumanagara', name: 'Tarumanagara', ruler: 'Purnawarman', color: '#6B8E4E', era: 'Early Kingdom' };
    else if (year >= 451 && year <= 669)
      return { id: 'tarumanagara', name: 'Tarumanagara', ruler: 'Various Rajas', color: '#6B8E4E', era: 'Classical Period' };
  }

  if (empireId === 'sunda') {
    if (year >= 684 && year <= 900)
      return { id: 'sunda', name: 'Sunda', ruler: 'Sri Jayabhupati', color: '#C4A35A', era: 'Early Kingdom' };
    else if (year >= 901 && year <= 1482)
      return { id: 'sunda', name: 'Sunda', ruler: 'Various Kings', color: '#C4A35A', era: 'Classical Period' };
  }

  if (empireId === 'galuh') {
    if (year >= 669 && year <= 900)
      return { id: 'galuh', name: 'Galuh', ruler: 'Wretikandayun', color: '#B5651D', era: 'Early Kingdom' };
    else if (year >= 901 && year <= 1482)
      return { id: 'galuh', name: 'Galuh', ruler: 'Various Kings', color: '#B5651D', era: 'Classical Period' };
  }

  if (empireId === 'mataram') {
    if (year >= 732 && year <= 752)
      return { id: 'mataram', name: 'Mataram Kuno', ruler: 'Sanjaya', color: '#9B59B6', era: 'Founding Era' };
    else if (year >= 753 && year <= 905)
      return { id: 'mataram', name: 'Mataram Kuno', ruler: 'Sailendra Dynasty', color: '#9B59B6', era: 'Golden Age' };
    else if (year >= 906 && year <= 927)
      return { id: 'mataram', name: 'Mataram Kuno', ruler: 'Mpu Sindok', color: '#7d3c98', era: 'Late Period' };
  }

  if (empireId === 'kanjuruhan')
    return { id: 'kanjuruhan', name: 'Kanjuruhan', ruler: 'Gajayana', color: '#E07B39', era: 'Early Kingdom' };

  if (empireId === 'kalingga')
    return { id: 'kalingga', name: 'Kalingga', ruler: 'Ratu Shima', color: '#4CAF50', era: 'Classical Period' };

  if (empireId === 'kalingga_n')
    return { id: 'kalingga_n', name: 'Kalingga Utara', ruler: 'Various Rajas', color: '#3CB371', era: 'Classical Period' };

  if (empireId === 'kalingga_s')
    return { id: 'kalingga_s', name: 'Kalingga Selatan', ruler: 'Ratu Shima', color: '#2E8B57', era: 'Classical Period' };

  if (empireId === 'medang')
    return { id: 'medang', name: 'Medang', ruler: 'Mpu Sindok', color: '#8B008B', era: 'Classical Period' };

  if (empireId === 'kahuripan')
    return { id: 'kahuripan', name: 'Kahuripan', ruler: 'Airlangga', color: '#DAA520', era: 'Early Kingdom' };

  if (empireId === 'panjalu') {
    if (year >= 1042 && year <= 1100)
      return { id: 'panjalu', name: 'Panjalu', ruler: 'Sri Samarawijaya', color: '#CD853F', era: 'Early Kingdom' };
    else
      return { id: 'panjalu', name: 'Panjalu', ruler: 'Various Kings', color: '#CD853F', era: 'Classical Period' };
  }

  if (empireId === 'janggala')
    return { id: 'janggala', name: 'Janggala', ruler: 'Various Kings', color: '#2F8A8A', era: 'Classical Period' };

  if (empireId === 'dharmasraya')
    return { id: 'dharmasraya', name: 'Dharmasraya', ruler: 'Various Kings', color: '#7B68EE', era: 'Classical Period' };

  if (empireId === 'kediri') {
    if (year >= 1135 && year <= 1190)
      return { id: 'kediri', name: 'Kediri', ruler: 'Jayabaya', color: '#B8860B', era: 'Golden Age' };
    else
      return { id: 'kediri', name: 'Kediri', ruler: 'Various Kings', color: '#B8860B', era: 'Late Period' };
  }

  if (empireId === 'tumapel')
    return { id: 'tumapel', name: 'Tumapel', ruler: 'Ken Arok', color: '#A0522D', era: 'Founding Era' };

  if (empireId === 'singasari') {
    if (year >= 1254 && year <= 1268)
      return { id: 'singasari', name: 'Singasari', ruler: 'Wisnuwardhana', color: '#DC143C', era: 'Early Kingdom' };
    else
      return { id: 'singasari', name: 'Singasari', ruler: 'Kertanagara', color: '#DC143C', era: 'Golden Age' };
  }

  if (empireId === 'majapahit') {
    if (year >= 1293 && year <= 1309)
      return { id: 'majapahit', name: 'Majapahit', ruler: 'Raden Wijaya', color: '#FF8C00', era: 'Founding Era' };
    else if (year >= 1310 && year <= 1389)
      return { id: 'majapahit', name: 'Majapahit', ruler: 'Hayam Wuruk', color: '#FF8C00', era: 'Golden Age' };
    else
      return { id: 'majapahit', name: 'Majapahit', ruler: 'Various Kings', color: '#e07a00', era: 'Late Period' };
  }

  if (empireId === 'pajajaran')
    return { id: 'pajajaran', name: 'Pajajaran', ruler: 'Various Kings', color: '#556B2F', era: 'Classical Period' };

  return { id: empireId, name: empire.name, ruler: 'Unknown', color: empire.color, era: 'Unknown' };
}

function getBoundaryForYear(year) {
  const empires = getEmpiresForYear(year);
  return empires.length > 0 ? empires[0].boundary : null;
}
