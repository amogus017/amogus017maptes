// src/data/boundaries/index.js

// Import your painted territories
import mocofahit1 from './geojson/mocofahit.geojson';
import mocofahit2 from './geojson/mocofahit1.geojson';
import mocofahit3 from './geojson/mocofahit2.geojson';

// Map years to your territories
export const historicalBoundaries = {
  1300: mocofahit1,  // Majapahit founding
  1350: mocofahit2,  // Majapahit expansion
  1400: mocofahit3   // Majapahit peak
};

export const availableYears = [1300, 1350, 1400];

export const getBoundaryForYear = (year) => {
  // Find the closest available year
  const closest = availableYears.reduce((prev, curr) => 
    Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
  );
  return historicalBoundaries[closest];
};

// Helper to get territory info
export const getTerritoryInfo = (year) => {
  const info = {
    1300: {
      name: "Early Majapahit",
      ruler: "Raden Wijaya",
      color: "#FFD700"
    },
    1350: {
      name: "Expanding Majapahit",
      ruler: "Tribhuwana Wijayatunggadewi",
      color: "#FFA500"
    },
    1400: {
      name: "Majapahit Empire",
      ruler: "Hayam Wuruk",
      color: "#FF8C00"
    }
  };
  
  const closest = availableYears.reduce((prev, curr) => 
    Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
  );
  return info[closest];
};