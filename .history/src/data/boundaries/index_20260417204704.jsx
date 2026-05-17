// src/data/boundaries/index.jsx
import mocofahit from './geojson/mocofahit.json';
import mocofahit1 from './geojson/mocofahit1.json';
import mocofahit2 from './geojson/mocofahit2.json';

// Srivijaya Empire
import sriwijaya_650_1183 from './geojson/sriwijaya_650-1183.json';

// Empire configuration with metadata
export const EMPIRES = {
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    color: '#D4AF37', // Gold
    borderColor: '#8B4513', // Brown
    startYear: 1293,
    endYear: 1527,
    boundaries: {
      1350: mocofahit,
      1400: mocofahit1,
      1450: mocofahit2,
    }
  },
  srivijaya: {
    id: 'srivijaya',
    name: 'Srivijaya',
    color: '#329ccd', // Bronze
    borderColor: '#84242c', // Dark brown
    startYear: 650,
    endYear: 1183,
    // Single GeoJSON — features are filtered by their start/end properties at render time
    geojson: sriwijaya_650_1183,
  },
  // Add more empires here as you create them:
  // khmer: { ... },
  // ayutthaya: { ... },
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

    let boundary;

    if (empire.geojson) {
      // Filter individual features by their start/end properties
      const filteredFeatures = empire.geojson.features.filter(f => {
        const s = f.properties.start;
        const e = f.properties.end;
        return year >= s && year < e;
      });

      if (filteredFeatures.length === 0) return;

      boundary = {
        ...empire.geojson,
        features: filteredFeatures,
      };
    } else {
      // Legacy: pick closest boundary year from the boundaries map
      const boundaryYears = Object.keys(empire.boundaries).map(Number).sort((a, b) => a - b);
      let selectedYear = boundaryYears[0];
      for (const by of boundaryYears) {
        if (by <= year) selectedYear = by;
        else break;
      }
      boundary = empire.boundaries[selectedYear];
    }

    activeEmpires.push({
      ...empire,
      boundary,
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

  if (empire.geojson) {
    const filteredFeatures = empire.geojson.features.filter(f => {
      return year >= f.properties.start && year < f.properties.end;
    });
    if (filteredFeatures.length === 0) return null;
    return { ...empire.geojson, features: filteredFeatures };
  }

  // Legacy boundaries map
  const boundaryYears = Object.keys(empire.boundaries).map(Number).sort((a, b) => a - b);
  let selectedYear = boundaryYears[0];
  for (const by of boundaryYears) {
    if (by <= year) selectedYear = by;
    else break;
  }
  return empire.boundaries[selectedYear];
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

  // Majapahit-specific eras
  if (empireId === 'majapahit') {
    if (year >= 1350 && year <= 1389) {
      return {
        id: 'majapahit',
        name: 'Majapahit',
        ruler: 'Hayam Wuruk',
        color: '#D4AF37',
        era: 'Golden Age'
      };
    } else if (year >= 1390 && year <= 1450) {
      return {
        id: 'majapahit',
        name: 'Majapahit',
        ruler: 'Wikramawardhana',
        color: '#DAA520',
        era: 'Decline'
      };
    } else if (year >= 1451 && year <= 1527) {
      return {
        id: 'majapahit',
        name: 'Majapahit',
        ruler: 'Brawijaya V',
        color: '#B8860B',
        era: 'Final Years'
      };
    }
  }

  // Srivijaya-specific eras
  if (empireId === 'srivijaya') {
    if (year >= 650 && year <= 700) {
      return {
        id: 'srivijaya',
        name: 'Srivijaya',
        ruler: 'Dapunta Hyang Sri Jayanasa',
        color: '#329ccd',
        era: 'Founding Era'
      };
    } else if (year >= 701 && year <= 800) {
      return {
        id: 'srivijaya',
        name: 'Srivijaya',
        ruler: 'Various Maharajas',
        color: '#329ccd',
        era: 'Early Expansion'
      };
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

// Legacy function for backward compatibility (now returns only first empire)
export function getBoundaryForYear(year) {
  const empires = getEmpiresForYear(year);
  return empires.length > 0 ? empires[0].boundary : null;
}