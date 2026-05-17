// src/data/boundaries/index.jsx

// Srivijaya + Kutai (shared GeoJSON, filtered by feature name)
import sriwijayakutai from './geojson/half kingdom test.json';

// Empire configuration with metadata
export const EMPIRES = {
  srivijaya: {
    id: 'srivijaya',
    name: 'Srivijaya',
    color: '#329ccd',
    borderColor: '#84242c',
    startYear: 650,
    endYear: 1183,
    geojson: sriwijayakutai,
    featureName: 'sriwijaya', // filter by properties.name
  },
  kutai: {
    id: 'kutai',
    name: 'Kutai',
    color: '#8B5E3C',
    borderColor: '#4a2c0a',
    startYear: 400,
    endYear: 1361,
    geojson: sriwijayakutai,
    featureName: 'kutai', // filter by properties.name
  },
  // Add more empires here as you create them:
  // majapahit: { id: 'majapahit', ..., geojson: majapahitJson, featureName: 'majapahit' },
  // malacca: { ... },
};

/**
 * Get all empires that existed in a given year with their appropriate boundaries
 * @param {number} year - The year to query
 * @returns {Array} Array of empire objects with their boundaries
 */
export function getEmpiresForYear(year) {
  const activeEmpires = [];

  Object.values(EMPIRES).forEach(empire => {
    if (year < empire.startYear || year > empire.endYear) return;

    // Filter features by name and start/end year
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

/**
 * Get a single empire's boundary for a specific year
 * @param {string} empireId - The empire identifier
 * @param {number} year - The year to query
 * @returns {Object|null} GeoJSON boundary or null
 */
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

/**
 * Get territory information for a specific empire and year
 * @param {string} empireId - The empire identifier
 * @param {number} year - The year to query
 * @returns {Object} Territory information
 */
export function getTerritoryInfo(empireId, year) {
  const empire = EMPIRES[empireId];
  if (!empire) {
    return {
      id: 'unknown',
      name: 'Unknown Territory',
      color: '#CCCCCC',
      era: 'Unknown'
    };
  }

  // Srivijaya-specific eras
  if (empireId === 'srivijaya') {
    if (year >= 650 && year <= 700) {
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Dapunta Hyang Sri Jayanasa', color: '#329ccd', era: 'Founding Era' };
    } else if (year >= 701 && year <= 900) {
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Various Maharajas', color: '#329ccd', era: 'Golden Age' };
    } else if (year >= 901 && year <= 1024) {
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Various Maharajas', color: '#329ccd', era: 'Maritime Dominance' };
    } else if (year >= 1025 && year <= 1183) {
      return { id: 'srivijaya', name: 'Srivijaya', ruler: 'Unknown', color: '#5a8fa8', era: 'Decline' };
    }
  }

  // Kutai-specific eras
  if (empireId === 'kutai') {
    if (year >= 400 && year <= 499) {
      return { id: 'kutai', name: 'Kutai', ruler: 'Mulawarman', color: '#8B5E3C', era: 'Early Kingdom' };
    } else if (year >= 500 && year <= 1299) {
      return { id: 'kutai', name: 'Kutai', ruler: 'Various Rajas', color: '#8B5E3C', era: 'Classical Period' };
    } else if (year >= 1300 && year <= 1361) {
      return { id: 'kutai', name: 'Kutai', ruler: 'Unknown', color: '#6b4a30', era: 'Late Period' };
    }
  }

  // Default
  return {
    id: empireId,
    name: empire.name,
    ruler: 'Unknown',
    color: empire.color,
    era: 'Unknown'
  };
}

// Legacy function for backward compatibility
export function getBoundaryForYear(year) {
  const empires = getEmpiresForYear(year);
  return empires.length > 0 ? empires[0].boundary : null;
}