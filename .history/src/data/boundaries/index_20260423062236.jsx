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