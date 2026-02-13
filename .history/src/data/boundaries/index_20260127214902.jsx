// src/data/boundaries/index.jsx
import mocofahit from './geojson/mocofahit.json';
import mocofahit1 from './geojson/mocofahit1.json';
import mocofahit2 from './geojson/mocofahit2.json';

// Srivijaya Empire
import sriwijaya1 from './geojson/sriwijaya1.json';
import sriwijaya2 from './geojson/sriwijaya2.json';
import sriwijaya3 from './geojson/sriwijaya3.json';

// Map years to boundary files
const boundariesByYear = {
  1350: mocofahit,   // Early Majapahit
  1400: mocofahit1,  // Mid Majapahit
  1450: mocofahit2,  // Late Majapahit
  // Add more as you create them
  1375: sriwijaya1,   
  1400: sriwijaya2,  
  1450: sriwijaya3,
  
};

// Get the appropriate boundary for a given year
export function getBoundaryForYear(year) {
  // Find the closest year that's <= the requested year
  const availableYears = Object.keys(boundariesByYear).map(Number).sort((a, b) => a - b);
  
  let selectedYear = availableYears[0]; // Default to earliest
  for (const availableYear of availableYears) {
    if (availableYear <= year) {
      selectedYear = availableYear;
    } else {
      break;
    }
  }
  
  return boundariesByYear[selectedYear];
}

// Get territory information based on the year
export function getTerritoryInfo(year) {
  // This returns basic info for the map layer
  // More detailed info comes from territories.js for the panel
  
  if (year >= 1350 && year <= 1389) {
    return {
      id: 'majapahit',
      name: 'Majapahit Empire',
      ruler: 'Hayam Wuruk',
      color: '#D4AF37', // Gold
      era: 'Golden Age'
    };
  } else if (year >= 1390 && year <= 1450) {
    return {
      id: 'majapahit',
      name: 'Majapahit Empire',
      ruler: 'Wikramawardhana',
      color: '#DAA520', // Goldenrod (slightly faded)
      era: 'Decline'
    };
  } else if (year >= 1451 && year <= 1527) {
    return {
      id: 'majapahit',
      name: 'Majapahit',
      ruler: 'Brawijaya V',
      color: '#B8860B', // Dark goldenrod (faded)
      era: 'Final Years'
    };
  }
  
  // Default
  return {
    id: 'majapahit',
    name: 'Majapahit',
    ruler: 'Unknown',
    color: '#D4AF37',
    era: 'Unknown'
  };
}