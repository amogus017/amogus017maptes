// src/data/territories.js
// Historical data for Southeast Asian territories - UPDATED with Srivijaya + Kutai

export const territoriesData = {
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    englishName: 'Majapahit Empire',
    wikiSlug: 'Majapahit',
    idWikiSlug: 'Majapahit',
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

  // Srivijaya Empire
  srivijaya: {
    id: 'srivijaya',
    name: 'Srivijaya',
    englishName: 'Srivijaya Empire',
    wikiSlug: 'Srivijaya',
    idWikiSlug: 'Sriwijaya',
    color: '#329ccd',
    
    timeline: {
      650: {
        era: 'Founding Era',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Dapunta Hyang Sri Jayanasa',
          reignStart: 650,
          reignEnd: 683
        },
        capital: 'Palembang',
        population: '~500,000',
        religion: 'Mahayana Buddhism',
        government: 'Thalassocracy',
        summary: 'Srivijaya founded on the Musi River, beginning its rise as a maritime power controlling Sumatra',
        keyEvents: [
          { year: 650, event: 'Srivijaya founded by Dapunta Hyang', type: 'political' },
          { year: 671, event: 'I Tsing visits — finds 1,000 Buddhist monks', type: 'cultural' }
        ],
        historicalContext: 'Srivijaya emerges as a coastal polity controlling the Strait of Malacca.\n\nEarly Chinese records and the Kedukan Bukit inscription document its rapid rise.',
        economy: {
          primary: ['River Trade', 'Port Tolls', 'Tribute'],
          exports: ['Forest Products', 'Resins', 'Gold'],
          tradingPartners: ['Tang China', 'India', 'Champa']
        },
        culture: {
          language: 'Old Malay, Sanskrit',
          script: 'Pallava Script',
          architecture: 'Early Buddhist Shrines',
          literature: 'Kedukan Bukit Inscription'
        },
        territories: ['Southern Sumatra', 'Musi River Delta'],
        vassals: [],
        rivals: ['Melayu Kingdom', 'Javanese Polities'],
        relations: {
          'Tang China': 'Early Tributary Contact',
          'India': 'Buddhist Exchange'
        }
      },
      800: {
        era: 'Golden Age',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Dharmasetu',
          reignStart: 775,
          reignEnd: 825
        },
        capital: 'Palembang',
        population: '~1.5 million',
        religion: 'Mahayana Buddhism',
        government: 'Thalassocracy',
        summary: 'Srivijaya expands control over the Malay Peninsula and Sunda Strait, dominating regional trade',
        keyEvents: [
          { year: 775, event: 'Ligor inscription — Srivijaya asserts Malay Peninsula control', type: 'political' },
          { year: 800, event: 'Extensive Buddhist temple construction', type: 'cultural' }
        ],
        historicalContext: 'Srivijaya consolidates its grip on the Strait of Malacca and Sunda Strait.\n\nIt becomes the dominant entrepot for trade between China and the Indian Ocean world.',
        economy: {
          primary: ['Maritime Trade', 'Port Revenues', 'Tribute'],
          exports: ['Spices', 'Gold', 'Camphor', 'Resins'],
          tradingPartners: ['Tang China', 'Abbasid Caliphate', 'India', 'Champa']
        },
        culture: {
          language: 'Old Malay, Sanskrit',
          script: 'Pallava Script',
          architecture: 'Buddhist Temples and Stupas',
          literature: 'Buddhist Sutras, Diplomatic Records'
        },
        territories: ['Sumatra', 'Malay Peninsula', 'Western Java', 'Southern Thailand'],
        vassals: ['Jambi', 'Kedah', 'Chaiya'],
        rivals: ['Javanese Kingdoms', 'Sailendra'],
        relations: {
          'Tang China': 'Active Tributary Partner',
          'India': 'Buddhist Scholarly Exchange',
          'Abbasid Caliphate': 'Emerging Trade Contact'
        }
      },
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
      1025: {
        era: 'Decline',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Unknown',
          reignStart: 1000,
          reignEnd: 1100
        },
        capital: 'Palembang',
        population: '~1-2 million',
        religion: 'Mahayana Buddhism',
        government: 'Weakened Thalassocracy',
        summary: 'Chola raids devastate the capital; maritime dominance begins to crumble',
        keyEvents: [
          { year: 1025, event: 'Chola raid devastates Palembang', type: 'military' },
          { year: 1068, event: 'Further Chola attacks weaken trade network', type: 'military' }
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
        rivals: ['Chola Dynasty', 'Javanese Kingdoms'],
        relations: {
          'Song China': 'Diminished Tributary',
          'Chola': 'Hostile'
        }
      }
    }
  },

  // Kutai Kingdom
  kutai: {
    id: 'kutai',
    name: 'Kutai',
    englishName: 'Kutai Kingdom',
    wikiSlug: 'Kutai',
    idWikiSlug: 'Kerajaan_Kutai',
    color: '#8B5E3C',

    timeline: {
      400: {
        era: 'Early Kingdom',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Mulawarman',
          reignStart: 375,
          reignEnd: 425
        },
        capital: 'Muara Kaman',
        population: '~100,000',
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: 'One of the earliest known Hindu kingdoms in Southeast Asia, known from the Yupa inscriptions',
        keyEvents: [
          { year: 400, event: 'Yupa inscriptions erected by Mulawarman', type: 'cultural' },
          { year: 400, event: 'Ritual donation of 20,000 cows to Brahmins', type: 'religious' }
        ],
        historicalContext: 'Kutai is among the oldest recorded kingdoms in the Indonesian archipelago.\n\nThe Sanskrit Yupa inscriptions reveal strong Indian cultural influence in early Borneo.',
        economy: {
          primary: ['River Trade', 'Agriculture', 'Tribute'],
          exports: ['Forest Products', 'Gold', 'Camphor'],
          tradingPartners: ['India', 'Regional Polities']
        },
        culture: {
          language: 'Sanskrit, Old Malay',
          script: 'Pallava Script',
          architecture: 'Hindu Temples',
          literature: 'Yupa Inscriptions'
        },
        territories: ['East Kalimantan', 'Mahakam River Basin'],
        vassals: [],
        rivals: [],
        relations: { 'India': 'Cultural & Religious Exchange' }
      },
      500: {
        era: 'Classical Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Various Rajas',
          reignStart: 500,
          reignEnd: 1300
        },
        capital: 'Muara Kaman',
        population: '~200,000',
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Kutai maintains its river-based kingdom across the Mahakam basin over many centuries',
        keyEvents: [
          { year: 500, event: 'Continued Hindu-Buddhist cultural development', type: 'cultural' }
        ],
        historicalContext: 'Kutai persists as a regional power in Borneo, controlling the Mahakam River trade routes.\n\nLimited records from this long period suggest stable but quiet rule.',
        economy: {
          primary: ['River Trade', 'Forest Products', 'Tribute'],
          exports: ['Gold', 'Camphor', 'Rattan'],
          tradingPartners: ['Java', 'Srivijaya', 'China']
        },
        culture: {
          language: 'Old Malay',
          script: 'Local Script',
          architecture: 'Wooden Palaces and Temples',
          literature: 'Oral Traditions'
        },
        territories: ['East Kalimantan', 'Mahakam River Basin'],
        vassals: [],
        rivals: ['Regional Borneo Polities'],
        relations: { 'Srivijaya': 'Tributary Relations', 'Java': 'Trade Contact' }
      },
      1300: {
        era: 'Late Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Unknown',
          reignStart: 1300,
          reignEnd: 1361
        },
        capital: 'Muara Kaman',
        population: '~150,000',
        religion: 'Hindu-Buddhist',
        government: 'Regional Kingdom',
        summary: 'Kutai in its final pre-Islamic period before eventual conversion and transformation',
        keyEvents: [
          { year: 1361, event: 'End of classical Kutai period', type: 'political' }
        ],
        historicalContext: 'The classical Hindu-Buddhist Kutai kingdom approaches its end.\n\nIslamisation of Borneo will eventually transform the kingdom into the Kutai Sultanate.',
        economy: {
          primary: ['River Trade', 'Forest Products'],
          exports: ['Gold', 'Camphor'],
          tradingPartners: ['Java', 'Regional Ports']
        },
        culture: {
          language: 'Old Malay',
          script: 'Local Script',
          architecture: 'Traditional Wooden Structures',
          literature: 'Oral Traditions'
        },
        territories: ['East Kalimantan'],
        vassals: [],
        rivals: ['Majapahit Influence'],
        relations: { 'Majapahit': 'Tributary' }
      }
    }
  }
};

export const regionalEvents = [
  { year: 400, title: 'Kutai Kingdom founded', impact: 'Formation' },
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