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
};

export function getEmpiresForYear(year) {
  const activeEmpires = [];

  Object.values(EMPIRES).forEach(empire => {
    if (year < empire.startYear || year > empire.endYear) return;

    const filteredFeatures = empire.geojson.features.filter(f => {
      const nameMatch = empire.featureName ? f.properties.name === empire.featureName : true;
      return nameMatch && year >= f.properties.start && year < f.properties.end;
    });

    if (filteredFeatures.length === 0) return;

    activeEmpires.push({
      ...empire,
      boundary: {
        ...empire.geojson,
        features: filteredFeatures,
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

  return { id: empireId, name: empire.name, ruler: 'Unknown', color: empire.color, era: 'Unknown' };
}

export function getBoundaryForYear(year) {
  const empires = getEmpiresForYear(year);
  return empires.length > 0 ? empires[0].boundary : null;
}