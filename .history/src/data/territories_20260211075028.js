// src/data/territories.js
// Historical data for Southeast Asian territories - UPDATED with Srivijaya

export const territoriesData = {
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    englishName: 'Majapahit Empire',
    wikiSlug: 'Majapahit',
    color: '#D4AF37',
    
    timeline: {
      1350: {
        era: 'Golden Age',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Hayam Wuruk',
          reignStart: 1350,
          reignEnd: 1389
        },
        primeMinister: {
          portrait: '⚔️',
          title: 'Mahapatih',
          name: 'Gajah Mada',
        },
        capital: 'Trowulan',
        population: '~4-5 million',
        religion: 'Hindu-Buddhist Syncretic',
        government: 'Mandala System Empire',
        summary: 'At the height of its power under Hayam Wuruk and Gajah Mada',
        keyEvents: [
          { year: 1350, event: 'Hayam Wuruk ascends throne', type: 'political' },
          { year: 1357, event: 'Peak of territorial expansion', type: 'military' }
        ],
        historicalContext: 'The Majapahit Empire reaches its zenith under Hayam Wuruk and Gajah Mada.\n\nThrough the famous Palapa Oath, Gajah Mada vowed to unite Nusantara.',
        economy: {
          primary: ['Spice Trade', 'Rice Agriculture', 'Maritime Commerce'],
          exports: ['Cloves', 'Nutmeg', 'Rice', 'Textiles', 'Gold'],
          tradingPartners: ['Yuan China', 'India', 'Siam', 'Champa']
        },
        culture: {
          language: 'Old Javanese, Sanskrit',
          script: 'Kawi Script',
          architecture: 'Majapahit Terracotta Style',
          literature: 'Nagarakertagama, Pararaton'
        },
        territories: ['Java', 'Bali', 'Sumatra', 'Madura'],
        vassals: ['Bali', 'Palembang', 'Jambi'],
        rivals: ['Sukhothai', 'Champa'],
        relations: {
          'Yuan China': 'Tributary Trade',
          'Sukhothai': 'Rivalry',
          'Champa': 'Conflict'
        }
      },
      1400: {
        era: 'Decline',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Wikramawardhana',
          reignStart: 1389,
          reignEnd: 1429
        },
        capital: 'Trowulan',
        population: '~3-4 million',
        religion: 'Hindu-Buddhist, Islam Spreading',
        government: 'Weakening Mandala',
        summary: 'Empire fragments after Hayam Wuruk. Paregreg War weakens authority',
        keyEvents: [
          { year: 1389, event: 'Death of Hayam Wuruk', type: 'political' },
          { year: 1400, event: 'Paregreg Civil War', type: 'military' }
        ],
        historicalContext: 'The golden age ends with Hayam Wuruk\'s death.\n\nMalacca\'s founding shifts trade patterns away from Majapahit control.',
        economy: {
          primary: ['Declining Trade', 'Rice Agriculture'],
          exports: ['Rice', 'Spices (Reduced)'],
          tradingPartners: ['Ming China', 'Islamic Traders']
        },
        culture: {
          language: 'Old Javanese, Arabic',
          script: 'Kawi Script',
          architecture: 'Temple Maintenance',
          literature: 'Historical Chronicles'
        },
        territories: ['Java', 'Eastern Bali'],
        vassals: ['Eastern Java Kingdoms'],
        rivals: ['Malacca', 'Islamic States'],
        relations: {
          'Ming China': 'Weakened Tributary',
          'Malacca': 'Trade Competitor'
        }
      },
      1450: {
        era: 'Terminal Decline',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Rajasawardhana',
          reignStart: 1451,
          reignEnd: 1453
        },
        capital: 'Trowulan',
        population: '~1-2 million',
        religion: 'Hindu-Buddhist',
        government: 'Vestigial Court',
        summary: 'Shadow of former glory, controls only eastern Java',
        keyEvents: [
          { year: 1447, event: 'Queen Suhita dies', type: 'political' }
        ],
        historicalContext: 'Majapahit exists more in memory than reality.\n\nIslamic sultanates dominate the coasts.',
        economy: {
          primary: ['Subsistence Farming'],
          exports: ['Rice (Local)'],
          tradingPartners: ['Limited']
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi (Declining)',
          architecture: 'Ruins',
          literature: 'Oral Traditions'
        },
        territories: ['Eastern Java'],
        vassals: [],
        rivals: ['Demak Sultanate'],
        relations: {
          'Demak': 'Dominant Rival'
        }
      },
      1500: {
        era: 'Final Years',
        ruler: {
          portrait: '👑',
          title: 'Last Maharaja',
          name: 'Brawijaya V',
          reignStart: 1468,
          reignEnd: 1527
        },
        capital: 'Trowulan (Ruins)',
        population: '~500,000',
        religion: 'Hindu-Buddhist',
        government: 'Ceremonial',
        summary: 'Final decades before fall to Demak in 1527',
        keyEvents: [
          { year: 1527, event: 'Fall to Demak', type: 'military' }
        ],
        historicalContext: 'The end of Hindu-Buddhist rule in Java.\n\nCultural legacy persists despite political collapse.',
        economy: {
          primary: ['Subsistence'],
          exports: [],
          tradingPartners: []
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi (Rare)',
          architecture: 'Decay',
          literature: 'Memory'
        },
        territories: ['Trowulan'],
        vassals: [],
        rivals: ['Demak'],
        relations: {
          'Demak': 'Imminent Conquest'
        }
      }
    }
  },

  // NEW: Srivijaya Empire
  srivijaya: {
    id: 'srivijaya',
    name: 'Srivijaya',
    englishName: 'Srivijaya Empire',
    wikiSlug: 'Kerajaan_Sriwijaya',
    color: '#CD7F32',
    
    timeline: {
      900: {
        era: 'Maritime Dominance',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Unknown',
          reignStart: 850,
          reignEnd: 950
        },
        capital: 'Palembang',
        population: '~2-3 million',
        religion: 'Mahayana Buddhism',
        government: 'Thalassocracy',
        summary: 'Dominant maritime power controlling the Strait of Malacca trade routes',
        keyEvents: [
          { year: 900, event: 'Peak naval supremacy', type: 'military' },
          { year: 925, event: 'Trade monopoly established', type: 'economic' }
        ],
        historicalContext: 'Srivijaya controls the vital maritime trade routes between India and China.\n\nA major center of Buddhist learning attracting scholars from across Asia.',
        economy: {
          primary: ['Maritime Trade', 'Port Revenues', 'Tribute'],
          exports: ['Spices', 'Gold', 'Camphor', 'Resins'],
          tradingPartners: ['Tang/Song China', 'Chola India', 'Arab Merchants', 'Java']
        },
        culture: {
          language: 'Old Malay, Sanskrit',
          script: 'Pallava Script',
          architecture: 'Buddhist Temples and Stupas',
          literature: 'Buddhist Sutras, Maritime Records'
        },
        territories: ['Sumatra', 'Malay Peninsula', 'Western Java', 'Southern Thailand'],
        vassals: ['Jambi', 'Kedah', 'Chaiya'],
        rivals: ['Javanese Kingdoms', 'Chola Dynasty'],
        relations: {
          'Song China': 'Tributary Trade Partner',
          'Chola India': 'Trade Rivalry',
          'Javanese States': 'Competition'
        }
      },
      1200: {
        era: 'Decline',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Unknown',
          reignStart: 1150,
          reignEnd: 1250
        },
        capital: 'Palembang',
        population: '~1-2 million',
        religion: 'Mahayana Buddhism',
        government: 'Weakened Thalassocracy',
        summary: 'Maritime dominance challenged by rising Javanese and Thai kingdoms',
        keyEvents: [
          { year: 1025, event: 'Chola raid devastates capital', type: 'military' },
          { year: 1183, event: 'Java gains independence', type: 'political' }
        ],
        historicalContext: 'After the devastating Chola raids of 1025, Srivijaya never fully recovers.\n\nRising powers in Java and the Malay Peninsula erode its control.',
        economy: {
          primary: ['Reduced Trade', 'Local Agriculture'],
          exports: ['Spices', 'Forest Products'],
          tradingPartners: ['Song China', 'Regional States']
        },
        culture: {
          language: 'Old Malay',
          script: 'Pallava Script',
          architecture: 'Temple Maintenance',
          literature: 'Declining Scholarship'
        },
        territories: ['Southern Sumatra', 'Parts of Malay Peninsula'],
        vassals: ['Jambi'],
        rivals: ['Singhasari', 'Sukhothai', 'Tambralinga'],
        relations: {
          'Song China': 'Diminished Tributary',
          'Javanese Kingdoms': 'Losing Ground'
        }
      },
      1350: {
        era: 'Final Period',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Unknown',
          reignStart: 1300,
          reignEnd: 1377
        },
        capital: 'Palembang',
        population: '~500,000',
        religion: 'Buddhism and Islam',
        government: 'Regional Power',
        summary: 'Remnant state, soon to be absorbed by Majapahit',
        keyEvents: [
          { year: 1347, event: 'Majapahit expansion begins', type: 'military' },
          { year: 1377, event: 'Fall to Majapahit', type: 'political' }
        ],
        historicalContext: 'The once-great maritime empire is now a shadow of its former glory.\n\nMajapahit\'s expansion will soon end Srivijaya\'s independence.',
        economy: {
          primary: ['Local Trade', 'Subsistence'],
          exports: ['Limited Spices'],
          tradingPartners: ['Regional Only']
        },
        culture: {
          language: 'Old Malay',
          script: 'Mixed Scripts',
          architecture: 'Decay',
          literature: 'Oral Traditions'
        },
        territories: ['Palembang Region'],
        vassals: [],
        rivals: ['Majapahit'],
        relations: {
          'Majapahit': 'Facing Conquest',
          'Ming China': 'Minimal Contact'
        }
      }
    }
  }
};

export const regionalEvents = [
  { year: 650, title: 'Srivijaya Founded', impact: 'Formation' },
  { year: 1025, title: 'Chola raids Srivijaya', impact: 'Major Decline' },
  { year: 1293, title: 'Founding of Majapahit', impact: 'Formation' },
  { year: 1350, title: 'Majapahit Golden Age begins', impact: 'Peak' },
  { year: 1377, title: 'Srivijaya falls to Majapahit', impact: 'End' },
  { year: 1389, title: 'Hayam Wuruk dies', impact: 'Decline' },
  { year: 1527, title: 'Majapahit falls to Demak', impact: 'End' }
];

export function getTerritoryData(territoryId, year) {
  const territory = territoriesData[territoryId];
  if (!territory) return null;

  const availableYears = Object.keys(territory.timeline).map(Number).sort((a, b) => a - b);
  let closestYear = availableYears[0];
  
  for (const availableYear of availableYears) {
    if (availableYear <= year) closestYear = availableYear;
    else break;
  }

  return {
    ...territory,
    ...territory.timeline[closestYear],
    actualYear: closestYear
  };
}
