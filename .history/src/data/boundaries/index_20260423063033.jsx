// src/data/boundaries/index.jsx

import allKingdoms from './geojson/half_kingdom_test.json';

export const EMPIRES = {
  srivijaya: {
    id: 'srivijaya',
    name: 'Srivijaya',
    color: '#329ccd',
    borderColor: '#84242c',
    startYear: 650,
    endYear: 1183,
    geojson: allKingdoms,
    featureName: 'sriwijaya',
  },
  kutai: {
    id: 'kutai',
    name: 'Kutai',
    color: '#8B5E3C',
    borderColor: '#4a2c0a',
    startYear: 400,
    endYear: 1361,
    geojson: allKingdoms,
    featureName: 'kutai',
  },
  tarumanagara: {
    id: 'tarumanagara',
    name: 'Tarumanagara',
    color: '#6B8E4E',
    borderColor: '#3a5c1f',
    startYear: 400,
    endYear: 669,
    geojson: allKingdoms,
    featureName: 'tarumanagara',
  },
  sunda: {
    id: 'sunda',
    name: 'Sunda',
    color: '#C4A35A',
    borderColor: '#7a5c1f',
    startYear: 684,
    endYear: 734,   // temporary, still being drawn
    geojson: allKingdoms,
    featureName: 'sunda',
  },
  galuh: {
    id: 'galuh',
    name: 'Galuh',
    color: '#B5651D',
    borderColor: '#6b3510',
    startYear: 669,
    endYear: 721,   // temporary, still being drawn
    geojson: allKingdoms,
    featureName: 'galuh',
  },
  mataram: {
    id: 'mataram',
    name: 'Mataram Kuno',
    color: '#9B59B6',
    borderColor: '#5b2c6f',
    startYear: 732,
    endYear: 927,
    geojson: allKingdoms,
    featureName: 'mataram',
  },
  kanjuruhan: {
    id: 'kanjuruhan',
    name: 'Kanjuruhan',
    color: '#E07B39',
    borderColor: '#8b3e10',
    startYear: 760,
    endYear: 763,   // temporary, still being drawn
    geojson: allKingdoms,
    featureName: 'kanjuruhan',
  },
  kalingga_n: {
    id: 'kalingga_n',
    name: 'Kalingga Utara',
    color: '#3CB371',
    borderColor: '#1a6b3a',
    startYear: 632,
    endYear: 732,
    geojson: allKingdoms,
    featureName: 'kalingga.N',
  },
  kalingga_s: {
    id: 'kalingga_s',
    name: 'Kalingga Selatan',
    color: '#2E8B57',
    borderColor: '#0f4d2a',
    startYear: 632,
    endYear: 732,
    geojson: allKingdoms,
    featureName: 'kalingga.S',
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

export function getEmpireBoundary(empireId, year) {
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
    else if (year >= 1025 && year <= 1183)
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Unknown', color: '#5a8fa8', era: 'Decline' };
  }

  if (empireId === 'kutai') {
    if (year >= 400 && year <= 499)
      return { id: 'kutai', name: 'Kutai', ruler: 'Mulawarman', color: '#8B5E3C', era: 'Early Kingdom' };
    else if (year >= 500 && year <= 1299)
      return { id: 'kutai', name: 'Kutai', ruler: 'Various Rajas', color: '#8B5E3C', era: 'Classical Period' };
    else if (year >= 1300 && year <= 1361)
      return { id: 'kutai', name: 'Kutai', ruler: 'Unknown', color: '#6b4a30', era: 'Late Period' };
  }

  if (empireId === 'tarumanagara') {
    if (year >= 400 && year <= 450)
      return { id: 'tarumanagara', name: 'Tarumanagara', ruler: 'Purnawarman', color: '#6B8E4E', era: 'Early Kingdom' };
    else if (year >= 451 && year <= 669)
      return { id: 'tarumanagara', name: 'Tarumanagara', ruler: 'Various Rajas', color: '#6B8E4E', era: 'Classical Period' };
  }

  if (empireId === 'sunda')
    return { id: 'sunda', name: 'Sunda', ruler: 'Sri Jayabhupati', color: '#C4A35A', era: 'Early Kingdom' };

  if (empireId === 'galuh')
    return { id: 'galuh', name: 'Galuh', ruler: 'Wretikandayun', color: '#B5651D', era: 'Early Kingdom' };

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

  if (empireId === 'kalingga_n')
    return { id: 'kalingga_n', name: 'Kalingga Utara', ruler: 'Various Rajas', color: '#3CB371', era: 'Classical Period' };

  if (empireId === 'kalingga_s')
    return { id: 'kalingga_s', name: 'Kalingga Selatan', ruler: 'Ratu Shima', color: '#2E8B57', era: 'Classical Period' };

  return { id: empireId, name: empire.name, ruler: 'Unknown', color: empire.color, era: 'Unknown' };
}

export function getBoundaryForYear(year) {
  const empires = getEmpiresForYear(year);
  return empires.length > 0 ? empires[0].boundary : null;
}