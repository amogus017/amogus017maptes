// src/data/boundaries/index.jsx
import mocofahit from './geojson/mocofahit.json';
import mocofahit1 from './geojson/mocofahit1.json';
import mocofahit2 from './geojson/mocofahit2.json';

// Srivijaya Empire
import sriwijaya1 from './geojson/sriwijaya1.json';
import sriwijaya2 from './geojson/sriwijaya2.json';
import sriwijaya3 from './geojson/sriwijaya3.json';

// Empire configuration with metadata
export const EMPIRES = {
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit Empire',
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
    startYear: 1200,
    endYear: 1450,
    boundaries: {
      1200: sriwijaya1,
      1300: sriwijaya2,
      1450: sriwijaya3,
    }
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
    // Check if empire existed in this year
    if (year >= empire.startYear && year <= empire.endYear) {
      // Find the closest boundary year <= requested year
      const boundaryYears = Object.keys(empire.boundaries).map(Number).sort((a, b) => a - b);
      let selectedYear = boundaryYears[0]; // Default to earliest
      
      for (const boundaryYear of boundaryYears) {
        if (boundaryYear <= year) {
          selectedYear = boundaryYear;
        } else {
          break;
        }
      }

      activeEmpires.push({
        ...empire,
        boundary: empire.boundaries[selectedYear],
        boundaryYear: selectedYear
      });
    }
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

  // Check if empire existed in this year
  if (year < empire.startYear || year > empire.endYear) {
    return null;
  }

  // Find closest boundary year
  const boundaryYears = Object.keys(empire.boundaries).map(Number).sort((a, b) => a - b);
  let selectedYear = boundaryYears[0];
  
  for (const boundaryYear of boundaryYears) {
    if (boundaryYear <= year) {
      selectedYear = boundaryYear;
    } else {
      break;
    }
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
        name: 'Majapahit Empire',
        ruler: 'Hayam Wuruk',
        color: '#D4AF37',
        era: 'Golden Age'
      };
    } else if (year >= 1390 && year <= 1450) {
      return {
        id: 'majapahit',
        name: 'Majapahit Empire',
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
    if (year >= 1200 && year <= 1300) {
      return {
        id: 'srivijaya',
        name: 'Srivijaya',
        ruler: 'Various Maharajas',
        color: '#CD7F32',
        era: 'Golden Age'
      };
    } else if (year >= 1301 && year <= 1400) {
      return {
        id: 'srivijaya',
        name: 'Srivijaya',
        ruler: 'Unknown',
        color: '#A0522D',
        era: 'Decline'
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
