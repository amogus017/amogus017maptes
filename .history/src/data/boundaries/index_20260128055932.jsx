// Import Majapahit Empire GeoJSON files
import majapahit1350 from './geojson/mocofahit.json';
import majapahit1389 from './geojson/mocofahit1.json';
import majapahit1400 from './geojson/mocofahit2.json';

// Import Srivijaya Empire GeoJSON files
import srivijaya850 from './geojson/sriwijaya1.json';
import srivijaya1025 from './geojson/sriwijaya2.json';
import srivijaya1200 from './geojson/sriwijaya3.json';

/**
 * All boundary data mapped by key
 */
export const boundaries = {
  // Majapahit Empire
  majapahit_1350: majapahit1350,
  majapahit_1389: majapahit1389,
  majapahit_1400: majapahit1400,
  
  // Srivijaya Empire
  srivijaya_850: srivijaya850,
  srivijaya_1025: srivijaya1025,
  srivijaya_1200: srivijaya1200,
};

/**
 * OLD FUNCTION - Keep for backward compatibility
 * Only returns Majapahit boundaries
 */
export const getBoundaryForYear = (year) => {
  const key = `majapahit_${year}`;
  return boundaries[key];
};

/**
 * OLD FUNCTION - Keep for backward compatibility  
 * Only returns Majapahit info
 */
export const getTerritoryInfo = (year) => {
  const territoryInfo = {
    1350: {
      name: "Majapahit Empire",
      ruler: "Hayam Wuruk",
      capital: "Trowulan",
      color: "#8B4513",
      year: 1350
    },
    1389: {
      name: "Majapahit Empire (Peak)",
      ruler: "Wikramawardhana", 
      capital: "Trowulan",
      color: "#A0522D",
      year: 1389
    },
    1400: {
      name: "Majapahit Empire",
      ruler: "Wikramawardhana",
      capital: "Trowulan", 
      color: "#A0522D",
      year: 1400
    }
  };
  
  return territoryInfo[year] || territoryInfo[1350];
};

/**
 * NEW FUNCTION - Get all boundary keys for a specific year
 * Returns array of objects with key and data
 */
export const getBoundariesForYear = (year) => {
  return Object.entries(boundaries)
    .filter(([key]) => key.endsWith(`_${year}`))
    .map(([key, data]) => ({ key, data }));
};

export default boundaries;