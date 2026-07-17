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
        era: 'Founding Era', eraId: 'Era Pendirian',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Dapunta Hyang Sri Jayanasa',
          reignStart: 650,
          reignEnd: 683
        },
        capital: 'Palembang',
        population: '~500,000',
        populationId: '~500.000 (perkiraan)',
        religion: 'Mahayana Buddhism',
        government: 'Thalassocracy',
        summary: 'Srivijaya founded on the Musi River, beginning its rise as a maritime power controlling Sumatra',
        summaryId: 'Sriwijaya didirikan di tepi Sungai Musi, memulai kebangkitannya sebagai kekuatan maritim yang menguasai Sumatra',
        keyEvents: [
          { year: 650, event: 'Srivijaya founded by Dapunta Hyang', type: 'political', eventId: 'Sriwijaya didirikan oleh Dapunta Hyang' },
          { year: 671, event: 'I Tsing visits — finds 1,000 Buddhist monks', type: 'cultural', eventId: 'I Tsing mengunjungi — menemukan 1.000 biksu Buddha' }
        ],
        historicalContext: 'Srivijaya emerges as a coastal polity controlling the Strait of Malacca.\n\nEarly Chinese records and the Kedukan Bukit inscription document its rapid rise.',
        historicalContextId: 'Sriwijaya muncul sebagai kerajaan pesisir yang menguasai Selat Malaka.\n\nCatatan Tiongkok kuno dan Prasasti Kedukan Bukit mendokumentasikan kebangkitannya yang pesat.',
        economy: {
          primary: ['River Trade', 'Port Tolls', 'Tribute'],
          primaryId: ['Perdagangan Sungai', 'Bea Pelabuhan', 'Upeti'],
          exports: ['Forest Products', 'Resins', 'Gold'],
          exportsId: ['Hasil Hutan', 'Resin', 'Emas'],
          tradingPartners: ['Tang China', 'India', 'Champa'],
          tradingPartnersId: ['Dinasti Tang', 'India', 'Champa'],
        },
        culture: {
          language: 'Old Malay, Sanskrit',
          languageId: 'Melayu Kuno, Sansekerta',
          script: 'Pallava Script',
          scriptId: 'Aksara Pallawa',
          architecture: 'Early Buddhist Shrines',
          architectureId: 'Kuil-kuil Buddha Awal',
          literature: 'Kedukan Bukit Inscription',
          literatureId: 'Prasasti Kedukan Bukit',
        },
        territories: ['Southern Sumatra', 'Musi River Delta'],
        vassals: [],
        rivals: ['Melayu Kingdom', 'Javanese Polities'],
        relations: {
          'Tang China': 'Early Tributary Contact',
          'India': 'Buddhist Exchange'
        },
        relationsId: {
          'Dinasti Tang': 'Awal Hubungan Tributari',
          'India': 'Pertukaran Agama Buddha',
        }
      },
      800: {
        era: 'Golden Age', eraId: 'Masa Kejayaan',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Dharmasetu',
          reignStart: 775,
          reignEnd: 825
        },
        capital: 'Palembang',
        population: '~1.5 million',
        populationId: '~1,5 juta (perkiraan)',
        religion: 'Mahayana Buddhism',
        government: 'Thalassocracy',
        summary: 'Srivijaya expands control over the Malay Peninsula and Sunda Strait, dominating regional trade',
        summaryId: 'Sriwijaya memperluas kendalinya atas Semenanjung Melayu dan Selat Sunda, mendominasi perdagangan regional',
        keyEvents: [
          { year: 775, event: 'Ligor inscription — Srivijaya asserts Malay Peninsula control', type: 'political', eventId: 'Prasasti Ligor — Sriwijaya menegaskan kendali atas Semenanjung Melayu' },
          { year: 800, event: 'Extensive Buddhist temple construction', type: 'cultural', eventId: 'Pembangunan besar-besaran kuil-kuil Buddha' }
        ],
        historicalContext: 'Srivijaya consolidates its grip on the Strait of Malacca and Sunda Strait.\n\nIt becomes the dominant entrepot for trade between China and the Indian Ocean world.',
        historicalContextId: 'Sriwijaya mengukuhkan cengkeramannya atas Selat Malaka dan Selat Sunda.\n\nSriwijaya menjadi pusat perdagangan utama antara Tiongkok dan dunia Samudra Hindia.',
        economy: {
          primary: ['Maritime Trade', 'Port Revenues', 'Tribute'],
          primaryId: ['Perdagangan Maritim', 'Pendapatan Pelabuhan', 'Upeti'],
          exports: ['Spices', 'Gold', 'Camphor', 'Resins'],
          exportsId: ['Rempah-rempah', 'Emas', 'Kapur Barus', 'Resin'],
          tradingPartners: ['Tang China', 'Abbasid Caliphate', 'India', 'Champa'],
          tradingPartnersId: ['Dinasti Tang', 'Kekhalifahan Abbasiyah', 'India', 'Champa'],
        },
        culture: {
          language: 'Old Malay, Sanskrit',
          languageId: 'Melayu Kuno, Sansekerta',
          script: 'Pallava Script',
          scriptId: 'Aksara Pallawa',
          architecture: 'Buddhist Temples and Stupas',
          architectureId: 'Kuil-kuil dan Stupa Buddha',
          literature: 'Buddhist Sutras, Diplomatic Records',
          literatureId: 'Sutra Buddha, Catatan Diplomatik',
        },
        territories: ['Sumatra', 'Malay Peninsula', 'Western Java', 'Southern Thailand'],
        vassals: ['Jambi', 'Kedah', 'Chaiya'],
        rivals: ['Javanese Kingdoms', 'Sailendra'],
        relations: {
          'Tang China': 'Active Tributary Partner',
          'India': 'Buddhist Scholarly Exchange',
          'Abbasid Caliphate': 'Emerging Trade Contact'
        },
        relationsId: {
          'Dinasti Tang': 'Mitra Tributari Aktif',
          'India': 'Pertukaran Ilmu Agama Buddha',
          'Kekhalifahan Abbasiyah': 'Kontak Dagang Baru',
        }
      },
      900: {
        era: 'Maritime Dominance', eraId: 'Dominasi Maritim',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Unknown',
          reignStart: 850,
          reignEnd: 950
        },
        capital: 'Palembang',
        population: '~2-3 million',
        populationId: '~2-3 juta (perkiraan)',
        religion: 'Mahayana Buddhism',
        government: 'Thalassocracy',
        statCitations: {
          capital:    { citation: 'The Capital of Srivijaya — Academia.edu', url: 'https://www.academia.edu/34273392/The_Capital_of_Srivijaya' },
          population: { citation: 'Srivijaya: The Lost Kingdom of Gold — Ultra Unlimited', url: 'https://www.ultra-unlimited.com/blog/srivijaya-the-lost-kingdom-of-gold' },
          religion:   { citation: 'Srivijaya Empire — Britannica', url: 'https://www.britannica.com/place/Srivijaya-empire' },
          government: { citation: 'Srivijaya — Wikipedia', url: 'https://en.wikipedia.org/wiki/Srivijaya' },
        },
        summary: 'Dominant maritime power controlling the Strait of Malacca trade routes',
        summaryId: 'Kekuatan maritim dominan yang mengendalikan jalur perdagangan Selat Malaka',
        keyEvents: [
          { year: 900, event: 'Peak naval supremacy', type: 'military', eventId: 'Puncak supremasi angkatan laut',
            citation: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968), Chapter VI, p. 84-85', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
          { year: 925, event: 'Trade monopoly established', type: 'economic', eventId: 'Monopoli perdagangan ditetapkan',
            citation: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968), Chapter VI, p. 84-85; Chapter VIII, p. 130-131', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
        ],
        historicalContext: 'Srivijaya controls the vital maritime trade routes between India and China.\n\nA major center of Buddhist learning attracting scholars from across Asia.',
        historicalContextId: 'Sriwijaya menguasai jalur perdagangan maritim penting antara India dan Tiongkok.\n\nSriwijaya menjadi pusat pembelajaran agama Buddha yang besar, menarik para cendekiawan dari seluruh Asia.',
        economy: {
          primary: ['Maritime Trade', 'Port Revenues', 'Tribute'],
          primaryId: ['Perdagangan Maritim', 'Pendapatan Pelabuhan', 'Upeti'],
          primaryCitations: [0, 0, 0],
          exports: ['Spices', 'Gold', 'Camphor', 'Resins'],
          exportsId: ['Rempah-rempah', 'Emas', 'Kapur Barus', 'Resin'],
          exportsCitations: [1, 2, 3, 4],
          tradingPartners: ['Tang/Song China', 'Chola India', 'Arab Merchants', 'Java'],
          tradingPartnersId: ['Dinasti Tang/Song', 'India Chola', 'Pedagang Arab', 'Jawa'],
          partnersCitations: [0, 5, 0, 6],
          economyCitationRefs: [
            { citation: 'Srivijaya — Wikipedia',                                                          url: 'https://en.wikipedia.org/wiki/Srivijaya' },
            { citation: 'Srivijaya Maritime Empire — Fiveable',                                           url: 'https://fiveable.me/the-archaeology-of-southeast-asia/unit-6/srivijaya-maritime-empire/study-guide/l21x8ZNOj1UiUCXj' },
            { citation: 'The Srivijaya Empire: Maritime Sovereign of Southeast Asia — Country Reports',   url: 'https://countryreports.org/articles/the-srivijaya-empire-maritime-sovereign-of-southeast-asia' },
            { citation: 'Camphor — National Library Board Singapore',                                     url: 'https://www.nlb.gov.sg/main/article-detail?cmsuuid=c91408fb-531b-4faa-a304-bb8028ece6c4' },
            { citation: 'Forest Products & Resins — National Library Board Singapore',                    url: 'https://www.nlb.gov.sg/main/article-detail?cmsuuid=c91408fb-531b-4faa-a304-bb8028ece6c4' },
            { citation: 'Srivijaya Empire — Britannica',                                                  url: 'https://www.britannica.com/place/Srivijaya-empire' },
            { citation: 'The Srivijaya Empire — Paths Unwritten',                                         url: 'https://pathsunwritten.com/indonesia-srivijaya-empire/' },
          ],
        },
        culture: {
          language: 'Old Malay, Sanskrit',
          languageId: 'Melayu Kuno, Sansekerta',
          languageCitations: [0],
          script: 'Pallava Script',
          scriptId: 'Aksara Pallawa',
          scriptCitations: [0],
          architecture: 'Buddhist Temples and Stupas',
          architectureId: 'Kuil-kuil dan Stupa Buddha',
          architectureCitations: [1, 2, 3],
          literature: 'Buddhist Sutras, Maritime Records',
          literatureId: 'Sutra Buddha, Catatan Maritim',
          literatureItems: ['Buddhist Sutras', 'Maritime Records'],
          literatureItemsId: ['Sutra Buddha', 'Catatan Maritim'],
          literatureCitations: [4, 0],
          cultureCitationRefs: [
            { citation: 'Kedukan Bukit Inscription — Wikipedia',                   url: 'https://en.wikipedia.org/wiki/Kedukan_Bukit_inscription' },
            { citation: 'Candi Muara Takus — Paths Unwritten',                     url: 'https://pathsunwritten.com/candi-muara-takus/' },
            { citation: 'Indonesian Esoteric Buddhism — Wikipedia',                url: 'https://en.wikipedia.org/wiki/Indonesian_Esoteric_Buddhism' },
            { citation: 'Buddhist Temples of Srivijaya — Facts and Details',       url: 'https://factsanddetails.com/indonesia/History_and_Religion/sub6_1a/entry-3940.html' },
            { citation: 'Srivijaya Religion, Culture and Society — RemNote',       url: 'https://www.remnote.com/learn/arts-and-humanities/world-history/srivijaya-religion-culture-and-society-study-deck' },
          ],
        },
        territories: ['Sumatra', 'Malay Peninsula', 'Western Java', 'Southern Thailand'],
        territoriesCitations: [0, 0, 0, 0],
        vassals: ['Jambi', 'Kedah', 'Chaiya'],
        vassalsCitations: [0, 0, 1],
        rivals: ['Javanese Kingdoms', 'Chola Dynasty'],
        rivalsCitations: [2, 3],
        relations: {
          'Song China': 'Tributary Trade Partner',
          'Chola India': 'Trade Rivalry',
          'Javanese States': 'Competition'
        },
        relationsId: {
          'Dinasti Song': 'Mitra Dagang Tributari',
          'India Chola': 'Persaingan Dagang',
          'Kerajaan Jawa': 'Persaingan',
        },
        relationsCitations: [0, 1, 0],
        relationsCitationRefs: [
          { citation: 'Srivijaya — Wikipedia',              url: 'https://en.wikipedia.org/wiki/Srivijaya' },
          { citation: 'Srivijaya — New World Encyclopedia', url: 'https://www.newworldencyclopedia.org/entry/Srivijaya' },
          { citation: 'History of Srivijaya — Wikipedia',   url: 'https://en.wikipedia.org/wiki/History_of_Srivijaya' },
          { citation: 'Srivijaya Empire — Britannica',      url: 'https://www.britannica.com/place/Srivijaya-empire' },
        ],
      },
      1025: {
        era: 'Decline', eraId: 'Masa Kemunduran',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Unknown',
          reignStart: 1000,
          reignEnd: 1100
        },
        capital: 'Palembang',
        population: '~1-2 million',
        populationId: '~1-2 juta (perkiraan)',
        religion: 'Mahayana Buddhism',
        government: 'Weakened Thalassocracy',
        summary: 'Chola raids devastate the capital; maritime dominance begins to crumble',
        summaryId: 'Serangan Chola menghancurkan ibu kota; dominasi maritim mulai runtuh',
        keyEvents: [
          { year: 1025, event: 'Chola raid devastates Palembang', type: 'military', eventId: 'Serangan Chola menghancurkan Palembang' },
          { year: 1068, event: 'Further Chola attacks weaken trade network', type: 'military', eventId: 'Serangan Chola berikutnya melemahkan jaringan perdagangan' }
        ],
        historicalContext: 'After the devastating Chola raids of 1025, Srivijaya never fully recovers.\n\nRising powers in Java and the Malay Peninsula erode its control.',
        historicalContextId: 'Setelah serangan Chola yang menghancurkan pada tahun 1025, Sriwijaya tidak pernah sepenuhnya pulih.\n\nKekuatan-kekuatan baru di Jawa dan Semenanjung Melayu menggerogoti kendalinya.',
        economy: {
          primary: ['Reduced Trade', 'Local Agriculture'],
          primaryId: ['Perdagangan Terbatas', 'Pertanian Lokal'],
          exports: ['Spices', 'Forest Products'],
          exportsId: ['Rempah-rempah', 'Hasil Hutan'],
          tradingPartners: ['Song China', 'Regional States'],
          tradingPartnersId: ['Dinasti Song', 'Kerajaan Regional'],
        },
        culture: {
          language: 'Old Malay',
          languageId: 'Melayu Kuno',
          script: 'Pallava Script',
          scriptId: 'Aksara Pallawa',
          architecture: 'Temple Maintenance',
          architectureId: 'Pemeliharaan Kuil',
          literature: 'Declining Scholarship',
          literatureId: 'Keilmuan yang Menurun',
        },
        territories: ['Southern Sumatra', 'Parts of Malay Peninsula'],
        vassals: ['Jambi'],
        rivals: ['Chola Dynasty', 'Javanese Kingdoms'],
        relations: {
          'Song China': 'Diminished Tributary',
          'Chola': 'Hostile'
        },
        relationsId: {
          'Dinasti Song': 'Tributari yang Melemah',
          'Chola': 'Bermusuhan',
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
        era: 'Early Kingdom', eraId: 'Kerajaan Awal',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Mulawarman',
          reignStart: 375,
          reignEnd: 425
        },
        capital: 'Muara Kaman',
        population: '~100,000',
        populationId: '~100.000 (perkiraan)',
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: 'One of the earliest known Hindu kingdoms in Southeast Asia, known from the Yupa inscriptions',
        summaryId: 'Salah satu kerajaan Hindu tertua yang diketahui di Asia Tenggara, dikenal dari prasasti Yupa',
        keyEvents: [
          { year: 400, event: 'Yupa inscriptions erected by Mulawarman', type: 'cultural', eventId: 'Prasasti Yupa didirikan oleh Mulawarman' },
          { year: 400, event: 'Ritual donation of 20,000 cows to Brahmins', type: 'religious', eventId: 'Pemberian ritual 20.000 ekor sapi kepada para Brahmana' }
        ],
        historicalContext: 'Kutai is among the oldest recorded kingdoms in the Indonesian archipelago.\n\nThe Sanskrit Yupa inscriptions reveal strong Indian cultural influence in early Borneo.',
        historicalContextId: 'Kutai termasuk salah satu kerajaan tertua yang tercatat di kepulauan Indonesia.\n\nPrasasti Yupa dalam bahasa Sansekerta mengungkapkan pengaruh budaya India yang kuat di Kalimantan pada masa awal.',
        economy: {
          primary: ['River Trade', 'Agriculture', 'Tribute'],
          primaryId: ['Perdagangan Sungai', 'Pertanian', 'Upeti'],
          exports: ['Forest Products', 'Gold', 'Camphor'],
          exportsId: ['Hasil Hutan', 'Emas', 'Kapur Barus'],
          tradingPartners: ['India', 'Regional Polities'],
          tradingPartnersId: ['India', 'Kerajaan Setempat'],
        },
        culture: {
          language: 'Sanskrit, Old Malay',
          languageId: 'Sansekerta, Melayu Kuno',
          script: 'Pallava Script',
          scriptId: 'Aksara Pallawa',
          architecture: 'Hindu Temples',
          architectureId: 'Kuil-kuil Hindu',
          literature: 'Yupa Inscriptions',
          literatureId: 'Prasasti Yupa',
        },
        territories: ['East Kalimantan', 'Mahakam River Basin'],
        vassals: [],
        rivals: [],
        relations: { 'India': 'Cultural & Religious Exchange' },
        relationsId: { 'India': 'Pertukaran Budaya & Agama' }
      },
      500: {
        era: 'Classical Period', eraId: 'Periode Klasik',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Raja Aswawarman (dan penerus)',
          reignStart: '400',
          reignEnd: '500'
        },
        capital: 'Muara Kaman',
        population: '~200,000',
        populationId: '~200.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Kutai maintains its river-based kingdom across the Mahakam basin over many centuries',
        summaryId: 'Kutai mempertahankan kerajaan berbasis sungainya di sepanjang cekungan Mahakam selama berabad-abad',
        keyEvents: [
          { year: 500, event: 'Continued Hindu-Buddhist cultural development', type: 'cultural', eventId: 'Perkembangan budaya Hindu-Buddha yang berkelanjutan' }
        ],
        historicalContext: 'Kutai persists as a regional power in Borneo, controlling the Mahakam River trade routes.\n\nLimited records from this long period suggest stable but quiet rule.',
        historicalContextId: 'Kutai bertahan sebagai kekuatan regional di Kalimantan, menguasai jalur perdagangan Sungai Mahakam.\n\nCatatan yang terbatas dari periode panjang ini menunjukkan pemerintahan yang stabil namun tenang.',
        economy: {
          primary: ['River Trade', 'Forest Products', 'Tribute'],
          primaryId: ['Perdagangan Sungai', 'Hasil Hutan', 'Upeti'],
          exports: ['Gold', 'Camphor', 'Rattan'],
          exportsId: ['Emas', 'Kapur Barus', 'Rotan'],
          tradingPartners: ['Java', 'Srivijaya', 'China'],
          tradingPartnersId: ['Jawa', 'Sriwijaya', 'Tiongkok'],
        },
        culture: {
          language: 'Old Malay',
          languageId: 'Melayu Kuno',
          script: 'Local Script',
          scriptId: 'Aksara Lokal',
          architecture: 'Wooden Palaces and Temples',
          architectureId: 'Istana dan Kuil Kayu',
          literature: 'Oral Traditions',
          literatureId: 'Tradisi Lisan',
        },
        territories: ['East Kalimantan', 'Mahakam River Basin'],
        vassals: [],
        rivals: ['Regional Borneo Polities'],
        relations: { 'Srivijaya': 'Tributary Relations', 'Java': 'Trade Contact' },
        relationsId: { 'Sriwijaya': 'Hubungan Tributari', 'Jawa': 'Kontak Dagang' }
      },
      1300: {
        era: 'Late Period', eraId: 'Periode Akhir',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Unknown',
          reignStart: 1300,
          reignEnd: 1361
        },
        capital: 'Muara Kaman',
        population: '~150,000',
        populationId: '~150.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Regional Kingdom',
        summary: 'Kutai in its final pre-Islamic period before eventual conversion and transformation',
        summaryId: 'Kutai dalam periode pra-Islam terakhirnya sebelum akhirnya beralih ke Islam',
        keyEvents: [
          { year: 1361, event: 'End of classical Kutai period', type: 'political', eventId: 'Berakhirnya periode klasik Kutai' }
        ],
        historicalContext: 'The classical Hindu-Buddhist Kutai kingdom approaches its end.\n\nIslamisation of Borneo will eventually transform the kingdom into the Kutai Sultanate.',
        historicalContextId: 'Kerajaan Kutai Hindu-Buddha klasik mendekati akhirnya.\n\nIslamisasi Kalimantan pada akhirnya akan mengubah kerajaan ini menjadi Kesultanan Kutai.',
        economy: {
          primary: ['River Trade', 'Forest Products'],
          primaryId: ['Perdagangan Sungai', 'Hasil Hutan'],
          exports: ['Gold', 'Camphor'],
          exportsId: ['Emas', 'Kapur Barus'],
          tradingPartners: ['Java', 'Regional Ports'],
          tradingPartnersId: ['Jawa', 'Pelabuhan Setempat'],
        },
        culture: {
          language: 'Old Malay',
          languageId: 'Melayu Kuno',
          script: 'Local Script',
          scriptId: 'Aksara Lokal',
          architecture: 'Traditional Wooden Structures',
          architectureId: 'Bangunan Kayu Tradisional',
          literature: 'Oral Traditions',
          literatureId: 'Tradisi Lisan',
        },
        territories: ['East Kalimantan'],
        vassals: [],
        rivals: ['Majapahit Influence'],
        relations: { 'Majapahit': 'Tributary' },
        relationsId: { 'Majapahit': 'Tributari' }
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
        era: 'Purnawarman Era', eraId: 'Era Purnawarman',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Purnawarman',
          reignStart: '358',
          reignEnd: '382',
        },
        capital: 'Tarumanagara (near Bekasi/Bogor, West Java)',
        capitalId: 'Tarumanagara (sekitar Bekasi/Bogor, Jawa Barat)',
        population: '~100,000 (est.)',
        populationId: '~100.000 (perkiraan)',
        religion: 'Hindu (Vaishnavism)',
        government: 'Hindu Kingdom',
        summary: 'Tarumanagara flourishes under Purnawarman, documented through stone inscriptions as one of the earliest Hindu kingdoms of Java',
        summaryId: 'Tarumanagara berkembang di bawah Purnawarman, terdokumentasi melalui prasasti batu sebagai salah satu kerajaan Hindu tertua di Jawa',
        keyEvents: [
          { year: 400, event: 'Purnawarman stone inscriptions (Ciaruteun, Kebon Kopi) erected across West Java', type: 'cultural', eventId: 'Prasasti batu Purnawarman (Ciaruteun, Kebon Kopi) didirikan di Jawa Barat' },
        ],
        historicalContext: 'Tarumanagara is among the earliest recorded kingdoms of the archipelago, located in West Java.\n\nThe Purnawarman inscriptions — written in Sanskrit using Pallava script — are the oldest known written records found on Java.',
        historicalContextId: 'Tarumanagara termasuk salah satu kerajaan tertua yang tercatat di kepulauan ini, berlokasi di Jawa Barat.\n\nPrasasti Purnawarman — ditulis dalam bahasa Sansekerta menggunakan aksara Pallawa — merupakan catatan tertulis tertua yang diketahui ditemukan di Jawa.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
          exports: ['Rice', 'Timber', 'Ivory'],
          exportsId: ['Beras', 'Kayu', 'Gading'],
          tradingPartners: ['India'],
          tradingPartnersId: ['India'],
        },
        culture: {
          language: 'Sanskrit',
          languageId: 'Sansekerta',
          script: 'Pallava Script',
          scriptId: 'Aksara Pallawa',
          architecture: 'Hindu Temples', // TODO: verify specific surviving structures
          architectureId: 'Kuil-kuil Hindu',
          literature: 'Purnawarman Stone Inscriptions',
          literatureId: 'Prasasti Batu Purnawarman',
        },
        territories: ['West Java', 'Citarum River Basin'],
        vassals: [], // TODO: verify with academic source
        rivals: [],  // TODO: verify with academic source
        relations: { 'India': 'Cultural & Religious Exchange' },
        relationsId: { 'India': 'Pertukaran Budaya & Agama' },
      },
      550: {
        era: 'Late Period', eraId: 'Periode Akhir',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Candrawarman',
          reignStart: '515',
          reignEnd: '535',
        },
        capital: 'Tarumanagara (near Bekasi/Bogor, West Java)',
        capitalId: 'Tarumanagara (sekitar Bekasi/Bogor, Jawa Barat)',
        population: '~80,000 (est.)',
        populationId: '~80.000 (perkiraan)',
        religion: 'Hindu',
        government: 'Hindu Kingdom',
        summary: 'Tarumanagara continues as a regional power in West Java before dissolving into the successor kingdoms of Sunda and Galuh',
        summaryId: 'Tarumanagara terus menjadi kekuatan regional di Jawa Barat sebelum terpecah menjadi kerajaan penerus Sunda dan Galuh',
        keyEvents: [
          { year: 669, event: 'Tarumanagara dissolves into the kingdoms of Sunda and Galuh', type: 'political', eventId: 'Tarumanagara bubar menjadi Kerajaan Sunda dan Galuh' },
        ],
        historicalContext: 'In its later centuries Tarumanagara gradually weakens.\n\nBy 669 the kingdom fragments into Sunda in the west and Galuh to the east, ending the Tarumanagara era.',
        historicalContextId: 'Pada abad-abad terakhirnya, Tarumanagara secara bertahap melemah.\n\nPada tahun 669 kerajaan ini terpecah menjadi Sunda di bagian barat dan Galuh di bagian timur, mengakhiri era Tarumanagara.',
        economy: {
          primary: ['Agriculture', 'River Trade'],
          primaryId: ['Pertanian', 'Perdagangan Sungai'],
          exports: ['Rice', 'Timber'],
          exportsId: ['Beras', 'Kayu'],
          tradingPartners: ['India', 'China'],
          tradingPartnersId: ['India', 'Tiongkok'],
        },
        culture: {
          language: 'Sanskrit, Old Sundanese',
          languageId: 'Sansekerta, Sunda Kuno',
          script: 'Pallava Script',
          scriptId: 'Aksara Pallawa',
          architecture: 'Stone Inscriptions',
          architectureId: 'Prasasti batu',
          literature: 'Prasasti Pasir Muara',
          literatureId: 'Prasasti Pasir Muara',
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
        era: 'Early Kingdom', eraId: 'Kerajaan Awal',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Tarusbawa',
          reignStart: '669',
          reignEnd: '723',
        },
        capital: 'Pakuan (near Bogor)',
        capitalId: 'Pakuan (sekitar Bogor)',
        population: '~150,000 (est.)',
        populationId: '~150.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Sunda emerges as a successor state to Tarumanagara, controlling the western region of Java',
        summaryId: 'Sunda muncul sebagai negara penerus Tarumanagara, menguasai wilayah barat Jawa',
        keyEvents: [
          { year: 684, event: 'Sunda established as successor kingdom in western Java', type: 'political', eventId: 'Sunda didirikan sebagai kerajaan penerus di Jawa Barat' },
        ],
        historicalContext: 'Following the dissolution of Tarumanagara in 669, Sunda controls the western portion of Java while Galuh holds the eastern.\n\nThe kingdom maintains Hindu-Buddhist traditions throughout its long history.',
        historicalContextId: 'Setelah bubarnya Tarumanagara pada tahun 669, Sunda menguasai bagian barat Jawa sementara Galuh menguasai bagian timur.\n\nKerajaan ini mempertahankan tradisi Hindu-Buddha sepanjang sejarahnya yang panjang.',
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'River Trade'],
          primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Perdagangan Sungai'],
          exports: ['Pepper', 'Rice', 'Timber'],
          exportsId: ['Lada', 'Beras', 'Kayu'],
          tradingPartners: ['India', 'China', 'Srivijaya'],
          tradingPartnersId: ['India', 'Tiongkok', 'Sriwijaya'],
        },
        culture: {
          language: 'Old Sundanese',
          languageId: 'Sunda Kuno',
          script: 'Old Sundanese, Pallava',
          scriptId: 'Sunda Kuno, Pallawa',
          architecture: 'Pakuan Palace, Batujaya Site',
          architectureId: 'Keraton Pakuan, Situs Batujaya',
          literature: 'Kebon Kopi II Inscription',
          literatureId: 'Prasasti Kebon Kopi II',
        },
        territories: ['West Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Galuh'],
        relations: { 'Galuh': 'Rival Successor State' },
        relationsId: { 'Galuh': 'Negara Penerus Saingan' },
      },
      1200: {
        era: 'Classical Period', eraId: 'Periode Klasik',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Sri Jayabhupati',
          reignStart: '1030',
          reignEnd: '1042',
        },
        capital: 'Pakuan Pajajaran (Bogor)',
        population: '~300,000 (est.)',
        populationId: '~300.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Sunda persists as a major Hindu-Buddhist kingdom in West Java amid the rise of Majapahit',
        summaryId: 'Sunda bertahan sebagai kerajaan Hindu-Buddha besar di Jawa Barat di tengah kebangkitan Majapahit',
        keyEvents: [
          { year: 1357, event: 'Battle of Bubat — diplomatic crisis with Majapahit', type: 'military', eventId: 'Perang Bubat — krisis diplomatik dengan Majapahit' }, // TODO: verify exact year
        ],
        historicalContext: 'The Sunda Kingdom maintains its independence through the Majapahit era.\n\nThe Battle of Bubat marks a turning point in Sunda–Majapahit relations, leaving a lasting wound in Sundanese historical memory.',
        historicalContextId: 'Kerajaan Sunda mempertahankan kemerdekaannya sepanjang era Majapahit.\n\nPerang Bubat menandai titik balik dalam hubungan Sunda–Majapahit, meninggalkan luka mendalam dalam memori sejarah Sunda.',
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'Forest Products'],
          primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Hasil Hutan'],
          exports: ['Pepper', 'Rice', 'Timber', 'Cotton'],
          exportsId: ['Lada', 'Beras', 'Kayu', 'Kapas'],
          tradingPartners: ['India', 'China', 'Majapahit'],
          tradingPartnersId: ['India', 'Tiongkok', 'Majapahit'],
        },
        culture: {
          language: 'Old Sundanese',
          languageId: 'Sunda Kuno',
          script: 'Old Sundanese, Kawi',
          scriptId: 'Sunda Kuno, Kawi',
          architecture: 'Hindu Temples',
          architectureId: 'Kuil-kuil Hindu',
          literature: 'Carita Parahiyangan, Babad Tanah Sunda, Siksa Kandang Karesian',
          literatureId: 'Carita Parahiyangan, Babad Tanah Sunda, Siksa Kandang Karesian',
        },
        territories: ['West Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Majapahit'],
        relations: { 'Majapahit': 'Rivalry' },
        relationsId: { 'Majapahit': 'Persaingan' },
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
        era: 'Early Kingdom', eraId: 'Kerajaan Awal',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Wretikandayun',
          reignStart: '669',
          reignEnd: '702',
        },
        capital: 'Kawali (Ciamis, West Java)',
        capitalId: 'Kawali (Ciamis, Jawa Barat)',
        population: '~100,000 (est.)',
        populationId: '~100.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Galuh established by Wretikandayun as the eastern successor state to Tarumanagara, controlling the eastern half of West Java',
        summaryId: 'Galuh didirikan oleh Wretikandayun sebagai negara penerus timur Tarumanagara, menguasai bagian timur Jawa Barat',
        keyEvents: [
          { year: 669, event: 'Galuh founded by Wretikandayun after the split of Tarumanagara', type: 'political', eventId: 'Galuh didirikan oleh Wretikandayun setelah pemisahan Tarumanagara' },
        ],
        historicalContext: 'Galuh emerges as the eastern successor state to Tarumanagara alongside its western counterpart Sunda.\n\nWretikandayun is credited as the founding figure of the Galuh lineage.',
        historicalContextId: 'Galuh muncul sebagai negara penerus timur Tarumanagara berdampingan dengan Sunda di sebelah barat.\n\nWretikandayun diakui sebagai tokoh pendiri garis keturunan Galuh.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
          exports: ['Rice', 'Timber', 'Iron'],
          exportsId: ['Beras', 'Kayu', 'Besi'],
          tradingPartners: ['Sunda', 'Srivijaya'],
          tradingPartnersId: ['Sunda', 'Sriwijaya'],
        },
        culture: {
          language: 'Old Sundanese',
          languageId: 'Sunda Kuno',
          script: 'Old Sundanese',
          scriptId: 'Sunda Kuno',
          architecture: 'Astana Gede Kawali',
          architectureId: 'Astana Gede Kawali',
          literature: 'Kawali Inscription',
          literatureId: 'Prasasti Kawali',
        },
        territories: ['East of West Java', 'Citanduy River Basin'], // TODO: verify precise extent
        vassals: [], // TODO: verify with academic source
        rivals: ['Sunda'],
        relations: { 'Sunda': 'Rival Successor State' },
        relationsId: { 'Sunda': 'Negara Penerus Saingan' },
      },
      1000: {
        era: 'Classical Period', eraId: 'Periode Klasik',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Maharaja Lingga',
          reignStart: '1000',
          reignEnd: '1042',
        },
        capital: 'Kawali (Ciamis, West Java)',
        capitalId: 'Kawali (Ciamis, Jawa Barat)',
        population: '~120,000 (est.)',
        populationId: '~120.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu Kingdom',
        summary: 'Galuh continues as a regional kingdom in West Java, frequently contesting with or merging with the Sunda Kingdom',
        summaryId: 'Galuh terus menjadi kerajaan regional di Jawa Barat, sering bersaing atau bergabung dengan Kerajaan Sunda',
        keyEvents: [], // TODO: verify key events for this period
        historicalContext: 'Galuh and Sunda alternately merge and separate across their shared history.\n\nThe two kingdoms share cultural and religious traditions but maintain distinct political identities.',
        historicalContextId: 'Galuh dan Sunda silih berganti menyatu dan berpisah sepanjang sejarah bersama mereka.\n\nKedua kerajaan berbagi tradisi budaya dan agama tetapi mempertahankan identitas politik yang berbeda.',
        economy: {
          primary: ['Agriculture', 'River Trade'],
          primaryId: ['Pertanian', 'Perdagangan Sungai'],
          exports: ['Rice', 'Timber', 'Iron'],
          exportsId: ['Beras', 'Kayu', 'Besi'],
          tradingPartners: ['Sunda', 'Majapahit'],
          tradingPartnersId: ['Sunda', 'Majapahit'],
        },
        culture: {
          language: 'Old Sundanese',
          languageId: 'Sunda Kuno',
          script: 'Old Sundanese',
          scriptId: 'Sunda Kuno',
          architecture: 'Astana Gede Kawali, Karangkamulyan Site',
          architectureId: 'Astana Gede Kawali, Situs Karangkamulyan',
          literature: 'Kawali Inscription',
          literatureId: 'Prasasti Kawali',
        },
        territories: ['East of West Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Sunda', 'Majapahit'],
        relations: { 'Sunda': 'Allied / Rival' },
        relationsId: { 'Sunda': 'Sekutu / Saingan' },
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
        era: 'Sanjaya Dynasty', eraId: 'Dinasti Sanjaya',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Sanjaya',
          reignStart: 732,
          reignEnd: '760',
        },
        capital: 'Medang ri Poh Pitu (Kedu Plain, Central Java)',
        capitalId: 'Medang ri Poh Pitu (Dataran Kedu, Jawa Tengah)',
        population: '~300,000 (est.)',
        populationId: '~300.000 (perkiraan)',
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: 'Mataram Kuno founded by Sanjaya in Central Java as a Shaivite Hindu kingdom, establishing dominance over the fertile Kedu Plain',
        summaryId: 'Mataram Kuno didirikan oleh Sanjaya di Jawa Tengah sebagai kerajaan Hindu Saiwa, menegakkan dominasi di Dataran Kedu yang subur',
        keyEvents: [
          { year: 732, event: "Canggal inscription records Sanjaya's establishment of the kingdom", type: 'political', eventId: 'Prasasti Canggal mencatat pendirian kerajaan oleh Sanjaya' },
        ],
        historicalContext: "The Canggal inscription of 732 CE is the earliest direct record of the Mataram kingdom, describing Sanjaya's establishment of a Shaivite Hindu polity in Central Java.\n\nThe Kedu Plain provides fertile agricultural land underpinning the kingdom's wealth.",
        historicalContextId: 'Prasasti Canggal tahun 732 M merupakan catatan langsung tertua tentang kerajaan Mataram, yang menggambarkan pendirian kerajaan Hindu Saiwa oleh Sanjaya di Jawa Tengah.\n\nDataran Kedu menyediakan lahan pertanian subur yang menopang kekayaan kerajaan.',
        economy: {
          primary: ['Agriculture', 'Wet Rice Cultivation', 'Tribute'],
          primaryId: ['Pertanian', 'Budidaya Padi Sawah', 'Upeti'],
          exports: ['Rice', 'Spices', 'Textiles'],
          exportsId: ['Beras', 'Rempah-rempah', 'Tekstil'],
          tradingPartners: ['India', 'China', 'Srivijaya'],
          tradingPartnersId: ['India', 'Tiongkok', 'Sriwijaya'],
        },
        culture: {
          language: 'Old Javanese, Sanskrit',
          languageId: 'Jawa Kuno, Sansekerta',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu Temples (Shaivite)',
          architectureId: 'Kuil-kuil Hindu (Saiwa)',
          literature: 'Sanskrit Inscriptions',
          literatureId: 'Prasasti Sansekerta',
        },
        territories: ['Central Java', 'Kedu Plain'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
      800: {
        era: 'Sailendra Period', eraId: 'Periode Sailendra',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Samaratungga',
          reignStart: '812',
          reignEnd: '833',
        },
        capital: 'Medang ri Poh Pitu (Kedu Plain, Central Java)',
        capitalId: 'Medang ri Poh Pitu (Dataran Kedu, Jawa Tengah)',
        population: '~400,000 (est.)',
        populationId: '~400.000 (perkiraan)',
        religion: 'Buddhist (Mahayana) and Hindu',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'The Sailendra dynasty rises to prominence, commissioning Borobudur — one of the greatest Buddhist monuments in the world',
        summaryId: 'Dinasti Sailendra bangkit menonjol, menugaskan pembangunan Borobudur — salah satu monumen Buddha terbesar di dunia',
        keyEvents: [
          { year: 825, event: 'Borobudur Buddhist temple complex completed', type: 'cultural', eventId: 'Kompleks candi Buddha Borobudur diselesaikan' }, // TODO: verify exact completion date
        ],
        historicalContext: 'The Sailendra dynasty brings Buddhist influence to dominate Mataram alongside the existing Shaivite Sanjaya traditions.\n\nBorobudur, constructed under Sailendra patronage, stands as one of the greatest architectural achievements of the ancient world.',
        historicalContextId: 'Dinasti Sailendra membawa pengaruh Buddha untuk mendominasi Mataram berdampingan dengan tradisi Saiwa Sanjaya yang sudah ada.\n\nBorobudur, yang dibangun di bawah perlindungan Sailendra, merupakan salah satu pencapaian arsitektur terbesar dunia kuno.',
        economy: {
          primary: ['Agriculture', 'Wet Rice Cultivation', 'Tribute'],
          primaryId: ['Pertanian', 'Budidaya Padi Sawah', 'Upeti'],
          exports: ['Rice', 'Spices', 'Textiles'],
          exportsId: ['Beras', 'Rempah-rempah', 'Tekstil'],
          tradingPartners: ['Srivijaya'],
          tradingPartnersId: ['Sriwijaya'],
        },
        culture: {
          language: 'Old Javanese, Sanskrit',
          languageId: 'Jawa Kuno, Sansekerta',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Borobudur, Prambanan', // TODO: verify Prambanan dates — built ~850s
          architectureId: 'Borobudur, Prambanan',
          literature: 'Buddhist Texts, Kawi Poetry',
          literatureId: 'Teks-teks Buddha, Puisi Kawi',
        },
        territories: ['Central Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: { 'Srivijaya': 'Allied / Dynastic Connection' },
        relationsId: { 'Sriwijaya': 'Sekutu / Hubungan Dinasti' },
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
        era: 'Early Kingdom', eraId: 'Kerajaan Awal',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Gajayana',
          reignStart: '760',
          reignEnd: '780',
        },
        capital: 'Kanjuruhan (near Malang, East Java)',
        capitalId: 'Kanjuruhan (sekitar Malang, Jawa Timur)',
        population: '~80,000 (est.)',
        populationId: '~80.000 (perkiraan)',
        religion: 'Hindu',
        government: 'Hindu Kingdom',
        summary: 'Kanjuruhan is a short-lived Hindu kingdom of East Java, known from the Dinoyo inscription referencing king Gajayana',
        summaryId: 'Kanjuruhan adalah kerajaan Hindu Jawa Timur yang berumur pendek, dikenal dari prasasti Dinoyo yang menyebut raja Gajayana',
        keyEvents: [
          { year: 760, event: 'Dinoyo inscription records King Gajayana and the kingdom of Kanjuruhan', type: 'cultural', eventId: 'Prasasti Dinoyo mencatat Raja Gajayana dan Kerajaan Kanjuruhan' }, // TODO: verify exact year
        ],
        historicalContext: 'Kanjuruhan is known primarily through the Dinoyo inscription, one of the earliest Sanskrit inscriptions found in East Java.\n\nThe kingdom represents the early spread of Hindu culture into eastern Java.',
        historicalContextId: 'Kanjuruhan dikenal terutama melalui Prasasti Dinoyo, salah satu prasasti Sansekerta tertua yang ditemukan di Jawa Timur.\n\nKerajaan ini merepresentasikan penyebaran awal budaya Hindu ke Jawa bagian timur.',
        economy: {
          primary: ['Agriculture', 'Tribute'],
          primaryId: ['Pertanian', 'Upeti'],
          exports: ['Rice', 'Iron', 'Timber'],
          exportsId: ['Beras', 'Besi', 'Kayu'],
          tradingPartners: ['Mataram', 'India'],
          tradingPartnersId: ['Mataram', 'India'],
        },
        culture: {
          language: 'Sanskrit, Old Javanese',
          languageId: 'Sansekerta, Jawa Kuno',
          script: 'Kawi Script', // TODO: verify script type
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu Temples', // TODO: verify specific structures
          architectureId: 'Kuil-kuil Hindu',
          literature: 'Dinoyo Inscription',
          literatureId: 'Prasasti Dinoyo',
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
        era: 'Classical Period', eraId: 'Periode Klasik',
        ruler: {
          portrait: '👑',
          title: 'Ratu',
          name: 'Ratu Shima',
          reignStart: '632',
          reignEnd: '648',
        },
        capital: 'Kaling (near Jepara, Central Java)',
        capitalId: 'Kaling (sekitar Jepara, Jawa Tengah)',
        population: '~150,000 (est.)',
        populationId: '~150.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Kingdom',
        summary: 'Kalingga, known in Chinese sources as Holing, is a trading kingdom on the north coast of Central Java renowned for the strict justice of Queen Ratu Shima',
        summaryId: 'Kalingga, dikenal dalam sumber Tiongkok sebagai Holing, adalah kerajaan dagang di pesisir utara Jawa Tengah yang terkenal dengan keadilan ketat Ratu Shima',
        keyEvents: [
          { year: 674, event: 'Tang dynasty Chinese records describe Kalingga (Holing) as a prosperous trading kingdom', type: 'political', eventId: 'Catatan Tiongkok Dinasti Tang menggambarkan Kalingga (Holing) sebagai kerajaan dagang yang makmur' }, // TODO: verify exact year of records
        ],
        historicalContext: "Kalingga appears in Tang dynasty Chinese chronicles as \"Holing,\" describing it as a wealthy maritime kingdom.\n\nRatu Shima is celebrated for strict justice — Chinese accounts describe her cutting off her own son's hand for touching royal property without permission.",
        historicalContextId: 'Kalingga muncul dalam kronik Tiongkok Dinasti Tang sebagai "Holing," yang menggambarkannya sebagai kerajaan maritim yang kaya.\n\nRatu Shima dikenal dengan keadilan yang ketat — catatan Tiongkok menggambarkan dirinya memotong tangan putranya sendiri karena menyentuh harta kerajaan tanpa izin.',
        economy: {
          primary: ['Coastal Trade', 'Agriculture', 'Tribute'],
          primaryId: ['Perdagangan Pesisir', 'Pertanian', 'Upeti'],
          exports: ['Salt', 'Fish', 'Timber'],
          exportsId: ['Garam', 'Ikan', 'Kayu'],
          tradingPartners: ['Tang China', 'India'],
          tradingPartnersId: ['Dinasti Tang', 'India'],
        },
        culture: {
          language: 'Old Javanese, Sanskrit',
          languageId: 'Jawa Kuno, Sansekerta',
          script: 'Pallawa',
          scriptId: 'Aksara Pallawa',
          architecture: 'No verified physical remains',
          architectureId: 'Tidak ada peninggalan fisik terverifikasi',
          literature: 'Catatan Dinasti Tang',
          literatureId: 'Catatan Dinasti Tang',
        },
        territories: ['North Coast of Central Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: { 'Tang China': 'Tributary Contact' },
        relationsId: { 'Dinasti Tang': 'Kontak Tributari' },
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
        era: 'Classical Period', eraId: 'Periode Klasik',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Parwati',
          reignStart: '695',
          reignEnd: '713',
        },
        capital: 'Kaling Utara (northern Central Java)',
        capitalId: 'Kaling Utara (Jawa Tengah bagian utara)',
        population: '~70,000 (est.)',
        populationId: '~70.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Kingdom',
        summary: 'Northern Kalingga emerges after the split of the Kalingga kingdom, maintaining the coastal region of Central Java',
        summaryId: 'Kalingga Utara muncul setelah pemisahan kerajaan Kalingga, mempertahankan wilayah pesisir Jawa Tengah',
        keyEvents: [], // TODO: verify key events with academic source
        historicalContext: "After the dissolution of unified Kalingga, the northern territories form a separate polity.\n\nDetails of Northern Kalingga's internal history remain limited in surviving records.",
        historicalContextId: 'Setelah bubarnya Kalingga yang bersatu, wilayah utara membentuk kerajaan tersendiri.\n\nRincian sejarah internal Kalingga Utara masih sangat terbatas dalam catatan yang ada.',
        economy: {
          primary: ['Coastal Trade', 'Agriculture'],
          primaryId: ['Perdagangan Pesisir', 'Pertanian'],
          exports: ['Salt', 'Fish'],
          exportsId: ['Garam', 'Ikan'],
          tradingPartners: ['China', 'Mataram'],
          tradingPartnersId: ['Tiongkok', 'Mataram'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Pallawa',
          scriptId: 'Aksara Pallawa',
          architecture: 'No verified physical remains',
          architectureId: 'Tidak ada peninggalan fisik terverifikasi',
          literature: 'Catatan Dinasti Tang',
          literatureId: 'Catatan Dinasti Tang',
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
        era: 'Classical Period', eraId: 'Periode Klasik',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Dewi Wasowati',
          reignStart: '695',
          reignEnd: '732',
        },
        capital: 'Kaling Selatan (southern Central Java)',
        capitalId: 'Kaling Selatan (Jawa Tengah bagian selatan)',
        population: '~80,000 (est.)',
        populationId: '~80.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Kingdom',
        summary: 'Southern Kalingga forms after the split of the Kalingga kingdom, controlling the inland and southern territories of Central Java',
        summaryId: 'Kalingga Selatan terbentuk setelah pemisahan kerajaan Kalingga, menguasai wilayah pedalaman dan selatan Jawa Tengah',
        keyEvents: [], // TODO: verify key events with academic source
        historicalContext: "The southern territories of Kalingga form a separate polity after the kingdom's dissolution around 695.\n\nSouthern Kalingga eventually becomes absorbed into the emerging Mataram kingdom by 732.",
        historicalContextId: 'Wilayah selatan Kalingga membentuk kerajaan tersendiri setelah bubarnya kerajaan sekitar tahun 695.\n\nKalingga Selatan akhirnya diserap ke dalam kerajaan Mataram yang sedang berkembang pada tahun 732.',
        economy: {
          primary: ['Agriculture', 'Inland Trade'],
          primaryId: ['Pertanian', 'Perdagangan Darat'],
          exports: ['Rice', 'Timber'],
          exportsId: ['Beras', 'Kayu'],
          tradingPartners: ['Mataram', 'India'],
          tradingPartnersId: ['Mataram', 'India'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Pallava, Early Kawi',
          scriptId: 'Pallawa, Kawi awal',
          architecture: 'No verified physical remains',
          architectureId: 'Tidak ada peninggalan fisik terverifikasi',
          literature: 'Catatan Dinasti Tang',
          literatureId: 'Catatan Dinasti Tang',
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
        era: 'East Java Period', eraId: 'Periode Jawa Timur',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Mpu Sindok',
          reignStart: 929,
          reignEnd: 947, // TODO: verify exact end of Mpu Sindok's reign
        },
        capital: 'Medang (East Java)',
        capitalId: 'Medang (Jawa Timur)',
        population: '~400,000 (est.)',
        populationId: '~400.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Mpu Sindok relocates the center of Javanese power from Central Java to East Java, founding Medang after a volcanic catastrophe',
        summaryId: 'Mpu Sindok memindahkan pusat kekuasaan Jawa dari Jawa Tengah ke Jawa Timur, mendirikan Medang setelah bencana gunung berapi',
        keyEvents: [
          { year: 929, event: 'Mpu Sindok moves the capital from Central Java to East Java', type: 'political', eventId: 'Mpu Sindok memindahkan ibu kota dari Jawa Tengah ke Jawa Timur' },
        ],
        historicalContext: 'Following a catastrophic volcanic eruption around 929 CE that devastated Central Java, Mpu Sindok relocates the court to East Java.\n\nThis shift marks a pivotal turning point in Javanese political history, establishing the foundations for all later East Javanese kingdoms.',
        historicalContextId: 'Setelah letusan gunung berapi dahsyat sekitar tahun 929 M yang menghancurkan Jawa Tengah, Mpu Sindok memindahkan istana ke Jawa Timur.\n\nPerpindahan ini menandai titik balik penting dalam sejarah politik Jawa, meletakkan dasar bagi semua kerajaan Jawa Timur kemudian.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
          exports: ['Rice', 'Spices', 'Cotton'],
          exportsId: ['Beras', 'Rempah-rempah', 'Kapas'],
          tradingPartners: ['China', 'India', 'Bali'],
          tradingPartnersId: ['Tiongkok', 'India', 'Bali'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Old Javanese Kakawin Poetry',
          literatureId: 'Puisi Kakawin Jawa Kuno',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [], // TODO: verify with academic source
        relations: {},
      },
      980: {
        era: 'Late Period', eraId: 'Periode Akhir',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Dharmawangsa Teguh',
          reignStart: '985',
          reignEnd: '1016',
        },
        capital: 'Wwatan (East Java)',
        capitalId: 'Wwatan (Jawa Timur)',
        population: '~500,000 (est.)',
        populationId: '~500.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Medang continues to dominate East Java before internal conflict leads to its collapse and the rise of Kahuripan under Airlangga',
        summaryId: 'Medang terus mendominasi Jawa Timur sebelum konflik internal menyebabkan keruntuhannya dan kebangkitan Kahuripan di bawah Airlangga',
        keyEvents: [
          { year: 1016, event: 'Medang Kingdom collapses following dynastic attack', type: 'political', eventId: 'Kerajaan Medang runtuh akibat serangan dinasti' }, // TODO: verify details
        ],
        historicalContext: "Medang's later years are marked by dynastic instability.\n\nIts collapse around 1016 creates the conditions for Airlangga's reunification of East Java under the Kahuripan kingdom.",
        historicalContextId: 'Tahun-tahun terakhir Medang ditandai dengan ketidakstabilan dinasti.\n\nKeruntuhannya sekitar tahun 1016 menciptakan kondisi bagi Airlangga untuk menyatukan kembali Jawa Timur di bawah kerajaan Kahuripan.',
        economy: {
          primary: ['Agriculture', 'River Trade'],
          primaryId: ['Pertanian', 'Perdagangan Sungai'],
          exports: ['Rice', 'Spices', 'Gold', 'Cotton'],
          exportsId: ['Beras', 'Rempah-rempah', 'Emas', 'Kapas'],
          tradingPartners: ['China', 'India', 'Bali', 'Srivijaya'],
          tradingPartnersId: ['Tiongkok', 'India', 'Bali', 'Sriwijaya'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Kakawin Poetry',
          literatureId: 'Puisi Kakawin',
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
        era: 'Airlangga Era', eraId: 'Era Airlangga',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Airlangga',
          reignStart: 1019,
          reignEnd: 1042,
        },
        capital: 'Kahuripan (Sidoarjo-Mojokerto, East Java)',
        capitalId: 'Kahuripan (Sidoarjo-Mojokerto, Jawa Timur)',
        population: '~400,000 (est.)',
        populationId: '~400.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Airlangga reunifies East Java following the collapse of Medang, building Kahuripan into a prosperous and stable kingdom before dividing it between his two sons',
        summaryId: 'Airlangga menyatukan kembali Jawa Timur setelah runtuhnya Medang, membangun Kahuripan menjadi kerajaan yang makmur sebelum membaginya antara kedua putranya',
        keyEvents: [
          { year: 1019, event: 'Airlangga begins reunification of East Java', type: 'political', eventId: 'Airlangga memulai penyatuan kembali Jawa Timur' },
          { year: 1042, event: 'Airlangga divides the kingdom into Panjalu and Janggala for his sons', type: 'political', eventId: 'Airlangga membagi kerajaan menjadi Panjalu dan Janggala untuk kedua putranya' },
        ],
        historicalContext: 'Airlangga — of Balinese royal descent — rises to restore order in East Java after the collapse of Medang.\n\nHis reign is notable for prosperity, religious tolerance, and literary patronage. At the end of his life he divides the kingdom between his two sons, creating the rival states of Panjalu and Janggala.',
        historicalContextId: 'Airlangga — keturunan bangsawan Bali — bangkit untuk memulihkan ketertiban di Jawa Timur setelah runtuhnya Medang.\n\nMasa pemerintahannya terkenal dengan kemakmuran, toleransi beragama, dan perlindungan sastra. Di akhir hidupnya, ia membagi kerajaan antara dua putranya, menciptakan negara-negara saingan Panjalu dan Janggala.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Port Revenues'],
          primaryId: ['Pertanian', 'Perdagangan Sungai', 'Pendapatan Pelabuhan'],
          exports: ['Rice', 'Spices', 'Gold'],
          exportsId: ['Beras', 'Rempah-rempah', 'Emas'],
          tradingPartners: ['China', 'India', 'Srivijaya', 'Bali'],
          tradingPartnersId: ['Tiongkok', 'India', 'Sriwijaya', 'Bali'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Kakawin Arjunawiwaha', // composed by Mpu Kanwa during Airlangga's reign
          literatureId: 'Kakawin Arjunawiwaha',
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
        era: 'Early Kingdom', eraId: 'Kerajaan Awal',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Sri Samarawijaya', // TODO: verify exact name
          reignStart: 1042,
          reignEnd: '1104',
        },
        capital: 'Daha (Kediri, East Java)',
        capitalId: 'Daha (Kediri, Jawa Timur)',
        population: '~200,000 (est.)',
        populationId: '~200.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Panjalu is established when Airlangga divides his kingdom, controlling the western portion of East Java',
        summaryId: 'Panjalu didirikan ketika Airlangga membagi kerajaannya, menguasai bagian barat Jawa Timur',
        keyEvents: [
          { year: 1042, event: 'Panjalu established after Airlangga divides Kahuripan', type: 'political', eventId: 'Panjalu didirikan setelah Airlangga membagi Kahuripan' },
        ],
        historicalContext: "Panjalu (later called Kediri) is one of two kingdoms created from the division of Airlangga's Kahuripan.\n\nRivalry with Janggala dominates its early decades before Panjalu eventually absorbs its rival.",
        historicalContextId: 'Panjalu (kemudian disebut Kediri) adalah salah satu dari dua kerajaan yang dibentuk dari pembagian Kahuripan oleh Airlangga.\n\nPersaingan dengan Janggala mendominasi dasawarsa-dasawarsa awalnya sebelum Panjalu akhirnya menyerap saingannya.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
          exports: ['Rice', 'Cotton', 'Indigo'],
          exportsId: ['Beras', 'Kapas', 'Nila'],
          tradingPartners: ['China', 'India', 'Janggala'],
          tradingPartnersId: ['Tiongkok', 'India', 'Janggala'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Old Javanese Kakawin',
          literatureId: 'Kakawin Jawa Kuno',
        },
        territories: ['West part of East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Janggala'],
        relations: { 'Janggala': 'Rival Sister Kingdom' },
        relationsId: { 'Janggala': 'Kerajaan Saudara yang Bersaing' },
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
        era: 'Early Kingdom', eraId: 'Kerajaan Awal',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Mapanji Garasakan',
          reignStart: 1042,
          reignEnd: '1052',
        },
        capital: 'Kahuripan (Sidoarjo, East Java)',
        capitalId: 'Kahuripan (Sidoarjo, Jawa Timur)',
        population: '~250,000 (est.)',
        populationId: '~250.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Janggala is established alongside Panjalu when Airlangga divides his kingdom, controlling the eastern and coastal portion of East Java',
        summaryId: 'Janggala didirikan bersama Panjalu ketika Airlangga membagi kerajaannya, menguasai bagian timur dan pesisir Jawa Timur',
        keyEvents: [
          { year: 1042, event: 'Janggala established after Airlangga divides Kahuripan', type: 'political', eventId: 'Janggala didirikan setelah Airlangga membagi Kahuripan' },
        ],
        historicalContext: "Janggala controls the eastern and coastal territories of what was Kahuripan, while Panjalu holds the western inland areas.\n\nThe two kingdoms maintain a rivalry until Janggala is eventually absorbed by Panjalu / Kediri.",
        historicalContextId: 'Janggala menguasai wilayah timur dan pesisir bekas Kahuripan, sementara Panjalu menguasai wilayah barat pedalaman.\n\nKedua kerajaan mempertahankan persaingan hingga Janggala akhirnya diserap oleh Panjalu / Kediri.',
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Upeti'],
          exports: ['Rice', 'Fish', 'Salt'],
          exportsId: ['Beras', 'Ikan', 'Garam'],
          tradingPartners: ['China', 'India', 'Panjalu'],
          tradingPartnersId: ['Tiongkok', 'India', 'Panjalu'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Kakawin Smaradahana (early)',
          literatureId: 'Kakawin Smaradahana (awal)',
        },
        territories: ['East part of East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Panjalu'],
        relations: { 'Panjalu': 'Rival Sister Kingdom' },
        relationsId: { 'Panjalu': 'Kerajaan Saudara yang Bersaing' },
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
        era: 'Founding Period', eraId: 'Periode Pendirian',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Mauliwarman',
          reignStart: '1088',
          reignEnd: '1183',
        },
        capital: 'Dharmasraya (Sijunjung, West Sumatra)',
        capitalId: 'Dharmasraya (Sijunjung, Sumatera Barat)',
        population: '~100,000 (est.)',
        populationId: '~100.000 (perkiraan)',
        religion: 'Buddhist (Mahayana)',
        government: 'Kingdom',
        summary: 'Dharmasraya emerges as a successor state to Srivijaya in the Batanghari River valley of Sumatra, inheriting its Buddhist traditions and trade networks',
        summaryId: 'Dharmasraya muncul sebagai negara penerus Sriwijaya di lembah Sungai Batanghari Sumatra, mewarisi tradisi Buddha dan jaringan perdagangannya',
        keyEvents: [
          { year: 1088, event: 'Dharmasraya emerges as the dominant Sumatran kingdom after Srivijaya\'s decline', type: 'political', eventId: 'Dharmasraya muncul sebagai kerajaan Sumatra yang dominan setelah kemunduran Sriwijaya' }, // TODO: verify exact date
        ],
        historicalContext: "As Srivijaya's power wanes after the Chola raids, Dharmasraya rises to fill the vacuum in Sumatra's interior.\n\nLocated along the Batanghari River, it inherits Srivijaya's Mahayana Buddhist culture and maintains the region's gold and forest trade.",
        historicalContextId: 'Saat kekuatan Sriwijaya melemah setelah serangan Chola, Dharmasraya bangkit untuk mengisi kekosongan di pedalaman Sumatra.\n\nBerlokasi di sepanjang Sungai Batanghari, ia mewarisi budaya Buddha Mahayana Sriwijaya dan mempertahankan perdagangan emas dan hasil hutan di wilayah tersebut.',
        economy: {
          primary: ['River Trade', 'Gold', 'Forest Products'],
          primaryId: ['Perdagangan Sungai', 'Emas', 'Hasil Hutan'],
          exports: ['Gold', 'Forest Products'],
          exportsId: ['Emas', 'Hasil Hutan'],
          tradingPartners: ['Singasari', 'India', 'China'],
          tradingPartnersId: ['Singasari', 'India', 'Tiongkok'],
        },
        culture: {
          language: 'Old Malay',
          languageId: 'Melayu Kuno',
          script: 'Kawi, Sansekerta',
          scriptId: 'Aksara Kawi, Sansekerta',
          architecture: 'Buddhist Temples', // TODO: verify specific examples
          architectureId: 'Kuil-kuil Buddha',
          literature: 'Prasasti Padang Roco',
          literatureId: 'Prasasti Padang Roco',
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
        era: 'Golden Age', eraId: 'Masa Kejayaan',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Jayabaya',
          reignStart: 1135, // TODO: verify exact reign start
          reignEnd: 1157,   // TODO: verify exact reign end
        },
        capital: 'Daha (Kediri)',
        population: '~350,000 (est.)',
        populationId: '~350.000 (perkiraan)',
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: 'Kediri reaches its golden age under Jayabaya, famed for prophetic writings and a flourishing of Old Javanese Kakawin literature',
        summaryId: 'Kediri mencapai masa keemasannya di bawah Jayabaya, terkenal dengan ramalan-ramalannya dan perkembangan sastra Kakawin Jawa Kuno',
        keyEvents: [
          { year: 1157, event: 'Kakawin Bharatayuddha composed — major Old Javanese literary work under Jayabaya', type: 'cultural', eventId: 'Kakawin Bharatayuddha digubah — karya sastra Jawa Kuno utama di bawah Jayabaya' }, // TODO: verify exact year
        ],
        historicalContext: "Kediri (successor to Panjalu) becomes the dominant power of East Java under Jayabaya.\n\nJayabaya's reign is celebrated for literary patronage and for the Jayabaya Prophecies — predictions about Java's future that remained influential for centuries.",
        historicalContextId: 'Kediri (penerus Panjalu) menjadi kekuatan dominan di Jawa Timur di bawah Jayabaya.\n\nMasa pemerintahan Jayabaya dirayakan karena perlindungan sastra dan Ramalan Jayabaya — prediksi tentang masa depan Jawa yang tetap berpengaruh selama berabad-abad.',
        economy: {
          primary: ['Agriculture', 'River Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
          exports: ['Rice', 'Cotton', 'Agricultural Products'],
          exportsId: ['Beras', 'Kapas', 'Hasil Pertanian'],
          tradingPartners: ['China', 'India', 'Srivijaya'],
          tradingPartnersId: ['Tiongkok', 'India', 'Sriwijaya'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi, Old Javanese',
          scriptId: 'Kawi, Jawa Kuno',
          architecture: 'Candi Penataran (early)',
          architectureId: 'Candi Penataran (awal)',
          literature: 'Kakawin Bharatayuddha, Javanese Ramayana, Jayabaya Prophecies',
          literatureId: 'Kakawin Bharatayuddha, Ramayan Jawa, Ramalan Jayabaya',
        },
        territories: ['East Java', 'Daha River Basin'],
        vassals: [], // TODO: verify with academic source
        rivals: [],
        relations: {},
      },
      1200: {
        era: 'Late Period', eraId: 'Periode Akhir',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Kertajaya',
          reignStart: '1194',
          reignEnd: 1222,
        },
        capital: 'Daha',
        population: '~250,000 (est.)',
        populationId: '~250.000 (perkiraan)',
        religion: 'Hindu (Shaivism)',
        government: 'Hindu Kingdom',
        summary: "Kediri declines under its last ruler Kertajaya, whose conflict with the Brahmin clergy allows Ken Arok of Tumapel to overthrow the kingdom in 1222",
        summaryId: 'Kediri mengalami kemunduran di bawah penguasa terakhirnya Kertajaya, yang konfliknya dengan kaum Brahmana memungkinkan Ken Arok dari Tumapel menggulingkan kerajaan pada 1222',
        keyEvents: [
          { year: 1222, event: 'Kertajaya defeated by Ken Arok of Tumapel at the Battle of Ganter — end of Kediri', type: 'military', eventId: 'Kertajaya dikalahkan Ken Arok dari Tumapel dalam Pertempuran Ganter — berakhirnya Kediri' },
        ],
        historicalContext: "King Kertajaya's demands that Brahmins worship him as a god alienate the religious establishment.\n\nThe Brahmins ally with Ken Arok of Tumapel, whose victory at the Battle of Ganter in 1222 ends the Kediri kingdom.",
        historicalContextId: 'Tuntutan Raja Kertajaya agar para Brahmana menyembahnya sebagai dewa mengasingkan establishment keagamaan.\n\nPara Brahmana bersekutu dengan Ken Arok dari Tumapel, yang kemenangannya dalam Pertempuran Ganter pada 1222 mengakhiri kerajaan Kediri.',
        economy: {
          primary: ['Agriculture', 'River Trade'],
          primaryId: ['Pertanian', 'Perdagangan Sungai'],
          exports: ['Rice', 'Cotton', 'Indigo'],
          exportsId: ['Beras', 'Kapas', 'Nila'],
          tradingPartners: ['China', 'India', 'Janggala'],
          tradingPartnersId: ['Tiongkok', 'India', 'Janggala'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu Temples',
          architectureId: 'Kuil-kuil Hindu',
          literature: 'Kakawin Poetry',
          literatureId: 'Puisi Kakawin',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Tumapel'],
        relations: { 'Tumapel': 'Hostile' },
        relationsId: { 'Tumapel': 'Bermusuhan' },
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
        era: 'Ken Arok Era', eraId: 'Era Ken Arok',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Ken Arok',
          reignStart: 1222,
          reignEnd: 1227,
        },
        capital: 'Tumapel (Singasari, Malang, East Java)',
        capitalId: 'Tumapel (Singasari, Malang, Jawa Timur)',
        population: '~200,000 (est.)',
        populationId: '~200.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Ken Arok founds Tumapel after defeating Kediri at the Battle of Ganter, establishing the Rajasa dynasty that would rule through Singasari and Majapahit',
        summaryId: 'Ken Arok mendirikan Tumapel setelah mengalahkan Kediri dalam Pertempuran Ganter, membangun Dinasti Rajasa yang akan memerintah melalui Singasari dan Majapahit',
        keyEvents: [
          { year: 1222, event: 'Ken Arok defeats Kertajaya of Kediri at the Battle of Ganter', type: 'military', eventId: 'Ken Arok mengalahkan Kertajaya dari Kediri dalam Pertempuran Ganter' },
          { year: 1227, event: 'Ken Arok assassinated by Anusapati', type: 'political', eventId: 'Ken Arok dibunuh oleh Anusapati' },
        ],
        historicalContext: "Ken Arok is a legendary figure who rises from low origins to overthrow Kediri and establish Tumapel.\n\nHis brief reign establishes the Rajasa dynasty that would rule through Singasari and ultimately Majapahit.",
        historicalContextId: 'Ken Arok adalah tokoh legendaris yang bangkit dari asal-usul rendah untuk menggulingkan Kediri dan mendirikan Tumapel.\n\nMasa pemerintahannya yang singkat meletakkan dasar Dinasti Rajasa yang akan memerintah melalui Singasari dan akhirnya Majapahit.',
        economy: {
          primary: ['Agriculture', 'Tribute', 'River Trade'],
          primaryId: ['Pertanian', 'Upeti', 'Perdagangan Sungai'],
          exports: ['Rice', 'Spices', 'Iron'],
          exportsId: ['Beras', 'Rempah-rempah', 'Besi'],
          tradingPartners: ['China', 'India', 'Kediri'],
          tradingPartnersId: ['Tiongkok', 'India', 'Kediri'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Pararaton (records of Ken Arok)',
          literatureId: 'Pararaton (mencatat Ken Arok)',
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
        era: 'Early Kingdom', eraId: 'Kerajaan Awal',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Wisnuwardhana',
          reignStart: 1248, // TODO: verify exact reign start
          reignEnd: 1268,   // TODO: verify exact reign end
        },
        capital: 'Singhasari', // Near modern Malang, East Java
        population: '~300,000 (est.)',
        populationId: '~300.000 (perkiraan)',
        religion: 'Hindu-Buddhist (Shaiva-Buddha syncretism)',
        government: 'Hindu-Buddhist Kingdom',
        summary: 'Singasari consolidates power in East Java under Wisnuwardhana, developing a distinctive syncretic Hindu-Buddhist religious culture',
        summaryId: 'Singasari mengonsolidasikan kekuasaan di Jawa Timur di bawah Wisnuwardhana, mengembangkan budaya agama Hindu-Buddha sinkretis yang khas',
        keyEvents: [
          { year: 1254, event: 'Wisnuwardhana consolidates Singasari as the dominant East Java power', type: 'political', eventId: 'Wisnuwardhana mengonsolidasikan Singasari sebagai kekuatan dominan Jawa Timur' }, // TODO: verify exact year
        ],
        historicalContext: 'Singasari emerges from the Tumapel kingdom, developing a distinctive syncretic form of Shaivism and Buddhism.\n\nArtistic and religious patronage flourishes, setting the cultural foundation for Majapahit.',
        historicalContextId: 'Singasari muncul dari kerajaan Tumapel, mengembangkan bentuk sinkretis khas antara Saiwa dan Buddha.\n\nPerlindungan seni dan agama berkembang pesat, meletakkan fondasi budaya untuk Majapahit.',
        economy: {
          primary: ['Agriculture', 'Tribute', 'Coastal Trade'],
          primaryId: ['Pertanian', 'Upeti', 'Perdagangan Pesisir'],
          exports: ['Rice', 'Spices', 'Gold'],
          exportsId: ['Beras', 'Rempah-rempah', 'Emas'],
          tradingPartners: ['China', 'India', 'Champa'],
          tradingPartnersId: ['Tiongkok', 'India', 'Champa'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Old Javanese Poetry',
          literatureId: 'Puisi Jawa Kuno',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: [],
        relations: {},
      },
      1268: {
        era: 'Kertanagara Era', eraId: 'Era Kertanagara',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Kertanagara',
          reignStart: 1268,
          reignEnd: 1292,
        },
        capital: 'Singasari, Malang',
        population: '~400,000 (est.)',
        populationId: '~400.000 (perkiraan)',
        religion: 'Hindu-Buddhist (Tantric Buddhism)',
        government: 'Hindu-Buddhist Kingdom',
        summary: "Kertanagara expands Singasari's influence across the archipelago and defiantly refuses tribute to the Mongol Yuan dynasty",
        summaryId: 'Kertanagara memperluas pengaruh Singasari ke seluruh kepulauan dan dengan tegas menolak memberi upeti kepada Dinasti Yuan Mongol',
        keyEvents: [
          { year: 1275, event: 'Pamalayu expedition sent to Sumatra to assert Singasari influence', type: 'military', eventId: 'Ekspedisi Pamalayu dikirim ke Sumatra untuk menegaskan pengaruh Singasari' },
          { year: 1289, event: 'Kertanagara mutilates the Mongol envoy — triggering Yuan invasion plans', type: 'political', eventId: 'Kertanagara memutilasi utusan Mongol — memicu rencana invasi Yuan' },
          { year: 1292, event: 'Kertanagara killed by Jayakatwang of Kediri — Singasari collapses', type: 'military', eventId: 'Kertanagara dibunuh oleh Jayakatwang dari Kediri — Singasari runtuh' },
        ],
        historicalContext: "Kertanagara is the most ambitious king of Singasari, projecting power throughout the archipelago and defying the Mongol Yuan dynasty.\n\nHis assassination in 1292 ends Singasari, but his son-in-law Raden Wijaya would go on to found Majapahit.",
        historicalContextId: 'Kertanagara adalah raja Singasari yang paling ambisius, memproyeksikan kekuasaan ke seluruh kepulauan dan menentang Dinasti Yuan Mongol.\n\nPembunuhannya pada tahun 1292 mengakhiri Singasari, tetapi menantunya Raden Wijaya kemudian akan mendirikan Majapahit.',
        economy: {
          primary: ['Agriculture', 'Maritime Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Maritim', 'Upeti'],
          exports: ['Rice', 'Spices', 'Gold'],
          exportsId: ['Beras', 'Rempah-rempah', 'Emas'],
          tradingPartners: ['China', 'Champa', 'Malay Kingdom'],
          tradingPartnersId: ['Tiongkok', 'Champa', 'Melayu'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi, Old Javanese',
          scriptId: 'Kawi, Jawa Kuno',
          architecture: 'Candi Singasari, Candi Jago, Candi Kidal',
          architectureId: 'Candi Singasari, Candi Jago, Candi Kidal',
          literature: 'Kidung Harsawijaya',
          literatureId: 'Kidung Harsawijaya',
        },
        territories: ['East Java', 'Parts of Sumatra (via Pamalayu)'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Yuan Mongols', 'Kediri (Jayakatwang)'],
        relations: {
          'Yuan China': 'Hostile — refused tribute',
          'Sumatra': 'Expanding Influence',
        },
        relationsId: {
          'Tiongkok Yuan': 'Bermusuhan — menolak memberi upeti',
          'Sumatra': 'Pengaruh yang Meluas',
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
        era: 'Founding Era', eraId: 'Era Pendirian',
        ruler: {
          portrait: '👑',
          title: 'Raja',
          name: 'Raden Wijaya',
          reignStart: 1293,
          reignEnd: 1309,
        },
        capital: 'Trowulan, Mojokerto',
        population: '~500,000 (est.)',
        populationId: '~500.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Empire',
        summary: 'Raden Wijaya founds Majapahit by exploiting the Mongol invasion to destroy Jayakatwang of Kediri, avenging his father-in-law Kertanagara',
        summaryId: 'Raden Wijaya mendirikan Majapahit dengan memanfaatkan invasi Mongol untuk menghancurkan Jayakatwang dari Kediri, membalas dendam atas mertuanya Kertanagara',
        keyEvents: [
          { year: 1293, event: 'Raden Wijaya founds Majapahit after defeating both Jayakatwang and the Yuan Mongol fleet', type: 'political', eventId: 'Raden Wijaya mendirikan Majapahit setelah mengalahkan Jayakatwang dan armada Mongol Yuan' },
        ],
        historicalContext: "Raden Wijaya brilliantly exploits the Yuan Mongol invasion fleet sent to punish Kertanagara.\n\nAllying with the Mongols to defeat Jayakatwang first, he then turns on the exhausted Mongol forces and drives them from Java, founding Majapahit in the process.",
        historicalContextId: 'Raden Wijaya dengan brilian memanfaatkan armada invasi Yuan Mongol yang dikirim untuk menghukum Kertanagara.\n\nBersekutu dengan Mongol untuk mengalahkan Jayakatwang terlebih dahulu, ia kemudian berbalik melawan pasukan Mongol yang kelelahan dan mengusir mereka dari Jawa, sekaligus mendirikan Majapahit.',
        economy: {
          primary: ['Agriculture', 'Maritime Trade', 'Tribute'],
          primaryId: ['Pertanian', 'Perdagangan Maritim', 'Upeti'],
          exports: ['Rice', 'Spices', 'Woven Cloth'],
          exportsId: ['Beras', 'Rempah-rempah', 'Kain Tenun'],
          tradingPartners: ['China', 'India', 'Champa'],
          tradingPartnersId: ['Tiongkok', 'India', 'Champa'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi, Old Javanese',
          scriptId: 'Kawi, Jawa Kuno',
          architecture: 'Candi Tikus, Candi Brahu',
          architectureId: 'Candi Tikus, Candi Brahu',
          literature: 'Pararaton (early text)',
          literatureId: 'Pararaton (awal penulisan)',
        },
        territories: ['East Java'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Yuan China', 'Regional Competitors'],
        relations: { 'Yuan China': 'Hostile then Normalized' },
        relationsId: { 'Tiongkok Yuan': 'Bermusuhan lalu Dinormalisasi' },
      },
      1350: {
        era: 'Golden Age', eraId: 'Masa Kejayaan',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Hayam Wuruk',
          reignStart: 1350,
          reignEnd: 1389,
        },
        primeMinister: {
          portrait: '⚔️',
          title: 'Mahapatih',
          name: 'Gajah Mada',
          reignStart: '1334',
          reignEnd: '1364',
          note: 'Pengucap Sumpah Palapa, arsitek ekspansi Majapahit',
        },
        capital: 'Majapahit (Trowulan)',
        population: '~1,000,000 (est.)',
        populationId: '~1.000.000 (perkiraan)',
        religion: 'Hindu-Buddhist',
        government: 'Hindu-Buddhist Empire',
        summary: "Under Hayam Wuruk and chief minister Gajah Mada, Majapahit reaches its greatest territorial extent, dominating the Nusantara archipelago",
        summaryId: 'Di bawah Hayam Wuruk dan mahapatih Gajah Mada, Majapahit mencapai wilayah terluas, mendominasi kepulauan Nusantara',
        keyEvents: [
          { year: 1336, event: "Gajah Mada swears the Palapa Oath — vowing to unify the archipelago", type: 'political', eventId: 'Gajah Mada bersumpah Sumpah Palapa — bersumpah untuk menyatukan kepulauan' }, // TODO: verify exact year
          { year: 1357, event: 'Battle of Bubat — Sunda princess incident strains Majapahit–Sunda relations', type: 'military', eventId: 'Perang Bubat — insiden putri Sunda merenggangkan hubungan Majapahit–Sunda' }, // TODO: verify exact year
          { year: 1365, event: 'Nagarakretagama composed — describes Majapahit\'s vast territories', type: 'cultural', eventId: 'Nagarakretagama digubah — menggambarkan wilayah Majapahit yang luas' },
        ],
        historicalContext: "The reign of Hayam Wuruk represents the apex of Majapahit power.\n\nGajah Mada's Palapa Oath and the Nagarakretagama poem document claims of dominion over much of the archipelago, making Majapahit one of the greatest empires in Southeast Asian history.",
        historicalContextId: 'Masa pemerintahan Hayam Wuruk merepresentasikan puncak kekuasaan Majapahit.\n\nSumpah Palapa Gajah Mada dan puisi Nagarakretagama mendokumentasikan klaim dominasi atas sebagian besar kepulauan, menjadikan Majapahit salah satu kerajaan terbesar dalam sejarah Asia Tenggara.',
        economy: {
          primary: ['Maritime Trade', 'Agriculture', 'Tribute'],
          primaryId: ['Perdagangan Maritim', 'Pertanian', 'Upeti'],
          exports: ['Rice', 'Spices', 'Gold', 'Sandalwood'],
          exportsId: ['Beras', 'Rempah-rempah', 'Emas', 'Kayu Cendana'],
          tradingPartners: ['China', 'India', 'Champa', 'Siam', 'Moluccas'],
          tradingPartnersId: ['Tiongkok', 'India', 'Champa', 'Siam', 'Maluku'],
        },
        culture: {
          language: 'Old Javanese',
          languageId: 'Jawa Kuno',
          script: 'Kawi, Old Javanese, Old Balinese',
          scriptId: 'Kawi, Jawa Kuno, Bali Kuno',
          architecture: 'Candi Penataran, Candi Tikus, Candi Brahu, Gapura Wringin Lawang',
          architectureId: 'Candi Penataran, Candi Tikus, Candi Brahu, Gapura Wringin Lawang',
          literature: 'Nagarakretagama (Mpu Prapanca, 1365), Sutasoma (Mpu Tantular)',
          literatureId: 'Nagarakretagama (Mpu Prapanca, 1365), Sutasoma (Mpu Tantular)',
        },
        territories: ['Java', 'Bali', 'Parts of Sumatra', 'Parts of Kalimantan'], // TODO: verify full extent — Nagarakretagama claims are debated
        vassals: ['Bali', 'Various Regional Polities'], // TODO: verify exact vassal list
        rivals: ['Sunda'],
        relations: {
          'China': 'Diplomatic Trade Partner',
          'Sunda': 'Rivalry',
          'India': 'Cultural Exchange',
        },
        relationsId: {
          'Tiongkok': 'Mitra Dagang Diplomatik',
          'Sunda': 'Persaingan',
          'India': 'Pertukaran Budaya',
        },
      },
      1400: {
        era: 'Decline', eraId: 'Masa Kemunduran',
        ruler: {
          portrait: '👑',
          title: 'Maharaja',
          name: 'Wikramawardhana',
          reignStart: '1389',
          reignEnd: '1429',
        },
        capital: 'Majapahit (Trowulan)',
        population: '~600,000 (est., reduced due to conflict)',
        populationId: '~600,000 (est., berkurang akibat konflik)',
        religion: 'Hindu-Buddhist (with growing Islamic influence)',
        government: 'Weakened Empire',
        summary: 'Majapahit faces internal dynastic conflict and the rising power of Islamic coastal states, beginning a long decline',
        summaryId: 'Majapahit menghadapi konflik dinasti internal dan kebangkitan negara-negara pesisir Islam, memulai kemunduran yang panjang',
        keyEvents: [
          { year: 1404, event: 'Paregreg civil war — internal dynastic conflict weakens Majapahit', type: 'military', eventId: 'Perang saudara Paregreg — konflik dinasti internal melemahkan Majapahit' }, // TODO: verify exact dates
          { year: 1478, event: 'Majapahit capital falls — effective end of the empire', type: 'political', eventId: 'Ibu kota Majapahit jatuh — berakhirnya kekaisaran secara efektif' }, // TODO: verify — some sources give 1527
        ],
        historicalContext: "After Hayam Wuruk's death the empire enters a long period of internal conflict and dynastic war.\n\nThe rise of Islamic coastal states, particularly Demak and Malacca, gradually erodes Majapahit's power until its final fall.",
        historicalContextId: 'Setelah kematian Hayam Wuruk, kerajaan memasuki periode panjang konflik internal dan perang dinasti.\n\nKebangkitan negara-negara pesisir Islam, khususnya Demak dan Malaka, secara bertahap menggerogoti kekuasaan Majapahit hingga kejatuhannya yang terakhir.',
        economy: {
          primary: ['Agriculture', 'Diminishing Trade'],
          primaryId: ['Pertanian', 'Perdagangan Menurun'],
          exports: ['Rice', 'Spices'],
          exportsId: ['Beras', 'Rempah-rempah'],
          tradingPartners: ['China', 'Moluccas', 'Bali'],
          tradingPartnersId: ['Tiongkok', 'Maluku', 'Bali'],
        },
        culture: {
          language: 'Old Javanese, with growing Malay influence',
          languageId: 'Jawa Kuno, dengan pengaruh Melayu yang berkembang',
          script: 'Kawi Script',
          scriptId: 'Aksara Kawi',
          architecture: 'Hindu-Buddhist Temples',
          architectureId: 'Kuil-kuil Hindu-Buddha',
          literature: 'Pararaton, Later Chronicles',
          literatureId: 'Pararaton, Kronik-kronik Kemudian',
        },
        territories: ['East Java (reduced)'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Demak (Islamic)', 'Islamic Coastal States'],
        relations: {
          'Demak': 'Hostile',
          'China': 'Tributary Relations',
        },
        relationsId: {
          'Demak': 'Bermusuhan',
          'Tiongkok': 'Hubungan Tributari',
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
        era: 'Classical Period', eraId: 'Periode Klasik',
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
        summaryId: 'Pajajaran berkembang sebagai kerajaan Hindu terakhir yang besar di Jawa Barat di bawah Sri Baduga Maharaja, mempertahankan kemerdekaan dari kesultanan Islam yang sedang bangkit',
        keyEvents: [
          { year: 1482, event: 'Pajajaran consolidated as the dominant West Java kingdom', type: 'political', eventId: 'Pajajaran dikonsolidasikan sebagai kerajaan dominan Jawa Barat' }, // TODO: verify exact date
          { year: 1521, event: 'Death of Sri Baduga Maharaja — kingdom begins to decline', type: 'political', eventId: 'Wafatnya Sri Baduga Maharaja — kerajaan mulai merosot' }, // TODO: verify
        ],
        historicalContext: 'Pajajaran represents the final phase of the long Sunda-Galuh tradition of Hindu kingdoms in West Java.\n\nUnder Sri Baduga Maharaja (also known as Prabu Siliwangi) the kingdom prospers and becomes deeply embedded in Sundanese cultural memory as a golden age.',
        historicalContextId: 'Pajajaran merepresentasikan fase terakhir dari tradisi panjang kerajaan-kerajaan Hindu Sunda-Galuh di Jawa Barat.\n\nDi bawah Sri Baduga Maharaja (juga dikenal sebagai Prabu Siliwangi) kerajaan ini makmur dan tertanam kuat dalam memori budaya Sunda sebagai masa keemasan.',
        economy: {
          primary: ['Agriculture', 'Coastal Trade', 'Forest Products'],
          primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Hasil Hutan'],
          exports: ['Pepper', 'Forest Products'],
          exportsId: ['Lada', 'Hasil Hutan'],
          tradingPartners: ['China', 'India', 'Portuguese', 'Majapahit'],
          tradingPartnersId: ['Tiongkok', 'India', 'Portugis', 'Majapahit'],
        },
        culture: {
          language: 'Old Sundanese',
          languageId: 'Sunda Kuno',
          script: '', // TODO: verify script type used
          architecture: 'Hindu Temples, Palace Complexes', // TODO: verify specific examples
          architectureId: 'Kuil-kuil Hindu, Kompleks Keraton',
          literature: 'Carita Parahyangan', // TODO: verify exact authorship and date
          literatureId: 'Carita Parahyangan',
        },
        territories: ['West Java', 'Pakuan Region'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Demak (Islamic)', 'Cirebon'],
        relations: { 'Demak': 'Hostile' },
        relationsId: { 'Demak': 'Bermusuhan' },
      },
      1520: {
        era: 'Decline', eraId: 'Masa Kemunduran',
        ruler: {
          portrait: '👑',
          title: 'Prabu',
          name: 'Surawisesa',
          reignStart: '1521',
          reignEnd: '1535',
        },
        capital: 'Pakuan Pajajaran',
        population: '', // TODO: verify with academic source
        religion: 'Hindu (Sunda Wiwitan)',
        government: 'Hindu Kingdom (declining)',
        summary: 'Pajajaran faces mounting pressure from Islamic sultanates, eventually falling to Banten and Cirebon in 1579',
        summaryId: 'Pajajaran menghadapi tekanan dari kesultanan Islam, akhirnya jatuh ke tangan Banten dan Cirebon pada 1579',
        keyEvents: [
          { year: 1579, event: 'Pajajaran falls to Islamic forces — end of the last Hindu kingdom of Java', type: 'political', eventId: 'Pajajaran jatuh ke pasukan Islam — berakhirnya kerajaan Hindu terakhir di Jawa' },
        ],
        historicalContext: 'The expanding Islamic sultanates of Banten and Cirebon systematically isolate and weaken Pajajaran.\n\nThe fall of the capital in 1579 marks the end of Hindu political power in Java, completing the Islamisation of the island.',
        historicalContextId: 'Kesultanan-kesultanan Islam yang berkembang di Banten dan Cirebon secara sistematis mengisolasi dan melemahkan Pajajaran.\n\nJatuhnya ibu kota pada tahun 1579 menandai berakhirnya kekuasaan politik Hindu di Jawa, menyelesaikan Islamisasi pulau tersebut.',
        economy: {
          primary: ['Agriculture', 'Reduced Trade'],
          primaryId: ['Pertanian', 'Perdagangan Terbatas'],
          exports: ['Pepper', 'Rice', 'Timber'],
          exportsId: ['Lada', 'Beras', 'Kayu'],
          tradingPartners: ['Portuguese', 'China'],
          tradingPartnersId: ['Portugis', 'Tiongkok'],
        },
        culture: {
          language: 'Old Sundanese',
          languageId: 'Sunda Kuno',
          script: 'Old Sundanese, Kawi',
          scriptId: 'Sunda Kuno, Kawi',
          architecture: 'Hindu Temples',
          architectureId: 'Kuil-kuil Hindu',
          literature: 'Carita Parahiyangan, Babad Tanah Sunda',
          literatureId: 'Carita Parahiyangan, Babad Tanah Sunda',
        },
        territories: ['Interior West Java (shrinking)'],
        vassals: [], // TODO: verify with academic source
        rivals: ['Banten', 'Cirebon'],
        relations: {
          'Banten': 'Hostile',
          'Cirebon': 'Hostile',
        },
        relationsId: {
          'Banten': 'Bermusuhan',
          'Cirebon': 'Bermusuhan',
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