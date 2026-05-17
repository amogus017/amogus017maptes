// src/data/territories.js
// Historical data for Southeast Asian territories

export const territoriesData = {

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
  },

  // Tarumanagara Kingdom
  tarumanagara: {
    id: 'tarumanagara',
    name: 'Tarumanagara',
    englishName: 'Kingdom of Tarumanagara',
    wikiSlug: 'Tarumanagara',
    idWikiSlug: 'Kerajaan_Tarumanagara',
    color: '#6B8E4E',
    timeline: {
      400: {
        era: 'Purnawarman Era',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Purnawarman',
          reignStart: '', // TODO: verify exact reign dates
          reignEnd: '',   // TODO: verify exact reign dates
        },
        capital: '', // TODO: verify — sources differ (Sundapura / Tarumanagara)
        population: '', // TODO: verify with academic source
        religion: 'Hindu (Vaishnavism)',
        government: 'Hindu Kingdom',
        summary: 'Tarumanagara flourishes under Purnawarman, documented through stone inscriptions as one of the earliest Hindu kingdoms of Java',
        keyEvents: [
          { year: 400, event: 'Purnawarman stone inscriptions (Ciaruteun, Kebon Kopi) erected across West Java', type: 'cultural' },
        ],
        historicalContext: 'Tarumanagara is among the earliest recorded kingdoms of the archipelago, located in West Java.\n\nThe Purnawarman inscriptions — written in Sanskrit using Pallava script — are the oldest known written records found on Java.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: ['India'],
        },
        culture: {
          language: 'Sanskrit',
          script: 'Pallava Script',
          architecture: 'Hindu Temples', // TODO: verify specific surviving structures
          literature: 'Purnawarman Stone Inscriptions',
        },
        territories: ['West Java', 'Citarum River Basin'],
        vassals: [], // TODO: verify with academic source
        rivals: [],  // TODO: verify with academic source
        relations: { 'India': 'Cultural & Religious Exchange' },
      },
      550: {
        era: 'Late Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify later rulers
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify with academic source
        population: '', // TODO: verify with academic source
        religion: 'Hindu',
        government: 'Hindu Kingdom',
        summary: 'Tarumanagara continues as a regional power in West Java before dissolving into the successor kingdoms of Sunda and Galuh',
        keyEvents: [
          { year: 669, event: 'Tarumanagara dissolves into the kingdoms of Sunda and Galuh', type: 'political' },
        ],
        historicalContext: 'In its later centuries Tarumanagara gradually weakens.\n\nBy 669 the kingdom fragments into Sunda in the west and Galuh to the east, ending the Tarumanagara era.',
        economy: {
          primary: ['Agriculture', 'River Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Sanskrit, Old Sundanese',
          script: 'Pallava Script',
          architecture: '', // TODO: verify with academic source
          literature: '', // TODO: verify with academic source
        },
        territories: ['West Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [],  // TODO: verify with academic source
        relations: {},
      },
    }
  },

  // Sunda Kingdom
  sunda: {
    id: 'sunda',
    name: 'Sunda',
    englishName: 'Sunda Kingdom',
    wikiSlug: 'Sunda_Kingdom',
    idWikiSlug: 'Kerajaan_Sunda',
    color: '#C4A35A',
    timeline: {
      700: {
        era: 'Early Kingdom',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify earliest rulers
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify early capital — Pakuan Pajajaran is the later capital
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Sunda emerges as a successor state to Tarumanagara, controlling the western region of Java',
        keyEvents: [
          { year: 684, event: 'Sunda established as successor kingdom in western Java', type: 'political' },
        ],
        historicalContext: 'Following the dissolution of Tarumanagara in 669, Sunda controls the western portion of Java while Galuh holds the eastern.\n\nThe kingdom maintains Hindu-Buddhist traditions throughout its long history.',
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'River Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Sundanese',
          script: '', // TODO: verify with academic source
          architecture: '', // TODO: verify with academic source
          literature: '', // TODO: verify with academic source
        },
        territories: ['West Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Galuh'],
        relations: { 'Galuh': 'Rival Successor State' },
      },
      1200: {
        era: 'Classical Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify rulers of this period
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify capital name for this period
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Sunda persists as a major Hindu-Buddhist kingdom in West Java amid the rise of Majapahit',
        keyEvents: [
          { year: 1357, event: 'Battle of Bubat — diplomatic crisis with Majapahit', type: 'military' }, // TODO: verify exact year
        ],
        historicalContext: 'The Sunda Kingdom maintains its independence through the Majapahit era.\n\nThe Battle of Bubat marks a turning point in Sunda–Majapahit relations, leaving a lasting wound in Sundanese historical memory.',
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'Forest Products'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Sundanese',
          script: '', // TODO: verify with academic source
          architecture: 'Hindu Temples',
          literature: '', // TODO: verify with academic source
        },
        territories: ['West Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Majapahit'],
        relations: { 'Majapahit': 'Rivalry' },
      },
    }
  },

  // Galuh Kingdom
  galuh: {
    id: 'galuh',
    name: 'Galuh',
    englishName: 'Galuh Kingdom',
    wikiSlug: 'Galuh_(kingdom)', // TODO: verify exact Wikipedia slug
    idWikiSlug: 'Kerajaan_Galuh',
    color: '#B5651D',
    timeline: {
      700: {
        era: 'Early Kingdom',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Wretikandayun',
          reignStart: '', // TODO: verify exact reign dates
          reignEnd: '',   // TODO: verify exact reign dates
        },
        capital: '', // TODO: verify — possibly Kawali / Ciamis area
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Galuh established by Wretikandayun as the eastern successor state to Tarumanagara, controlling the eastern half of West Java',
        keyEvents: [
          { year: 669, event: 'Galuh founded by Wretikandayun after the split of Tarumanagara', type: 'political' },
        ],
        historicalContext: 'Galuh emerges as the eastern successor state to Tarumanagara alongside its western counterpart Sunda.\n\nWretikandayun is credited as the founding figure of the Galuh lineage.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Sundanese',
          script: '', // TODO: verify with academic source
          architecture: '', // TODO: verify with academic source
          literature: '', // TODO: verify with academic source
        },
        territories: ['East of West Java', 'Citanduy River Basin'], // TODO: verify precise extent
        vassals: [], // TODO: verify with academic source
        rivals: ['Sunda'],
        relations: { 'Sunda': 'Rival Successor State' },
      },
      1000: {
        era: 'Classical Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify rulers of this period
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify with academic source
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Galuh continues as a regional kingdom in West Java, frequently contesting with or merging with the Sunda Kingdom',
        keyEvents: [], // TODO: verify key events for this period
        historicalContext: 'Galuh and Sunda alternately merge and separate across their shared history.\n\nThe two kingdoms share cultural and religious traditions but maintain distinct political identities.',
        economy: {
          primary: ['Agriculture', 'River Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Sundanese',
          script: '', // TODO: verify with academic source
          architecture: '', // TODO: verify with academic source
          literature: '', // TODO: verify with academic source
        },
        territories: ['East of West Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Sunda', 'Majapahit'],
        relations: { 'Sunda': 'Allied / Rival' },
      },
    }
  },

  // Mataram Kuno (Ancient Mataram)
  mataram: {
    id: 'mataram',
    name: 'Mataram Kuno',
    englishName: 'Ancient Mataram Kingdom',
    wikiSlug: 'Mataram_Kingdom', // TODO: verify — disambiguation from Islamic Mataram
    idWikiSlug: 'Kerajaan_Mataram_Kuno',
    color: '#9B59B6',
    timeline: {
      732: {
        era: 'Sanjaya Dynasty',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Sanjaya',
          reignStart: 732,
          reignEnd: '', // TODO: verify exact end of Sanjaya's reign
        },
        capital: '', // TODO: verify — located in the Kedu Plain, Central Java
        population: '', // TODO: verify with academic source
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: 'Mataram Kuno founded by Sanjaya in Central Java as a Shaivite Hindu kingdom, establishing dominance over the fertile Kedu Plain',
        keyEvents: [
          { year: 732, event: "Canggal inscription records Sanjaya's establishment of the kingdom", type: 'political' },
        ],
        historicalContext: "The Canggal inscription of 732 CE is the earliest direct record of the Mataram kingdom, describing Sanjaya's establishment of a Shaivite Hindu polity in Central Java.\n\nThe Kedu Plain provides fertile agricultural land underpinning the kingdom's wealth.",
        economy: {
          primary: ['Agriculture', 'Wet Rice Cultivation', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese, Sanskrit',
          script: 'Kawi Script',
          architecture: 'Hindu Temples (Shaivite)',
          literature: 'Sanskrit Inscriptions',
        },
        territories: ['Central Java', 'Kedu Plain'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
      800: {
        era: 'Sailendra Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify Sailendra ruler names for this period
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify with academic source
        population: '', // TODO: verify with academic source
        religion: 'Buddhist (Mahayana) and Hindu',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'The Sailendra dynasty rises to prominence, commissioning Borobudur — one of the greatest Buddhist monuments in the world',
        keyEvents: [
          { year: 825, event: 'Borobudur Buddhist temple complex completed', type: 'cultural' }, // TODO: verify exact completion date
        ],
        historicalContext: 'The Sailendra dynasty brings Buddhist influence to dominate Mataram alongside the existing Shaivite Sanjaya traditions.\n\nBorobudur, constructed under Sailendra patronage, stands as one of the greatest architectural achievements of the ancient world.',
        economy: {
          primary: ['Agriculture', 'Wet Rice Cultivation', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: ['Srivijaya'],
        },
        culture: {
          language: 'Old Javanese, Sanskrit',
          script: 'Kawi Script',
          architecture: 'Borobudur, Prambanan', // TODO: verify Prambanan dates — built ~850s
          literature: 'Buddhist Texts, Kawi Poetry',
        },
        territories: ['Central Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: { 'Srivijaya': 'Allied / Dynastic Connection' },
      },
    }
  },

  // Kanjuruhan Kingdom
  kanjuruhan: {
    id: 'kanjuruhan',
    name: 'Kanjuruhan',
    englishName: 'Kanjuruhan Kingdom',
    wikiSlug: 'Kanjuruhan',
    idWikiSlug: 'Kerajaan_Kanjuruhan',
    color: '#E07B39',
    timeline: {
      760: {
        era: 'Early Kingdom',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Gajayana',
          reignStart: '', // TODO: verify exact reign dates
          reignEnd: '',   // TODO: verify exact reign dates
        },
        capital: '', // TODO: verify — located in East Java near modern Malang
        population: '', // TODO: verify with academic source
        religion: 'Hindu',
        government: 'Hindu Kingdom',
        summary: 'Kanjuruhan is a short-lived Hindu kingdom of East Java, known from the Dinoyo inscription referencing king Gajayana',
        keyEvents: [
          { year: 760, event: 'Dinoyo inscription records King Gajayana and the kingdom of Kanjuruhan', type: 'cultural' }, // TODO: verify exact year
        ],
        historicalContext: 'Kanjuruhan is known primarily through the Dinoyo inscription, one of the earliest Sanskrit inscriptions found in East Java.\n\nThe kingdom represents the early spread of Hindu culture into eastern Java.',
        economy: {
          primary: ['Agriculture', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Sanskrit, Old Javanese',
          script: 'Kawi Script', // TODO: verify script type
          architecture: 'Hindu Temples', // TODO: verify specific structures
          literature: 'Dinoyo Inscription',
        },
        territories: ['East Java'], // TODO: verify precise extent
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
    }
  },

  // Kalingga Kingdom (undivided, 632–695)
  kalingga: {
    id: 'kalingga',
    name: 'Kalingga',
    englishName: 'Kalingga Kingdom',
    wikiSlug: 'Kalingga_Kingdom',
    idWikiSlug: 'Kerajaan_Kalingga',
    color: '#4CAF50',
    timeline: {
      632: {
        era: 'Classical Period',
        ruler: {
          portrait: '👑',
          title: 'Ratu',
          name: 'Ratu Shima',
          reignStart: '', // TODO: verify — Shima's reign often cited c. 674
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify — located on the north coast of Central Java
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Kingdom',
        summary: 'Kalingga, known in Chinese sources as Holing, is a trading kingdom on the north coast of Central Java renowned for the strict justice of Queen Ratu Shima',
        keyEvents: [
          { year: 674, event: 'Tang dynasty Chinese records describe Kalingga (Holing) as a prosperous trading kingdom', type: 'political' }, // TODO: verify exact year of records
        ],
        historicalContext: "Kalingga appears in Tang dynasty Chinese chronicles as \"Holing,\" describing it as a wealthy maritime kingdom.\n\nRatu Shima is celebrated for strict justice — Chinese accounts describe her cutting off her own son's hand for touching royal property without permission.",
        economy: {
          primary: ['Coastal Trade', 'Agriculture', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: ['Tang China', 'India'],
        },
        culture: {
          language: 'Old Javanese, Sanskrit',
          script: '', // TODO: verify with academic source
          architecture: '', // TODO: verify with academic source
          literature: '', // TODO: verify with academic source
        },
        territories: ['North Coast of Central Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: { 'Tang China': 'Tributary Contact' },
      },
    }
  },

  // Kalingga Utara (695–732)
  kalingga_n: {
    id: 'kalingga_n',
    name: 'Kalingga Utara',
    englishName: 'Northern Kalingga',
    wikiSlug: 'Kalingga_Kingdom', // no standalone article — parent kingdom covers the split
    idWikiSlug: 'Kerajaan_Kalingga',
    color: '#3CB371',
    timeline: {
      695: {
        era: 'Classical Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify rulers of Northern Kalingga
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify with academic source
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Kingdom',
        summary: 'Northern Kalingga emerges after the split of the Kalingga kingdom, maintaining the coastal region of Central Java',
        keyEvents: [], // TODO: verify key events with academic source
        historicalContext: "After the dissolution of unified Kalingga, the northern territories form a separate polity.\n\nDetails of Northern Kalingga's internal history remain limited in surviving records.",
        economy: {
          primary: ['Coastal Trade', 'Agriculture'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: '', // TODO: verify with academic source
          architecture: '', // TODO: verify with academic source
          literature: '', // TODO: verify with academic source
        },
        territories: ['Northern Central Java Coast'], // TODO: verify precise extent
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
    }
  },

  // Kalingga Selatan (695–732)
  kalingga_s: {
    id: 'kalingga_s',
    name: 'Kalingga Selatan',
    englishName: 'Southern Kalingga',
    wikiSlug: 'Kalingga_Kingdom', // no standalone article — parent kingdom covers the split
    idWikiSlug: 'Kerajaan_Kalingga',
    color: '#2E8B57',
    timeline: {
      695: {
        era: 'Classical Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify rulers of Southern Kalingga
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify with academic source
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Kingdom',
        summary: 'Southern Kalingga forms after the split of the Kalingga kingdom, controlling the inland and southern territories of Central Java',
        keyEvents: [], // TODO: verify key events with academic source
        historicalContext: "The southern territories of Kalingga form a separate polity after the kingdom's dissolution around 695.\n\nSouthern Kalingga eventually becomes absorbed into the emerging Mataram kingdom by 732.",
        economy: {
          primary: ['Agriculture', 'Inland Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: '', // TODO: verify with academic source
          architecture: '', // TODO: verify with academic source
          literature: '', // TODO: verify with academic source
        },
        territories: ['Southern Central Java'], // TODO: verify precise extent
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
    }
  },

  // Medang Kingdom
  medang: {
    id: 'medang',
    name: 'Medang',
    englishName: 'Medang Kingdom',
    wikiSlug: 'Medang_Kingdom',
    idWikiSlug: 'Kerajaan_Medang',
    color: '#8B008B',
    timeline: {
      929: {
        era: 'East Java Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Mpu Sindok',
          reignStart: 929,
          reignEnd: 947, // TODO: verify exact end of Mpu Sindok's reign
        },
        capital: '', // TODO: verify — Tamwlang / Watugaluh cited in sources
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Mpu Sindok relocates the center of Javanese power from Central Java to East Java, founding Medang after a volcanic catastrophe',
        keyEvents: [
          { year: 929, event: 'Mpu Sindok moves the capital from Central Java to East Java', type: 'political' },
        ],
        historicalContext: 'Following a catastrophic volcanic eruption around 929 CE that devastated Central Java, Mpu Sindok relocates the court to East Java.\n\nThis shift marks a pivotal turning point in Javanese political history, establishing the foundations for all later East Javanese kingdoms.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Old Javanese Kakawin Poetry',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
      980: {
        era: 'Late Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify rulers after Mpu Sindok
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: '', // TODO: verify with academic source
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Medang continues to dominate East Java before internal conflict leads to its collapse and the rise of Kahuripan under Airlangga',
        keyEvents: [
          { year: 1016, event: 'Medang Kingdom collapses following dynastic attack', type: 'political' }, // TODO: verify details
        ],
        historicalContext: "Medang's later years are marked by dynastic instability.\n\nIts collapse around 1016 creates the conditions for Airlangga's reunification of East Java under the Kahuripan kingdom.",
        economy: {
          primary: ['Agriculture', 'River Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Kakawin Poetry',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
    }
  },

  // Kahuripan Kingdom
  kahuripan: {
    id: 'kahuripan',
    name: 'Kahuripan',
    englishName: 'Kahuripan Kingdom',
    wikiSlug: 'Kahuripan',
    idWikiSlug: 'Kerajaan_Kahuripan',
    color: '#DAA520',
    timeline: {
      1019: {
        era: 'Airlangga Era',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Airlangga',
          reignStart: 1019,
          reignEnd: 1042,
        },
        capital: 'Kahuripan', // TODO: verify exact location
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Airlangga reunifies East Java following the collapse of Medang, building Kahuripan into a prosperous and stable kingdom before dividing it between his two sons',
        keyEvents: [
          { year: 1019, event: 'Airlangga begins reunification of East Java', type: 'political' },
          { year: 1042, event: 'Airlangga divides the kingdom into Panjalu and Janggala for his sons', type: 'political' },
        ],
        historicalContext: 'Airlangga — of Balinese royal descent — rises to restore order in East Java after the collapse of Medang.\n\nHis reign is notable for prosperity, religious tolerance, and literary patronage. At the end of his life he divides the kingdom between his two sons, creating the rival states of Panjalu and Janggala.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Port Revenues'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Kakawin Arjunawiwaha', // composed by Mpu Kanwa during Airlangga's reign
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [],
        relations: {},
      },
    }
  },

  // Panjalu Kingdom
  panjalu: {
    id: 'panjalu',
    name: 'Panjalu',
    englishName: 'Panjalu Kingdom',
    wikiSlug: 'Panjalu', // TODO: verify exact Wikipedia slug
    idWikiSlug: 'Kerajaan_Panjalu',
    color: '#CD853F',
    timeline: {
      1042: {
        era: 'Early Kingdom',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Sri Samarawijaya', // TODO: verify exact name
          reignStart: 1042,
          reignEnd: '', // TODO: verify with academic source
        },
        capital: 'Daha', // TODO: verify — Daha is more associated with later Kediri
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Panjalu is established when Airlangga divides his kingdom, controlling the western portion of East Java',
        keyEvents: [
          { year: 1042, event: 'Panjalu established after Airlangga divides Kahuripan', type: 'political' },
        ],
        historicalContext: "Panjalu (later called Kediri) is one of two kingdoms created from the division of Airlangga's Kahuripan.\n\nRivalry with Janggala dominates its early decades before Panjalu eventually absorbs its rival.",
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Old Javanese Kakawin',
        },
        territories: ['West part of East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Janggala'],
        relations: { 'Janggala': 'Rival Sister Kingdom' },
      },
    }
  },

  // Janggala Kingdom
  janggala: {
    id: 'janggala',
    name: 'Janggala',
    englishName: 'Janggala Kingdom',
    wikiSlug: 'Janggala', // TODO: verify exact Wikipedia slug
    idWikiSlug: 'Kerajaan_Janggala',
    color: '#2F8A8A',
    timeline: {
      1042: {
        era: 'Early Kingdom',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify first ruler of Janggala
          reignStart: 1042,
          reignEnd: '', // TODO: verify with academic source
        },
        capital: '', // TODO: verify — possibly Kahuripan or Jiwana
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Janggala is established alongside Panjalu when Airlangga divides his kingdom, controlling the eastern and coastal portion of East Java',
        keyEvents: [
          { year: 1042, event: 'Janggala established after Airlangga divides Kahuripan', type: 'political' },
        ],
        historicalContext: "Janggala controls the eastern and coastal territories of what was Kahuripan, while Panjalu holds the western inland areas.\n\nThe two kingdoms maintain a rivalry until Janggala is eventually absorbed by Panjalu / Kediri.",
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: '', // TODO: verify with academic source
        },
        territories: ['East part of East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Panjalu'],
        relations: { 'Panjalu': 'Rival Sister Kingdom' },
      },
    }
  },

  // Dharmasraya Kingdom
  dharmasraya: {
    id: 'dharmasraya',
    name: 'Dharmasraya',
    englishName: 'Dharmasraya Kingdom',
    wikiSlug: 'Dharmasraya',
    idWikiSlug: 'Kerajaan_Dharmasraya',
    color: '#7B68EE',
    timeline: {
      1088: {
        era: 'Founding Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: '', // TODO: verify first documented ruler
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: 'Dharmasraya', // Batanghari River area, Sumatra — TODO: verify precise location
        population: '', // TODO: verify with academic source
        religion: 'Buddhist (Mahayana)',
        government: 'Kingdom',
        summary: 'Dharmasraya emerges as a successor state to Srivijaya in the Batanghari River valley of Sumatra, inheriting its Buddhist traditions and trade networks',
        keyEvents: [
          { year: 1088, event: 'Dharmasraya emerges as the dominant Sumatran kingdom after Srivijaya\'s decline', type: 'political' }, // TODO: verify exact date
        ],
        historicalContext: "As Srivijaya's power wanes after the Chola raids, Dharmasraya rises to fill the vacuum in Sumatra's interior.\n\nLocated along the Batanghari River, it inherits Srivijaya's Mahayana Buddhist culture and maintains the region's gold and forest trade.",
        economy: {
          primary: ['River Trade', 'Gold', 'Forest Products'],
          exports: ['Gold', 'Forest Products'],
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Malay',
          script: '', // TODO: verify with academic source
          architecture: 'Buddhist Temples', // TODO: verify specific examples
          literature: '', // TODO: verify with academic source
        },
        territories: ['Batanghari River Basin', 'Interior Sumatra'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
    }
  },

  // Kediri Kingdom
  kediri: {
    id: 'kediri',
    name: 'Kediri',
    englishName: 'Kediri Kingdom',
    wikiSlug: 'Kediri_kingdom',
    idWikiSlug: 'Kerajaan_Kediri',
    color: '#B8860B',
    timeline: {
      1135: {
        era: 'Golden Age',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Jayabaya',
          reignStart: 1135, // TODO: verify exact reign start
          reignEnd: 1157,   // TODO: verify exact reign end
        },
        capital: 'Daha', // Modern Kediri city, East Java
        population: '', // TODO: verify with academic source
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: 'Kediri reaches its golden age under Jayabaya, famed for prophetic writings and a flourishing of Old Javanese Kakawin literature',
        keyEvents: [
          { year: 1157, event: 'Kakawin Bharatayuddha composed — major Old Javanese literary work under Jayabaya', type: 'cultural' }, // TODO: verify exact year
        ],
        historicalContext: "Kediri (successor to Panjalu) becomes the dominant power of East Java under Jayabaya.\n\nJayabaya's reign is celebrated for literary patronage and for the Jayabaya Prophecies — predictions about Java's future that remained influential for centuries.",
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu Temples',
          literature: 'Kakawin Bharatayuddha, Jayabaya Prophecies',
        },
        territories: ['East Java', 'Daha River Basin'],
        vassals: [], // TODO: verify with academic source
        rivals: [],
        relations: {},
      },
      1200: {
        era: 'Late Period',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Kertajaya',
          reignStart: '', // TODO: verify exact reign start
          reignEnd: 1222,
        },
        capital: 'Daha',
        population: '', // TODO: verify with academic source
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: "Kediri declines under its last ruler Kertajaya, whose conflict with the Brahmin clergy allows Ken Arok of Tumapel to overthrow the kingdom in 1222",
        keyEvents: [
          { year: 1222, event: 'Kertajaya defeated by Ken Arok of Tumapel at the Battle of Ganter — end of Kediri', type: 'military' },
        ],
        historicalContext: "King Kertajaya's demands that Brahmins worship him as a god alienate the religious establishment.\n\nThe Brahmins ally with Ken Arok of Tumapel, whose victory at the Battle of Ganter in 1222 ends the Kediri kingdom.",
        economy: {
          primary: ['Agriculture', 'River Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu Temples',
          literature: 'Kakawin Poetry',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Tumapel'],
        relations: { 'Tumapel': 'Hostile' },
      },
    }
  },

  // Tumapel Kingdom
  tumapel: {
    id: 'tumapel',
    name: 'Tumapel',
    englishName: 'Tumapel Kingdom',
    wikiSlug: 'Tumapel', // TODO: verify — may redirect to Singhasari on Wikipedia
    idWikiSlug: 'Kerajaan_Singasari', // early phase covered under Singasari
    color: '#A0522D',
    timeline: {
      1222: {
        era: 'Ken Arok Era',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Ken Arok',
          reignStart: 1222,
          reignEnd: 1227,
        },
        capital: '', // TODO: verify — Kutaraja / Tumapel, near modern Malang, East Java
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Ken Arok founds Tumapel after defeating Kediri at the Battle of Ganter, establishing the Rajasa dynasty that would rule through Singasari and Majapahit',
        keyEvents: [
          { year: 1222, event: 'Ken Arok defeats Kertajaya of Kediri at the Battle of Ganter', type: 'military' },
          { year: 1227, event: 'Ken Arok assassinated by Anusapati', type: 'political' },
        ],
        historicalContext: "Ken Arok is a legendary figure who rises from low origins to overthrow Kediri and establish Tumapel.\n\nHis brief reign establishes the Rajasa dynasty that would rule through Singasari and ultimately Majapahit.",
        economy: {
          primary: ['Agriculture', 'Tribute', 'River Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: '', // TODO: verify with academic source
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [],
        relations: {},
      },
    }
  },

  // Singasari Kingdom
  singasari: {
    id: 'singasari',
    name: 'Singasari',
    englishName: 'Singhasari Kingdom',
    wikiSlug: 'Singhasari',
    idWikiSlug: 'Kerajaan_Singasari',
    color: '#DC143C',
    timeline: {
      1254: {
        era: 'Early Kingdom',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Wisnuwardhana',
          reignStart: 1248, // TODO: verify exact reign start
          reignEnd: 1268,   // TODO: verify exact reign end
        },
        capital: 'Singhasari', // Near modern Malang, East Java
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist (Shaiva-Buddha syncretism)',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Singasari consolidates power in East Java under Wisnuwardhana, developing a distinctive syncretic Hindu-Buddhist religious culture',
        keyEvents: [
          { year: 1254, event: 'Wisnuwardhana consolidates Singasari as the dominant East Java power', type: 'political' }, // TODO: verify exact year
        ],
        historicalContext: 'Singasari emerges from the Tumapel kingdom, developing a distinctive syncretic form of Shaivism and Buddhism.\n\nArtistic and religious patronage flourishes, setting the cultural foundation for Majapahit.',
        economy: {
          primary: ['Agriculture', 'Tribute', 'Coastal Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Old Javanese Poetry',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [],
        relations: {},
      },
      1268: {
        era: 'Kertanagara Era',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Kertanagara',
          reignStart: 1268,
          reignEnd: 1292,
        },
        capital: 'Singhasari',
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist (Tantric Buddhism)',
        government: 'Hindu-Buddhist Kingdom',
        summary: "Kertanagara expands Singasari's influence across the archipelago and defiantly refuses tribute to the Mongol Yuan dynasty",
        keyEvents: [
          { year: 1275, event: 'Pamalayu expedition sent to Sumatra to assert Singasari influence', type: 'military' },
          { year: 1289, event: 'Kertanagara mutilates the Mongol envoy — triggering Yuan invasion plans', type: 'political' },
          { year: 1292, event: 'Kertanagara killed by Jayakatwang of Kediri — Singasari collapses', type: 'military' },
        ],
        historicalContext: "Kertanagara is the most ambitious king of Singasari, projecting power throughout the archipelago and defying the Mongol Yuan dynasty.\n\nHis assassination in 1292 ends Singasari, but his son-in-law Raden Wijaya would go on to found Majapahit.",
        economy: {
          primary: ['Agriculture', 'Maritime Trade', 'Tribute'],
          exports: [], // TODO: verify with academic source
          tradingPartners: ['Sumatra', 'Regional States'],
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Old Javanese Kakawin',
        },
        territories: ['East Java', 'Parts of Sumatra (via Pamalayu)'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Yuan Mongols', 'Kediri (Jayakatwang)'],
        relations: {
          'Yuan China': 'Hostile — refused tribute',
          'Sumatra': 'Expanding Influence',
        },
      },
    }
  },

  // Majapahit Empire
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    englishName: 'Majapahit Empire',
    wikiSlug: 'Majapahit',
    idWikiSlug: 'Majapahit',
    color: '#FF8C00',
    timeline: {
      1293: {
        era: 'Founding Era',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Raden Wijaya',
          reignStart: 1293,
          reignEnd: 1309,
        },
        capital: 'Majapahit', // Near modern Trowulan, Mojokerto, East Java
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Empire',
        summary: 'Raden Wijaya founds Majapahit by exploiting the Mongol invasion to destroy Jayakatwang of Kediri, avenging his father-in-law Kertanagara',
        keyEvents: [
          { year: 1293, event: 'Raden Wijaya founds Majapahit after defeating both Jayakatwang and the Yuan Mongol fleet', type: 'political' },
        ],
        historicalContext: "Raden Wijaya brilliantly exploits the Yuan Mongol invasion fleet sent to punish Kertanagara.\n\nAllying with the Mongols to defeat Jayakatwang first, he then turns on the exhausted Mongol forces and drives them from Java, founding Majapahit in the process.",
        economy: {
          primary: ['Agriculture', 'Maritime Trade', 'Tribute'],
          exports: ['Rice', 'Spices'], // TODO: verify full export list
          tradingPartners: ['China', 'India', 'Regional States'],
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Old Javanese Kakawin',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Yuan China', 'Regional Competitors'],
        relations: { 'Yuan China': 'Hostile then Normalized' },
      },
      1350: {
        era: 'Golden Age',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Hayam Wuruk',
          reignStart: 1350,
          reignEnd: 1389,
        },
        capital: 'Majapahit (Trowulan)',
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Empire',
        summary: "Under Hayam Wuruk and chief minister Gajah Mada, Majapahit reaches its greatest territorial extent, dominating the Nusantara archipelago",
        keyEvents: [
          { year: 1336, event: "Gajah Mada swears the Palapa Oath — vowing to unify the archipelago", type: 'political' }, // TODO: verify exact year
          { year: 1357, event: 'Battle of Bubat — Sunda princess incident strains Majapahit–Sunda relations', type: 'military' }, // TODO: verify exact year
          { year: 1365, event: 'Nagarakretagama composed — describes Majapahit\'s vast territories', type: 'cultural' },
        ],
        historicalContext: "The reign of Hayam Wuruk represents the apex of Majapahit power.\n\nGajah Mada's Palapa Oath and the Nagarakretagama poem document claims of dominion over much of the archipelago, making Majapahit one of the greatest empires in Southeast Asian history.",
        economy: {
          primary: ['Maritime Trade', 'Agriculture', 'Tribute'],
          exports: ['Rice', 'Spices', 'Forest Products'],
          tradingPartners: ['China', 'India', 'Champa', 'Siam', 'Regional States'],
        },
        culture: {
          language: 'Old Javanese',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples, Trowulan Palace Complex',
          literature: 'Nagarakretagama (1365), Sutasoma, Pararaton',
        },
        territories: ['Java', 'Bali', 'Parts of Sumatra', 'Parts of Kalimantan'], // TODO: verify full extent — Nagarakretagama claims are debated
        vassals: ['Bali', 'Various Regional Polities'], // TODO: verify exact vassal list
        rivals: ['Sunda'],
        relations: {
          'China': 'Diplomatic Trade Partner',
          'Sunda': 'Rivalry',
          'India': 'Cultural Exchange',
        },
      },
      1400: {
        era: 'Decline',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: '', // TODO: verify rulers of the decline period
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: 'Majapahit (Trowulan)',
        population: '', // TODO: verify with academic source
        religion: 'Hindu-Buddhist (with growing Islamic influence)',
        government: 'Weakened Empire',
        summary: 'Majapahit faces internal dynastic conflict and the rising power of Islamic coastal states, beginning a long decline',
        keyEvents: [
          { year: 1404, event: 'Paregreg civil war — internal dynastic conflict weakens Majapahit', type: 'military' }, // TODO: verify exact dates
          { year: 1478, event: 'Majapahit capital falls — effective end of the empire', type: 'political' }, // TODO: verify — some sources give 1527
        ],
        historicalContext: "After Hayam Wuruk's death the empire enters a long period of internal conflict and dynastic war.\n\nThe rise of Islamic coastal states, particularly Demak and Malacca, gradually erodes Majapahit's power until its final fall.",
        economy: {
          primary: ['Agriculture', 'Diminishing Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: ['China', 'Islamic Coastal States'],
        },
        culture: {
          language: 'Old Javanese, with growing Malay influence',
          script: 'Kawi Script',
          architecture: 'Hindu-Buddhist Temples',
          literature: 'Pararaton, Later Chronicles',
        },
        territories: ['East Java (reduced)'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Demak (Islamic)', 'Islamic Coastal States'],
        relations: {
          'Demak': 'Hostile',
          'China': 'Tributary Relations',
        },
      },
    }
  },

  // Pajajaran Kingdom
  pajajaran: {
    id: 'pajajaran',
    name: 'Pajajaran',
    englishName: 'Pajajaran Kingdom',
    wikiSlug: 'Pakuan_Pajajaran', // TODO: verify — could also be 'Sunda_Kingdom'
    idWikiSlug: 'Kerajaan_Sunda_Galuh', // TODO: verify exact Indonesian Wikipedia slug
    color: '#556B2F',
    timeline: {
      1482: {
        era: 'Classical Period',
        ruler: {
          portrait: '👑',
          title: 'Prabu',
          name: 'Sri Baduga Maharaja', // also known as Prabu Siliwangi
          reignStart: 1482,
          reignEnd: 1521, // TODO: verify exact reign end
        },
        capital: 'Pakuan Pajajaran', // Near modern Bogor, West Java
        population: '', // TODO: verify with academic source
        religion: 'Hindu (Sunda Wiwitan)',
        government: 'Hindu Kingdom',
        summary: 'Pajajaran flourishes as the last great Hindu kingdom of West Java under Sri Baduga Maharaja, maintaining independence from the rising Islamic sultanates',
        keyEvents: [
          { year: 1482, event: 'Pajajaran consolidated as the dominant West Java kingdom', type: 'political' }, // TODO: verify exact date
          { year: 1521, event: 'Death of Sri Baduga Maharaja — kingdom begins to decline', type: 'political' }, // TODO: verify
        ],
        historicalContext: 'Pajajaran represents the final phase of the long Sunda-Galuh tradition of Hindu kingdoms in West Java.\n\nUnder Sri Baduga Maharaja (also known as Prabu Siliwangi) the kingdom prospers and becomes deeply embedded in Sundanese cultural memory as a golden age.',
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'Forest Products'],
          exports: ['Pepper', 'Forest Products'],
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Sundanese',
          script: '', // TODO: verify script type used
          architecture: 'Hindu Temples, Palace Complexes', // TODO: verify specific examples
          literature: 'Carita Parahyangan', // TODO: verify exact authorship and date
        },
        territories: ['West Java', 'Pakuan Region'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Demak (Islamic)', 'Cirebon'],
        relations: { 'Demak': 'Hostile' },
      },
      1520: {
        era: 'Decline',
        ruler: {
          portrait: '👑',
          title: 'Prabu',
          name: '', // TODO: verify rulers after Sri Baduga
          reignStart: '', // TODO: verify with academic source
          reignEnd: '',   // TODO: verify with academic source
        },
        capital: 'Pakuan Pajajaran',
        population: '', // TODO: verify with academic source
        religion: 'Hindu (Sunda Wiwitan)',
        government: 'Hindu Kingdom (declining)',
        summary: 'Pajajaran faces mounting pressure from Islamic sultanates, eventually falling to Banten and Cirebon in 1579',
        keyEvents: [
          { year: 1579, event: 'Pajajaran falls to Islamic forces — end of the last Hindu kingdom of Java', type: 'political' },
        ],
        historicalContext: 'The expanding Islamic sultanates of Banten and Cirebon systematically isolate and weaken Pajajaran.\n\nThe fall of the capital in 1579 marks the end of Hindu political power in Java, completing the Islamisation of the island.',
        economy: {
          primary: ['Agriculture', 'Reduced Trade'],
          exports: [], // TODO: verify with academic source
          tradingPartners: [], // TODO: verify with academic source
        },
        culture: {
          language: 'Old Sundanese',
          script: '', // TODO: verify with academic source
          architecture: 'Hindu Temples',
          literature: '', // TODO: verify with academic source
        },
        territories: ['Interior West Java (shrinking)'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Banten', 'Cirebon'],
        relations: {
          'Banten': 'Hostile',
          'Cirebon': 'Hostile',
        },
      },
    }
  },
};

export const regionalEvents = [
  { year: 400, title: 'Kutai Kingdom founded', impact: 'Formation' },
  { year: 650, title: 'Srivijaya Founded', impact: 'Formation' },
  { year: 1025, title: 'Chola raids Srivijaya', impact: 'Major Decline' },
  { year: 1183, title: 'Srivijaya collapses', impact: 'End' },
  { year: 1293, title: 'Founding of Majapahit', impact: 'Formation' },
  { year: 1361, title: 'End of classical Kutai', impact: 'End' },
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