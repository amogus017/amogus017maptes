// src/data/territories.js
// Historical data for Southeast Asian territories

export const territoriesData = {
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    englishName: 'Majapahit Empire',
    color: '#D4AF37',
    
    // Timeline data - different information for different years
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
        territory: 'Java, Sumatra, Bali, parts of Malay Peninsula',
        overview: {
          description: 'At the height of its power under the legendary minister Gajah Mada and King Hayam Wuruk. The empire controls vast territories across the archipelago through a network of vassal states.',
          strengths: ['Naval supremacy', 'Trade networks', 'Cultural influence', 'Military power'],
          challenges: ['Managing distant vassals', 'Competition with Siam', 'Internal succession disputes']
        },
        economy: {
          mainExports: ['Spices (cloves, nutmeg)', 'Rice', 'Textiles', 'Gold'],
          tradePartners: ['China (Yuan/Ming)', 'India', 'Siam', 'Champa', 'Arab traders'],
          currency: 'Ma coins (Chinese coins), gold',
          economicStatus: 'Prosperous - controlling major spice routes',
          gdp: 'Estimated 15-20% of regional GDP'
        },
        culture: {
          religion: 'Syncretic Hindu-Buddhist (Dharma)',
          language: 'Old Javanese, Sanskrit',
          architecture: 'Distinctive Majapahit terracotta style',
          literature: 'Nagarakertagama (royal chronicle)',
          arts: ['Traditional gamelan', 'Wayang puppet theater', 'Temple architecture']
        },
        military: {
          strength: 'Very Strong',
          army: '~200,000 infantry, cavalry',
          navy: '~500 vessels (warships & transport)',
          specialUnits: 'Bhayangkara (royal guard)',
          notableVictories: ['Conquest of Bali (1343)', 'Subjugation of Palembang']
        },
        relations: {
          allies: ['Vassal states across archipelago', 'Trade relations with Ming China'],
          rivals: ['Sukhothai (Siam)', 'Champa'],
          vassals: ['Bali', 'Sumatra territories', 'Eastern Java kingdoms']
        },
        events: [
          { year: 1350, title: 'Hayam Wuruk ascends throne', impact: 'positive' },
          { year: 1357, title: 'Peak of territorial expansion', impact: 'positive' }
        ]
      },
      1400: {
        era: 'Decline Begins',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Wikramawardhana',
          reignStart: 1389,
          reignEnd: 1429
        },
        capital: 'Trowulan',
        population: '~3-4 million',
        territory: 'Java, diminishing control over outer islands',
        overview: {
          description: 'After the death of Hayam Wuruk in 1389, the empire begins to fragment. Succession disputes and the rise of Islamic sultanates challenge Majapahit\'s dominance.',
          strengths: ['Cultural prestige', 'Core territories in Java', 'Naval tradition'],
          challenges: ['Loss of vassal states', 'Internal civil wars', 'Rise of Islam', 'Economic decline']
        },
        economy: {
          mainExports: ['Rice', 'Spices (reduced)', 'Textiles'],
          tradePartners: ['China (Ming)', 'Islamic traders', 'Remaining vassals'],
          currency: 'Ma coins, barter increasing',
          economicStatus: 'Declining - loss of trade monopolies',
          gdp: 'Estimated 10-12% of regional GDP'
        },
        culture: {
          religion: 'Hindu-Buddhist, Islam spreading',
          language: 'Old Javanese, Arabic influences',
          architecture: 'Majapahit style declining',
          literature: 'Historical chronicles',
          arts: ['Gamelan music', 'Wayang theater', 'Temple maintenance']
        },
        military: {
          strength: 'Moderate',
          army: '~100,000 (declining)',
          navy: '~200 vessels',
          specialUnits: 'Royal guard diminished',
          notableDefeats: ['Loss of Palembang', 'Vassal rebellions']
        },
        relations: {
          allies: ['Fewer loyal vassals', 'Limited Ming trade'],
          rivals: ['Malacca Sultanate', 'Islamic coastal states', 'Blambangan'],
          vassals: ['Reduced to eastern Java']
        },
        events: [
          { year: 1389, title: 'Death of Hayam Wuruk', impact: 'negative' },
          { year: 1398, title: 'Founding of Malacca', impact: 'negative' },
          { year: 1400, title: 'Civil War (Paregreg)', impact: 'negative' }
        ]
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
        capital: 'Trowulan (diminished)',
        population: '~1-2 million',
        territory: 'Eastern Java only',
        overview: {
          description: 'Majapahit is now a shadow of its former glory, controlling only parts of eastern Java. Islamic sultanates dominate the coast and trade.',
          strengths: ['Historical prestige', 'Cultural heritage'],
          challenges: ['Surrounded by Islamic states', 'Economic isolation', 'Loss of naval power', 'Succession chaos']
        },
        economy: {
          mainExports: ['Rice (local)', 'Handicrafts'],
          tradePartners: ['Limited local trade'],
          currency: 'Barter economy predominant',
          economicStatus: 'Subsistence level',
          gdp: 'Estimated 3-5% of regional GDP'
        },
        culture: {
          religion: 'Hindu-Buddhist (isolated), Islam dominant elsewhere',
          language: 'Old Javanese',
          architecture: 'Maintenance of old temples',
          literature: 'Historical preservation',
          arts: ['Traditional gamelan', 'Wayang theater']
        },
        military: {
          strength: 'Weak',
          army: '~20,000 (fragmented)',
          navy: '~50 vessels',
          specialUnits: 'None',
          notableDefeats: ['Loss of coastal territories', 'Retreat inland']
        },
        relations: {
          allies: ['None significant'],
          rivals: ['Demak Sultanate', 'Tuban', 'Gresik'],
          vassals: ['None']
        },
        events: [
          { year: 1447, title: 'Suhita dies, succession crisis', impact: 'negative' },
          { year: 1450, title: 'Demak gains power', impact: 'negative' }
        ]
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
        capital: 'Trowulan (ruins)',
        population: '~500,000',
        territory: 'Small region of eastern Java',
        overview: {
          description: 'The final decades of Majapahit. The empire exists in name only, surrounded and pressured by Islamic sultanates. The fall is imminent.',
          strengths: ['Cultural legacy only'],
          challenges: ['Complete isolation', 'Economic collapse', 'Military defeat', 'Islamic expansion']
        },
        economy: {
          mainExports: ['None significant'],
          tradePartners: ['Minimal'],
          currency: 'Barter',
          economicStatus: 'Collapsed',
          gdp: 'Less than 2% of regional GDP'
        },
        culture: {
          religion: 'Hindu-Buddhist (final stronghold)',
          language: 'Old Javanese',
          architecture: 'Ruins and decay',
          literature: 'Oral tradition',
          arts: ['Declining traditions']
        },
        military: {
          strength: 'Very Weak',
          army: '~5,000',
          navy: '~10 vessels',
          specialUnits: 'None',
          notableDefeats: ['Battles with Demak']
        },
        relations: {
          allies: ['None'],
          rivals: ['Demak Sultanate (dominant)'],
          vassals: ['None']
        },
        events: [
          { year: 1478, title: 'Girindrawardhana briefly restores order', impact: 'neutral' },
          { year: 1500, title: 'Continued decline', impact: 'negative' },
          { year: 1527, title: 'Fall to Demak (estimated)', impact: 'negative' }
        ]
      }
    }
  }
};

// Regional events that affected Southeast Asia
export const regionalEvents = [
  { year: 1293, title: 'Founding of Majapahit', impact: 'Formation of empire' },
  { year: 1319, title: 'Gajah Mada becomes Mahapatih', impact: 'Beginning of expansion' },
  { year: 1343, title: 'Conquest of Bali', impact: 'Territorial expansion' },
  { year: 1350, title: 'Hayam Wuruk ascends', impact: 'Golden Age begins' },
  { year: 1357, title: 'Peak of Majapahit power', impact: 'Maximum territorial extent' },
  { year: 1364, title: 'Gajah Mada dies', impact: 'Loss of great strategist' },
  { year: 1389, title: 'Hayam Wuruk dies', impact: 'Beginning of decline' },
  { year: 1398, title: 'Malacca founded', impact: 'Trade competition' },
  { year: 1400, title: 'Paregreg War', impact: 'Civil conflict' },
  { year: 1447, title: 'Queen Suhita dies', impact: 'Succession crisis' },
  { year: 1478, title: 'Brief restoration under Girindrawardhana', impact: 'Temporary recovery' },
  { year: 1527, title: 'Fall of Majapahit', impact: 'End of Hindu-Buddhist empire' }
];

// Helper function to get territory data for a specific year
export function getTerritoryData(territoryId, year) {
  const territory = territoriesData[territoryId];
  if (!territory) return null;

  // Find the closest year in the timeline
  const availableYears = Object.keys(territory.timeline).map(Number).sort((a, b) => a - b);
  let closestYear = availableYears[0];
  
  for (const availableYear of availableYears) {
    if (availableYear <= year) {
      closestYear = availableYear;
    } else {
      break;
    }
  }

  return {
    ...territory,
    ...territory.timeline[closestYear],
    actualYear: closestYear // The year of the data we're using
  };
}
