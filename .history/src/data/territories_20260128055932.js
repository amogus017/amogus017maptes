/**
 * Territory data for all empires and time periods
 */
export const territoriesData = {
  // ========================================
  // MAJAPAHIT EMPIRE
  // ========================================
  
  majapahit_1350: {
    id: 'majapahit_1350',
    name: 'Majapahit Empire',
    year: 1350,
    color: '#8B4513',
    empire: 'Majapahit',
    boundaryKey: 'majapahit_1350',
    info: {
      ruler: 'Hayam Wuruk',
      primeMinister: 'Gajah Mada',
      capital: 'Trowulan, East Java',
      population: '~4 million',
      religion: 'Hindu-Buddhist Syncretism',
      description: 'The Majapahit Empire during its expansion phase under Hayam Wuruk and Gajah Mada.'
    }
  },

  majapahit_1389: {
    id: 'majapahit_1389',
    name: 'Majapahit Empire (Peak)',
    year: 1389,
    color: '#A0522D',
    empire: 'Majapahit',
    boundaryKey: 'majapahit_1389',
    info: {
      ruler: 'Wikramawardhana',
      capital: 'Trowulan, East Java',
      population: '~5 million',
      religion: 'Hindu-Buddhist Syncretism',
      description: 'The Majapahit Empire at its territorial zenith.'
    }
  },

  majapahit_1400: {
    id: 'majapahit_1400',
    name: 'Majapahit Empire',
    year: 1400,
    color: '#A0522D',
    empire: 'Majapahit',
    boundaryKey: 'majapahit_1400',
    info: {
      ruler: 'Wikramawardhana',
      capital: 'Trowulan, East Java',
      population: '~4.5 million',
      religion: 'Hindu-Buddhist Syncretism',
      description: 'Majapahit maintaining extensive territories.'
    }
  },

  // ========================================
  // SRIVIJAYA EMPIRE
  // ========================================

  srivijaya_850: {
    id: 'srivijaya_850',
    name: 'Srivijaya Empire',
    year: 850,
    color: '#FF6347',
    empire: 'Srivijaya',
    boundaryKey: 'srivijaya_850',
    info: {
      ruler: 'Balaputra',
      capital: 'Palembang, Sumatra',
      population: '~2 million',
      religion: 'Mahayana Buddhism',
      description: 'Srivijaya at its height, controlling the Strait of Malacca.'
    }
  },

  srivijaya_1025: {
    id: 'srivijaya_1025',
    name: 'Srivijaya Empire (Post-Chola)',
    year: 1025,
    color: '#CD5C5C',
    empire: 'Srivijaya',
    boundaryKey: 'srivijaya_1025',
    info: {
      ruler: 'Sangrama Vijayottunggavarman',
      capital: 'Palembang, Sumatra',
      population: '~1.5 million',
      religion: 'Mahayana Buddhism',
      description: 'Srivijaya after the devastating Chola raids of 1025.'
    }
  },

  srivijaya_1200: {
    id: 'srivijaya_1200',
    name: 'Srivijaya Empire (Declining)',
    year: 1200,
    color: '#B22222',
    empire: 'Srivijaya',
    boundaryKey: 'srivijaya_1200',
    info: {
      ruler: 'Unknown',
      capital: 'Palembang, Sumatra',
      population: '~1 million',
      religion: 'Mahayana Buddhism',
      description: 'Srivijaya in decline, losing influence to other powers.'
    }
  },
};

/**
 * Get all territories for a specific year
 */
export const getTerritoriesForYear = (year) => {
  return Object.values(territoriesData).filter(territory => 
    territory.year === year
  );
};

/**
 * Get all unique years
 */
export const getAllYears = () => {
  return [...new Set(Object.values(territoriesData).map(t => t.year))]
    .sort((a, b) => a - b);
};

/**
 * Get all unique empires
 */
export const getAllEmpires = () => {
  return [...new Set(Object.values(territoriesData).map(t => t.empire))];
};

/**
 * Get territories by empire name
 */
export const getTerritoriesByEmpire = (empireName) => {
  return Object.values(territoriesData).filter(t => t.empire === empireName);
};

export default territoriesData;