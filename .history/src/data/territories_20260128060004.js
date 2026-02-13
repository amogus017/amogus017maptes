// src/data/territories.js
// Historical data for Southeast Asian territories - FIXED to match TerritoryInfoPanel requirements

export const territoriesData = {
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    englishName: 'Majapahit Empire',
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
  }
};

export const regionalEvents = [
  { year: 1293, title: 'Founding of Majapahit', impact: 'Formation' },
  { year: 1350, title: 'Golden Age begins', impact: 'Peak' },
  { year: 1389, title: 'Hayam Wuruk dies', impact: 'Decline' },
  { year: 1527, title: 'Fall to Demak', impact: 'End' }
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