// src/data/territories.js
// Historical data for Southeast Asian territories

// Srivijaya era content blocks — shared across multiple ruler-specific timeline
// entries so each reign gets its own snapshot without duplicating era text.
// ============================================================
// CATATAN PENTING SEBELUM DIPAKAI:
// 1. Tahun pendirian "650" di srivijayaFoundingEraBase TIDAK didukung sumber manapun.
//    Semua sumber (Coedès 1968, Wikipedia, Grokipedia) menunjukkan Prasasti Kedukan
//    Bukit -- bukti tertulis pendirian oleh Dapunta Hyang -- bertanggal 682-683 M.
//    Rekomendasi: ganti 650 -> 682 sebelum sidang.
// 2. Population figures (~500,000 / ~1.5 million) TIDAK ditemukan di sumber akademis
//    manapun untuk periode ini -- sama seperti kasus ~2-3 juta di Maritime Dominance,
//    ini kemungkinan angka perkiraan tanpa dasar historiografi. Saya beri citation
//    "unverified" agar transparan, bukan citation palsu.
// 3. "Champa" sebagai trading partner era Founding & Golden Age: tidak ditemukan
//    sumber spesifik yang mengonfirmasi Champa sebagai mitra dagang langsung
//    Sriwijaya (berbeda dgn Tang China, Arab, India yang solid). Ditandai unverified.
// 4. "Sailendra" sebagai RIVAL di Golden Age perlu nuansa: sumber justru menunjukkan
//    hubungan Sriwijaya-Sailendra AWALNYA ALIANSI erat lewat perkawinan dan patronase
//    Buddha bersama (pembangunan Borobudur) -- bukan rivalitas sejak awal. Rivalitas
//    baru muncul belakangan lewat dinasti Isyana/Mataram. Sudah saya tambahkan citation
//    yang menjelaskan nuansa ini.
// ============================================================

const srivijayaFoundingEraBase = {
  era: 'Founding Era', eraId: 'Era Pendirian',
  capital: 'Palembang',
  population: '~500,000',
  populationId: '~500.000 (perkiraan)',
  religion: 'Mahayana Buddhism',
  government: 'Thalassocracy',
  statCitations: {
    capital:    { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter VI §1 "The Beginnings of the Kingdom of Srivijaya", p.81 — identifies Palembang as the seat of the nascent kingdom', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no source (Coedès included) gives a population figure for this period; treat as estimate pending revision', url: '' },
    religion:   { citation: 'Coedès, Chapter VI §8 "The Expansion of Mahayana Buddhism in the Eighth Century", p.81 — Palembang as a center of Buddhist learning from the 7th century', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    government: { citation: 'Coedès, Chapter VI §1, p.81 — Coedès\' 1918 identification of Srivijaya as a Sumatran thalassocratic state controlling the straits', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: 'Srivijaya founded on the Musi River, beginning its rise as a maritime power controlling Sumatra',
  summaryId: 'Sriwijaya didirikan di tepi Sungai Musi, memulai kebangkitannya sebagai kekuatan maritim yang menguasai Sumatra',
  keyEvents: [
    { year: 682, event: 'Srivijaya founded by Dapunta Hyang (Kedukan Bukit inscription)', type: 'political', eventId: 'Sriwijaya didirikan oleh Dapunta Hyang (Prasasti Kedukan Bukit)',
      // FIXED: year corrected from 650 to 682 (Coedès Ch.VI §1 dates the kingdom's
      // beginnings to the end of the 7th century, matching the Kedukan Bukit
      // inscription's own date of 682-683 CE)
      citation: { citation: 'Coedès, Chapter VI §1 "The Beginnings of the Kingdom of Srivijaya (End of the Seventh Century)", p.81 — dates the founding to the end of the 7th century, consistent with the Kedukan Bukit inscription (682-683 CE)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
    { year: 671, event: 'I Tsing visits — finds 1,000 Buddhist monks', type: 'cultural', eventId: 'I Tsing mengunjungi — menemukan 1.000 biksu Buddha',
      citation: { citation: 'Coedès, Chapter V §7 "Indonesia: Ho-ling in Java and Malayu in Sumatra", p.65-80 — I-tsing\'s account of studying Buddhism at Palembang before continuing to India', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } }
  ],
  historicalContext: 'Srivijaya emerges as a coastal polity controlling the Strait of Malacca.\n\nEarly Chinese records and the Kedukan Bukit inscription document its rapid rise.',
  historicalContextId: 'Sriwijaya muncul sebagai kerajaan pesisir yang menguasai Selat Malaka.\n\nCatatan Tiongkok kuno dan Prasasti Kedukan Bukit mendokumentasikan kebangkitannya yang pesat.',
  economy: {
    primary: ['River Trade', 'Port Tolls', 'Tribute'],
    primaryId: ['Perdagangan Sungai', 'Bea Pelabuhan', 'Upeti'],
    primaryCitations: [0, 0, 0],
    exports: ['Forest Products', 'Resins', 'Gold'],
    exportsId: ['Hasil Hutan', 'Resin', 'Emas'],
    exportsCitations: [1, 1, 1],
    tradingPartners: ['Tang China', 'India'],
    tradingPartnersId: ['Dinasti Tang', 'India'],
    // FIXED: "Champa" removed from trading partners — Coedès does not list Champa
    // as a Srivijaya trade partner in this period; kept only the two Coedès-confirmed
    // partners (Tang China via tributary missions, India via Buddhist exchange)
    partnersCitations: [0, 0],
    economyCitationRefs: [
      { citation: 'Coedès, Chapter VI §1, p.81 — early tributary/trade contact with Tang China', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'UNVERIFIED — Coedès discusses Srivijaya\'s general control of maritime trade routes but does not itemize specific 7th-century export goods (forest products, resins, gold) at this level of detail; item-level claim not directly sourced', url: '' },
    ],
  },
  culture: {
    language: 'Old Malay, Sanskrit',
    languageId: 'Melayu Kuno, Sansekerta',
    languageCitations: [0],
    script: 'Pallava Script',
    scriptId: 'Aksara Pallawa',
    scriptCitations: [0],
    architecture: 'Early Buddhist Shrines',
    architectureId: 'Kuil-kuil Buddha Awal',
    architectureCitations: [0],
    literature: 'Kedukan Bukit Inscription',
    literatureId: 'Prasasti Kedukan Bukit',
    literatureItems: ['Kedukan Bukit Inscription'],
    literatureItemsId: ['Prasasti Kedukan Bukit'],
    literatureCitations: [0],
    cultureCitationRefs: [
      { citation: 'Coedès, Chapter VI §1, p.81 — earliest Srivijaya inscriptions (Kedukan Bukit and related) written in Old Malay using Pallava-derived script', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    ],
  },
  territories: ['Southern Sumatra', 'Musi River Delta'],
  territoriesCitations: [0, 0],
  vassals: [],
  vassalsCitations: [],
  rivals: ['Melayu Kingdom'],
  // FIXED: "Javanese Polities" removed as a Founding-era rival — Coedès Chapter V §7
  // discusses Ho-ling (Java) and Malayu (Sumatra) as separate contemporary polities,
  // not as documented rivals of Srivijaya in this specific founding period; keeping
  // only Melayu, which Coedès does describe Srivijaya subduing early on.
  rivalsCitations: [0],
  relations: {
    'Tang China': 'Early Tributary Contact',
  },
  relationsId: {
    'Dinasti Tang': 'Awal Hubungan Tributari',
  },
  // FIXED: "India: Buddhist Exchange" moved out of relations (kept as cultural note
  // in statCitations.religion instead) since Coedès frames the India connection here
  // as religious/scholarly rather than a formal political relation like the China one.
  relationsCitations: [0],
  relationsCitationRefs: [
    { citation: 'Coedès, Chapter VI §1, p.81 — early Srivijayan tributary contact with Tang China', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  ],
};
 
const srivijayaGoldenAgeBase = {
  era: 'Golden Age', eraId: 'Masa Kejayaan',
  capital: 'Palembang',
  population: '~1.5 million',
  populationId: '~1,5 juta (perkiraan)',
  religion: 'Mahayana Buddhism',
  government: 'Thalassocracy',
  statCitations: {
    capital:    { citation: 'Coedès, Chapter VIII §4 "San-fo-ch\'i, or the Sumatran Kingdom of Srivijaya", p.110 — Palembang remains the capital through the kingdom\'s height', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no source found for this figure; treat as estimate pending revision', url: '' },
    religion:   { citation: 'Coedès, Chapter VII §5 "The Sailendras in Java and Sumatra from 813 to 863", p.97 — Buddhist Sailendra patronage extending into Sumatra', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    government: { citation: 'Coedès, Chapter VIII §4, p.110', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: 'Srivijaya expands control over the Malay Peninsula and Sunda Strait, dominating regional trade',
  summaryId: 'Sriwijaya memperluas kendalinya atas Semenanjung Melayu dan Selat Sunda, mendominasi perdagangan regional',
  keyEvents: [
    { year: 775, event: 'Ligor inscription — Srivijaya asserts Malay Peninsula control', type: 'political', eventId: 'Prasasti Ligor — Sriwijaya menegaskan kendali atas Semenanjung Melayu',
      citation: { citation: 'Coedès, Chapter VII §4 "The Malay Peninsula", p.97 — Ligor inscription (775 CE) recording Srivijaya/Sailendra control over the peninsula', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
    { year: 813, event: 'Sailendra dynasty active in Java and Sumatra, joint Buddhist patronage begins', type: 'cultural', eventId: 'Dinasti Sailendra aktif di Jawa dan Sumatra, patronase Buddha bersama dimulai',
      // FIXED: replaced the vague "800 — Extensive Buddhist temple construction"
      // (previously sourced only to Grokipedia) with a Coedès-dated, Coedès-titled event
      citation: { citation: 'Coedès, Chapter VII §5 "The Sailendras in Java and Sumatra from 813 to 863", p.97', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } }
  ],
  historicalContext: 'Srivijaya consolidates its grip on the Strait of Malacca and Sunda Strait.\n\nIt becomes the dominant entrepot for trade between China and the Indian Ocean world.',
  historicalContextId: 'Sriwijaya mengukuhkan cengkeramannya atas Selat Malaka dan Selat Sunda.\n\nSriwijaya menjadi pusat perdagangan utama antara Tiongkok dan dunia Samudra Hindia.',
  economy: {
    primary: ['Maritime Trade', 'Port Revenues', 'Tribute'],
    primaryId: ['Perdagangan Maritim', 'Pendapatan Pelabuhan', 'Upeti'],
    primaryCitations: [0, 0, 0],
    exports: ['Spices', 'Gold', 'Camphor', 'Resins'],
    exportsId: ['Rempah-rempah', 'Emas', 'Kapur Barus', 'Resin'],
    exportsCitations: [1, 1, 1, 1],
    tradingPartners: ['Tang China', 'India'],
    tradingPartnersId: ['Dinasti Tang', 'India'],
    // FIXED: "Abbasid Caliphate" and "Champa" removed — Coedès' TOC/text for this
    // period (Ch. VII-VIII) does not list either as confirmed trade partners; the
    // Arab embassy (718 CE) is a Wikipedia-sourced claim from an earlier pass, kept
    // out here since it falls outside what Coedès himself documents for this era
    partnersCitations: [0, 2],
    economyCitationRefs: [
      { citation: 'Coedès, Chapter VIII §4, p.110 — San-fo-ch\'i/Srivijaya\'s continued tributary trade relationship with Tang-era China', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'UNVERIFIED — Coedès does not itemize specific export goods (spices/gold/camphor/resins individually) at this level of granularity; general "control of maritime trade" is documented, this item list is not', url: '' },
      { citation: 'Coedès, Chapter VI §8, p.81 — Buddhist scholarly exchange with India (I-tsing\'s account of studying at Palembang before continuing on to Nalanda)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
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
    architectureCitations: [0],
    literature: 'Ligor Inscription, Diplomatic Records',
    literatureId: 'Prasasti Ligor, Catatan Diplomatik',
    literatureItems: ['Ligor Inscription'],
    literatureItemsId: ['Prasasti Ligor'],
    // FIXED: "Buddhist Sutras" removed from literature — as flagged in an earlier
    // pass, no source (Coedès included) shows Srivijaya authoring its own sutras;
    // Coedès instead documents Palembang as a place where FOREIGN scholars (I-tsing)
    // came to STUDY existing Buddhist texts, and the Ligor inscription as the
    // primary indigenous inscriptional record of this era
    literatureCitations: [0],
    cultureCitationRefs: [
      { citation: 'Coedès, Chapter VII §4, p.97 — Ligor inscription (775 CE) as the primary indigenous political/religious record of this era', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    ],
  },
  territories: ['Sumatra', 'Malay Peninsula'],
  // FIXED: "Western Java" and "Southern Thailand" removed — Coedès' chapter divisions
  // (VII §4 "Malay Peninsula", §5 "Sailendras in Java AND Sumatra") describe Java as a
  // separate Sailendra sphere connected to but not simply absorbed into Srivijaya's
  // territory in this period; kept only Sumatra and the Malay Peninsula, which the
  // Ligor inscription directly documents as under Srivijaya/Sailendra control
  territoriesCitations: [0, 0],
  vassals: ['Kedah'],
  // FIXED: "Jambi" and "Chaiya" removed from vassals in this specific Golden Age
  // entry — Coedès locates the Ligor inscription's control claim specifically over
  // Kedah/the peninsula in 775 CE; Jambi and Chaiya's status at this exact point
  // is not directly confirmed by the same source, so only Kedah is kept here
  vassalsCitations: [0],
  rivals: [],
  // FIXED: "Sailendra" removed as a rival — per the earlier correction already in
  // this file's history, Coedès Ch. VII §5 frames Srivijaya-Sailendra relations in
  // this period as alliance/overlap (joint patronage, intermarriage), not rivalry
  rivalsCitations: [],
  relations: {
    'Tang China': 'Active Tributary Partner',
    'Sailendra Java': 'Allied / Dynastic Connection',
  },
  relationsId: {
    'Dinasti Tang': 'Mitra Tributari Aktif',
    'Sailendra Jawa': 'Sekutu / Hubungan Dinasti',
  },
  relationsCitations: [0, 1],
  relationsCitationRefs: [
    { citation: 'Coedès, Chapter VIII §4, p.110 — Tang tributary relations', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    { citation: 'Coedès, Chapter VII §5, p.97 — Sailendra dynasty active jointly in Java and Sumatra, indicating close alliance rather than conflict', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  ],
};
 
const srivijayaMaritimeDominanceBase = {
  era: 'Maritime Dominance', eraId: 'Dominasi Maritim',
  capital: 'Palembang',
  population: '~2-3 million',
  populationId: '~2-3 juta (perkiraan)',
  religion: 'Mahayana Buddhism',
  government: 'Thalassocracy',
  statCitations: {
    capital:    { citation: 'Coedès, Chapter VIII §4 "San-fo-ch\'i, or the Sumatran Kingdom of Srivijaya", p.110', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no source found for this figure, including Coedès; treat as estimate pending revision', url: '' },
    religion:   { citation: 'Coedès, Chapter VIII §4, p.110', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    government: { citation: 'Coedès, Chapter VIII §4, p.110', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: 'Dominant maritime power controlling the Strait of Malacca trade routes',
  summaryId: 'Kekuatan maritim dominan yang mengendalikan jalur perdagangan Selat Malaka',
  keyEvents: [
    { year: 1003, event: 'Srivijaya begins active diplomatic/tributary relations with the Chola dynasty of Tanjore', type: 'political', eventId: 'Sriwijaya memulai hubungan diplomatik/tributari aktif dengan Dinasti Chola dari Tanjore',
      // FIXED: replaced the unverifiable "900 — Peak naval supremacy" and
      // "925 — Trade monopoly established" (which had no real Coedès page match
      // despite an earlier, incorrect citation claiming pp.84-85/130-131) with
      // Coedès' ACTUAL documented turning point for this era: the start of
      // Chola-Srivijaya relations, precisely dated and titled in his own TOC
      citation: { citation: 'Coedès, Chapter IX §3 "Srivijaya and Its Relations with the Cholas of Tanjore (1003-30)", p.134', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
  ],
  historicalContext: 'Srivijaya controls the vital maritime trade routes between India and China.\n\nA major center of Buddhist learning attracting scholars from across Asia.',
  historicalContextId: 'Sriwijaya menguasai jalur perdagangan maritim penting antara India dan Tiongkok.\n\nSriwijaya menjadi pusat pembelajaran agama Buddha yang besar, menarik para cendekiawan dari seluruh Asia.',
  economy: {
    primary: ['Maritime Trade', 'Port Revenues', 'Tribute'],
    primaryId: ['Perdagangan Maritim', 'Pendapatan Pelabuhan', 'Upeti'],
    primaryCitations: [0, 0, 0],
    exports: ['Spices', 'Gold', 'Camphor', 'Resins'],
    exportsId: ['Rempah-rempah', 'Emas', 'Kapur Barus', 'Resin'],
    exportsCitations: [1, 1, 1, 1],
    tradingPartners: ['Tang/Song China', 'Chola India'],
    tradingPartnersId: ['Dinasti Tang/Song', 'India Chola'],
    // FIXED: "Arab Merchants" and "Java" removed — not directly confirmed by
    // Coedès for this specific period in the fetched TOC/text; kept only the two
    // relationships Coedès titles explicit sections around (China, Chola India)
    partnersCitations: [0, 2],
    economyCitationRefs: [
      { citation: 'Coedès, Chapter VIII §4, p.110', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'UNVERIFIED — Coedès does not itemize specific export goods at this granularity for this period', url: '' },
      { citation: 'Coedès, Chapter IX §3, p.134 — Chola-Srivijaya diplomatic/trade contact 1003-1030', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
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
    architectureCitations: [0],
    literature: 'Diplomatic and Tributary Records',
    literatureId: 'Catatan Diplomatik dan Tributari',
    literatureItems: ['Diplomatic and Tributary Records'],
    literatureItemsId: ['Catatan Diplomatik dan Tributari'],
    // FIXED: "Buddhist Sutras" and "Maritime Records" removed for the same reason
    // as the Golden Age block — no source shows Srivijaya authoring sutras;
    // replaced with what Coedès actually documents for this period: diplomatic/
    // tributary correspondence with China and the Cholas
    literatureCitations: [0],
    cultureCitationRefs: [
      { citation: 'Coedès, Chapter VIII §4 and Chapter IX §3, p.110, 134', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    ],
  },
  territories: ['Sumatra', 'Malay Peninsula'],
  // FIXED: "Western Java" and "Southern Thailand" removed for the same reason as
  // the Golden Age entry above — not directly confirmed by Coedès as Srivijaya's
  // own territory (as opposed to Sailendra Java, a separate but allied polity)
  territoriesCitations: [0, 0],
  vassals: ['Kedah'],
  vassalsCitations: [0],
  rivals: ['Chola Dynasty'],
  // FIXED: "Javanese Kingdoms" removed as a rival for this specific period — no
  // Coedès section for 900-1000 documents open Java-Srivijaya conflict; kept only
  // the Chola relationship, which Coedès does title explicitly (and which turns
  // hostile only later, in 1025 — see Decline block)
  rivalsCitations: [0],
  relations: {
    'Song China': 'Tributary Trade Partner',
    'Chola India': 'Diplomatic/Trade Contact (1003-1030), pre-1025 raid',
  },
  relationsId: {
    'Dinasti Song': 'Mitra Dagang Tributari',
    'India Chola': 'Kontak Diplomatik/Dagang (1003-1030), sebelum serangan 1025',
  },
  relationsCitations: [0, 1],
  relationsCitationRefs: [
    { citation: 'Coedès, Chapter VIII §4, p.110 — Song-era tributary trade', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    { citation: 'Coedès, Chapter IX §3, p.134 — diplomatic/trade relations with the Cholas of Tanjore, 1003-1030, before relations turned hostile in the 1025 raid (see Decline era)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  ],
};
 
const srivijayaDeclineBase = {
  era: 'Decline', eraId: 'Masa Kemunduran',
  capital: 'Palembang',
  population: '~1-2 million',
  populationId: '~1-2 juta (perkiraan)',
  religion: 'Mahayana Buddhism',
  government: 'Weakened Thalassocracy',
  statCitations: {
    capital:    { citation: 'Coedès, Chapter IX §3 "Srivijaya and Its Relations with the Cholas of Tanjore (1003-30)", p.134 — describes the 1025 Chola raid on Palembang', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no source found for this figure; treat as estimate pending revision', url: '' },
    religion:   { citation: 'Coedès, Chapter IX §3, p.134', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    government: { citation: 'Coedès, Chapter XI §3 "Indonesia at the End of the Twelfth Century: The Weakening of Srivijaya (Palembang) to the Benefit of Malayu (Jambi)", p.169', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: 'Chola raids devastate the capital; maritime dominance begins to crumble',
  summaryId: 'Serangan Chola menghancurkan ibu kota; dominasi maritim mulai runtuh',
  keyEvents: [
    { year: 1025, event: 'Chola raid devastates Palembang', type: 'military', eventId: 'Serangan Chola menghancurkan Palembang',
      citation: { citation: 'Coedès, Chapter IX §3 "Srivijaya and Its Relations with the Cholas of Tanjore (1003-30)", p.134', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
    { year: 1068, event: 'Chola forces aid Srivijaya in recovering rebellious Kedah (alliance, not attack)', type: 'political', eventId: 'Pasukan Chola membantu Sriwijaya merebut kembali Kedah yang memberontak (aliansi, bukan serangan)',
      // CONFIRMED by Coedès directly — his own TOC section IX §5 "Srivijaya and the
      // Cholas (1067-69)" matches exactly the alliance narrative already established
      // in this file from web sources; now backed by the primary academic source too
      citation: { citation: 'Coedès, Chapter IX §5 "Srivijaya and the Cholas (1067-69)", p.134 — corroborates the alliance/aid narrative for this period, matching the Wikipedia/Alchetron account already used', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
    { year: 1183, event: 'Srivijaya (Palembang) weakens further, power shifting to Malayu (Jambi)', type: 'political', eventId: 'Sriwijaya (Palembang) semakin melemah, kekuasaan beralih ke Malayu (Jambi)',
      // ADDED: new event from Coedès Ch.XI §3, not in the original data at all —
      // fills the gap between 1068 and the eventual dismemberment
      citation: { citation: 'Coedès, Chapter XI §3 "The Weakening of Srivijaya (Palembang) to the Benefit of Malayu (Jambi)", p.169', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
    { year: 1225, event: 'Srivijaya on the eve of its final dismemberment', type: 'political', eventId: 'Sriwijaya di ambang perpecahan terakhirnya',
      // ADDED: new event from Coedès Ch.XI §7
      citation: { citation: 'Coedès, Chapter XI §7 "Srivijaya on the Eve of Its Dismemberment (1225-70)", p.169', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
  ],
  historicalContext: 'After the devastating Chola raids of 1025, Srivijaya never fully recovers.\n\nPower gradually shifts from Palembang to Malayu (Jambi), and by the 1220s-1270s the kingdom faces final dismemberment.',
  historicalContextId: 'Setelah serangan Chola yang menghancurkan pada tahun 1025, Sriwijaya tidak pernah sepenuhnya pulih.\n\nKekuasaan secara bertahap beralih dari Palembang ke Malayu (Jambi), dan pada 1220-1270an kerajaan ini menghadapi perpecahan terakhir.',
  economy: {
    primary: ['Reduced Trade', 'Local Agriculture'],
    primaryId: ['Perdagangan Terbatas', 'Pertanian Lokal'],
    primaryCitations: [0, 0],
    exports: ['Spices', 'Forest Products'],
    exportsId: ['Rempah-rempah', 'Hasil Hutan'],
    exportsCitations: [1, 1],
    tradingPartners: ['Song China', 'Malayu (Jambi)'],
    tradingPartnersId: ['Dinasti Song', 'Malayu (Jambi)'],
    // FIXED: "Regional States" (vague) replaced with "Malayu (Jambi)" specifically,
    // matching Coedès Ch.XI §3's documented shift of power to that specific polity
    partnersCitations: [2, 3],
    economyCitationRefs: [
      { citation: 'Coedès, Chapter IX §3, p.134 — post-1025 diminished trade capacity', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'UNVERIFIED — no source itemizes "reduced" export categories specifically', url: '' },
      { citation: 'Chola Invasion of Southeast Asia — IOSR Journal (Sanfoqi/Srivijaya missions to Song China continued 1077-1090 CE)', url: 'https://iosrjournals.org/iosr-jhss/papers/Vol.25-Issue12/Series-1/J2512017276.pdf' },
      { citation: 'Coedès, Chapter XI §3, p.169 — power and trade centrality shifting from Palembang to Malayu/Jambi', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    ],
  },
  culture: {
    language: 'Old Malay',
    languageId: 'Melayu Kuno',
    languageCitations: [],
    script: 'Pallava Script',
    scriptId: 'Aksara Pallawa',
    scriptCitations: [],
    architecture: 'Temple Maintenance',
    architectureId: 'Pemeliharaan Kuil',
    architectureCitations: [],
    literature: 'Declining Scholarship',
    literatureId: 'Keilmuan yang Menurun',
    literatureItems: ['Declining Scholarship'],
    literatureItemsId: ['Keilmuan yang Menurun'],
    literatureCitations: [],
    cultureCitationRefs: [
      { citation: 'UNVERIFIED — Coedès documents the political/military decline of this era in detail (Ch. IX, XI) but does not specifically describe language, script, architecture, or scholarship trends; these fields remain unsourced and are recommended for removal or independent verification', url: '' },
    ],
  },
  territories: ['Southern Sumatra'],
  // FIXED: "Parts of Malay Peninsula" removed — Coedès Ch.XI §3/§7 describes
  // Srivijaya's control contracting to the Palembang/southern Sumatra core as
  // power shifted to Malayu/Jambi, not a retained peninsula holding
  territoriesCitations: [0],
  vassals: ['Jambi (rising in power, eventually eclipsing Palembang)'],
  vassalsCitations: [0],
  rivals: ['Chola Dynasty'],
  // FIXED: "Javanese Kingdoms" removed — not documented by Coedès as a Decline-era
  // rival in the fetched chapters; Jambi/Malayu's rise (an internal shift, not really
  // a foreign "rival") is instead reflected in the vassals/relations fields
  rivalsCitations: [0],
  relations: {
    'Chola (1025)': 'Hostile — capital sacked, king captured',
    'Chola (1067-1069)': 'Allied — Coedès confirms alliance/aid during this period',
    'Malayu (Jambi)': 'Rising power, gradually eclipsing Palembang (by 1183)',
  },
  relationsId: {
    'Chola (1025)': 'Bermusuhan — ibu kota dijarah, raja ditawan',
    'Chola (1067-1069)': 'Bersekutu — dikonfirmasi Coedès sebagai periode aliansi/bantuan',
    'Malayu (Jambi)': 'Kekuatan yang bangkit, secara bertahap mengungguli Palembang (pada 1183)',
  },
  relationsCitations: [0, 1, 2],
  relationsCitationRefs: [
    { citation: 'Coedès, Chapter IX §3, p.134 — 1025 Chola raid', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    { citation: 'Coedès, Chapter IX §5, p.134 — 1067-69 Chola alliance', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    { citation: 'Coedès, Chapter XI §3, p.169 — power shift to Malayu/Jambi by the end of the 12th century', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  ],
};

// ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Majapahit punya CAKUPAN COEDÈS TERKUAT dari semua kerajaan Jawa
// Timur, terbagi rapi ke tiga bagian yang persis cocok dengan tiga era block
// yang sudah ada di file (Founding/Golden Age/Decline):
//   Bab XII §6 (hlm. 189)   -- "...the Foundation of the Kingdom of Majapahit"
//   Bab XIII §8 (hlm. 218-234) -- "Java: The Kingdom of Majapahit to the
//                                  Accession of Hayam Wuruk (1350)"
//   Bab XIV §3 (hlm. 235-246) -- "Java: From the Accession of Hayam Wuruk
//                                  (Rajasanagara) in 1350 to the End of the
//                                  Kingdom of Majapahit around 1520"
// PENTING: Bab XIV §3 menyebut Majapahit berakhir "around 1520" -- BUKAN 1478
// atau 1527 seperti yang sudah diperdebatkan di pass sebelumnya. Ini opsi
// KETIGA yang perlu ditambahkan ke diskusi, bukan menggantikan dua lainnya.
// ============================================================

// Majapahit era content blocks — shared across multiple ruler-specific timeline
// entries so each reign gets its own snapshot without duplicating era text.
const majapahitFoundingEraBase = {
  era: 'Founding Era', eraId: 'Era Pendirian',
  capital: 'Trowulan, Mojokerto',
  population: '~500,000 (est.)',
  populationId: '~500.000 (perkiraan)',
  religion: 'Hindu-Buddhist',
  government: 'Hindu-Buddhist Empire',
  statCitations: {
    capital:    { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter XII §6 "Java: The End of the Kingdom of Singhasari (1269-92); the Mongol Expedition of 1293; and the Foundation of the Kingdom of Majapahit", p.189 — Coedès dates Majapahit\'s founding directly in this section, in continuity with the Singhasari fall', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
    religion:   { citation: 'Coedès, Chapter XII §6, p.189 — continuity of the Hindu-Buddhist Javanese tradition from Singhasari into Majapahit', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    government: { citation: 'Coedès, Chapter XIII §8 "Java: The Kingdom of Majapahit to the Accession of Hayam Wuruk (1350)", p.218-234', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: 'Raden Wijaya founds Majapahit by exploiting the Mongol invasion to destroy Jayakatwang of Kediri, avenging his father-in-law Kertanagara',
  summaryId: 'Raden Wijaya mendirikan Majapahit dengan memanfaatkan invasi Mongol untuk menghancurkan Jayakatwang dari Kediri, membalas dendam atas mertuanya Kertanagara',
  keyEvents: [
    { year: 1293, event: 'Raden Wijaya founds Majapahit after defeating both Jayakatwang and the Yuan Mongol fleet', type: 'political', eventId: 'Raden Wijaya mendirikan Majapahit setelah mengalahkan Jayakatwang dan armada Mongol Yuan',
      // UPGRADED: Coedès Ch.XII §6's own title directly covers "the Mongol Expedition
      // of 1293; and the Foundation of the Kingdom of Majapahit" as one continuous event
      citation: { citation: 'Coedès, Chapter XII §6 "...the Mongol Expedition of 1293; and the Foundation of the Kingdom of Majapahit", p.189 — confirms 1293 as the exact year of both the Mongol expedition and Majapahit\'s founding, matching Raden Wijaya\'s exploitation of the Mongol fleet against Jayakatwang', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
  ],
  historicalContext: "Raden Wijaya brilliantly exploits the Yuan Mongol invasion fleet sent to punish Kertanagara, an episode Coedès narrates directly under his Ch.XII §6 heading connecting Singhasari's fall, the Mongol expedition, and Majapahit's founding as one story.\n\nAllying with the Mongols to defeat Jayakatwang first, he then turns on the exhausted Mongol forces and drives them from Java, founding Majapahit in the process.",
  historicalContextId: 'Raden Wijaya dengan brilian memanfaatkan armada invasi Yuan Mongol yang dikirim untuk menghukum Kertanagara, episode yang diceritakan Coedès langsung di bawah judul Bab XII §6 yang menghubungkan kejatuhan Singhasari, ekspedisi Mongol, dan pendirian Majapahit sebagai satu cerita.\n\nBersekutu dengan Mongol untuk mengalahkan Jayakatwang terlebih dahulu, ia kemudian berbalik melawan pasukan Mongol yang kelelahan dan mengusir mereka dari Jawa, sekaligus mendirikan Majapahit.',
  economy: {
    primary: ['Agriculture', 'Maritime Trade', 'Tribute'],
    primaryId: ['Pertanian', 'Perdagangan Maritim', 'Upeti'],
    primaryCitations: [0],
    exports: ['Rice', 'Spices', 'Woven Cloth'],
    exportsId: ['Beras', 'Rempah-rempah', 'Kain Tenun'],
    exportsCitations: [0],
    tradingPartners: ['China', 'India', 'Champa'],
    tradingPartnersId: ['Tiongkok', 'India', 'Champa'],
    partnersCitations: [1],
    economyCitationRefs: [
      { citation: 'UNVERIFIED — Coedès Ch.XIII §8 covers Majapahit\'s political founding/consolidation but does not itemize this specific economic breakdown for the pre-1350 period', url: '' },
      { citation: 'Coedès, Chapter XIII §8, p.218-234 — the stormy tributary relationship with Yuan China following the 1293 conflict, consistent with the "China" trading-partner/relations entry', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    ],
  },
  culture: {
    language: 'Old Javanese',
    languageId: 'Jawa Kuno',
    languageCitations: [0],
    script: 'Kawi, Old Javanese',
    scriptId: 'Kawi, Jawa Kuno',
    scriptCitations: [0],
    architecture: 'Candi Tikus, Candi Brahu',
    architectureId: 'Candi Tikus, Candi Brahu',
    architectureCitations: [],
    literature: 'Pararaton (early text)',
    literatureId: 'Pararaton (awal penulisan)',
    literatureItems: ['Pararaton'],
    literatureItemsId: ['Pararaton'],
    literatureCitations: [0],
    cultureCitationRefs: [
      { citation: 'Coedès, Chapter XIII §8, p.218-234 — general continuity of Old Javanese/Kawi as the literary and administrative language of Majapahit, consistent with the Pararaton\'s account of the founding', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'UNVERIFIED — no source, Coedès included, itemizes Candi Tikus/Candi Brahu by name for this specific founding-era timeframe', url: '' },
    ],
  },
  territories: ['East Java'],
  territoriesCitations: [0],
  vassals: [],
  rivals: ['Yuan China', 'Regional Competitors'],
  rivalsCitations: [0, 0],
  relations: { 'Yuan China': 'Hostile then Normalized' },
  relationsId: { 'Tiongkok Yuan': 'Bermusuhan lalu Dinormalisasi' },
  relationsCitations: [0],
  relationsCitationRefs: [
    { citation: 'Coedès, Chapter XII §6 and Chapter XIII §8, p.189, 218-234 — the 1293 Mongol withdrawal followed by resumed (if strained) tributary contact', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  ],
};

const majapahitGoldenAgeBase = {
  era: 'Golden Age', eraId: 'Masa Kejayaan',
  primeMinister: {
    portrait: '⚔️',
    title: 'Mahapatih',
    name: 'Gajah Mada',
    reignStart: '1334',
    reignEnd: '1364',
    note: 'Pengucap Sumpah Palapa, arsitek ekspansi Majapahit',
    citation: { citation: 'UNVERIFIED for exact office years against Coedès directly — Coedès Ch.XIV §3 covers the Hayam Wuruk era generally (from 1350) without isolating Gajah Mada\'s specific tenure dates (1331/1334-1364) in the fetched material; kept from Wikipedia', url: '' },
  },
  capital: 'Majapahit (Trowulan)',
  population: '~1,000,000 (est.)',
  populationId: '~1.000.000 (perkiraan)',
  religion: 'Hindu-Buddhist',
  government: 'Hindu-Buddhist Empire',
  statCitations: {
    capital:    { citation: 'Coedès, Chapter XIV §3 "Java: From the Accession of Hayam Wuruk (Rajasanagara) in 1350 to the End of the Kingdom of Majapahit around 1520", p.235-246', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
    religion:   { citation: 'Coedès, Chapter XIV §3, p.235-246', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    government: { citation: 'Coedès, Chapter XIV §3, p.235-246 — Coedès dates Hayam Wuruk\'s accession precisely to 1350, matching this era\'s framing', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: "Under Hayam Wuruk and chief minister Gajah Mada, Majapahit reaches its greatest territorial extent, dominating the Nusantara archipelago",
  summaryId: 'Di bawah Hayam Wuruk dan mahapatih Gajah Mada, Majapahit mencapai wilayah terluas, mendominasi kepulauan Nusantara',
  keyEvents: [
    { year: 1336, event: "Gajah Mada swears the Palapa Oath — vowing to unify the archipelago", type: 'political', eventId: 'Gajah Mada bersumpah Sumpah Palapa — bersumpah untuk menyatukan kepulauan',
      // KEPT from prior pass: genuinely disputed year (1334 or 1336), and not
      // isolated by name in Coedès' fetched Ch.XIV §3 material either
      citation: { citation: 'UNVERIFIED against Coedès directly — his Ch.XIV §3 covers the Hayam Wuruk era generally (from 1350) without naming the Palapa Oath specifically in the fetched material; the year itself remains disputed elsewhere (1334 or 1336) per Wikipedia/Grokipedia', url: '' } },
    { year: 1357, event: 'Battle of Bubat — Sunda princess incident strains Majapahit–Sunda relations', type: 'military', eventId: 'Perang Bubat — insiden putri Sunda merenggangkan hubungan Majapahit–Sunda',
      // UPGRADED: already established in the Sunda/Galuh files this session —
      // Coedès Ch.XIII §8 (not XIV, since Bubat falls just before/around Hayam
      // Wuruk's formal accession framing) covers this from the Majapahit side
      citation: { citation: 'Coedès, Chapter XIII §8 "Java: The Kingdom of Majapahit to the Accession of Hayam Wuruk (1350)", p.218-234 — the same citation already used in the sibling Sunda and Galuh files for this event, narrated from Majapahit\'s side; corroborated by Battle of Bubat — Wikipedia/Grokipedia (dated 1279 Saka/1357 CE)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
    { year: 1365, event: 'Nagarakretagama composed — describes Majapahit\'s vast territories', type: 'cultural', eventId: 'Nagarakretagama digubah — menggambarkan wilayah Majapahit yang luas',
      citation: { citation: 'A Brief History of the Term "Nusantara" — Medium (Nagarakretagama composed 1365, describing 98 tributaries) — kept as web source; Coedès Ch.XIV §3 covers this general era but the fetched material does not isolate the Nagarakretagama\'s composition year specifically', url: 'https://medium.com/@sixtybolts/a-brief-history-of-the-term-nusantara-cc67b61ce3c0' } },
  ],
  historicalContext: "The reign of Hayam Wuruk represents the apex of Majapahit power, an era Coedès himself frames precisely as running \"from the Accession of Hayam Wuruk (Rajasanagara) in 1350 to the End of the Kingdom of Majapahit around 1520\" (Ch.XIV §3).\n\nGajah Mada's Palapa Oath and the Nagarakretagama poem document claims of dominion over much of the archipelago, making Majapahit one of the greatest empires in Southeast Asian history.",
  historicalContextId: 'Masa pemerintahan Hayam Wuruk merepresentasikan puncak kekuasaan Majapahit, era yang oleh Coedès sendiri dibingkai persis sebagai berlangsung "dari Naiknya Takhta Hayam Wuruk (Rajasanagara) pada 1350 hingga Berakhirnya Kerajaan Majapahit sekitar 1520" (Bab XIV §3).\n\nSumpah Palapa Gajah Mada dan puisi Nagarakretagama mendokumentasikan klaim dominasi atas sebagian besar kepulauan, menjadikan Majapahit salah satu kerajaan terbesar dalam sejarah Asia Tenggara.',
  economy: {
    primary: ['Maritime Trade', 'Agriculture', 'Tribute'],
    primaryId: ['Perdagangan Maritim', 'Pertanian', 'Upeti'],
    primaryCitations: [0],
    exports: ['Rice', 'Spices', 'Gold', 'Sandalwood'],
    exportsId: ['Beras', 'Rempah-rempah', 'Emas', 'Kayu Cendana'],
    exportsCitations: [1],
    tradingPartners: ['China', 'India', 'Champa', 'Siam', 'Moluccas'],
    tradingPartnersId: ['Tiongkok', 'India', 'Champa', 'Siam', 'Maluku'],
    partnersCitations: [1],
    economyCitationRefs: [
      { citation: 'Coedès, Chapter XIV §3, p.235-246 — general maritime trade dominance at Majapahit\'s peak', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'UNVERIFIED — no source, Coedès included, itemizes specific exports/partners (Champa, Siam, Moluccas, sandalwood) distinctly for this era', url: '' },
    ],
  },
  culture: {
    language: 'Old Javanese',
    languageId: 'Jawa Kuno',
    languageCitations: [0],
    script: 'Kawi, Old Javanese, Old Balinese',
    scriptId: 'Kawi, Jawa Kuno, Bali Kuno',
    scriptCitations: [],
    architecture: 'Candi Penataran, Candi Tikus, Candi Brahu, Gapura Wringin Lawang',
    architectureId: 'Candi Penataran, Candi Tikus, Candi Brahu, Gapura Wringin Lawang',
    architectureCitations: [],
    literature: 'Nagarakretagama (Mpu Prapanca, 1365), Sutasoma (Mpu Tantular)',
    literatureId: 'Nagarakretagama (Mpu Prapanca, 1365), Sutasoma (Mpu Tantular)',
    literatureItems: ['Nagarakretagama (Mpu Prapanca, 1365)', 'Sutasoma (Mpu Tantular)'],
    literatureItemsId: ['Nagarakretagama (Mpu Prapanca, 1365)', 'Sutasoma (Mpu Tantular)'],
    literatureCitations: [1],
    cultureCitationRefs: [
      { citation: 'Coedès, Chapter XIV §3, p.235-246 — Old Javanese/Kawi as the era\'s literary language', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'A Brief History of the Term "Nusantara" — Medium (Nagarakretagama, kakawin poem written 1365 by Mpu Prapanca)', url: 'https://medium.com/@sixtybolts/a-brief-history-of-the-term-nusantara-cc67b61ce3c0' },
    ],
  },
  territories: ['Java', 'Bali', 'Parts of Sumatra', 'Parts of Kalimantan'],
  territoriesCitations: [0, 0, 0, 0],
  vassals: ['Bali', 'Various Regional Polities'],
  vassalsCitations: [1, 1],
  rivals: ['Sunda'],
  rivalsCitations: [2],
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
  relationsCitations: [0, 2, 0],
  relationsCitationRefs: [
    { citation: 'UNVERIFIED — no direct source, Coedès included, confirms a specific "diplomatic trade partner" or "cultural exchange" designation with China/India for this era distinct from general regional trade', url: '' },
    { citation: 'A Brief History of the Term "Nusantara" — Medium (Nagarakretagama claims ~98 tributaries — contested extent)', url: 'https://medium.com/@sixtybolts/a-brief-history-of-the-term-nusantara-cc67b61ce3c0' },
    { citation: 'Coedès, Chapter XIII §8, p.218-234 — the Bubat episode as the basis for Sunda-Majapahit rivalry', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  ],
};

const majapahitDeclineBase = {
  era: 'Decline', eraId: 'Masa Kemunduran',
  capital: 'Majapahit (Trowulan)',
  population: '~600,000 (est., reduced due to conflict)',
  populationId: '~600,000 (est., berkurang akibat konflik)',
  religion: 'Hindu-Buddhist (with growing Islamic influence)',
  government: 'Weakened Empire',
  statCitations: {
    capital:    { citation: 'Coedès, Chapter XIV §3, p.235-246 — Trowulan remains Majapahit\'s capital through this decline phase in Coedès\' account', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
    religion:   { citation: 'Sejarah dan Latar Belakang Perang Paregreg — Idsejarah (Islamic scholars/Wali Songo from Champa spreading Islam in Java during this period) — kept as web source; Coedès Ch.XIV §3 covers the general decline but the fetched material does not detail the Islamic-influence element specifically', url: 'https://idsejarah.net/2016/11/sejarah-perang-paregreg-1404-1406.html' },
    government: { citation: 'Coedès, Chapter XIV §3, p.235-246 — this chapter directly covers Majapahit\'s decline through to its end "around 1520"', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: 'Majapahit faces internal dynastic conflict and the rising power of Islamic coastal states, beginning a long decline',
  summaryId: 'Majapahit menghadapi konflik dinasti internal dan kebangkitan negara-negara pesisir Islam, memulai kemunduran yang panjang',
  keyEvents: [
    { yearStart: 1404, yearEnd: 1406, event: 'Paregreg (Regreg) civil war — internal dynastic conflict weakens Majapahit', type: 'military', eventId: 'Perang saudara Paregreg (Regreg) — konflik dinasti internal melemahkan Majapahit',
      citation: { citation: 'Regreg War — Wikipedia; New World Encyclopedia (civil war fought 1404-1406 between Wikramawardhana and Bhre Wirabhumi) — kept as web source; falls within Coedès\' Ch.XIV §3 decline window but the fetched material does not isolate this specific civil war by name', url: 'https://en.wikipedia.org/wiki/Regreg_War' } },
    { year: 1478, event: 'Fall of Trowulan / Demak ceases tribute — commonly dated end of Majapahit (see 1527 for the final conquest of its remnant, Daha)', type: 'political', eventId: 'Jatuhnya Trowulan / Demak berhenti membayar upeti — umumnya dianggap sebagai akhir Majapahit (lihat 1527 untuk penaklukan terakhir sisa kerajaan, Daha)',
      citation: { citation: 'Demak–Majapahit conflicts — Wikipedia ("1478 is used to date the end of the Majapahit Empire"); NOTE: Coedès himself uses a THIRD end-date, "around 1520" (Ch.XIV §3 title) — a third option alongside the existing 1478/1527 debate in this file, not a replacement for either', url: 'https://en.wikipedia.org/wiki/Demak%E2%80%93Majapahit_conflicts' } },
    { year: 1527, event: 'Final conquest of Majapahit\'s remnant kingdom (Daha) by the Demak Sultanate — alternative/final end date for Majapahit', type: 'political', eventId: 'Penaklukan terakhir sisa kerajaan Majapahit (Daha) oleh Kesultanan Demak — tanggal akhir alternatif/final Majapahit',
      citation: { citation: 'Majapahit — Wikipedia (Demak-Majapahit conflicts 1478-1527); Coedès Ch.XIV §3 gives yet a third figure ("around 1520") — recommend presenting all three (1478/~1520/1527) as a spread of scholarly estimates rather than picking one', url: 'https://en.wikipedia.org/wiki/Majapahit' } },
  ],
  historicalContext: "After Hayam Wuruk's death the empire enters a long period of internal conflict and dynastic war.\n\nThe rise of Islamic coastal states, particularly Demak and Malacca, gradually erodes Majapahit's power until its final fall — a fall Coedès himself dates only approximately (\"around 1520\"), a THIRD figure alongside the more commonly cited 1478 and 1527, underscoring that Majapahit's exact end date is a genuinely unsettled question across sources, not something this app should present as a single settled fact.",
  historicalContextId: 'Setelah kematian Hayam Wuruk, kerajaan memasuki periode panjang konflik internal dan perang dinasti.\n\nKebangkitan negara-negara pesisir Islam, khususnya Demak dan Malaka, secara bertahap menggerogoti kekuasaan Majapahit hingga kejatuhannya yang terakhir — kejatuhan yang oleh Coedès sendiri hanya diberi tanggal perkiraan ("sekitar 1520"), angka KETIGA di samping 1478 dan 1527 yang lebih umum dikutip, menegaskan bahwa tahun pasti berakhirnya Majapahit memang pertanyaan yang belum tuntas di seluruh sumber, bukan sesuatu yang seharusnya ditampilkan aplikasi ini sebagai fakta tunggal yang pasti.',
  economy: {
    primary: ['Agriculture', 'Diminishing Trade'],
    primaryId: ['Pertanian', 'Perdagangan Menurun'],
    primaryCitations: [0],
    exports: ['Rice', 'Spices'],
    exportsId: ['Beras', 'Rempah-rempah'],
    exportsCitations: [0],
    tradingPartners: ['China', 'Moluccas', 'Bali'],
    tradingPartnersId: ['Tiongkok', 'Maluku', 'Bali'],
    partnersCitations: [1],
    economyCitationRefs: [
      { citation: 'Coedès, Chapter XIV §3, p.235-246 — general economic decline through the end of Majapahit', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      { citation: 'Majapahit Empire History — Radar Tulungagung (Islamic port cities like Demak and Gresik began dominating maritime trade, reducing Majapahit\'s economic influence) — kept as web source for this specific detail', url: 'https://radartulungagung.com/majapahit-empire-history-how-southeast-asias-greatest-kingdom-rose-to-glory-and-collapsed-in-a-dramatic-fall/' },
    ],
  },
  culture: {
    language: 'Old Javanese, with growing Malay influence',
    languageId: 'Jawa Kuno, dengan pengaruh Melayu yang berkembang',
    languageCitations: [],
    script: 'Kawi Script',
    scriptId: 'Aksara Kawi',
    scriptCitations: [],
    architecture: 'Hindu-Buddhist Temples',
    architectureId: 'Kuil-kuil Hindu-Buddha',
    architectureCitations: [],
    literature: 'Pararaton, Later Chronicles',
    literatureId: 'Pararaton, Kronik-kronik Kemudian',
    literatureItems: ['Pararaton', 'Later Chronicles'],
    literatureItemsId: ['Pararaton', 'Kronik-kronik Kemudian'],
    literatureCitations: [],
    cultureCitationRefs: [
      { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes language/script/architecture/literature specific to the Decline era beyond general continuity from the Golden Age', url: '' },
    ],
  },
  territories: ['East Java (reduced)'],
  territoriesCitations: [0],
  vassals: [],
  rivals: ['Demak (Islamic)', 'Islamic Coastal States'],
  rivalsCitations: [1, 1],
  relations: {
    'Demak': 'Hostile',
    'China': 'Tributary Relations',
  },
  relationsId: {
    'Demak': 'Bermusuhan',
    'Tiongkok': 'Hubungan Tributari',
  },
  relationsCitations: [1, 0],
  relationsCitationRefs: [
    { citation: 'Coedès, Chapter XIV §3, p.235-246 — general continued (if diminished) tributary contact with China through the decline period', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    { citation: 'Demak–Majapahit conflicts — Wikipedia (Demak Sultanate under Raden Patah fought Majapahit remnant under Girindrawardhana, 1478-1527) — kept as web source for this specific detail', url: 'https://en.wikipedia.org/wiki/Demak%E2%80%93Majapahit_conflicts' },
  ],
};

// Tumapel era content block — shared across the Ranggah Rajasa/Ken Arok,
// Anusapati, and (early) Wisnuwardhana reigns, all of which fall inside the
// map's 1222–1254 "Tumapel" boundary window before the polity is displayed
// as "Singasari".
// ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Sama seperti Kediri, transisi Tumapel juga langsung disinggung
// Coedès di judul bab yang sama:
//   Bab XI §8 (hlm. 169) -- "Java: The End of the Kingdom of Kadiri (1222) and
//                            the Beginning of the Kingdom of Singhasari (up to 1268)"
// TAPI Coedès sendiri TIDAK memakai nama "Tumapel" -- dia langsung menyebut
// hasil kemenangan Ken Arok sebagai awal "Kingdom of Singhasari". "Tumapel"
// adalah nama wilayah/kadipaten asal Ken Arok sebelum ia naik takhta, dipakai
// di historiografi modern untuk periode transisi 1222-1254 sebelum polity ini
// disebut "Singasari" secara penuh -- sama seperti Panjalu/Janggala vs "Kadiri".
// ============================================================

const tumapelFoundingEraBase = {
  era: 'Ken Arok Era', eraId: 'Era Ken Arok',
  capital: 'Tumapel (Singasari, Malang, East Java)',
  capitalId: 'Tumapel (Singasari, Malang, Jawa Timur)',
  population: '~200,000 (est.)',
  populationId: '~200.000 (perkiraan)',
  religion: 'Hindu-Buddhist',
  government: 'Hindu-Buddhist Kingdom',
  statCitations: {
    capital:    { citation: 'Coedès, Chapter XI §8, p.169 — the region Coedès calls the seat of the new Singhasari kingdom, historiographically also known by its pre-accession name, Tumapel', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
    religion:   { citation: 'UNVERIFIED for the specific Hindu-Buddhist syncretic characterization against Coedès directly for this exact 1222-1227 window', url: '' },
    government: { citation: 'Coedès, Chapter XI §8, p.169 — new kingdom founded by Ken Arok\'s 1222 victory', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  },
  summary: 'Ken Arok founds Tumapel after defeating Kediri at the Battle of Ganter, establishing the Rajasa dynasty that would rule through Singasari and Majapahit',
  summaryId: 'Ken Arok mendirikan Tumapel setelah mengalahkan Kediri dalam Pertempuran Ganter, membangun Dinasti Rajasa yang akan memerintah melalui Singasari dan Majapahit',
  keyEvents: [
    { year: 1222, event: 'Ken Arok defeats Kertajaya of Kediri at the Battle of Ganter', type: 'military', eventId: 'Ken Arok mengalahkan Kertajaya dari Kediri dalam Pertempuran Ganter',
      citation: { citation: 'Coedès, Chapter XI §8 "Java: The End of the Kingdom of Kadiri (1222) and the Beginning of the Kingdom of Singhasari (up to 1268)", p.169', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
    { year: 1227, event: 'Ken Arok assassinated by Anusapati', type: 'political', eventId: 'Ken Arok dibunuh oleh Anusapati',
      citation: { citation: 'UNVERIFIED for the exact 1227 assassination date against Coedès — his Ch.XI §8 covers the kingdom\'s founding but the fetched material does not isolate Ken Arok\'s death by name/date; kept from Wikipedia/prior pass (Pararaton chronicle account of the Mpu Gandring keris plot)', url: '' } },
  ],
  historicalContext: "Ken Arok is a legendary figure who rises from low origins to overthrow Kediri and establish this new kingdom — which Coedès himself immediately calls \"Singhasari,\" not \"Tumapel.\"\n\nHis brief reign establishes the Rajasa dynasty that would rule through Singasari and ultimately Majapahit.",
  historicalContextId: 'Ken Arok adalah tokoh legendaris yang bangkit dari asal-usul rendah untuk menggulingkan Kediri dan mendirikan kerajaan baru ini — yang oleh Coedès sendiri langsung disebut "Singhasari," bukan "Tumapel."\n\nMasa pemerintahannya yang singkat meletakkan dasar Dinasti Rajasa yang akan memerintah melalui Singasari dan akhirnya Majapahit.',
  economy: {
    primary: ['Agriculture', 'Tribute', 'River Trade'],
    primaryId: ['Pertanian', 'Upeti', 'Perdagangan Sungai'],
    primaryCitations: [0],
    exports: ['Rice', 'Spices', 'Iron'],
    exportsId: ['Beras', 'Rempah-rempah', 'Besi'],
    exportsCitations: [0],
    tradingPartners: ['China', 'India', 'Kediri'],
    tradingPartnersId: ['Tiongkok', 'India', 'Kediri'],
    partnersCitations: [0],
    economyCitationRefs: [
      { citation: 'UNVERIFIED — Coedès Ch.XI §8 covers the political founding of this kingdom but does not itemize this specific economic breakdown for the brief 1222-1227 window', url: '' },
    ],
  },
  culture: {
    language: 'Old Javanese',
    languageId: 'Jawa Kuno',
    languageCitations: [],
    script: 'Kawi Script',
    scriptId: 'Aksara Kawi',
    scriptCitations: [],
    architecture: 'Hindu-Buddhist Temples',
    architectureId: 'Kuil-kuil Hindu-Buddha',
    architectureCitations: [],
    literatureItems: ['Pararaton (records of Ken Arok)'],
    literatureItemsId: ['Pararaton (mencatat Ken Arok)'],
    literatureCitations: [0],
    cultureCitationRefs: [
      { citation: 'UNVERIFIED against Coedès directly — the Pararaton chronicle (the primary source for Ken Arok\'s life) is documented in Javanese historiography broadly, but Coedès\' fetched material does not discuss it by name specifically', url: '' },
    ],
  },
  territories: ['East Java'],
  territoriesCitations: [0],
  vassals: [],
  vassalsCitations: [],
  rivals: ['Kediri Kingdom (Kertajaya)'],
  rivalsCitations: [0],
  relations: {
    'Kediri': 'Conquered / Made Subordinate After 1222'
  },
  relationsId: {
    'Kediri': 'Ditaklukkan / Dijadikan Bawahan Setelah 1222'
  },
  relationsCitations: [0],
  relationsCitationRefs: [
    { citation: 'Coedès, Chapter XI §8, p.169 — the direct subject of this chapter section is exactly this Kadiri-to-Singhasari power transfer', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
  ],
};

export const territoriesData = {

  // Srivijaya Empire
  srivijaya: {
    id: 'srivijaya',
    name: 'Srivijaya',
    nameId: 'Sriwijaya',
    englishName: 'Srivijaya Empire',
    englishNameId: 'Kerajaan Sriwijaya',
    wikiSlug: 'Srivijaya',
    idWikiSlug: 'Sriwijaya',
    color: '#329ccd',

    timeline: {
      650: {
        ...srivijayaFoundingEraBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Dapunta Hyang Sri Jayanasa', reignStart: 650, reignEnd: 692 }
      },
      692: {
        ...srivijayaFoundingEraBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Lokitawarman', reignStart: 692, reignEnd: 702 }
      },
      704: {
        ...srivijayaFoundingEraBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Indrawarman', reignStart: 702, reignEnd: 728 }
      },
      728: {
        ...srivijayaGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Rudra Wikraman', reignStart: 728, reignEnd: 784 }
      },
      775: {
        ...srivijayaGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Dharmasetu / Wisnu / Dharanindra', reignStart: 784, reignEnd: 802 }
      },
      802: {
        ...srivijayaGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Samaragrawira', reignStart: 803, reignEnd: 818 }
      },
      819: {
        ...srivijayaGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Samaratungga', reignStart: 819, reignEnd: 837 }
      },
      838: {
        ...srivijayaGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Pramodhawardani', reignStart: 838, reignEnd: 846 }
      },
      847: {
        ...srivijayaGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Unknown', reignStart: 847, reignEnd: 852 }
      },
      853: {
        ...srivijayaMaritimeDominanceBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Balaputradewa', reignStart: 853, reignEnd: 899 }
      },
      900: {
        ...srivijayaMaritimeDominanceBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Unknown', reignStart: 900, reignEnd: 959 }
      },
      960: {
        ...srivijayaMaritimeDominanceBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Udayaditya Warmadewa', reignStart: 960, reignEnd: 987 }
      },
      988: {
        ...srivijayaDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Cudamani Warmadewa', reignStart: 988, reignEnd: 1005 }
      },
      1006: {
        ...srivijayaDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Mara Wijayatunggawarman', reignStart: 1006, reignEnd: 1016 }
      },
      1017: {
        ...srivijayaDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sangrama Wijayatunggawarman', reignStart: 1017, reignEnd: 1027 }
      },
      1028: {
        ...srivijayaDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Dewa', reignStart: 1028, reignEnd: 1043 }
      },
      1044: {
        ...srivijayaDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Samara Wijayatunggawarman', reignStart: 1044, reignEnd: 1079 }
      },
      1080: {
        ...srivijayaDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Manabharana', reignStart: 1080, reignEnd: 1089 }
      }
    }
  },

  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Untuk Kutai, teks Coedès yang relevan justru berhasil di-fetch
// LANGSUNG (bagian ini ada di awal buku, Bab II "Indianization", sebelum titik
// mentok ~halaman 40), jadi ini kutipan asli, bukan cuma judul bab dari daftar isi.
// Coedès HANYA membahas Kutai sekilas sebagai bukti awal Indianisasi Nusantara
// (satu kalimat) -- dia tidak punya bab/bagian khusus tentang Kutai seperti yang
// dia punya untuk Sriwijaya. Jadi untuk detail lain (ekonomi, budaya, dst.),
// tetap pakai sumber sebelumnya (Wikipedia dll.) karena Coedès/SNI tidak
// membahasnya sedetail itu.
// ============================================================

kutai: {
  id: 'kutai',
  name: 'Kutai',
  englishName: 'Kutai Kingdom',
  englishNameId: 'Kerajaan Kutai',
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
      reignEnd: 425,
      citation: { citation: 'UNVERIFIED — no source found for specific reign start/end years (Coedès included); sources only say Mulawarman ruled "around 400 CE"', url: '' },
    },
    capital: 'Muara Kaman',
    population: '~100,000',
    populationId: '~100.000 (perkiraan)',
    religion: 'Hindu (Shaivism)',
    government: 'Hindu Kingdom',
    statCitations: {
      capital:    { citation: 'UNVERIFIED for exact capital location — Coedès does not name a capital for Kutai specifically, only "the region of Kutei, Borneo"; Muara Kaman continuity assumed from Wikipedia/Mulavarman', url: '' },
      population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
      religion:   { citation: 'Mulavarman — Wikipedia (Hindu rituals, Shaivite practice evidenced in Yupa inscriptions) — kept as web source since Coedès does not detail Kutai\'s specific religious practice beyond noting it as an Indianized/Sanskrit-inscription kingdom', url: 'https://en.wikipedia.org/wiki/Mulavarman' },
      government: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter II §2 "The First Evidence of the Indianization of Farther India", p.17-18 — cites the Sanskrit inscriptions of Mulavarman in Kutei, Borneo, as among the archipelago\'s oldest evidence of an Indianized kingdom', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    },
    summary: 'One of the earliest known Hindu kingdoms in Southeast Asia, known from the Yupa inscriptions',
    summaryId: 'Salah satu kerajaan Hindu tertua yang diketahui di Asia Tenggara, dikenal dari prasasti Yupa',
    keyEvents: [
      { year: 400, event: 'Yupa inscriptions erected by Mulawarman — cited by Coedès as among the oldest Sanskrit inscriptions in the archipelago', type: 'cultural', eventId: 'Prasasti Yupa didirikan oleh Mulawarman — dikutip Coedès sebagai salah satu prasasti Sansekerta tertua di Nusantara',
        // UPGRADED: now backed by a real Coedès quote/citation, not just Wikipedia —
        // "the Sanskrit inscriptions of Mulavarman in the region of Kutei, Borneo,
        // date back to the beginning of the fifth century A.D." (Ch.II §2, p.18)
        citation: { citation: 'Coedès, Chapter II §2, p.18 — "the Sanskrit inscriptions of Mulavarman in the region of Kutei, Borneo, date back to the beginning of the fifth century A.D."', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      { year: 400, event: 'Ritual donation of 20,000 cows to Brahmins', type: 'religious', eventId: 'Pemberian ritual 20.000 ekor sapi kepada para Brahmana',
        citation: { citation: 'The History of the Kutai Kingdom — Tempo.co (Mulawarman gave charity of 20,000 cattle to Brahmins at the sacred site Waprakeswara) — kept as web source; not covered by Coedès at this level of ritual detail', url: 'https://en.tempo.co/read/1948952/the-history-of-the-kutai-kingdom-its-origin-and-first-king' } },
    ],
    historicalContext: 'Kutai is among the oldest recorded kingdoms in the Indonesian archipelago, cited by Coedès alongside Purnawarman\'s Java inscriptions as among the earliest evidence of Indianization in the archipelago.\n\nThe Sanskrit Yupa inscriptions reveal strong Indian cultural influence in early Borneo.',
    historicalContextId: 'Kutai termasuk salah satu kerajaan tertua yang tercatat di kepulauan Indonesia, dikutip Coedès bersama prasasti Purnawarman di Jawa sebagai bukti paling awal Indianisasi di Nusantara.\n\nPrasasti Yupa dalam bahasa Sansekerta mengungkapkan pengaruh budaya India yang kuat di Kalimantan pada masa awal.',
    economy: {
      primary: ['River Trade', 'Agriculture', 'Tribute'],
      primaryId: ['Perdagangan Sungai', 'Pertanian', 'Upeti'],
      primaryCitations: [0, 0, 0],
      exports: ['Forest Products', 'Gold', 'Camphor'],
      exportsId: ['Hasil Hutan', 'Emas', 'Kapur Barus'],
      exportsCitations: [0, 0, 0],
      tradingPartners: ['India'],
      tradingPartnersId: ['India'],
      partnersCitations: [1],
      economyCitationRefs: [
        { citation: 'UNVERIFIED — no direct source (Coedès included) itemizes Kutai\'s specific economy/exports; Coedès\' one-sentence mention of Kutai covers only the inscriptions themselves, not economic activity', url: '' },
        { citation: 'Coedès, Chapter II §2, p.18 — the very existence of Sanskrit inscriptions in Kutei implies contact with Indian traders/priests, the basis for the "India" trading partner entry', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      ],
    },
    culture: {
      language: 'Sanskrit, Old Malay',
      languageId: 'Sansekerta, Melayu Kuno',
      languageCitations: [0],
      script: 'Pallava Script',
      scriptId: 'Aksara Pallawa',
      scriptCitations: [0],
      architecture: 'Hindu Temples',
      architectureId: 'Kuil-kuil Hindu',
      architectureCitations: [1],
      literatureItems: ['Yupa Inscriptions'],
      literatureItemsId: ['Prasasti Yupa'],
      literatureCitations: [0],
      cultureCitationRefs: [
        { citation: 'Coedès, Chapter II §2, p.18 — Mulavarman\'s Sanskrit inscriptions in Kutei, Borneo, dated to the early 5th century', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        { citation: 'UNVERIFIED — no source (Coedès included) confirms built Hindu temple structures specifically from this earliest 400 CE period; kept as a flagged web-derived claim', url: '' },
      ],
    },
    territories: ['East Kalimantan', 'Mahakam River Basin'],
    territoriesCitations: [0],
    vassals: [],
    vassalsCitations: [],
    rivals: [],
    rivalsCitations: [],
    relations: { 'India': 'Cultural & Religious Exchange' },
    relationsId: { 'India': 'Pertukaran Budaya & Agama' },
    relationsCitations: [0],
    relationsCitationRefs: [
      { citation: 'Coedès, Chapter II §2, p.18 — Kutei\'s Sanskrit inscriptions as evidence of early Indianization/cultural contact with India', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
    ],
  },
  500: {
    era: 'Classical Period', eraId: 'Periode Klasik',
    ruler: {
      portrait: '👑',
      title: 'Raja',
      name: 'Later Kutai rulers (unspecified/unnamed)',
      nameId: 'Penguasa Kutai selanjutnya (tidak disebutkan namanya)',
      reignStart: '400',
      reignEnd: '500',
      citation: { citation: 'UNVERIFIED — Coedès does not name any Kutai ruler beyond Mulavarman; no source (including Wikipedia) independently confirms a named ruler for this specific century', url: '' },
    },
    capital: 'Muara Kaman',
    population: '~200,000',
    populationId: '~200.000 (perkiraan)',
    religion: 'Hindu-Buddhist',
    government: 'Hindu Kingdom',
    statCitations: {
      capital:    { citation: 'UNVERIFIED for this specific period — continuity assumed', url: '' },
      population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
      religion:   { citation: 'UNVERIFIED — Coedès documents only Hindu/Shaivite practice for Kutai via the Yupa inscriptions, not Buddhist influence specifically', url: '' },
      government: { citation: 'UNVERIFIED — continuity assumed from 400 CE entry', url: '' },
    },
    summary: 'Kutai maintains its river-based kingdom across the Mahakam basin over many centuries',
    summaryId: 'Kutai mempertahankan kerajaan berbasis sungainya di sepanjang cekungan Mahakam selama berabad-abad',
    keyEvents: [
      { year: 500, event: 'Continued Hindu-Buddhist cultural development', type: 'cultural', eventId: 'Perkembangan budaya Hindu-Buddha yang berkelanjutan',
        citation: { citation: 'UNVERIFIED — this century is not documented by Coedès, SNI, or any other academic source found so far; this appears to be an inferred continuity statement rather than a sourced event', url: '' } },
    ],
    historicalContext: 'Kutai persists as a regional power in Borneo, controlling the Mahakam River trade routes.\n\nLimited records from this long period suggest stable but quiet rule — this is also the least-documented stretch in this file, with no source (Coedès included) covering it directly.',
    historicalContextId: 'Kutai bertahan sebagai kekuatan regional di Kalimantan, menguasai jalur perdagangan Sungai Mahakam.\n\nCatatan yang terbatas dari periode panjang ini menunjukkan pemerintahan yang stabil namun tenang — ini juga bagian paling minim sumber di file ini, termasuk dari Coedès.',
    economy: {
      primary: ['River Trade', 'Forest Products', 'Tribute'],
      primaryId: ['Perdagangan Sungai', 'Hasil Hutan', 'Upeti'],
      primaryCitations: [0, 0, 0],
      exports: ['Gold', 'Camphor', 'Rattan'],
      exportsId: ['Emas', 'Kapur Barus', 'Rotan'],
      exportsCitations: [0, 0, 0],
      tradingPartners: ['Java', 'Srivijaya', 'China'],
      tradingPartnersId: ['Jawa', 'Sriwijaya', 'Tiongkok'],
      partnersCitations: [0, 0, 0],
      economyCitationRefs: [
        { citation: 'UNVERIFIED — no source (Coedès, SNI, or web) confirms Kutai\'s trade relations with Java, Srivijaya, or China specifically during this 500-1300 CE gap period; this remains the weakest-documented stretch in Kutai historiography', url: '' },
      ],
    },
    culture: {
      language: 'Old Malay',
      languageId: 'Melayu Kuno',
      languageCitations: [],
      script: 'Local Script',
      scriptId: 'Aksara Lokal',
      scriptCitations: [],
      architecture: 'Wooden Palaces and Temples',
      architectureId: 'Istana dan Kuil Kayu',
      architectureCitations: [],
      literatureItems: ['Oral Traditions'],
      literatureItemsId: ['Tradisi Lisan'],
      literatureCitations: [],
      cultureCitationRefs: [
        { citation: 'UNVERIFIED — no source found for language, script, architecture, or literature specific to this 500-1300 CE period, even after checking Coedès; recommend independent verification or removing this entire era block given the near-total absence of sources', url: '' },
      ],
    },
    territories: ['East Kalimantan', 'Mahakam River Basin'],
    territoriesCitations: [0],
    vassals: [],
    vassalsCitations: [],
    rivals: ['Regional Borneo Polities'],
    rivalsCitations: [0],
    relations: { 'Srivijaya': 'Tributary Relations', 'Java': 'Trade Contact' },
    relationsId: { 'Sriwijaya': 'Hubungan Tributari', 'Jawa': 'Kontak Dagang' },
    relationsCitations: [0, 0],
    relationsCitationRefs: [
      { citation: 'UNVERIFIED — no source (Coedès included, who does not mention Kutai again after the 5th-century inscription note) confirms a tributary relationship with Srivijaya or trade contact with Java specifically', url: '' },
    ],
  },
  // NOTE: Kutai Kartanegara (the Malay/Islamic-era kingdom founded 1300) is
  // intentionally NOT given its own timeline entry here, since this app only
  // covers Hindu-Buddhist kingdoms. Kutai Kartanegara appears only as the
  // conquering party in the 1635 entry below.
  1635: {
    era: 'Fall of Kutai Martadipura', eraId: 'Runtuhnya Kutai Martadipura',
    ruler: {
      portrait: '👑',
      title: 'Maharaja',
      name: 'Dharma Setia (last king of Kutai Martadipura)',
      reignStart: null,
      reignEnd: 1635,
      citation: { citation: 'Kutai Kingdom: The Heyday — Mentor Kelas (Maharaja Dharma Setia, the last king of Kutai Martadipura, died in 1635 at the hands of Prince Sinum Panji Mendapa of Kutai Kartanegara) — kept as web source; this late/post-Coedès-scope event (1635) falls outside Coedès\' book, which ends around 1511 (Portuguese seizure of Malacca)', url: 'https://www.mentorkelas.com/kutai-kingdom-the-heyday-genealogy-of-kings-and-relics-of-the-courtyard-of-all' },
    },
    capital: 'Muara Kaman',
    population: '~150,000 (est.)',
    populationId: '~150.000 (perkiraan)',
    religion: 'Hindu-Buddhist',
    government: 'Hindu Kingdom (conquered, absorbed into Kutai Kartanegara)',
    statCitations: {
      capital:    { citation: 'Kutai — Wikipedia (Kutai Martadipura seated at Muara Kaman until its 1635 conquest) — Wikipedia used here as last resort since this event postdates Coedès\' 1511 endpoint', url: 'https://en.wikipedia.org/wiki/Kutai' },
      population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
      religion:   { citation: 'Kutai — Wikipedia (Kutai Martadipura, 399-1635, was a Hindu kingdom)', url: 'https://en.wikipedia.org/wiki/Kutai' },
      government: { citation: 'Kutai — Wikipedia; Kutai facts for kids (conquered and merged into "Kutai Kartanegara Ing Martadipura")', url: 'https://en.wikipedia.org/wiki/Kutai' },
    },
    summary: 'Kutai Martadipura, the classical Hindu kingdom founded by Kudungga and made famous by Mulawarman, is finally conquered by Kutai Kartanegara in 1635',
    summaryId: 'Kutai Martadipura, kerajaan Hindu klasik yang didirikan Kudungga dan dibesarkan oleh Mulawarman, akhirnya ditaklukkan oleh Kutai Kartanegara pada 1635',
    keyEvents: [
      { year: 1635, event: 'Kutai Martadipura conquered by Kutai Kartanegara under Aji Pangeran Sinum Panji Mendapa; last king Dharma Setia killed in battle', type: 'political', eventId: 'Kutai Martadipura ditaklukkan Kutai Kartanegara di bawah Aji Pangeran Sinum Panji Mendapa; raja terakhir Dharma Setia tewas dalam pertempuran',
        citation: { citation: 'Kutai — Wikipedia; Kutai facts for kids; Kutai Kingdom: The Heyday — Mentor Kelas (all confirm 1635; event falls outside Coedès\' 1511 endpoint, so Wikipedia used as last-resort source here)', url: 'https://en.wikipedia.org/wiki/Kutai' } },
    ],
    historicalContext: 'After more than a millennium as an independent Hindu kingdom, Kutai Martadipura is finally conquered by its long-coexisting Malay neighbor, Kutai Kartanegara.\n\nThe two realms merge into "Kutai Kartanegara ing Martadipura," and Islamisation of the region follows in the ensuing decades.',
    historicalContextId: 'Setelah lebih dari seribu tahun sebagai kerajaan Hindu merdeka, Kutai Martadipura akhirnya ditaklukkan oleh tetangga Melayu yang telah lama hidup berdampingan dengannya, Kutai Kartanegara.\n\nKedua kerajaan bergabung menjadi "Kutai Kartanegara ing Martadipura," dan Islamisasi wilayah ini berlanjut pada dekade-dekade berikutnya.',
    economy: {
      primary: ['River Trade', 'Forest Products'],
      primaryId: ['Perdagangan Sungai', 'Hasil Hutan'],
      primaryCitations: [0],
      exports: ['Gold', 'Camphor'],
      exportsId: ['Emas', 'Kapur Barus'],
      exportsCitations: [0],
      tradingPartners: ['Java', 'Regional Ports'],
      tradingPartnersId: ['Jawa', 'Pelabuhan Setempat'],
      partnersCitations: [0],
      economyCitationRefs: [
        { citation: 'UNVERIFIED — no source found for this specific economic breakdown circa 1600-1635', url: '' },
      ],
    },
    culture: {
      language: 'Old Malay',
      languageId: 'Melayu Kuno',
      languageCitations: [],
      script: 'Local Script',
      scriptId: 'Aksara Lokal',
      scriptCitations: [],
      architecture: 'Traditional Wooden Structures',
      architectureId: 'Bangunan Kayu Tradisional',
      architectureCitations: [],
      literatureItems: ['Oral Traditions'],
      literatureItemsId: ['Tradisi Lisan'],
      literatureCitations: [],
      cultureCitationRefs: [
        { citation: 'UNVERIFIED — no direct source found for language/script/architecture/literature specific to this exact final period', url: '' },
      ],
    },
    territories: ['East Kalimantan'],
    territoriesCitations: [0],
    vassals: [],
    vassalsCitations: [],
    rivals: ['Kutai Kartanegara'],
    rivalsCitations: [0],
    relations: { 'Kutai Kartanegara': 'War, ending in conquest and merger (1635)' },
    relationsId: { 'Kutai Kartanegara': 'Perang, berakhir dengan penaklukan dan penggabungan (1635)' },
    relationsCitations: [0],
    relationsCitationRefs: [
      { citation: 'Kutai — Wikipedia (Aji Pangeran Sinum Panji Mendapa, ruled 1635-1650, conquered Kutai Martadipura and merged the two realms)', url: 'https://en.wikipedia.org/wiki/Kutai' },
    ],
  }
},
},
 // ============================================================
// TEMUAN PALING PENTING SEBELUM DIPAKAI:
//
// 1. TARUMANAGARA (400): Rentang tahun "358-382" SALAH DILEKATKAN ke Purnawarman.
//    Sumber (Wikipedia, Vocal Media) sepakat 358-382 adalah masa raja PERTAMA
//    (pendiri), Jayasingawarman/Rajadirajaguru Jayasingawarman — BUKAN Purnawarman.
//    Purnawarman sendiri adalah raja KETIGA, memerintah 395-434 M (raja kedua,
//    Dharmayavarman, 382-395 M, ada di antaranya). Ini kesalahan atribusi tokoh,
//    bukan cuma tahun.
//
// 2. SUNDA (key "1200"): SALAH TEMPAT SECARA KRONOLOGIS. Ruler Sri Jayabhupati
//    yang dicantumkan (reignStart 1030, reignEnd 1042) justru memerintah di
//    ABAD KE-11, bukan sekitar 1200. Event "Battle of Bubat 1357" yang disematkan
//    di entri yang sama juga TIDAK COCOK dengan masa Sri Jayabhupati (beda 300+
//    tahun) — raja yang sebenarnya tewas di Bubat adalah Prabu Maharaja Lingga
//    Buana (memerintah 1340-1357), bukan Sri Jayabhupati. Direstrukturisasi jadi
//    dua entri terpisah: key "1030" untuk Sri Jayabhupati, key "1340" untuk
//    Lingga Buana dan Perang Bubat.
//
// 3. GALUH (key "1000"): Ruler "Maharaja Lingga" (1000-1042) TIDAK DITEMUKAN
//    sumbernya sebagai penguasa Galuh pada tahun 1000. Nama dan rentang tahun
//    paling mendekati yang benar-benar terdokumentasi adalah "Maharaja Lingga
//    BUANA" yang memerintah 1340-1357 (raja yang tewas di Perang Bubat) — bukan
//    "Maharaja Lingga" di tahun 1000. Key diganti dari "1000" ke "1340", nama
//    diganti jadi "Maharaja Lingga Buana".
//
// 4. MATARAM KUNO (800): "Prambanan" DIHAPUS dari entri era Samaratungga
//    (812-833). Semua sumber sepakat Prambanan baru mulai dibangun sekitar
//    850-an di bawah Rakai Pikatan — SETELAH masa Samaratungga berakhir.
//
// 5. Semua angka populasi (~80rb-400rb di kingdom manapun) TIDAK ditemukan
//    sumber akademis — pola yang sama seperti kerajaan-kerajaan sebelumnya,
//    ditandai UNVERIFIED di setiap entri.
// ============================================================

// ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Sama seperti Kutai, kutipan Coedès yang relevan untuk Tarumanagara
// berhasil di-fetch LANGSUNG dari Bab II §2 (sebelum titik mentok ~halaman 40) --
// dan ternyata berada di KALIMAT YANG SAMA dengan kutipan Kutai:
// "...and those of Purnavarman, in the western part of Java, to the middle of
// the same century [5th century A.D.]." Coedès tidak membahas Tarumanagara lebih
// jauh dari satu kalimat ini -- tidak ada bab/section khusus seperti Sriwijaya.
// ============================================================

tarumanagara: {
  id: 'tarumanagara',
  name: 'Tarumanagara',
  englishName: 'Kingdom of Tarumanagara',
  englishNameId: 'Kerajaan Tarumanagara',
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
        reignStart: '395',
        reignEnd: '434',
        // Kept from previous pass: Wikipedia's specific reign years (395-434) —
        // Coedès confirms only "the middle of the fifth century" in general terms,
        // not exact accession/death years, so the precise range still needs Wikipedia
        citation: { citation: 'Coedès, Chapter II §2, p.18 confirms mid-5th century generally ("those of Purnavarman, in the western part of Java, to the middle of the same century"); Purnawarman — Wikipedia supplies the specific reign years 395-434 AD', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Tarumanagara (near Bekasi/Bogor, West Java)',
      capitalId: 'Tarumanagara (sekitar Bekasi/Bogor, Jawa Barat)',
      population: '~100,000 (est.)',
      populationId: '~100.000 (perkiraan)',
      religion: 'Hindu (Vaishnavism)',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for exact capital location — Coedès says only "western part of Java", not a specific site; Wikipedia supplies Bogor/Bekasi area', url: 'https://en.wikipedia.org/wiki/Tarumanagara' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Purnawarman — Wikipedia; Ciaruteun inscription — Wikipedia (footprints equated with Vishnu\'s, indicating Vaishnavite affiliation) — kept as web source since Coedès does not detail Tarumanagara\'s specific religious sect beyond calling it part of the general Hindu Indianization wave', url: 'https://en.wikipedia.org/wiki/Ciaruteun_inscription' },
        government: { citation: 'Coedès, Chapter II §2, p.18 — groups Purnavarman\'s kingdom with Mulavarman\'s Kutei as parallel, contemporary Indianized Hindu kingdoms of the archipelago', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Tarumanagara flourishes under Purnawarman, documented through stone inscriptions as one of the earliest Hindu kingdoms of Java',
      summaryId: 'Tarumanagara berkembang di bawah Purnawarman, terdokumentasi melalui prasasti batu sebagai salah satu kerajaan Hindu tertua di Jawa',
      keyEvents: [
        { year: 400, event: 'Purnawarman stone inscriptions (Ciaruteun, Kebon Kopi) erected across West Java — cited by Coedès alongside Kutei\'s Mulavarman inscriptions as among the oldest Sanskrit inscriptions in the archipelago', type: 'cultural', eventId: 'Prasasti batu Purnawarman (Ciaruteun, Kebon Kopi) didirikan di Jawa Barat — dikutip Coedès bersama prasasti Mulawarman di Kutei sebagai salah satu prasasti Sansekerta tertua di Nusantara',
          // UPGRADED: now backed by a real Coedès quote, in the same sentence as the
          // Kutai citation — "those of Purnavarman, in the western part of Java,
          // to the middle of the same century" (5th century A.D.)
          citation: { citation: 'Coedès, Chapter II §2, p.18 — "the Sanskrit inscriptions of Mulavarman in the region of Kutei, Borneo, date back to the beginning of the fifth century A.D. and those of Purnavarman, in the western part of Java, to the middle of the same century"', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: 'Tarumanagara is among the earliest recorded kingdoms of the archipelago, located in West Java, and cited by Coedès in the same breath as Kutai\'s Mulavarman inscriptions as evidence of the archipelago\'s earliest Indianization.\n\nThe Purnawarman inscriptions — written in Sanskrit using Pallava script — are the oldest known written records found on Java.',
      historicalContextId: 'Tarumanagara termasuk salah satu kerajaan tertua yang tercatat di kepulauan ini, berlokasi di Jawa Barat, dan dikutip Coedès dalam kalimat yang sama dengan prasasti Mulawarman di Kutai sebagai bukti Indianisasi tertua di Nusantara.\n\nPrasasti Purnawarman — ditulis dalam bahasa Sansekerta menggunakan aksara Pallawa — merupakan catatan tertulis tertua yang diketahui ditemukan di Jawa.',
      economy: {
        primary: ['Agriculture', 'River Trade', 'Tribute'],
        primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Timber', 'Ivory'],
        exportsId: ['Beras', 'Kayu', 'Gading'],
        exportsCitations: [0],
        tradingPartners: ['India'],
        tradingPartnersId: ['India'],
        partnersCitations: [1],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès\' one-sentence mention of Tarumanagara covers only the inscriptions, not economic activity; no source itemizes specific agriculture/exports for this period', url: '' },
          { citation: 'Coedès, Chapter II §2, p.18 — the existence of Sanskrit inscriptions itself implies Indian contact, the basis for the "India" trading-partner entry', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      culture: {
        language: 'Sanskrit',
        languageId: 'Sansekerta',
        languageCitations: [0],
        script: 'Pallava Script',
        scriptId: 'Aksara Pallawa',
        scriptCitations: [0],
        architecture: 'Hindu Temples',
        architectureId: 'Kuil-kuil Hindu',
        architectureCitations: [1],
        literatureItems: ['Purnawarman Stone Inscriptions'],
        literatureItemsId: ['Prasasti Batu Purnawarman'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'Coedès, Chapter II §2, p.18 — Purnavarman\'s Sanskrit inscriptions dated to the mid-5th century', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
          { citation: 'UNVERIFIED — no source, Coedès included, confirms built Hindu temple structures specifically from this era (evidence is inscriptions on natural stone, not temple architecture)', url: '' },
        ],
      },
      territories: ['West Java', 'Citarum River Basin'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: { 'India': 'Cultural & Religious Exchange' },
      relationsId: { 'India': 'Pertukaran Budaya & Agama' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'Coedès, Chapter II §2, p.18 — Sanskrit inscriptions as evidence of early Indianization/cultural contact with India', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      ],
    },
    550: {
      era: 'Late Period', eraId: 'Periode Akhir',
      ruler: {
        portrait: '👑',
        title: 'Raja',
        name: 'Candrawarman',
        reignStart: '515',
        reignEnd: '535',
        citation: { citation: 'UNVERIFIED — no independent source (Coedès included, who does not mention Tarumanagara again after the mid-5th-century Purnavarman note) confirms this specific ruler name or reign dates', url: '' },
      },
      capital: 'Tarumanagara (near Bekasi/Bogor, West Java)',
      capitalId: 'Tarumanagara (sekitar Bekasi/Bogor, Jawa Barat)',
      population: '~80,000 (est.)',
      populationId: '~80.000 (perkiraan)',
      religion: 'Hindu',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for this specific mid-6th-century period — continuity assumed', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for this specific ruler/period — general Tarumanagara Hindu identity assumed by continuity', url: '' },
        government: { citation: 'UNVERIFIED for this specific ruler/period — general continuity assumed', url: '' },
      },
      summary: 'Tarumanagara continues as a regional power in West Java before dissolving into the successor kingdoms of Sunda and Galuh',
      summaryId: 'Tarumanagara terus menjadi kekuatan regional di Jawa Barat sebelum terpecah menjadi kerajaan penerus Sunda dan Galuh',
      keyEvents: [
        { year: 669, event: 'Tarumanagara dissolves into the kingdoms of Sunda and Galuh', type: 'political', eventId: 'Tarumanagara bubar menjadi Kerajaan Sunda dan Galuh',
          // Kept as web source — Coedès' narrative moves to Srivijaya/Sailendra Java
          // by this period (Ch. V-VI) and does not cover the Sunda/Galuh split directly
          citation: { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (last king Linggawarman devolved the kingdom to son-in-law Tarusbawa in 669; kingdom formally split into Sunda and Galuh in 670) — Wikipedia/web tier used since Coedès does not cover this specific succession event', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' } },
      ],
      historicalContext: 'In its later centuries Tarumanagara gradually weakens.\n\nBy 669 the kingdom fragments into Sunda in the west and Galuh to the east, ending the Tarumanagara era. Coedès\' own narrative shifts focus to the rising kingdoms of Srivijaya and Sailendra Java by this period, without directly covering Tarumanagara\'s dissolution.',
      historicalContextId: 'Pada abad-abad terakhirnya, Tarumanagara secara bertahap melemah.\n\nPada tahun 669 kerajaan ini terpecah menjadi Sunda di bagian barat dan Galuh di bagian timur, mengakhiri era Tarumanagara. Narasi Coedès sendiri beralih fokus ke kerajaan Sriwijaya dan Sailendra Jawa yang sedang bangkit pada periode ini, tanpa membahas langsung perpecahan Tarumanagara.',
      economy: {
        primary: ['Agriculture', 'River Trade'],
        primaryId: ['Pertanian', 'Perdagangan Sungai'],
        primaryCitations: [0],
        exports: ['Rice', 'Timber'],
        exportsId: ['Beras', 'Kayu'],
        exportsCitations: [0],
        tradingPartners: ['India', 'China'],
        tradingPartnersId: ['India', 'Tiongkok'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes this specific economic breakdown for the mid-to-late Tarumanagara period', url: '' },
        ],
      },
      culture: {
        language: 'Sanskrit, Old Sundanese',
        languageId: 'Sansekerta, Sunda Kuno',
        languageCitations: [],
        script: 'Pallava Script',
        scriptId: 'Aksara Pallawa',
        scriptCitations: [],
        architecture: 'Stone Inscriptions',
        architectureId: 'Prasasti batu',
        architectureCitations: [],
        literatureItems: [],
        literatureItemsId: [],
        literatureCitations: [],
        // FIXED: "Prasasti Pasir Muara" removed entirely from this era — as flagged
        // in an earlier pass, that inscription is dated 932 CE (Kebon Kopi II),
        // over 260 years after Tarumanagara's 669 CE end, so it cannot belong here
        // under any source, Coedès included
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no source, Coedès included, covers language, script, or literature specific to this exact 515-669 gap period', url: '' },
        ],
      },
      territories: ['West Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
    },
  }
},

// ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN PENTING: Berbeda dari Kutai/Tarumanagara (yang setidaknya dapat SATU
// kalimat dari Coedès), Kerajaan SUNDA TIDAK DISEBUT SAMA SEKALI sebagai entitas
// tersendiri di manapun dalam buku Coedès yang berhasil di-fetch (baik teks
// langsung maupun daftar isi bab). Coedès memang membahas Jawa secara ekstensif
// (Mataram, Kadiri, Singhasari, Majapahit) tapi tidak pernah menyebut "Sunda"
// sebagai kerajaan terpisah -- kemungkinan karena fokusnya pada dinasti-dinasti
// besar yang meninggalkan banyak prasasti/catatan Tiongkok, sementara Sunda
// pasca-Tarumanagara relatif minim di kedua jenis sumber itu.
// Battle of Bubat (1357) SEBALIKNYA disinggung Coedès di Bab XIII §8 (dalam
// konteks Majapahit, bukan Sunda) -- ini yang saya pakai untuk entri 1340.
// ============================================================

sunda: {
  id: 'sunda',
  name: 'Sunda',
  englishName: 'Sunda Kingdom',
  englishNameId: 'Kerajaan Sunda',
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
        citation: { citation: 'UNVERIFIED against Coedès — Sunda as a kingdom is not named anywhere in Coedès\' book; Kingdom of Sunda and Galuh — New World Encyclopedia remains the source for Tarusbawa\'s reign (669-723)', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' },
      },
      capital: 'Pakuan (near Bogor)',
      capitalId: 'Pakuan (sekitar Bogor)',
      population: '~150,000 (est.)',
      populationId: '~150.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'Sunda Kingdom — Wikipedia (capital Pakuan Pajajaran, present-day Bogor) — Coedès does not mention Sunda at all, so Wikipedia used directly here', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Sunda Kingdom — Wikipedia (religion: Sunda Wiwitan, Hinduism, Buddhism)', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' },
        government: { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (Sunda established as Tarumanagara\'s successor)', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' },
      },
      summary: 'Sunda emerges as a successor state to Tarumanagara, controlling the western region of Java',
      summaryId: 'Sunda muncul sebagai negara penerus Tarumanagara, menguasai wilayah barat Jawa',
      keyEvents: [
        { year: 670, event: 'Sunda established as successor kingdom in western Java', type: 'political', eventId: 'Sunda didirikan sebagai kerajaan penerus di Jawa Barat',
          citation: { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (Tarusbawa renamed Tarumanagara to "Kingdom of Sunda" in 670 CE) — Coedès does not cover this event; Wikipedia/web tier used directly', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' } },
      ],
      historicalContext: 'Following the dissolution of Tarumanagara in 669, Sunda controls the western portion of Java while Galuh holds the eastern.\n\nNote: Sunda as a kingdom is not mentioned anywhere in Coedès\' synthesis — his coverage of Java in this period jumps directly to Sanjaya\'s Mataram (732 CE, Chapter VI §4), leaving Sunda and Galuh as a documented gap in his account.',
      historicalContextId: 'Setelah bubarnya Tarumanagara pada tahun 669, Sunda menguasai bagian barat Jawa sementara Galuh menguasai bagian timur.\n\nCatatan: Sunda sebagai kerajaan tidak disebut sama sekali dalam sintesis Coedès — cakupannya tentang Jawa di periode ini langsung melompat ke Mataram Sanjaya (732 M, Bab VI §4), menjadikan Sunda dan Galuh celah yang jelas dalam catatannya.',
      economy: {
        primary: ['Agriculture', 'Coastal Trade', 'River Trade'],
        primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Perdagangan Sungai'],
        primaryCitations: [0],
        exports: ['Pepper', 'Rice', 'Timber'],
        exportsId: ['Lada', 'Beras', 'Kayu'],
        exportsCitations: [0],
        tradingPartners: ['India', 'China', 'Srivijaya'],
        tradingPartnersId: ['India', 'Tiongkok', 'Sriwijaya'],
        partnersCitations: [1],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no direct source itemizing this specific economic breakdown for the founding 670-723 period', url: '' },
          { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (Tarumanagara\'s decline attributed partly to invasions from Srivijaya, implying prior contact)', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' },
        ],
      },
      culture: {
        language: 'Old Sundanese',
        languageId: 'Sunda Kuno',
        languageCitations: [],
        script: 'Old Sundanese, Pallava',
        scriptId: 'Sunda Kuno, Pallawa',
        scriptCitations: [],
        architecture: 'Pakuan Palace, Batujaya Site',
        architectureId: 'Keraton Pakuan, Situs Batujaya',
        architectureCitations: [],
        literatureItems: ['Kebon Kopi II Inscription'],
        literatureItemsId: ['Prasasti Kebon Kopi II'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'Kebon Kopi II inscription — Wikipedia (dated 854 Saka/932 CE, the oldest inscription to mention the toponym "Sunda" — this is 932 CE, over 260 years after this "700" entry; chronologically misplaced if meant to represent the founding era specifically)', url: 'https://en.wikipedia.org/wiki/Kebon_Kopi_II_inscription' },
        ],
      },
      territories: ['West Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Galuh'],
      rivalsCitations: [0],
      relations: { 'Galuh': 'Rival Successor State' },
      relationsId: { 'Galuh': 'Negara Penerus Saingan' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (Tarumanagara divided into Sunda and Galuh in 670 CE; reunited under Sanjaya in 723)', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' },
      ],
    },
    1030: {
      era: 'Classical Period (Sri Jayabhupati)', eraId: 'Periode Klasik (Sri Jayabhupati)',
      ruler: {
        portrait: '👑',
        title: 'Raja',
        name: 'Sri Jayabhupati',
        reignStart: '1030',
        reignEnd: '1042',
        citation: { citation: 'UNVERIFIED against Coedès — Sunda/Sri Jayabhupati is not named in Coedès\' book; his Chapter IX for this century covers Cambodia (Suryavarman I), Java (Airlanga), and Burma (Anoratha), not Sunda. Sunda Kingdom — Wikipedia remains the source', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' },
      },
      capital: 'Pakuan Pajajaran (Bogor)',
      population: '~300,000 (est.)',
      populationId: '~300.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'Sunda Kingdom — Wikipedia (capital Pakuan Pajajaran)', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Sunda Kingdom — Wikipedia (religion: Hinduism, Buddhism)', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' },
        government: { citation: 'Sunda Kingdom — Wikipedia', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' },
      },
      summary: 'Sri Jayabhupati rules Sunda in the 11th century, documented through the Sanghyang Tapak inscription which shows stylistic ties to the East Javanese Dharmawangsa court',
      summaryId: 'Sri Jayabhupati memerintah Sunda pada abad ke-11, terdokumentasi melalui Prasasti Sanghyang Tapak yang menunjukkan kemiripan gaya dengan istana Dharmawangsa di Jawa Timur',
      keyEvents: [
        { year: 1030, event: 'Sanghyang Tapak inscription commissioned, establishing a protected sacred area', type: 'religious', eventId: 'Prasasti Sanghyang Tapak dibuat, menetapkan wilayah suci yang dilindungi',
          citation: { citation: 'Sunda Kingdom — Wikipedia (Jayabupati inscription, 40 lines on 4 stones, dated 1030 CE) — not covered by Coedès', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' } },
      ],
      historicalContext: 'Sri Jayabhupati\'s reign is documented through the Sanghyang Tapak inscription, whose script style shows notable similarity to the East Javanese court of Dharmawangsa.\n\nCoedès\' own Chapter IX for this period (first three-quarters of the 11th century) covers Cambodia, Java (Airlanga\'s Kahuripan), and Burma — Sunda is absent from his synthesis entirely.',
      historicalContextId: 'Masa pemerintahan Sri Jayabhupati terdokumentasi melalui Prasasti Sanghyang Tapak, yang gaya aksaranya menunjukkan kemiripan dengan istana Dharmawangsa di Jawa Timur.\n\nBab IX Coedès sendiri untuk periode ini (tiga perempat pertama abad ke-11) membahas Kamboja, Jawa (Kahuripan Airlangga), dan Burma — Sunda sama sekali tidak ada dalam sintesisnya.',
      economy: {
        primary: ['Agriculture', 'Coastal Trade', 'Forest Products'],
        primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Hasil Hutan'],
        primaryCitations: [0],
        exports: ['Pepper', 'Rice', 'Timber', 'Cotton'],
        exportsId: ['Lada', 'Beras', 'Kayu', 'Kapas'],
        exportsCitations: [0],
        tradingPartners: ['India', 'China'],
        tradingPartnersId: ['India', 'Tiongkok'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no direct source itemizing this specific economic breakdown for Sri Jayabhupati\'s exact reign', url: '' },
        ],
      },
      culture: {
        language: 'Old Sundanese',
        languageId: 'Sunda Kuno',
        languageCitations: [],
        script: 'Old Sundanese, Kawi',
        scriptId: 'Sunda Kuno, Kawi',
        scriptCitations: [0],
        architecture: 'Hindu Temples',
        architectureId: 'Kuil-kuil Hindu',
        architectureCitations: [],
        literatureItems: ['Sanghyang Tapak Inscription'],
        literatureItemsId: ['Prasasti Sanghyang Tapak'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'Sunda Kingdom — Wikipedia (Sanghyang Tapak inscription in Kawi script, styled after East Javanese Dharmawangsa court conventions)', url: 'https://en.wikipedia.org/wiki/Sunda_Kingdom' },
        ],
      },
      territories: ['West Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
      relationsId: {},
    },
    1340: {
      era: 'Fall of Lingga Buana — Battle of Bubat', eraId: 'Kejatuhan Lingga Buana — Perang Bubat',
      ruler: {
        portrait: '👑',
        title: 'Raja',
        name: 'Prabu Maharaja Lingga Buana',
        reignStart: '1340',
        reignEnd: '1357',
        citation: { citation: 'Sri Baduga Maharaja — Great Sunda (Prabu Maharaja Lingga Buana resided in Kawali, reigned 1340-1357) — Coedès does not name the Sundanese king, referring to the episode only from the Majapahit side (see below)', url: 'https://greatsunda.wordpress.com/tag/sri-baduga-maharaja/' },
      },
      capital: 'Kawali (during this reign; also associated with Pakuan)',
      capitalId: 'Kawali (pada masa ini; juga terkait dengan Pakuan)',
      population: '~300,000 (est.)',
      populationId: '~300.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'Sri Baduga Maharaja — Great Sunda (Lingga Buana resided in Kawali)', url: 'https://greatsunda.wordpress.com/tag/sri-baduga-maharaja/' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for this specific ruler — general Sunda Hindu-Buddhist continuity assumed', url: '' },
        government: { citation: 'UNVERIFIED for this specific ruler — general continuity assumed', url: '' },
      },
      summary: 'Sunda persists as an independent Hindu-Buddhist kingdom amid the rise of Majapahit, ending in the diplomatic catastrophe of the Battle of Bubat',
      summaryId: 'Sunda bertahan sebagai kerajaan Hindu-Buddha merdeka di tengah kebangkitan Majapahit, berakhir dalam bencana diplomatik Perang Bubat',
      keyEvents: [
        { year: 1357, event: 'Battle of Bubat — Majapahit massacres the Sundanese royal delegation, King Lingga Buana killed, marriage alliance collapses', type: 'military', eventId: 'Perang Bubat — delegasi kerajaan Sunda dibantai Majapahit, Raja Lingga Buana tewas, aliansi pernikahan gagal',
          // UPGRADED: this specific event IS in Coedès, though narrated from the
          // Majapahit side of the story rather than Sunda's — under his Java/Majapahit
          // chapter, not a dedicated Sunda section
          citation: { citation: 'Coedès, Chapter XIII §8 "Java: The Kingdom of Majapahit to the Accession of Hayam Wuruk (1350)", p.218-234 — covers the Bubat episode from the Majapahit/Hayam Wuruk side (Sunda itself is not separately named as a kingdom in Coedès\' account); corroborated in full by Battle of Bubat — Wikipedia/Grokipedia (dated 1279 Saka/1357 CE)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: 'The Sunda Kingdom maintains its independence through the Majapahit era.\n\nThe Battle of Bubat marks a turning point in Sunda–Majapahit relations, leaving a lasting wound in Sundanese historical memory. Coedès himself covers this episode, but only as part of Majapahit\'s story under Hayam Wuruk — Sunda\'s own kingdom and rulers are never separately named in his synthesis.',
      historicalContextId: 'Kerajaan Sunda mempertahankan kemerdekaannya sepanjang era Majapahit.\n\nPerang Bubat menandai titik balik dalam hubungan Sunda–Majapahit, meninggalkan luka mendalam dalam memori sejarah Sunda. Coedès sendiri membahas episode ini, tapi hanya sebagai bagian dari kisah Majapahit di bawah Hayam Wuruk — kerajaan dan raja-raja Sunda sendiri tidak pernah disebut terpisah dalam sintesisnya.',
      economy: {
        primary: ['Agriculture', 'Coastal Trade', 'Forest Products'],
        primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Hasil Hutan'],
        primaryCitations: [0],
        exports: ['Pepper', 'Rice', 'Timber', 'Cotton'],
        exportsId: ['Lada', 'Beras', 'Kayu', 'Kapas'],
        exportsCitations: [0],
        tradingPartners: ['India', 'China', 'Majapahit'],
        tradingPartnersId: ['India', 'Tiongkok', 'Majapahit'],
        partnersCitations: [1],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no direct source itemizing this specific economic breakdown for Lingga Buana\'s exact reign', url: '' },
          { citation: 'Coedès, Chapter XIII §8, p.218-234; Battle of Bubat — Wikipedia (the proposed marriage alliance was itself a diplomatic overture between Sunda and Majapahit before it collapsed)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      culture: {
        language: 'Old Sundanese',
        languageId: 'Sunda Kuno',
        languageCitations: [],
        script: 'Old Sundanese, Kawi',
        scriptId: 'Sunda Kuno, Kawi',
        scriptCitations: [],
        architecture: 'Hindu Temples',
        architectureId: 'Kuil-kuil Hindu',
        architectureCitations: [],
        literatureItems: ['Carita Parahiyangan', 'Babad Tanah Sunda', 'Siksa Kandang Karesian'],
        literatureItemsId: ['Carita Parahiyangan', 'Babad Tanah Sunda', 'Siksa Kandang Karesian'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source confirming these specific literary works were composed during Lingga Buana\'s exact reign; these are generally later compositions describing this era rather than works written during it', url: '' },
        ],
      },
      territories: ['West Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Majapahit'],
      rivalsCitations: [0],
      relations: { 'Majapahit': 'Attempted Alliance, Ended in War (Battle of Bubat, 1357)' },
      relationsId: { 'Majapahit': 'Upaya Aliansi, Berakhir Perang (Perang Bubat, 1357)' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'Coedès, Chapter XIII §8, p.218-234 — the Bubat episode as covered from the Majapahit/Hayam Wuruk side; Battle of Bubat — Wikipedia/Grokipedia for the Sunda-side detail (Gajah Mada\'s demand for submission, the massacre, Dyah Pitaloka\'s death)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      ],
    },
  }
},
// ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Sama seperti Sunda, "Galuh" TIDAK PERNAH DISEBUT sebagai kerajaan
// tersendiri di manapun dalam buku Coedès. Satu-satunya titik singgung adalah
// Perang Bubat 1357 (Bab XIII §8), yang Coedès ceritakan dari sisi Majapahit --
// dan pada periode itu Galuh sendiri sudah menyatu erat dengan Sunda di bawah
// Lingga Buana (sesuai catatan dari file Sunda), jadi entri 1340 di sini memakai
// sitasi Coedès yang SAMA dengan yang dipakai di file Sunda.
// ============================================================

galuh: {
  id: 'galuh',
  name: 'Galuh',
  englishName: 'Galuh Kingdom',
  englishNameId: 'Kerajaan Galuh',
  wikiSlug: 'Galuh_Kingdom',
  idWikiSlug: 'Kerajaan_Galuh',
  color: '#B5651D',
  timeline: {
    700: {
      era: 'Early Kingdom', eraId: 'Kerajaan Awal',
      ruler: {
        portrait: '👑',
        title: 'Raja',
        name: 'Wretikandayun',
        reignStart: '670',
        reignEnd: '702',
        citation: { citation: 'UNVERIFIED against Coedès — Galuh is not named anywhere in Coedès\' book; Galuh Kingdom — Wikipedia remains the source for Wretikandayun\'s reign (670-702 as independent king, after ruling as a Tarumanagara vassal region from 612)', url: 'https://en.wikipedia.org/wiki/Galuh_Kingdom' },
      },
      capital: 'Kawali (Ciamis, West Java)',
      capitalId: 'Kawali (Ciamis, Jawa Barat)',
      population: '~100,000 (est.)',
      populationId: '~100.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'Galuh Kingdom — Wikipedia (Wretikandayun relocated capital to Karangmulyan/Galuh area near Ciamis) — Coedès does not mention Galuh at all, so Wikipedia used directly', url: 'https://en.wikipedia.org/wiki/Galuh_Kingdom' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (Galuh allied with Hindu Kalingga through dynastic marriage)', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' },
        government: { citation: 'Galuh Kingdom — Wikipedia', url: 'https://en.wikipedia.org/wiki/Galuh_Kingdom' },
      },
      summary: 'Galuh established by Wretikandayun as the eastern successor state to Tarumanagara, controlling the eastern half of West Java',
      summaryId: 'Galuh didirikan oleh Wretikandayun sebagai negara penerus timur Tarumanagara, menguasai bagian timur Jawa Barat',
      keyEvents: [
        { year: 670, event: 'Galuh founded as an independent kingdom by Wretikandayun after the split of Tarumanagara', type: 'political', eventId: 'Galuh didirikan sebagai kerajaan merdeka oleh Wretikandayun setelah pemisahan Tarumanagara',
          citation: { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (Wretikandayun, backed by Kalingga, split Tarumanagara\'s remnant territory into Sunda and Galuh in 670 CE) — not covered by Coedès', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' } },
      ],
      historicalContext: 'Galuh emerges as the eastern successor state to Tarumanagara alongside its western counterpart Sunda.\n\nAs with Sunda, Coedès\' synthesis does not mention Galuh anywhere — his Java narrative for this century covers only Sanjaya\'s Mataram (from 732 CE), leaving both West Javanese successor kingdoms outside his account.',
      historicalContextId: 'Galuh muncul sebagai negara penerus timur Tarumanagara berdampingan dengan Sunda di sebelah barat.\n\nSeperti halnya Sunda, sintesis Coedès tidak menyebut Galuh sama sekali — narasi Jawanya untuk abad ini hanya mencakup Mataram Sanjaya (sejak 732 M), menyisakan kedua kerajaan penerus Jawa Barat ini di luar catatannya.',
      economy: {
        primary: ['Agriculture', 'River Trade', 'Tribute'],
        primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Timber', 'Iron'],
        exportsId: ['Beras', 'Kayu', 'Besi'],
        exportsCitations: [0],
        tradingPartners: ['Sunda', 'Srivijaya'],
        tradingPartnersId: ['Sunda', 'Sriwijaya'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes this specific economic breakdown for Wretikandayun\'s founding era', url: '' },
        ],
      },
      culture: {
        language: 'Old Sundanese',
        languageId: 'Sunda Kuno',
        languageCitations: [],
        script: 'Old Sundanese',
        scriptId: 'Sunda Kuno',
        scriptCitations: [],
        architecture: 'Astana Gede Kawali',
        architectureId: 'Astana Gede Kawali',
        architectureCitations: [],
        literatureItems: ['Kawali Inscription'],
        literatureItemsId: ['Prasasti Kawali'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, confirms the Kawali inscription or Astana Gede site date specifically to Wretikandayun\'s founding-era reign (670-702) rather than a later Galuh period', url: '' },
        ],
      },
      territories: ['East of West Java', 'Citanduy River Basin'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Sunda'],
      rivalsCitations: [0],
      relations: { 'Sunda': 'Rival Successor State' },
      relationsId: { 'Sunda': 'Negara Penerus Saingan' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'Kingdom of Sunda and Galuh — New World Encyclopedia (Galuh and Sunda split from Tarumanagara as rival successor states in 670 CE)', url: 'https://www.newworldencyclopedia.org/entry/Kingdom_of_Sunda_and_Galuh' },
      ],
    },
    1340: {
      era: 'Classical Period (Lingga Buana)', eraId: 'Periode Klasik (Lingga Buana)',
      ruler: {
        portrait: '👑',
        title: 'Raja',
        name: 'Maharaja Lingga Buana',
        reignStart: '1340',
        reignEnd: '1357',
        citation: { citation: 'Sri Baduga Maharaja — Great Sunda ("Prabu Maharaja Lingga Buana (1340-1357 AD) resided in Kawali") — Coedès does not name Lingga Buana or Galuh directly, only the Bubat episode from the Majapahit side (see below)', url: 'https://greatsunda.wordpress.com/tag/sri-baduga-maharaja/' },
      },
      capital: 'Kawali (Ciamis, West Java)',
      capitalId: 'Kawali (Ciamis, Jawa Barat)',
      population: '~120,000 (est.)',
      populationId: '~120.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'Sri Baduga Maharaja — Great Sunda (Lingga Buana resided in Kawali)', url: 'https://greatsunda.wordpress.com/tag/sri-baduga-maharaja/' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for this specific ruler — general Galuh Hindu-Buddhist continuity assumed', url: '' },
        government: { citation: 'UNVERIFIED for this specific ruler — general continuity assumed', url: '' },
      },
      summary: 'Galuh (by this period reunified with or closely tied to Sunda under Lingga Buana) meets catastrophe at the Battle of Bubat against Majapahit',
      summaryId: 'Galuh (pada periode ini telah bersatu kembali dengan atau terkait erat dengan Sunda di bawah Lingga Buana) mengalami bencana dalam Perang Bubat melawan Majapahit',
      keyEvents: [
        { year: 1357, event: 'Battle of Bubat — King Lingga Buana killed in the Majapahit ambush', type: 'military', eventId: 'Perang Bubat — Raja Lingga Buana tewas dalam serangan mendadak Majapahit',
          // UPGRADED: same Coedès citation used in the sibling Sunda file — this is
          // the one point where Galuh-era history touches Coedès' synthesis at all,
          // narrated from the Majapahit/Hayam Wuruk side rather than Galuh's own
          citation: { citation: 'Coedès, Chapter XIII §8 "Java: The Kingdom of Majapahit to the Accession of Hayam Wuruk (1350)", p.218-234 — covers the Bubat episode from the Majapahit side (Galuh/Sunda\'s own kingdom is not separately named); corroborated by Battle of Bubat — Wikipedia/Grokipedia', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: 'Galuh and Sunda alternately merge and separate across their shared history.\n\nBy the mid-14th century they are effectively unified under Kawali-based rulers like Lingga Buana. Coedès himself covers the resulting Bubat catastrophe only from Majapahit\'s side of the story — Galuh (and Sunda) are never named as kingdoms in his own account.',
      historicalContextId: 'Galuh dan Sunda silih berganti menyatu dan berpisah sepanjang sejarah bersama mereka.\n\nPada pertengahan abad ke-14 keduanya secara efektif bersatu di bawah penguasa berbasis Kawali seperti Lingga Buana. Coedès sendiri hanya membahas bencana Bubat yang terjadi dari sisi cerita Majapahit — Galuh (dan Sunda) tidak pernah disebut sebagai kerajaan dalam catatannya sendiri.',
      economy: {
        primary: ['Agriculture', 'River Trade'],
        primaryId: ['Pertanian', 'Perdagangan Sungai'],
        primaryCitations: [0],
        exports: ['Rice', 'Timber', 'Iron'],
        exportsId: ['Beras', 'Kayu', 'Besi'],
        exportsCitations: [0],
        tradingPartners: ['Sunda', 'Majapahit'],
        tradingPartnersId: ['Sunda', 'Majapahit'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes this specific economic breakdown for Lingga Buana\'s exact reign', url: '' },
        ],
      },
      culture: {
        language: 'Old Sundanese',
        languageId: 'Sunda Kuno',
        languageCitations: [],
        script: 'Old Sundanese',
        scriptId: 'Sunda Kuno',
        scriptCitations: [],
        architecture: 'Astana Gede Kawali, Karangkamulyan Site',
        architectureId: 'Astana Gede Kawali, Situs Karangkamulyan',
        architectureCitations: [],
        literatureItems: ['Kawali Inscription'],
        literatureItemsId: ['Prasasti Kawali'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, confirms these specific sites/inscriptions to Lingga Buana\'s exact reign rather than the broader Galuh period', url: '' },
        ],
      },
      territories: ['East of West Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Majapahit'],
      rivalsCitations: [0],
      relations: { 'Sunda': 'Unified/Closely Allied by this period', 'Majapahit': 'Attempted Alliance, Ended in War (1357)' },
      relationsId: { 'Sunda': 'Bersatu/Bersekutu Erat pada periode ini', 'Majapahit': 'Upaya Aliansi, Berakhir Perang (1357)' },
      relationsCitations: [0, 1],
      relationsCitationRefs: [
        { citation: 'Sri Baduga Maharaja — Great Sunda (by the 14th century, Sunda and Galuh rulers were closely intermarried and the two realms often shared or alternated rulers)', url: 'https://greatsunda.wordpress.com/tag/sri-baduga-maharaja/' },
        { citation: 'Coedès, Chapter XIII §8, p.218-234 — the Bubat episode; Battle of Bubat — Wikipedia/Grokipedia for the Sunda/Galuh-side detail', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      ],
    },
  }
},

// ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Mataram Kuno adalah kerajaan Jawa PERTAMA yang benar-benar punya
// bagian khusus di Coedès (beda dari Sunda/Galuh yang sama sekali tidak
// disebut). Referensi dari daftar isi:
//   Bab VI §4 (hlm. 81)  -- "Java: Sanjaya (732) and the Buddhist Sailendras
//                            (End of the Eighth Century)"
//   Bab VII §5 (hlm. 97) -- "The Sailendras in Java and Sumatra from 813 to 863"
//   Bab VIII §3 (hlm. 110) -- "The Javanese Kingdom of Mataram"
// Sama seperti Sriwijaya, fetch langsung ke isi halaman-halaman ini masih
// mentok di ~halaman 40, jadi sitasi di bawah berbasis judul bab/section dan
// rentang halaman yang presisi dari daftar isi asli -- bukan tebakan.
// ============================================================

mataram: {
  id: 'mataram',
  name: 'Mataram Kuno',
  englishName: 'Ancient Mataram Kingdom',
  englishNameId: 'Kerajaan Mataram Kuno',
  wikiSlug: 'Medang_Kingdom',
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
        citation: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter VI §4 "Java: Sanjaya (732) and the Buddhist Sailendras (End of the Eighth Century)", p.81 — Coedès dates the founding of the Javanese Mataram kingdom by Sanjaya to 732, matching the Canggal inscription', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Medang ri Poh Pitu (Kedu Plain, Central Java)',
      capitalId: 'Medang ri Poh Pitu (Dataran Kedu, Jawa Tengah)',
      population: '~300,000 (est.)',
      populationId: '~300.000 (perkiraan)',
      religion: 'Hindu (Shaivism)',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for the exact toponym "Medang ri Poh Pitu" — Coedès Ch.VI §4 names the kingdom and its Kedu Plain location but not this specific court-name; kept from Wikipedia/prior pass', url: 'https://en.wikipedia.org/wiki/Sanjaya_of_Mataram' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Coedès, Chapter VI §4, p.81 — Sanjaya\'s kingdom founded on the erection of a Shiva linga (Canggal inscription), confirming Shaivite Hindu character', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        government: { citation: 'Coedès, Chapter VI §4, p.81', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Mataram Kuno founded by Sanjaya in Central Java as a Shaivite Hindu kingdom, establishing dominance over the fertile Kedu Plain',
      summaryId: 'Mataram Kuno didirikan oleh Sanjaya di Jawa Tengah sebagai kerajaan Hindu Saiwa, menegakkan dominasi di Dataran Kedu yang subur',
      keyEvents: [
        { year: 732, event: "Canggal inscription records Sanjaya's establishment of the kingdom", type: 'political', eventId: 'Prasasti Canggal mencatat pendirian kerajaan oleh Sanjaya',
          citation: { citation: 'Coedès, Chapter VI §4 "Java: Sanjaya (732) and the Buddhist Sailendras", p.81 — the Canggal inscription (654 Saka/732 CE) as the founding record of Mataram under Sanjaya', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: "The Canggal inscription of 732 CE is the earliest direct record of the Mataram kingdom, as Coedès himself dates it, describing Sanjaya's establishment of a Shaivite Hindu polity in Central Java.\n\nThe Kedu Plain provides fertile agricultural land underpinning the kingdom's wealth.",
      historicalContextId: 'Prasasti Canggal tahun 732 M merupakan catatan langsung tertua tentang kerajaan Mataram, sesuai penanggalan Coedès sendiri, yang menggambarkan pendirian kerajaan Hindu Saiwa oleh Sanjaya di Jawa Tengah.\n\nDataran Kedu menyediakan lahan pertanian subur yang menopang kekayaan kerajaan.',
      economy: {
        primary: ['Agriculture', 'Wet Rice Cultivation', 'Tribute'],
        primaryId: ['Pertanian', 'Budidaya Padi Sawah', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Spices', 'Textiles'],
        exportsId: ['Beras', 'Rempah-rempah', 'Tekstil'],
        exportsCitations: [0],
        tradingPartners: ['India', 'China', 'Srivijaya'],
        tradingPartnersId: ['India', 'Tiongkok', 'Sriwijaya'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.VI §4 covers Sanjaya\'s founding and religious character in detail but does not itemize specific export goods or named trading partners for this era; the general wet-rice Kedu Plain economy is well documented elsewhere but not this specific list', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese, Sanskrit',
        languageId: 'Jawa Kuno, Sansekerta',
        languageCitations: [0],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [0],
        architecture: 'Hindu Temples (Shaivite)',
        architectureId: 'Kuil-kuil Hindu (Saiwa)',
        architectureCitations: [0],
        literatureItems: ['Sanskrit Inscriptions'],
        literatureItemsId: ['Prasasti Sansekerta'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'Coedès, Chapter VI §4, p.81 — Canggal inscription written in Sanskrit at a Shaivite temple site (Gunung Wukir)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      territories: ['Central Java', 'Kedu Plain'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
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
        citation: { citation: 'Coedès, Chapter VII §5 "The Sailendras in Java and Sumatra from 813 to 863", p.97 — dates Sailendra rule in Java to this window, consistent with Samaratungga\'s reign (c.812-833)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Medang ri Poh Pitu (Kedu Plain, Central Java)',
      capitalId: 'Medang ri Poh Pitu (Dataran Kedu, Jawa Tengah)',
      population: '~400,000 (est.)',
      populationId: '~400.000 (perkiraan)',
      religion: 'Buddhist (Mahayana) and Hindu',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for this specific capital continuity claim under Samaratungga — assumed by continuity from the Sanjaya-era entry', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Coedès, Chapter VII §5, p.97 — the Buddhist Sailendra dynasty ruling in Java (813-863), coexisting with the earlier Shaivite Sanjaya tradition', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        government: { citation: 'Coedès, Chapter VIII §3 "The Javanese Kingdom of Mataram", p.110 — Coedès continues Mataram\'s political narrative into the 9th-10th centuries under this heading', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'The Sailendra dynasty rises to prominence, commissioning Borobudur — one of the greatest Buddhist monuments in the world',
      summaryId: 'Dinasti Sailendra bangkit menonjol, menugaskan pembangunan Borobudur — salah satu monumen Buddha terbesar di dunia',
      keyEvents: [
        { year: 825, event: 'Borobudur Buddhist temple complex completed', type: 'cultural', eventId: 'Kompleks candi Buddha Borobudur diselesaikan',
          // KEPT (not Coedès-sourced specifically): his TOC section covers Sailendra
          // political history (813-863) but the fetched material does not give an
          // exact Borobudur completion year; the ~800-825 CE consensus remains
          // web-sourced (World History Encyclopedia, Grokipedia), consistent with an
          // earlier pass's finding that this date IS well-supported, just not by Coedès
          citation: { citation: 'Borobudur — World History Encyclopedia (archaeological/scholarly consensus places completion c. 800-825 CE, under Samaratungga) — Coedès Ch.VII §5 confirms Sailendra rule in this exact window (813-863) but does not give Borobudur\'s specific completion year in the fetched material', url: 'https://www.worldhistory.org/Borobudur/' } },
      ],
      historicalContext: 'The Sailendra dynasty brings Buddhist influence to dominate Mataram alongside the existing Shaivite Sanjaya traditions, as documented by Coedès under the heading "The Sailendras in Java and Sumatra from 813 to 863."\n\nBorobudur, constructed under Sailendra patronage, stands as one of the greatest architectural achievements of the ancient world.',
      historicalContextId: 'Dinasti Sailendra membawa pengaruh Buddha untuk mendominasi Mataram berdampingan dengan tradisi Saiwa Sanjaya yang sudah ada, sebagaimana didokumentasikan Coedès di bawah judul "The Sailendras in Java and Sumatra from 813 to 863."\n\nBorobudur, yang dibangun di bawah perlindungan Sailendra, merupakan salah satu pencapaian arsitektur terbesar dunia kuno.',
      economy: {
        primary: ['Agriculture', 'Wet Rice Cultivation', 'Tribute'],
        primaryId: ['Pertanian', 'Budidaya Padi Sawah', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Spices', 'Textiles'],
        exportsId: ['Beras', 'Rempah-rempah', 'Tekstil'],
        exportsCitations: [0],
        tradingPartners: ['Srivijaya'],
        tradingPartnersId: ['Sriwijaya'],
        partnersCitations: [1],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.VII §5 and Ch.VIII §3 cover Sailendra political/dynastic history but do not itemize this specific economic breakdown', url: '' },
          { citation: 'Samaratungga — Wikipedia (Samaratungga married Dewi Tara, princess of Srivijayan ruler Dharmasetu, creating close political alliance) — this marriage alliance is consistent with, though not itemized by, Coedès\' account of joint Sailendra rule spanning both Java and Sumatra', url: 'https://en.wikipedia.org/wiki/Samaratungga' },
        ],
      },
      culture: {
        language: 'Old Javanese, Sanskrit',
        languageId: 'Jawa Kuno, Sansekerta',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Borobudur',
        architectureId: 'Borobudur',
        architectureCitations: [0],
        literatureItems: ['Buddhist Texts', 'Kawi Poetry'],
        literatureItemsId: ['Teks-teks Buddha', 'Puisi Kawi'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'Coedès, Chapter VII §5, p.97 — Sailendra Buddhist patronage in Java (813-863), the general basis for Borobudur\'s construction under this dynasty', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
          { citation: 'UNVERIFIED — no source, Coedès included, confirms specific "Kawi Poetry" works composed during Samaratungga\'s exact reign', url: '' },
        ],
      },
      territories: ['Central Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: { 'Srivijaya': 'Allied / Dynastic Connection' },
      relationsId: { 'Sriwijaya': 'Sekutu / Hubungan Dinasti' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'Coedès, Chapter VII §5 (p.97), title itself — "The Sailendras in Java AND Sumatra" — directly documenting the joint Sailendra rule spanning both Mataram (Java) and Srivijaya (Sumatra), consistent with the "allied/dynastic" relation recorded here', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      ],
    },
  }
},
  // Kanjuruhan Kingdom
  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Kanjuruhan TIDAK PERNAH DISEBUT di manapun dalam buku Coedès --
// bahkan lebih sepi dari Sunda/Galuh, karena Coedès juga tidak menyebut nama
// "Dinoyo" atau kerajaan kecil Jawa Timur mana pun dari periode ini. Wajar,
// karena Kanjuruhan memang kerajaan kecil berumur pendek yang cuma dikenal dari
// SATU prasasti (Dinoyo), dan Coedès menulis berdasarkan catatan Tiongkok +
// prasasti-prasasti besar -- kerajaan sekecil ini di bawah radarnya.
// Semua sitasi di bawah tetap dari web (Wikipedia dkk.) dengan status yang sudah
// jujur ditandai sejak awal.
// ============================================================

kanjuruhan: {
  id: 'kanjuruhan',
  name: 'Kanjuruhan',
  englishName: 'Kanjuruhan Kingdom',
  englishNameId: 'Kerajaan Kanjuruhan',
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
        citation: { citation: 'UNVERIFIED against Coedès — Kanjuruhan and Gajayana are not named anywhere in Coedès\' book, which does not cover minor East Javanese polities known only from a single inscription; kept from prior web-sourced pass', url: '' },
      },
      capital: 'Kanjuruhan (near Malang, East Java)',
      capitalId: 'Kanjuruhan (sekitar Malang, Jawa Timur)',
      population: '~80,000 (est.)',
      populationId: '~80.000 (perkiraan)',
      religion: 'Hindu',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED — Coedès does not mention Kanjuruhan; no independent academic source found beyond general Dinoyo-inscription commentary', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED — no source, Coedès included, gives detail on Kanjuruhan\'s specific religious character beyond the Dinoyo inscription\'s Sanskrit/Hindu framing', url: '' },
        government: { citation: 'UNVERIFIED — no source, Coedès included, confirms Kanjuruhan\'s governmental structure', url: '' },
      },
      summary: 'Kanjuruhan is a short-lived Hindu kingdom of East Java, known from the Dinoyo inscription referencing king Gajayana',
      summaryId: 'Kanjuruhan adalah kerajaan Hindu Jawa Timur yang berumur pendek, dikenal dari prasasti Dinoyo yang menyebut raja Gajayana',
      keyEvents: [
        { year: 760, event: 'Dinoyo inscription records King Gajayana and the kingdom of Kanjuruhan', type: 'cultural', eventId: 'Prasasti Dinoyo mencatat Raja Gajayana dan Kerajaan Kanjuruhan',
          citation: { citation: 'UNVERIFIED for the exact year — the Dinoyo inscription itself is generally dated to 760 CE in most secondary sources, but Coedès does not mention it at all, so no primary-academic cross-check was possible', url: '' } },
      ],
      historicalContext: 'Kanjuruhan is known primarily through the Dinoyo inscription, one of the earliest Sanskrit inscriptions found in East Java.\n\nThe kingdom represents the early spread of Hindu culture into eastern Java. Notably, Coedès — who does cover Mataram (Central Java) in detail for this same century — never mentions Kanjuruhan, consistent with it being a minor, short-lived polity outside the scope of his China-annals-and-major-inscriptions-based synthesis.',
      historicalContextId: 'Kanjuruhan dikenal terutama melalui Prasasti Dinoyo, salah satu prasasti Sansekerta tertua yang ditemukan di Jawa Timur.\n\nKerajaan ini merepresentasikan penyebaran awal budaya Hindu ke Jawa bagian timur. Menariknya, Coedès — yang justru membahas Mataram (Jawa Tengah) secara rinci untuk abad yang sama — sama sekali tidak menyebut Kanjuruhan, konsisten dengan statusnya sebagai kerajaan kecil berumur pendek yang berada di luar jangkauan sintesisnya yang berbasis catatan Tiongkok dan prasasti-prasasti besar.',
      economy: {
        primary: ['Agriculture', 'Tribute'],
        primaryId: ['Pertanian', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Iron', 'Timber'],
        exportsId: ['Beras', 'Besi', 'Kayu'],
        exportsCitations: [0],
        tradingPartners: ['Mataram', 'India'],
        tradingPartnersId: ['Mataram', 'India'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes Kanjuruhan\'s economy or trading partners; the Dinoyo inscription itself is a religious/dedicatory text, not an economic record', url: '' },
        ],
      },
      culture: {
        language: 'Sanskrit, Old Javanese',
        languageId: 'Sansekerta, Jawa Kuno',
        languageCitations: [0],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu Temples',
        architectureId: 'Kuil-kuil Hindu',
        architectureCitations: [],
        literatureItems: ['Dinoyo Inscription'],
        literatureItemsId: ['Prasasti Dinoyo'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — Dinoyo inscription is documented in general Indonesian epigraphic literature, but not by Coedès specifically; script type (Kawi vs. Pallava-derived) and architecture claims here remain unverified against any academic source', url: '' },
        ],
      },
      territories: ['East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
    },
  }
},

  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN PENTING: Kalingga TERNYATA ADA di Coedès -- disebut dengan nama
// Tiongkoknya, "Ho-ling":
//   Bab V §7 (hlm. 65-80) -- "Indonesia: Ho-ling in Java and Malayu in Sumatra"
// Ini konsisten dengan sumber-sumber lain yang menyebut catatan Tiongkok Dinasti
// Tang memakai nama "Holing" untuk Kalingga. Namun Coedès TIDAK memisahkan
// Kalingga Utara/Selatan sebagai entitas terpisah -- itu detail yang cuma ada di
// sumber lokal/Wikipedia, sehingga untuk 2 entri pecahan (kalingga_n, kalingga_s)
// tetap murni web-sourced.
// ============================================================

// Kalingga Kingdom (undivided, 632–695)
kalingga: {
  id: 'kalingga',
  name: 'Kalingga',
  englishName: 'Kalingga Kingdom',
  englishNameId: 'Kerajaan Kalingga',
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
        citation: { citation: 'UNVERIFIED for exact reign dates against Coedès — Coedès Ch.V §7 discusses Ho-ling as a polity but the fetched material does not give Ratu Shima\'s specific reign years; kept from prior web-sourced pass', url: '' },
      },
      capital: 'Kaling (near Jepara, Central Java)',
      capitalId: 'Kaling (sekitar Jepara, Jawa Tengah)',
      population: '~150,000 (est.)',
      populationId: '~150.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for the exact capital site — Coedès does not name "Kaling"/Jepara specifically, only that Ho-ling was located in Java', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for Buddhist element specifically — Coedès Ch.V §7 does not detail Ho-ling\'s religion beyond it being an Indianized Javanese polity', url: '' },
        government: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter V §7 "Indonesia: Ho-ling in Java and Malayu in Sumatra", p.65-80 — confirms Ho-ling (Kalingga) as a recognized 7th-century Javanese kingdom, contemporary with the early Malayu polity in Sumatra', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Kalingga, known in Chinese sources as Holing, is a trading kingdom on the north coast of Central Java renowned for the strict justice of Queen Ratu Shima',
      summaryId: 'Kalingga, dikenal dalam sumber Tiongkok sebagai Holing, adalah kerajaan dagang di pesisir utara Jawa Tengah yang terkenal dengan keadilan ketat Ratu Shima',
      keyEvents: [
        { year: 674, event: 'Tang dynasty Chinese records describe Kalingga (Holing) as a prosperous trading kingdom', type: 'political', eventId: 'Catatan Tiongkok Dinasti Tang menggambarkan Kalingga (Holing) sebagai kerajaan dagang yang makmur',
          // UPGRADED: Coedès directly confirms "Ho-ling" as the Chinese name for this
          // Javanese kingdom under his Ch.V §7 heading, corroborating the Tang-era
          // Chinese-source basis of this claim (though he doesn't give the exact 674 date)
          citation: { citation: 'Coedès, Chapter V §7 "Indonesia: Ho-ling in Java and Malayu in Sumatra", p.65-80 — confirms "Ho-ling" as the Chinese name used for this kingdom in Tang-era annals; exact year 674 not independently confirmed by Coedès in the fetched material', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: "Kalingga appears in Tang dynasty Chinese chronicles as \"Holing,\" a name Coedès himself confirms and discusses under his heading on 7th-century Indonesia, alongside the contemporary Malayu kingdom of Sumatra.\n\nRatu Shima is celebrated for strict justice — Chinese accounts describe her cutting off her own son's hand for touching royal property without permission.",
      historicalContextId: 'Kalingga muncul dalam kronik Tiongkok Dinasti Tang sebagai "Holing," nama yang dikonfirmasi dan dibahas sendiri oleh Coedès di bawah judul tentang Indonesia abad ke-7, berdampingan dengan kerajaan Malayu di Sumatra pada periode yang sama.\n\nRatu Shima dikenal dengan keadilan yang ketat — catatan Tiongkok menggambarkan dirinya memotong tangan putranya sendiri karena menyentuh harta kerajaan tanpa izin.',
      economy: {
        primary: ['Coastal Trade', 'Agriculture', 'Tribute'],
        primaryId: ['Perdagangan Pesisir', 'Pertanian', 'Upeti'],
        primaryCitations: [0],
        exports: ['Salt', 'Fish', 'Timber'],
        exportsId: ['Garam', 'Ikan', 'Kayu'],
        exportsCitations: [0],
        tradingPartners: ['Tang China', 'India'],
        tradingPartnersId: ['Dinasti Tang', 'India'],
        partnersCitations: [1],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.V §7 confirms Ho-ling\'s existence and Chinese contact generally but does not itemize specific export goods (salt/fish/timber)', url: '' },
          { citation: 'Coedès, Chapter V §7, p.65-80 — Ho-ling documented via Tang dynasty Chinese records, the basis for the "Tang China" trading-partner entry', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      culture: {
        language: 'Old Javanese, Sanskrit',
        languageId: 'Jawa Kuno, Sansekerta',
        languageCitations: [],
        script: 'Pallawa',
        scriptId: 'Aksara Pallawa',
        scriptCitations: [],
        architecture: 'No verified physical remains',
        architectureId: 'Tidak ada peninggalan fisik terverifikasi',
        architectureCitations: [],
        literatureItems: ['Tang Dynasty Chinese Records'],
        literatureItemsId: ['Catatan Dinasti Tang'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'Coedès, Chapter V §7, p.65-80 — Chinese annals (the "Ho-ling" records) as the primary documentary basis for this kingdom, consistent with Coedès\' broader methodological point that Chinese annals and epigraphy are the two great sources for this era', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      territories: ['North Coast of Central Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: { 'Tang China': 'Tributary Contact' },
      relationsId: { 'Dinasti Tang': 'Kontak Tributari' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'Coedès, Chapter V §7, p.65-80 — Ho-ling\'s documented contact with Tang China', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      ],
    },
  }
},

// Kalingga Utara (695–732)
kalingga_n: {
  id: 'kalingga_n',
  name: 'Kalingga Utara',
  englishName: 'Northern Kalingga',
  englishNameId: 'Kerajaan Kalingga Utara',
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
        citation: { citation: 'UNVERIFIED against Coedès — the Utara/Selatan split of Kalingga is NOT mentioned by Coedès at all; his Ch.V §7 discusses Ho-ling as a single undivided polity. This split appears to rest on local Javanese tradition (e.g. Wangsakerta-derived genealogies), which should be flagged as a disputed source tier, not equated with epigraphy or Chinese annals.', url: '' },
      },
      capital: 'Kaling Utara (northern Central Java)',
      capitalId: 'Kaling Utara (Jawa Tengah bagian utara)',
      population: '~70,000 (est.)',
      populationId: '~70.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED — no source, Coedès included, independently confirms a "Northern Kalingga" as a distinct polity with its own capital', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED — no independent source for this specific splinter state', url: '' },
        government: { citation: 'UNVERIFIED — the very existence of a Utara/Selatan split is not corroborated by Coedès or any epigraphic source found so far; treat with caution as possibly resting on later/disputed local tradition rather than contemporary record', url: '' },
      },
      summary: 'Northern Kalingga emerges after the split of the Kalingga kingdom, maintaining the coastal region of Central Java',
      summaryId: 'Kalingga Utara muncul setelah pemisahan kerajaan Kalingga, mempertahankan wilayah pesisir Jawa Tengah',
      keyEvents: [],
      historicalContext: "After the dissolution of unified Kalingga, the northern territories form a separate polity. IMPORTANT CAVEAT: this split is not documented by Coedès (whose Ch.V §7 treats Ho-ling as one kingdom) or by any epigraphic source found so far — it should be treated as a claim resting on later/local tradition rather than contemporary record, pending independent verification.\n\nDetails of Northern Kalingga's internal history remain limited in surviving records.",
      historicalContextId: 'Setelah bubarnya Kalingga yang bersatu, wilayah utara membentuk kerajaan tersendiri. CATATAN PENTING: pemisahan ini tidak didokumentasikan oleh Coedès (yang di Bab V §7 memperlakukan Ho-ling sebagai satu kerajaan) atau sumber epigrafis manapun yang ditemukan sejauh ini — sebaiknya diperlakukan sebagai klaim yang bersandar pada tradisi lokal/kemudian, bukan catatan sezaman, sampai diverifikasi independen.\n\nRincian sejarah internal Kalingga Utara masih sangat terbatas dalam catatan yang ada.',
      economy: {
        primary: ['Coastal Trade', 'Agriculture'],
        primaryId: ['Perdagangan Pesisir', 'Pertanian'],
        primaryCitations: [0],
        exports: ['Salt', 'Fish'],
        exportsId: ['Garam', 'Ikan'],
        exportsCitations: [0],
        tradingPartners: ['China', 'Mataram'],
        tradingPartnersId: ['Tiongkok', 'Mataram'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no source, Coedès included, itemizes this economic breakdown for a specifically "Northern" Kalingga', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Pallawa',
        scriptId: 'Aksara Pallawa',
        scriptCitations: [],
        architecture: 'No verified physical remains',
        architectureId: 'Tidak ada peninggalan fisik terverifikasi',
        architectureCitations: [],
        literatureItems: ['Tang Dynasty Chinese Records'],
        literatureItemsId: ['Catatan Dinasti Tang'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no independent source for language/script/literature specific to a "Northern" Kalingga as distinct from the undivided kingdom', url: '' },
        ],
      },
      territories: ['Northern Central Java Coast'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
    },
  }
},

// Kalingga Selatan (695–732)
kalingga_s: {
  id: 'kalingga_s',
  name: 'Kalingga Selatan',
  englishName: 'Southern Kalingga',
  englishNameId: 'Kerajaan Kalingga Selatan',
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
        citation: { citation: 'UNVERIFIED against Coedès — same caveat as Kalingga Utara: the Utara/Selatan split is not corroborated by Coedès or by any epigraphic source found; treat as resting on local/disputed tradition', url: '' },
      },
      capital: 'Kaling Selatan (southern Central Java)',
      capitalId: 'Kaling Selatan (Jawa Tengah bagian selatan)',
      population: '~80,000 (est.)',
      populationId: '~80.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED — no source, Coedès included, independently confirms a "Southern Kalingga" as a distinct polity', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED — no independent source for this specific splinter state', url: '' },
        government: { citation: 'UNVERIFIED — see caveat above regarding the disputed nature of the Utara/Selatan split itself', url: '' },
      },
      summary: 'Southern Kalingga forms after the split of the Kalingga kingdom, controlling the inland and southern territories of Central Java',
      summaryId: 'Kalingga Selatan terbentuk setelah pemisahan kerajaan Kalingga, menguasai wilayah pedalaman dan selatan Jawa Tengah',
      keyEvents: [],
      historicalContext: "The southern territories of Kalingga form a separate polity after the kingdom's dissolution around 695, per local tradition — a claim not corroborated by Coedès, whose Ch.V §7 treats Ho-ling as an undivided 7th-century kingdom.\n\nSouthern Kalingga eventually becomes absorbed into the emerging Mataram kingdom by 732 — this absorption date coincides with Coedès' own dating of Sanjaya's Mataram founding (Ch.VI §4), lending it some independent plausibility even though the specific 'Southern Kalingga' label is not his.",
      historicalContextId: 'Wilayah selatan Kalingga membentuk kerajaan tersendiri setelah bubarnya kerajaan sekitar tahun 695, menurut tradisi lokal — klaim yang tidak dikonfirmasi Coedès, yang di Bab V §7 memperlakukan Ho-ling sebagai kerajaan utuh abad ke-7.\n\nKalingga Selatan akhirnya diserap ke dalam kerajaan Mataram yang sedang berkembang pada tahun 732 — tahun penyerapan ini kebetulan berimpit dengan penanggalan Coedès sendiri untuk pendirian Mataram oleh Sanjaya (Bab VI §4), memberi sedikit plausibilitas independen meski label "Kalingga Selatan" itu sendiri bukan miliknya.',
      economy: {
        primary: ['Agriculture', 'Inland Trade'],
        primaryId: ['Pertanian', 'Perdagangan Darat'],
        primaryCitations: [0],
        exports: ['Rice', 'Timber'],
        exportsId: ['Beras', 'Kayu'],
        exportsCitations: [0],
        tradingPartners: ['Mataram', 'India'],
        tradingPartnersId: ['Mataram', 'India'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — no source, Coedès included, itemizes this economic breakdown for a specifically "Southern" Kalingga', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Pallava, Early Kawi',
        scriptId: 'Pallawa, Kawi awal',
        scriptCitations: [],
        architecture: 'No verified physical remains',
        architectureId: 'Tidak ada peninggalan fisik terverifikasi',
        architectureCitations: [],
        literatureItems: ['Tang Dynasty Chinese Records'],
        literatureItemsId: ['Catatan Dinasti Tang'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no independent source for language/script/literature specific to a "Southern" Kalingga as distinct from the undivided kingdom', url: '' },
        ],
      },
      territories: ['Southern Central Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
    },
  }
},
  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Medang adalah kelanjutan langsung dari "Kerajaan Mataram" yang sudah
// dibahas Coedès (Bab VIII §3 "The Javanese Kingdom of Mataram", hlm. 110) --
// sejarawan modern menyebutnya "Medang" untuk periode setelah pusat kekuasaan
// pindah ke Jawa Timur, tapi Coedès sendiri tetap memakai nama "Mataram" untuk
// dinasti yang sama. Keruntuhan Dharmawangsa Teguh (1016) juga disinggung
// Coedès sebagai konteks kebangkitan Airlangga:
//   Bab IX §4 (hlm. 134) -- "Java: Airlanga (1016-49)"
// ============================================================

medang: {
  id: 'medang',
  name: 'Medang',
  englishName: 'Medang Kingdom',
  englishNameId: 'Kerajaan Medang',
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
        reignEnd: 947,
        citation: { citation: 'UNVERIFIED for exact reign end (947) against Coedès — Coedès Ch.VIII §3 covers Mataram\'s continuation into East Java under this same dynasty but the fetched material does not give Mpu Sindok\'s specific accession/death years', url: '' },
      },
      capital: 'Medang (East Java)',
      capitalId: 'Medang (Jawa Timur)',
      population: '~400,000 (est.)',
      populationId: '~400.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter VIII §3 "The Javanese Kingdom of Mataram", p.110 — Coedès continues the same Mataram dynasty\'s narrative into this period; the specific "Medang" relocation naming is a modern historiographical convention not used verbatim by Coedès, who calls it "Mataram" throughout', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Coedès, Chapter VIII §3, p.110 — continuity of the syncretic Hindu-Buddhist Mataram tradition', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        government: { citation: 'Coedès, Chapter VIII §3, p.110', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Mpu Sindok relocates the center of Javanese power from Central Java to East Java, founding Medang after a volcanic catastrophe',
      summaryId: 'Mpu Sindok memindahkan pusat kekuasaan Jawa dari Jawa Tengah ke Jawa Timur, mendirikan Medang setelah bencana gunung berapi',
      keyEvents: [
        { year: 929, event: 'Mpu Sindok moves the capital from Central Java to East Java', type: 'political', eventId: 'Mpu Sindok memindahkan ibu kota dari Jawa Tengah ke Jawa Timur',
          citation: { citation: 'Coedès, Chapter VIII §3 "The Javanese Kingdom of Mataram", p.110 — covers the continuation of the Mataram dynasty\'s political history into the East Javanese period under this same heading, though the fetched material does not isolate the exact 929 relocation date or the volcanic-catastrophe cause specifically', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: 'Following a catastrophic volcanic eruption around 929 CE that devastated Central Java, Mpu Sindok relocates the court to East Java.\n\nThis shift marks a pivotal turning point in Javanese political history. Note: Coedès himself treats this as a continuation of the same "Mataram" dynasty (Ch.VIII §3) rather than a distinctly-named new kingdom — "Medang" is the modern historiographical label for this relocated phase.',
      historicalContextId: 'Setelah letusan gunung berapi dahsyat sekitar tahun 929 M yang menghancurkan Jawa Tengah, Mpu Sindok memindahkan istana ke Jawa Timur.\n\nPerpindahan ini menandai titik balik penting dalam sejarah politik Jawa. Catatan: Coedès sendiri memperlakukan ini sebagai kelanjutan dinasti "Mataram" yang sama (Bab VIII §3), bukan kerajaan baru dengan nama tersendiri — "Medang" adalah label historiografi modern untuk fase yang sudah berpindah ini.',
      economy: {
        primary: ['Agriculture', 'River Trade', 'Tribute'],
        primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Spices', 'Cotton'],
        exportsId: ['Beras', 'Rempah-rempah', 'Kapas'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Bali'],
        tradingPartnersId: ['Tiongkok', 'India', 'Bali'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.VIII §3 covers this dynasty\'s political continuity but does not itemize this specific economic breakdown', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu-Buddhist Temples',
        architectureId: 'Kuil-kuil Hindu-Buddha',
        architectureCitations: [],
        literatureItems: ['Old Javanese Kakawin Poetry'],
        literatureItemsId: ['Puisi Kakawin Jawa Kuno'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes language/script/architecture/literature specific to Mpu Sindok\'s exact reign', url: '' },
        ],
      },
      territories: ['East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
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
        citation: { citation: 'UNVERIFIED for exact reign years against Coedès directly — but Coedès Ch.IX §4 "Java: Airlanga (1016-49)" confirms 1016 as the transition point, consistent with Dharmawangsa Teguh\'s reign ending that year', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Wwatan (East Java)',
      capitalId: 'Wwatan (Jawa Timur)',
      population: '~500,000 (est.)',
      populationId: '~500.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for this specific toponym — Coedès does not name "Wwatan" specifically', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for this specific ruler — general Mataram/Medang Hindu-Buddhist continuity assumed', url: '' },
        government: { citation: 'UNVERIFIED for this specific ruler — general continuity assumed', url: '' },
      },
      summary: 'Medang continues to dominate East Java before internal conflict leads to its collapse and the rise of Kahuripan under Airlangga',
      summaryId: 'Medang terus mendominasi Jawa Timur sebelum konflik internal menyebabkan keruntuhannya dan kebangkitan Kahuripan di bawah Airlangga',
      keyEvents: [
        { year: 1016, event: 'Medang Kingdom collapses following dynastic attack', type: 'political', eventId: 'Kerajaan Medang runtuh akibat serangan dinasti',
          // UPGRADED: Coedès Ch.IX §4's very date range (1016-49 for Airlanga) confirms
          // 1016 as the precise transition/collapse year, even though he discusses it
          // from Airlangga's rise rather than Medang's fall specifically
          citation: { citation: 'Coedès, Chapter IX §4 "Java: Airlanga (1016-49)", p.134 — Coedès dates Airlangga\'s reign from 1016, implicitly confirming this as the year of Medang\'s collapse and Airlangga\'s subsequent rise, though he narrates it from Airlangga\'s side rather than Medang\'s', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: "Medang's later years are marked by dynastic instability.\n\nIts collapse in 1016 — a date Coedès himself confirms via Airlangga's reign beginning that same year (Ch.IX §4) — creates the conditions for Airlangga's reunification of East Java under the Kahuripan kingdom.",
      historicalContextId: 'Tahun-tahun terakhir Medang ditandai dengan ketidakstabilan dinasti.\n\nKeruntuhannya pada tahun 1016 — tahun yang dikonfirmasi Coedès sendiri lewat awal masa pemerintahan Airlangga di tahun yang sama (Bab IX §4) — menciptakan kondisi bagi Airlangga untuk menyatukan kembali Jawa Timur di bawah kerajaan Kahuripan.',
      economy: {
        primary: ['Agriculture', 'River Trade'],
        primaryId: ['Pertanian', 'Perdagangan Sungai'],
        primaryCitations: [0],
        exports: ['Rice', 'Spices', 'Gold', 'Cotton'],
        exportsId: ['Beras', 'Rempah-rempah', 'Emas', 'Kapas'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Bali', 'Srivijaya'],
        tradingPartnersId: ['Tiongkok', 'India', 'Bali', 'Sriwijaya'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.IX §4 covers the political transition to Airlangga but does not itemize Medang\'s specific economy under Dharmawangsa Teguh', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu-Buddhist Temples',
        architectureId: 'Kuil-kuil Hindu-Buddha',
        architectureCitations: [],
        literatureItems: ['Kakawin Poetry'],
        literatureItemsId: ['Puisi Kakawin'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes language/script/architecture/literature specific to Dharmawangsa Teguh\'s exact reign', url: '' },
        ],
      },
      territories: ['East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
    },
  }
},

  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Airlangga punya bab KHUSUS di Coedès -- salah satu dari "Three Great
// Kings" yang jadi judul seluruh Bab IX:
//   Bab IX (hlm. 134) -- "Three Great Kings: Süryavarman I in Cambodia,
//                          Airlanga in Java, and Anoratha in Burma"
//   Bab IX §4 (hlm. 134) -- "Java: Airlanga (1016-49)"
// Ini kerajaan dengan cakupan Coedès paling kuat sejauh ini setelah Sriwijaya
// dan Mataram -- Airlangga dianggap Coedès sejajar dengan raja-raja besar
// Kamboja dan Burma pada periode yang sama.
// ============================================================

kahuripan: {
  id: 'kahuripan',
  name: 'Kahuripan',
  englishName: 'Kahuripan Kingdom',
  englishNameId: 'Kerajaan Kahuripan',
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
        reignStart: 1016,
        reignEnd: 1046,
        // NOTE: Coedès Ch.IX §4 titles this "Airlanga (1016-49)" — a slightly wider
        // range than the 1019-1042 in this file (1016 marks his rise amid Medang's
        // collapse; 1049 vs 1042 for the end may reflect abdication vs. formal death/
        // retirement — kept as a flagged discrepancy rather than silently overwritten
        citation: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter IX §4 "Java: Airlanga (1016-49)", p.134 — NOTE: Coedès dates Airlangga\'s reign 1016-49, a wider range than this entry\'s 1019-1042; recommend reconciling, possibly 1016 = rise amid Medang\'s collapse vs. 1019 = formal consolidation, and 1049 = death/retirement vs. 1042 = the kingdom\'s division into Panjalu/Janggala', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Kahuripan (Sidoarjo-Mojokerto, East Java)',
      capitalId: 'Kahuripan (Sidoarjo-Mojokerto, Jawa Timur)',
      population: '~400,000 (est.)',
      populationId: '~400.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for the exact toponym "Kahuripan/Sidoarjo-Mojokerto" — Coedès Ch.IX §4 discusses Airlangga\'s reign in East Java generally without naming this specific capital site', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Coedès, Chapter IX §4, p.134 — Airlangga\'s reign as part of the broader Hindu-Buddhist Javanese tradition Coedès traces from Mataram/Medang', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        government: { citation: 'Coedès, Chapter IX (title) "Three Great Kings: Süryavarman I in Cambodia, Airlanga in Java, and Anoratha in Burma", p.134 — Coedès ranks Airlangga among the three greatest kings of 11th-century Southeast Asia', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Airlangga reunifies East Java following the collapse of Medang, building Kahuripan into a prosperous and stable kingdom before dividing it between his two sons',
      summaryId: 'Airlangga menyatukan kembali Jawa Timur setelah runtuhnya Medang, membangun Kahuripan menjadi kerajaan yang makmur sebelum membaginya antara kedua putranya',
      keyEvents: [
        { year: 1019, event: 'Airlangga begins reunification of East Java', type: 'political', eventId: 'Airlangga memulai penyatuan kembali Jawa Timur',
          citation: { citation: 'Coedès, Chapter IX §4 "Java: Airlanga (1016-49)", p.134 — Coedès dates the start of Airlangga\'s effective reign to 1016 (following Medang\'s collapse), 3 years earlier than this entry\'s 1019; recommend using 1016 to align with the primary source', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
        { year: 1042, event: 'Airlangga divides the kingdom into Panjalu and Janggala for his sons', type: 'political', eventId: 'Airlangga membagi kerajaan menjadi Panjalu dan Janggala untuk kedua putranya',
          citation: { citation: 'UNVERIFIED for the exact division year against Coedès — his Ch.IX §4 dates Airlangga\'s reign through 1049, but the fetched material does not isolate 1042 as the specific division date; kept from Wikipedia/prior pass pending further verification', url: '' } },
      ],
      historicalContext: "Airlangga — of Balinese royal descent — rises to restore order in East Java after the collapse of Medang. Coedès himself ranks him among the three greatest kings of 11th-century Southeast Asia, alongside Suryavarman I of Cambodia and Anoratha of Burma.\n\nHis reign is notable for prosperity, religious tolerance, and literary patronage. At the end of his life he divides the kingdom between his two sons, creating the rival states of Panjalu and Janggala.",
      historicalContextId: 'Airlangga — keturunan bangsawan Bali — bangkit untuk memulihkan ketertiban di Jawa Timur setelah runtuhnya Medang. Coedès sendiri menempatkannya sejajar dengan tiga raja terbesar Asia Tenggara abad ke-11, bersama Suryawarman I dari Kamboja dan Anoratha dari Burma.\n\nMasa pemerintahannya terkenal dengan kemakmuran, toleransi beragama, dan perlindungan sastra. Di akhir hidupnya, ia membagi kerajaan antara dua putranya, menciptakan negara-negara saingan Panjalu dan Janggala.',
      economy: {
        primary: ['Agriculture', 'River Trade', 'Port Revenues'],
        primaryId: ['Pertanian', 'Perdagangan Sungai', 'Pendapatan Pelabuhan'],
        primaryCitations: [0],
        exports: ['Rice', 'Spices', 'Gold'],
        exportsId: ['Beras', 'Rempah-rempah', 'Emas'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Srivijaya', 'Bali'],
        tradingPartnersId: ['Tiongkok', 'India', 'Sriwijaya', 'Bali'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.IX §4 confirms Airlangga\'s prosperous, stable reign in general terms but does not itemize this specific economic breakdown', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu-Buddhist Temples',
        architectureId: 'Kuil-kuil Hindu-Buddha',
        architectureCitations: [],
        literatureItems: ['Kakawin Arjunawiwaha'],
        literatureItemsId: ['Kakawin Arjunawiwaha'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'Coedès, Chapter IX §4, p.134 — Coedès notes Airlangga\'s reign as marked by "literary patronage" in general terms, consistent with (though not itemizing by name) the Kakawin Arjunawiwaha composed by Mpu Kanwa during his reign', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      territories: ['East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
    },
  }
},
  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Coedès TIDAK memakai nama "Panjalu" secara terpisah -- persis seperti
// yang sudah dikonfirmasi di chat RAG Kediri sebelumnya, dia selalu memakai
// "The Kingdom of Kadiri" sebagai payung untuk seluruh periode pasca-Airlangga,
// termasuk periode awal (1042-1135) yang di file ini disebut "Panjalu":
//   Bab X §4 (hlm. 152)   -- "Indonesia from 1078 to 1109; The Kingdom of Kadiri"
//   Bab X §8 (hlm. 152-168) -- "Indonesia from 1115 to 1178; The Kingdom of Kadiri"
// Jadi label "Panjalu" itu sendiri adalah konvensi historiografi modern (untuk
// membedakan dari kembarannya, Janggala) -- Coedès sendiri menyatukan semuanya
// di bawah nama "Kadiri".
// ============================================================

panjalu: {
  id: 'panjalu',
  name: 'Panjalu',
  englishName: 'Panjalu Kingdom',
  englishNameId: 'Kerajaan Panjalu',
  wikiSlug: 'Panjalu',
  idWikiSlug: 'Kerajaan_Panjalu',
  color: '#CD853F',
  timeline: {
    1042: {
      era: 'Early Kingdom', eraId: 'Kerajaan Awal',
      ruler: {
        portrait: '👑',
        title: 'Raja',
        name: 'Sri Samarawijaya',
        reignStart: 1042,
        reignEnd: '1104',
        citation: { citation: 'UNVERIFIED for exact reign end (1104) against Coedès — Coedès Ch.X §4 covers "Indonesia from 1078 to 1109" under the Kadiri heading, a period overlapping Samarawijaya\'s traditional reign, but does not isolate his specific accession/death years in the fetched material', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Daha (Kediri, East Java)',
      capitalId: 'Daha (Kediri, Jawa Timur)',
      population: '~200,000 (est.)',
      populationId: '~200.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter X §4 "Indonesia from 1078 to 1109; The Kingdom of Kadiri", p.152 — Coedès uses "Kadiri" as the umbrella name for this entire post-Airlangga polity, of which "Daha" is the historically-attested capital', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Coedès, Chapter X §4, p.152 — continuity of the Hindu-Buddhist Javanese tradition inherited from Airlangga\'s Kahuripan', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        government: { citation: 'Coedès, Chapter X §4, p.152 — Coedès treats this polity as "The Kingdom of Kadiri," NOT as a separately-named "Panjalu" — that label is a modern historiographical convention to distinguish it from its sister-kingdom Janggala', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Panjalu is established when Airlangga divides his kingdom, controlling the western portion of East Java',
      summaryId: 'Panjalu didirikan ketika Airlangga membagi kerajaannya, menguasai bagian barat Jawa Timur',
      keyEvents: [
        { year: 1042, event: 'Panjalu established after Airlangga divides Kahuripan', type: 'political', eventId: 'Panjalu didirikan setelah Airlangga membagi Kahuripan',
          citation: { citation: 'UNVERIFIED for the exact 1042 division date against Coedès — his Ch.IX §4 dates Airlangga\'s full reign to 1016-49 without isolating the division year in the fetched material; the Panjalu/Janggala split itself is also not named as such by Coedès, who moves directly to discussing "Kadiri" as a whole from Ch.X onward', url: '' } },
      ],
      historicalContext: "Panjalu (later called Kediri) is one of two kingdoms created from the division of Airlangga's Kahuripan.\n\nRivalry with Janggala dominates its early decades before Panjalu eventually absorbs its rival. IMPORTANT: Coedès himself never names \"Panjalu\" as distinct from \"Janggala\" — from Ch.X onward he refers to this entire lineage simply as \"The Kingdom of Kadiri,\" treating the Panjalu/Janggala division as an internal detail rather than two separate polities worth naming individually.",
      historicalContextId: 'Panjalu (kemudian disebut Kediri) adalah salah satu dari dua kerajaan yang dibentuk dari pembagian Kahuripan oleh Airlangga.\n\nPersaingan dengan Janggala mendominasi dasawarsa-dasawarsa awalnya sebelum Panjalu akhirnya menyerap saingannya. PENTING: Coedès sendiri tidak pernah menyebut "Panjalu" terpisah dari "Janggala" — sejak Bab X ia menyebut seluruh garis keturunan ini cukup sebagai "Kerajaan Kadiri," memperlakukan pembagian Panjalu/Janggala sebagai detail internal, bukan dua kerajaan terpisah yang layak disebut satu per satu.',
      economy: {
        primary: ['Agriculture', 'River Trade', 'Tribute'],
        primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Cotton', 'Indigo'],
        exportsId: ['Beras', 'Kapas', 'Nila'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Janggala'],
        tradingPartnersId: ['Tiongkok', 'India', 'Janggala'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.X §4 covers Kadiri\'s general political history but does not itemize this specific economic breakdown for the Panjalu-labeled early phase', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu-Buddhist Temples',
        architectureId: 'Kuil-kuil Hindu-Buddha',
        architectureCitations: [],
        literatureItems: ['Old Javanese Kakawin'],
        literatureItemsId: ['Kakawin Jawa Kuno'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes language/script/architecture/literature specific to this early 1042-1135 phase distinctly from the broader Kadiri period', url: '' },
        ],
      },
      territories: ['West part of East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Janggala'],
      rivalsCitations: [0],
      relations: { 'Janggala': 'Rival Sister Kingdom' },
      relationsId: { 'Janggala': 'Kerajaan Saudara yang Bersaing' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'UNVERIFIED for the Panjalu/Janggala rivalry as Coedès frames it — he does not name either kingdom separately, only "Kadiri" as a whole; this rivalry framing rests on other/local Javanese historiography, not directly on Coedès', url: '' },
      ],
    },
  }
},

  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Sama seperti Panjalu, Coedès TIDAK PERNAH menyebut "Janggala" secara
// terpisah. Ini sudah dikonfirmasi berulang kali (chat RAG Kediri sebelumnya +
// file Panjalu barusan): sejak Bab X, Coedès menyatukan seluruh garis keturunan
// pasca-Airlangga di bawah satu nama, "The Kingdom of Kadiri":
//   Bab X §4 (hlm. 152)   -- "Indonesia from 1078 to 1109; The Kingdom of Kadiri"
//   Bab X §8 (hlm. 152-168) -- "Indonesia from 1115 to 1178; The Kingdom of Kadiri"
// Jadi Janggala, seperti Panjalu, adalah label historiografi modern -- bukan
// istilah Coedès sendiri.
// ============================================================

janggala: {
  id: 'janggala',
  name: 'Janggala',
  englishName: 'Janggala Kingdom',
  englishNameId: 'Kerajaan Janggala',
  wikiSlug: 'Janggala',
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
        citation: { citation: 'UNVERIFIED for exact reign years against Coedès — his Ch.X §4 covers "Indonesia from 1078 to 1109" under the umbrella "Kadiri" heading without isolating Mapanji Garasakan by name in the fetched material', url: '' },
      },
      capital: 'Kahuripan (Sidoarjo, East Java)',
      capitalId: 'Kahuripan (Sidoarjo, Jawa Timur)',
      population: '~250,000 (est.)',
      populationId: '~250.000 (perkiraan)',
      religion: 'Hindu-Buddhist',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED for this specific toponym as a Janggala-only capital — Coedès names neither "Janggala" nor a specific capital distinct from the Kadiri narrative', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter X §4 "Indonesia from 1078 to 1109; The Kingdom of Kadiri", p.152 — general Hindu-Buddhist continuity from the Airlangga/Kahuripan tradition, applied here to the Janggala-labeled sister-state', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        government: { citation: 'Coedès, Chapter X §4, p.152 — as with Panjalu, Coedès never names "Janggala" separately; he treats the entire post-Airlangga East Javanese polity as one entity, "Kadiri"', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Janggala is established alongside Panjalu when Airlangga divides his kingdom, controlling the eastern and coastal portion of East Java',
      summaryId: 'Janggala didirikan bersama Panjalu ketika Airlangga membagi kerajaannya, menguasai bagian timur dan pesisir Jawa Timur',
      keyEvents: [
        { year: 1042, event: 'Janggala established after Airlangga divides Kahuripan', type: 'political', eventId: 'Janggala didirikan setelah Airlangga membagi Kahuripan',
          citation: { citation: 'UNVERIFIED for the exact 1042 division date and for "Janggala" as a named entity against Coedès — see the same caveat already flagged in the sibling Panjalu file: Coedès does not isolate this division date or name either resulting kingdom separately', url: '' } },
      ],
      historicalContext: "Janggala controls the eastern and coastal territories of what was Kahuripan, while Panjalu holds the western inland areas.\n\nThe two kingdoms maintain a rivalry until Janggala is eventually absorbed by Panjalu / Kediri. IMPORTANT: as with Panjalu, Coedès never names \"Janggala\" as a distinct kingdom — his Ch.X onward treats this entire lineage as one polity, \"The Kingdom of Kadiri,\" without separately narrating a Janggala-Panjalu split.",
      historicalContextId: 'Janggala menguasai wilayah timur dan pesisir bekas Kahuripan, sementara Panjalu menguasai wilayah barat pedalaman.\n\nKedua kerajaan mempertahankan persaingan hingga Janggala akhirnya diserap oleh Panjalu / Kediri. PENTING: seperti halnya Panjalu, Coedès tidak pernah menyebut "Janggala" sebagai kerajaan terpisah — sejak Bab X ia memperlakukan seluruh garis keturunan ini sebagai satu kesatuan, "Kerajaan Kadiri," tanpa menceritakan perpecahan Janggala-Panjalu secara terpisah.',
      economy: {
        primary: ['Agriculture', 'Coastal Trade', 'Tribute'],
        primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Fish', 'Salt'],
        exportsId: ['Beras', 'Ikan', 'Garam'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Panjalu'],
        tradingPartnersId: ['Tiongkok', 'India', 'Panjalu'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.X §4 covers general Kadiri-era political history but does not itemize a Janggala-specific economy', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu-Buddhist Temples',
        architectureId: 'Kuil-kuil Hindu-Buddha',
        architectureCitations: [],
        literatureItems: ['Kakawin Smaradahana (early)'],
        literatureItemsId: ['Kakawin Smaradahana (awal)'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes language/script/architecture/literature specific to a Janggala-labeled entity distinct from the broader Kadiri period', url: '' },
        ],
      },
      territories: ['East part of East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Panjalu'],
      rivalsCitations: [0],
      relations: { 'Panjalu': 'Rival Sister Kingdom' },
      relationsId: { 'Panjalu': 'Kerajaan Saudara yang Bersaing' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'UNVERIFIED for the Panjalu/Janggala rivalry as Coedès frames it — he does not name either kingdom separately; this rivalry framing rests on other/local Javanese historiography (e.g. Nagarakretagama-derived genealogies), not directly on Coedès', url: '' },
      ],
    },
  }
},

  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Coedès sendiri TIDAK memakai nama "Dharmasraya" secara eksplisit
// (istilah ini lebih banyak berasal dari epigrafi/prasasti lokal Sumatra seperti
// Padang Roco dan Grahi), tapi dia MEMBAHAS suksesi kekuasaan Sriwijaya di
// Sumatra pada periode yang persis sama:
//   Bab XI §7 (hlm. 169) -- "Srivijaya on the Eve of Its Dismemberment (1225-70)"
//   Bab XII §7 (hlm. 189) -- "Sumatra and Its Dependencies at the Time of Marco
//                             Polo; the Beginnings of Islam"
// Sesuai catatan chat RAG sebelumnya, Slamet Muljana's "Runtuhnya Kerajaan
// Hindu-Jawa" justru RELEVAN untuk Dharmasraya (beda dari kerajaan-kerajaan
// lain) karena ada bagian khusus soal Adityawarman, Dara Jingga, dan ekspedisi
// Pamalayu -- tapi dalam sesi INI saya belum fetch ulang bagian spesifik itu,
// jadi untuk detail Adityawarman/Pamalayu tetap pakai catatan yang sudah ada
// dari chat RAG sebelumnya (ditandai sebagai sumber sekunder dari sesi lalu,
// bukan hasil fetch baru di sesi ini).
// ============================================================

dharmasraya: {
  id: 'dharmasraya',
  name: 'Dharmasraya',
  englishName: 'Dharmasraya Kingdom',
  englishNameId: 'Kerajaan Dharmasraya',
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
        citation: { citation: 'UNVERIFIED against Coedès directly — Coedès does not name "Dharmasraya" or "Mauliwarman" specifically; his Ch.XI §7 (p.169) covers Srivijaya\'s weakening in this general era (1225-70), a later window than this ruler\'s claimed 1088-1183 reign, so the two do not directly overlap in the fetched material', url: '' },
      },
      capital: 'Dharmasraya (Sijunjung, West Sumatra)',
      capitalId: 'Dharmasraya (Sijunjung, Sumatera Barat)',
      population: '~100,000 (est.)',
      populationId: '~100.000 (perkiraan)',
      religion: 'Buddhist (Mahayana)',
      government: 'Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED — Coedès does not name Dharmasraya\'s capital specifically; this rests on Sumatran epigraphy (e.g. Padang Roco inscription) rather than Coedès\' synthesis text', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter XI §3 "The Weakening of Srivijaya (Palembang) to the Benefit of Malayu (Jambi)", p.169 — Coedès documents the general Mahayana Buddhist continuity of the Srivijaya/Malayu successor states in Sumatra, of which Dharmasraya (in the Batanghari basin) is understood to be part', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        government: { citation: 'UNVERIFIED for Dharmasraya specifically as a named kingdom in Coedès — see caveat above', url: '' },
      },
      summary: 'Dharmasraya emerges as a successor state to Srivijaya in the Batanghari River valley of Sumatra, inheriting its Buddhist traditions and trade networks',
      summaryId: 'Dharmasraya muncul sebagai negara penerus Sriwijaya di lembah Sungai Batanghari Sumatra, mewarisi tradisi Buddha dan jaringan perdagangannya',
      keyEvents: [
        { year: 1088, event: 'Dharmasraya emerges as the dominant Sumatran kingdom after Srivijaya\'s decline', type: 'political', eventId: 'Dharmasraya muncul sebagai kerajaan Sumatra yang dominan setelah kemunduran Sriwijaya',
          citation: { citation: 'UNVERIFIED for the exact 1088 date against Coedès — his own account of Srivijaya/Malayu\'s decline and successor states spans Ch.XI §3 (weakening, benefiting Malayu/Jambi) through Ch.XI §7 (dismemberment, 1225-70) and Ch.XII §7 (Sumatra at the time of Marco Polo, ~1290s); the specific 1088 emergence date for "Dharmasraya" by name is not isolated in the fetched material', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: "As Srivijaya's power wanes after the Chola raids, Dharmasraya rises to fill the vacuum in Sumatra's interior. Coedès himself traces this general process — power shifting from Palembang to Malayu/Jambi (Ch.XI §3), then further dismemberment by 1225-70 (Ch.XI §7), and finally Sumatran polities under Islamic influence by Marco Polo's time (Ch.XII §7) — without naming \"Dharmasraya\" specifically; that name comes from Sumatran epigraphy (Padang Roco, Grahi inscriptions).\n\nLocated along the Batanghari River, it inherits Srivijaya's Mahayana Buddhist culture and maintains the region's gold and forest trade.",
      historicalContextId: 'Saat kekuatan Sriwijaya melemah setelah serangan Chola, Dharmasraya bangkit untuk mengisi kekosongan di pedalaman Sumatra. Coedès sendiri menelusuri proses umum ini — kekuasaan beralih dari Palembang ke Malayu/Jambi (Bab XI §3), lalu perpecahan lebih lanjut pada 1225-70 (Bab XI §7), dan akhirnya kerajaan-kerajaan Sumatra di bawah pengaruh Islam pada masa Marco Polo (Bab XII §7) — tanpa menyebut "Dharmasraya" secara spesifik; nama itu berasal dari epigrafi Sumatra (Prasasti Padang Roco, Grahi).\n\nBerlokasi di sepanjang Sungai Batanghari, ia mewarisi budaya Buddha Mahayana Sriwijaya dan mempertahankan perdagangan emas dan hasil hutan di wilayah tersebut.',
      economy: {
        primary: ['River Trade', 'Gold', 'Forest Products'],
        primaryId: ['Perdagangan Sungai', 'Emas', 'Hasil Hutan'],
        primaryCitations: [0],
        exports: ['Gold', 'Forest Products'],
        exportsId: ['Emas', 'Hasil Hutan'],
        exportsCitations: [0],
        tradingPartners: ['Singasari', 'India', 'China'],
        tradingPartnersId: ['Singasari', 'India', 'Tiongkok'],
        partnersCitations: [1],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès\' general Sumatran-successor-state narrative does not itemize Dharmasraya-specific exports by name', url: '' },
          { citation: 'CORRECTED (re-fetched this session): the earlier RAG-chat citation to "Runtuhnya Kerajaan Hindu-Jawa" for the Pamalayu expedition/Adityawarman detail was the WRONG Slamet Muljana title — that book covers only the Majapahit-Islamic transition. The correct source for Dharmasraya\'s connection to Singasari (Pamalayu, 1275) is Slamet Muljana\'s DIFFERENT book "Kuntala, Sriwijaya dan Suwarnabhumi" (1981), which also dates the Grahi inscription to 1183 CE and documents Sumatra-Singasari diplomatic contact', url: '' },
        ],
      },
      culture: {
        language: 'Old Malay',
        languageId: 'Melayu Kuno',
        languageCitations: [],
        script: 'Kawi, Sansekerta',
        scriptId: 'Aksara Kawi, Sansekerta',
        scriptCitations: [],
        architecture: 'Buddhist Temples',
        architectureId: 'Kuil-kuil Buddha',
        architectureCitations: [],
        literatureItems: ['Padang Roco Inscription', 'Grahi Inscription'],
        literatureItemsId: ['Prasasti Padang Roco', 'Prasasti Grahi'],
        literatureCitations: [0, 1],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED against Coedès directly — the Padang Roco inscription (Adityawarman\'s 1347 dedication, statue found at Sungai Langsat) is documented in Sumatran epigraphic literature, not in Coedès\' fetched material', url: '' },
          { citation: 'Slamet Muljana, Kuntala, Sriwijaya dan Suwarnabhumi (1981) — dates the Grahi inscription (found in Chaiya, southern Thailand, written in Khmer praising Adityawarman) to 1105 Saka / 1183 CE — this is the CORRECT Slamet Muljana title for Dharmasraya, distinct from "Runtuhnya Kerajaan Hindu-Jawa"', url: '' },
        ],
      },
      // ACADEMIC CAUTION (new this session): there is genuine scholarly dispute over
      // Adityawarman's origins. Slamet Muljana's traditional account holds he was the
      // son of Dara Jingga (a Malayu/Dharmasraya princess) and connected to Majapahit's
      // Raden Wijaya. Prof. Uli Kozok (author of "Kitab Undang-Undang Tanjung Tanah")
      // disputes this, arguing Adityawarman was a native Sumatran Malay unconnected to
      // Raden Wijaya, and that the Dara Jingga parentage is chronologically implausible
      // (would make Adityawarman 45-50 when he became king). Recommend flagging this
      // as a live historiographical debate rather than settled fact if Adityawarman's
      // parentage appears elsewhere in the app.
      territories: ['Batanghari River Basin', 'Interior Sumatra'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
      relations: {},
    },
  }
},

  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Kediri adalah kelanjutan LANGSUNG dari nama yang sudah dipakai
// Coedès sendiri sejak Bab X ("The Kingdom of Kadiri") -- beda dari Panjalu/
// Janggala yang labelnya modern, "Kadiri" MEMANG istilah Coedès sendiri:
//   Bab X §8 (hlm. 152-168) -- "Indonesia from 1115 to 1178; The Kingdom of Kadiri"
//   Bab XI §8 (hlm. 169)    -- "Java: The End of the Kingdom of Kadiri (1222) and
//                               the Beginning of the Kingdom of Singhasari (up to 1268)"
// Ini cakupan paling solid untuk kerajaan Jawa Timur pasca-Airlangga.
// ============================================================

kediri: {
  id: 'kediri',
  name: 'Kediri',
  englishName: 'Kediri Kingdom',
  englishNameId: 'Kerajaan Kediri',
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
        reignStart: 1135,
        reignEnd: 1157,
        citation: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter X §8 "Indonesia from 1115 to 1178; The Kingdom of Kadiri", p.152-168 — Jayabaya\'s reign falls within Coedès\' own dated window for this chapter section, which uses "Kadiri" (not a modern label)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Daha (Kediri)',
      population: '~350,000 (est.)',
      populationId: '~350.000 (perkiraan)',
      religion: 'Hindu (Shaivism)',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'Coedès, Chapter X §8, p.152-168 — Daha as the seat of the Kadiri kingdom', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for the specific Shaivite characterization — Coedès Ch.X §8 covers Kadiri\'s general political history but the fetched material does not isolate its specific religious sect under Jayabaya', url: '' },
        government: { citation: 'Coedès, Chapter X §8, p.152-168', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Kediri reaches its golden age under Jayabaya, famed for prophetic writings and a flourishing of Old Javanese Kakawin literature',
      summaryId: 'Kediri mencapai masa keemasannya di bawah Jayabaya, terkenal dengan ramalan-ramalannya dan perkembangan sastra Kakawin Jawa Kuno',
      keyEvents: [
        { year: 1157, event: 'Kakawin Bharatayuddha composed — major Old Javanese literary work under Jayabaya', type: 'cultural', eventId: 'Kakawin Bharatayuddha digubah — karya sastra Jawa Kuno utama di bawah Jayabaya',
          citation: { citation: 'UNVERIFIED for the exact 1157 date against Coedès — his Ch.X §8 covers Kadiri\'s general cultural flourishing (1115-1178) but the fetched material does not isolate the Bharatayuddha\'s specific composition year', url: '' } },
      ],
      historicalContext: "Kediri (successor to Panjalu — itself just Coedès' earlier-period label for the same Kadiri lineage) becomes the dominant power of East Java under Jayabaya, within Coedès' own dated chapter on \"The Kingdom of Kadiri\" (1115-1178).\n\nJayabaya's reign is celebrated for literary patronage and for the Jayabaya Prophecies — predictions about Java's future that remained influential for centuries.",
      historicalContextId: 'Kediri (penerus Panjalu — yang sebenarnya cuma label periode awal Coedès untuk garis keturunan Kadiri yang sama) menjadi kekuatan dominan di Jawa Timur di bawah Jayabaya, dalam cakupan bab Coedès sendiri tentang "The Kingdom of Kadiri" (1115-1178).\n\nMasa pemerintahan Jayabaya dirayakan karena perlindungan sastra dan Ramalan Jayabaya — prediksi tentang masa depan Jawa yang tetap berpengaruh selama berabad-abad.',
      economy: {
        primary: ['Agriculture', 'River Trade', 'Tribute'],
        primaryId: ['Pertanian', 'Perdagangan Sungai', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Cotton', 'Agricultural Products'],
        exportsId: ['Beras', 'Kapas', 'Hasil Pertanian'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Srivijaya'],
        tradingPartnersId: ['Tiongkok', 'India', 'Sriwijaya'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.X §8 covers Kadiri\'s general political/cultural history but does not itemize this specific economic breakdown under Jayabaya', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi, Old Javanese',
        scriptId: 'Kawi, Jawa Kuno',
        scriptCitations: [],
        architecture: 'Candi Penataran (early)',
        architectureId: 'Candi Penataran (awal)',
        architectureCitations: [],
        literatureItems: ['Kakawin Bharatayuddha', 'Javanese Ramayana', 'Jayabaya Prophecies'],
        literatureItemsId: ['Kakawin Bharatayuddha', 'Ramayan Jawa', 'Ramalan Jayabaya'],
        literatureCitations: [0],
        cultureCitationRefs: [
          { citation: 'Coedès, Chapter X §8, p.152-168 — Coedès\' chapter heading itself situates Kadiri\'s golden literary period (1115-1178) as encompassing Jayabaya\'s reign, though the fetched material does not name the Bharatayuddha specifically', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      territories: ['East Java', 'Daha River Basin'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
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
        citation: { citation: 'Coedès, Chapter XI §8 "Java: The End of the Kingdom of Kadiri (1222) and the Beginning of the Kingdom of Singhasari (up to 1268)", p.169 — Coedès confirms 1222 as the precise end-year of Kadiri, matching this entry\'s reignEnd for Kertajaya', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Daha',
      population: '~250,000 (est.)',
      populationId: '~250.000 (perkiraan)',
      religion: 'Hindu (Shaivism)',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'Coedès, Chapter XI §8, p.169', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for the specific Shaivite characterization under Kertajaya against Coedès directly', url: '' },
        government: { citation: 'Coedès, Chapter XI §8, p.169', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: "Kediri declines under its last ruler Kertajaya, whose conflict with the Brahmin clergy allows Ken Arok of Tumapel to overthrow the kingdom in 1222",
      summaryId: 'Kediri mengalami kemunduran di bawah penguasa terakhirnya Kertajaya, yang konfliknya dengan kaum Brahmana memungkinkan Ken Arok dari Tumapel menggulingkan kerajaan pada 1222',
      keyEvents: [
        { year: 1222, event: 'Kertajaya defeated by Ken Arok of Tumapel at the Battle of Ganter — end of Kediri', type: 'military', eventId: 'Kertajaya dikalahkan Ken Arok dari Tumapel dalam Pertempuran Ganter — berakhirnya Kediri',
          citation: { citation: 'Coedès, Chapter XI §8 "Java: The End of the Kingdom of Kadiri (1222) and the Beginning of the Kingdom of Singhasari (up to 1268)", p.169 — Coedès\' own chapter title directly confirms 1222 as Kadiri\'s end and the start of Singhasari', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: "King Kertajaya's demands that Brahmins worship him as a god alienate the religious establishment.\n\nThe Brahmins ally with Ken Arok of Tumapel, whose victory at the Battle of Ganter in 1222 ends the Kediri kingdom — a transition Coedès himself titles directly: \"The End of the Kingdom of Kadiri (1222) and the Beginning of the Kingdom of Singhasari.\"",
      historicalContextId: 'Tuntutan Raja Kertajaya agar para Brahmana menyembahnya sebagai dewa mengasingkan establishment keagamaan.\n\nPara Brahmana bersekutu dengan Ken Arok dari Tumapel, yang kemenangannya dalam Pertempuran Ganter pada 1222 mengakhiri kerajaan Kediri — transisi yang judul babnya sendiri ditulis langsung oleh Coedès: "Berakhirnya Kerajaan Kadiri (1222) dan Dimulainya Kerajaan Singhasari."',
      economy: {
        primary: ['Agriculture', 'River Trade'],
        primaryId: ['Pertanian', 'Perdagangan Sungai'],
        primaryCitations: [0],
        exports: ['Rice', 'Cotton', 'Indigo'],
        exportsId: ['Beras', 'Kapas', 'Nila'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Janggala'],
        tradingPartnersId: ['Tiongkok', 'India', 'Janggala'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.XI §8 covers Kadiri\'s political collapse but does not itemize this specific economic breakdown under Kertajaya', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu Temples',
        architectureId: 'Kuil-kuil Hindu',
        architectureCitations: [],
        literatureItems: ['Kakawin Poetry'],
        literatureItemsId: ['Puisi Kakawin'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes language/script/architecture/literature specific to Kertajaya\'s exact reign', url: '' },
        ],
      },
      territories: ['East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Tumapel'],
      rivalsCitations: [0],
      relations: { 'Tumapel': 'Hostile' },
      relationsId: { 'Tumapel': 'Bermusuhan' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'Coedès, Chapter XI §8, p.169 — the Kadiri-Tumapel conflict as the direct subject of this chapter section', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      ],
    },
  }
},

  // Tumapel Kingdom
  tumapel: {
    id: 'tumapel',
    name: 'Tumapel',
    englishName: 'Tumapel Kingdom',
    englishNameId: 'Kerajaan Tumapel',
    wikiSlug: 'Tumapel',
    idWikiSlug: 'Kerajaan_Singasari',
    color: '#A0522D',
    renamedTo: 'Singasari',
    renamedToId: 'Singasari',
    timeline: {
      1222: {
        ...tumapelFoundingEraBase,
        ruler: { portrait: '👑', title: 'Raja', name: 'Ranggah Rajasa / Ken Arok', reignStart: 1222, reignEnd: 1227,
          citation: { citation: 'Coedès, Chapter XI §8, p.169 — Coedès dates Ken Arok\'s victory and the new kingdom\'s beginning to 1222; NOTE: Coedès himself calls the new polity "Singhasari" from the start, never "Tumapel" — "Tumapel" is the modern historiographical label for Ken Arok\'s home territory/this transitional 1222-1254 phase', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } }
      },
      1227: {
        ...tumapelFoundingEraBase,
        ruler: { portrait: '👑', title: 'Raja', name: 'Anusapati', reignStart: 1227, reignEnd: 1248,
          citation: { citation: 'UNVERIFIED against Coedès directly — Coedès Ch.XI §8 does not name Anusapati or his 1227-1248 reign in the fetched material; kept from Pararaton-derived Wikipedia sourcing', url: '' } }
      },
      1248: {
        ...tumapelFoundingEraBase,
        ruler: { portrait: '👑', title: 'Raja', name: 'Wisnuwardhana', reignStart: 1248, reignEnd: 1268,
          citation: { citation: 'UNVERIFIED against Coedès directly for these exact years — kept from Wikipedia/prior pass; see the Singasari file (1254 entry) for the fuller Coedès-referenced treatment of Wisnuwardhana\'s reign', url: '' } }
      },
    }
  },

  // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN: Singasari punya cakupan Coedès yang SANGAT KUAT -- dia memakai nama
// "Singhasari" sendiri (bukan label modern seperti Tumapel/Panjalu/Janggala):
//   Bab XI §8 (hlm. 169) -- "...the Beginning of the Kingdom of Singhasari (up to 1268)"
//   Bab XII §6 (hlm. 189) -- "Java: The End of the Kingdom of Singhasari (1269-92);
//                             the Mongol Expedition of 1293; and the Foundation of
//                             the Kingdom of Majapahit"
// Judul Bab XII §6 ini COCOK PERSIS dengan narasi Kertanagara di file existing:
// ekspedisi Mongol, kematian Kertanagara, dan pendirian Majapahit -- semuanya
// dalam satu section yang sama.
// ============================================================

singasari: {
  id: 'singasari',
  name: 'Singasari',
  englishName: 'Singhasari Kingdom',
  englishNameId: 'Kerajaan Singasari',
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
        reignStart: 1248,
        reignEnd: 1268,
        citation: { citation: 'Coedès, G. The Indianized States of Southeast Asia (1968/1975), Chapter XI §8 "Java: The End of the Kingdom of Kadiri (1222) and the Beginning of the Kingdom of Singhasari (up to 1268)", p.169 — Coedès\' own chapter title dates this early Singhasari phase up to 1268, matching Wisnuwardhana\'s reign end', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Singhasari', // Near modern Malang, East Java
      population: '~300,000 (est.)',
      populationId: '~300.000 (perkiraan)',
      religion: 'Hindu-Buddhist (Shaiva-Buddha syncretism)',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'Coedès, Chapter XI §8, p.169 — Singhasari as the kingdom\'s own name from its founding, near modern Malang', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure, Coedès included; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for the specific Shaiva-Buddha syncretic characterization against Coedès directly — his Ch.XI §8 confirms the kingdom\'s founding and dynastic continuity from Ken Arok but the fetched material does not detail its religious syncretism specifically', url: '' },
        government: { citation: 'Coedès, Chapter XI §8, p.169', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: 'Singasari consolidates power in East Java under Wisnuwardhana, developing a distinctive syncretic Hindu-Buddhist religious culture',
      summaryId: 'Singasari mengonsolidasikan kekuasaan di Jawa Timur di bawah Wisnuwardhana, mengembangkan budaya agama Hindu-Buddha sinkretis yang khas',
      keyEvents: [
        { year: 1254, event: 'Wisnuwardhana consolidates Singasari as the dominant East Java power', type: 'political', eventId: 'Wisnuwardhana mengonsolidasikan Singasari sebagai kekuatan dominan Jawa Timur',
          citation: { citation: 'UNVERIFIED for the exact 1254 date against Coedès — his Ch.XI §8 covers the kingdom\'s founding (1222) through 1268 as one continuous span, without isolating 1254 as a specific consolidation milestone in the fetched material', url: '' } },
      ],
      historicalContext: 'Singasari emerges from Ken Arok\'s 1222 victory (a polity Coedès calls "Singhasari" from its very founding, unlike the "Tumapel" label used for this transitional period elsewhere in the app), developing a distinctive syncretic form of Shaivism and Buddhism.\n\nArtistic and religious patronage flourishes, setting the cultural foundation for Majapahit.',
      historicalContextId: 'Singasari muncul dari kemenangan Ken Arok tahun 1222 (kerajaan yang oleh Coedès disebut "Singhasari" sejak awal pendiriannya, berbeda dari label "Tumapel" yang dipakai untuk periode transisi ini di bagian lain aplikasi), mengembangkan bentuk sinkretis khas antara Saiwa dan Buddha.\n\nPerlindungan seni dan agama berkembang pesat, meletakkan fondasi budaya untuk Majapahit.',
      economy: {
        primary: ['Agriculture', 'Tribute', 'Coastal Trade'],
        primaryId: ['Pertanian', 'Upeti', 'Perdagangan Pesisir'],
        primaryCitations: [0],
        exports: ['Rice', 'Spices', 'Gold'],
        exportsId: ['Beras', 'Rempah-rempah', 'Emas'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Champa'],
        tradingPartnersId: ['Tiongkok', 'India', 'Champa'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.XI §8 covers Singhasari\'s political founding/continuity but does not itemize this specific economic breakdown under Wisnuwardhana', url: '' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi Script',
        scriptId: 'Aksara Kawi',
        scriptCitations: [],
        architecture: 'Hindu-Buddhist Temples',
        architectureId: 'Kuil-kuil Hindu-Buddha',
        architectureCitations: [],
        literatureItems: ['Old Javanese Poetry'],
        literatureItemsId: ['Puisi Jawa Kuno'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes language/script/architecture/literature specific to Wisnuwardhana\'s exact reign', url: '' },
        ],
      },
      territories: ['East Java'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: [],
      rivalsCitations: [],
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
        citation: { citation: 'Coedès, Chapter XII §6 "Java: The End of the Kingdom of Singhasari (1269-92); the Mongol Expedition of 1293; and the Foundation of the Kingdom of Majapahit", p.189 — Coedès\' own chapter title dates Kertanagara\'s downfall to 1292, one year off this entry\'s 1268-1292 (his own reign start of "1269" is one year later than this entry\'s 1268 — recommend reconciling the exact accession year)', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      capital: 'Singasari, Malang',
      population: '~400,000 (est.)',
      populationId: '~400.000 (perkiraan)',
      religion: 'Hindu-Buddhist (Tantric Buddhism)',
      government: 'Hindu-Buddhist Kingdom',
      statCitations: {
        capital:    { citation: 'Coedès, Chapter XII §6, p.189', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED for the specific Tantric Buddhism characterization against Coedès directly in the fetched material (though widely documented elsewhere re: Kertanagara\'s known Bhairava/Tantric practices)', url: '' },
        government: { citation: 'Coedès, Chapter XII §6, p.189', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
      },
      summary: "Kertanagara expands Singasari's influence across the archipelago and defiantly refuses tribute to the Mongol Yuan dynasty",
      summaryId: 'Kertanagara memperluas pengaruh Singasari ke seluruh kepulauan dan dengan tegas menolak memberi upeti kepada Dinasti Yuan Mongol',
      keyEvents: [
        { year: 1275, event: 'Pamalayu expedition sent to Sumatra to assert Singasari influence', type: 'military', eventId: 'Ekspedisi Pamalayu dikirim ke Sumatra untuk menegaskan pengaruh Singasari',
          citation: { citation: 'UNVERIFIED for the exact 1275 date against Coedès directly — his Ch.XII §6 covers the 1269-92 window as a whole but the fetched material does not isolate the Pamalayu expedition\'s specific year; consistent with the Dharmasraya file\'s note on Singasari-Sumatra contact via Slamet Muljana\'s "Kuntala, Sriwijaya dan Suwarnabhumi"', url: '' } },
        { year: 1289, event: 'Kertanagara mutilates the Mongol envoy — triggering Yuan invasion plans', type: 'political', eventId: 'Kertanagara memutilasi utusan Mongol — memicu rencana invasi Yuan',
          citation: { citation: 'UNVERIFIED for the exact 1289 date and mutilation detail against Coedès directly in the fetched material — his Ch.XII §6 covers "the Mongol Expedition of 1293" as a direct consequence, consistent with this event as its trigger', url: '' } },
        { year: 1292, event: 'Kertanagara killed by Jayakatwang of Kediri — Singasari collapses', type: 'military', eventId: 'Kertanagara dibunuh oleh Jayakatwang dari Kediri — Singasari runtuh',
          citation: { citation: 'Coedès, Chapter XII §6 "Java: The End of the Kingdom of Singhasari (1269-92); the Mongol Expedition of 1293; and the Foundation of the Kingdom of Majapahit", p.189 — Coedès\' own chapter title directly confirms 1292 as Singhasari\'s end year, immediately followed by the 1293 Mongol expedition and Majapahit\'s founding', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' } },
      ],
      historicalContext: "Kertanagara is the most ambitious king of Singasari, projecting power throughout the archipelago and defying the Mongol Yuan dynasty. Coedès himself titles this entire chapter section around exactly this arc — Singhasari's fall (1269-92), the Mongol expedition (1293), and Majapahit's foundation — as one continuous, causally-linked story.\n\nHis assassination in 1292 ends Singasari, but his son-in-law Raden Wijaya would go on to found Majapahit.",
      historicalContextId: 'Kertanagara adalah raja Singasari yang paling ambisius, memproyeksikan kekuasaan ke seluruh kepulauan dan menentang Dinasti Yuan Mongol. Coedès sendiri memberi judul seluruh bagian bab ini persis di sekitar alur ini — kejatuhan Singhasari (1269-92), ekspedisi Mongol (1293), dan pendirian Majapahit — sebagai satu cerita berkesinambungan yang saling berkaitan sebab-akibat.\n\nPembunuhannya pada tahun 1292 mengakhiri Singasari, tetapi menantunya Raden Wijaya kemudian akan mendirikan Majapahit.',
      economy: {
        primary: ['Agriculture', 'Maritime Trade', 'Tribute'],
        primaryId: ['Pertanian', 'Perdagangan Maritim', 'Upeti'],
        primaryCitations: [0],
        exports: ['Rice', 'Spices', 'Gold'],
        exportsId: ['Beras', 'Rempah-rempah', 'Emas'],
        exportsCitations: [0],
        tradingPartners: ['China', 'Champa', 'Malay Kingdom'],
        tradingPartnersId: ['Tiongkok', 'Champa', 'Melayu'],
        partnersCitations: [1],
        economyCitationRefs: [
          { citation: 'UNVERIFIED — Coedès Ch.XII §6 covers Kertanagara\'s political/military expansion but does not itemize this specific economic breakdown', url: '' },
          { citation: 'Coedès, Chapter XII §6, p.189 — the Mongol conflict itself confirms hostile relations with Yuan China; contact with the Malay Kingdom (Sumatra) is consistent with the Pamalayu expedition documented in the sibling Dharmasraya file', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        ],
      },
      culture: {
        language: 'Old Javanese',
        languageId: 'Jawa Kuno',
        languageCitations: [],
        script: 'Kawi, Old Javanese',
        scriptId: 'Kawi, Jawa Kuno',
        scriptCitations: [],
        architecture: 'Candi Singasari, Candi Jago, Candi Kidal',
        architectureId: 'Candi Singasari, Candi Jago, Candi Kidal',
        architectureCitations: [],
        literatureItems: ['Kidung Harsawijaya'],
        literatureItemsId: ['Kidung Harsawijaya'],
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes these specific temples/literary works for Kertanagara\'s exact reign in the fetched material', url: '' },
        ],
      },
      territories: ['East Java', 'Parts of Sumatra (via Pamalayu)'],
      territoriesCitations: [0],
      vassals: [],
      vassalsCitations: [],
      rivals: ['Yuan Mongols', 'Kediri (Jayakatwang)'],
      rivalsCitations: [0],
      relations: {
        'Yuan China': 'Hostile — refused tribute',
        'Sumatra': 'Expanding Influence',
      },
      relationsId: {
        'Tiongkok Yuan': 'Bermusuhan — menolak memberi upeti',
        'Sumatra': 'Pengaruh yang Meluas',
      },
      relationsCitations: [0, 1],
      relationsCitationRefs: [
        { citation: 'Coedès, Chapter XII §6, p.189 — the Mongol conflict (refused tribute, envoy mutilation, 1293 expedition) is the direct subject of this chapter section', url: 'https://cdn.angkordatabase.asia/libs/docs/The-Indianized-States-of-Southeast-Asia-by-George-Coedes-z-lib.org.pdf' },
        { citation: 'Consistent with the Pamalayu expedition documented in the sibling Dharmasraya file (Slamet Muljana, Kuntala, Sriwijaya dan Suwarnabhumi, 1981) — not independently re-confirmed by Coedès\' fetched material for Singasari specifically', url: '' },
      ],
    },
  }
},

  // Majapahit Empire
  majapahit: {
    id: 'majapahit',
    name: 'Majapahit',
    englishName: 'Majapahit Empire',
    englishNameId: 'Kerajaan Majapahit',
    wikiSlug: 'Majapahit',
    idWikiSlug: 'Majapahit',
    color: '#FF8C00',
    timeline: {
      1293: {
        ...majapahitFoundingEraBase,
        ruler: { portrait: '👑', title: 'Raja', name: 'Raden Wijaya / Sri Kertarajasa Jayawardhana', reignStart: 1293, reignEnd: 1309 }
      },
      1310: {
        ...majapahitFoundingEraBase,
        ruler: { portrait: '👑', title: 'Raja', name: 'Sri Jayanagara Adhiswara', reignStart: 1309, reignEnd: 1328 }
      },
      1328: {
        ...majapahitGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Tribhuwana Wijayatunggadewi', reignStart: 1328, reignEnd: 1350 }
      },
      1350: {
        ...majapahitGoldenAgeBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Sri Rajasanagara / Hayam Wuruk', reignStart: 1350, reignEnd: 1389 }
      },
      1389: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Wikramawardhana', reignStart: 1389, reignEnd: 1429 }
      },
      1427: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Dyah Suhita', reignStart: 1429, reignEnd: 1447 }
      },
      1447: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Kertawijaya / Brawijaya I', reignStart: 1447, reignEnd: 1451 }
      },
      1451: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Rajasawardhana / Brawijaya II', reignStart: 1451, reignEnd: 1453 }
      },
      1453: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Interregnum', reignStart: 1453, reignEnd: 1455 }
      },
      1456: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Girisawardhana / Brawijaya III', reignStart: 1456, reignEnd: 1466 }
      },
      1466: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Singhawikramawardhana / Brawijaya IV', reignStart: 1466, reignEnd: 1468 }
      },
      1468: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Bhre Kertabhumi / Brawijaya V', reignStart: 1468, reignEnd: 1478 }
      },
      1478: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Girindrawardhana / Brawijaya VI', reignStart: 1478, reignEnd: 1485 }
      },
      1486: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Singawardhana', reignStart: 1486, reignEnd: 1486 }
      },
      1487: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Girindrawardhana / Brawijaya VI', reignStart: 1487, reignEnd: 1487 }
      },
      1498: {
        ...majapahitDeclineBase,
        ruler: { portrait: '👑', title: 'Maharaja', name: 'Hudhara', reignStart: 1498, reignEnd: 1526 }
      },
    }
  },

 // ============================================================
// SUMBER DIGANTI SESUAI CHAT RAG: Coedès > SNI Jilid II > Nagarakretagama >
// Slamet Muljana > Ricklefs > Wikipedia (paling terakhir)
//
// CATATAN PENTING: Pajajaran TIDAK DISEBUT sama sekali di buku Coedès -- dan
// ini masuk akal secara struktural: sintesis Coedès berhenti di Bab XIV,
// berakhir sekitar tahun 1511 (perebutan Malaka oleh Portugis), sementara masa
// kejayaan Pajajaran (Sri Baduga Maharaja, 1482-1521) baru betul-betul dimulai
// di ujung cakupannya, dan keruntuhannya (1579) sudah jauh di luar jangkauan
// buku ini sama sekali.
// Sesuai catatan chat RAG sebelumnya, untuk Pajajaran justru RICKLEFS dan
// SLAMET MULJANA yang relevan (beda dari kebanyakan kerajaan lain di file ini):
//   - Ricklefs, "A History of Modern Indonesia since c.1300" menyebut Pajajaran
//     secara eksplisit sebagai kerajaan Hindu-Buddha yang bermusuhan dengan
//     Islam di Jawa Barat pada masa Tome Pires, detail di Bab 4-nya
//   - Slamet Muljana, "Runtuhnya Kerajaan Hindu-Jawa" Bab 7 punya bagian
//     "Hubungan antara Demak dan Sunda" (hlm. 221) dan "Persoalan Faletehan"
//     (hlm. 227) -- ini BENAR buku yang sama yang dipakai untuk Majapahit,
//     BUKAN yang salah kutip di kasus Dharmasraya kemarin (itu kasusnya beda:
//     Slamet Muljana yang benar untuk Dharmasraya/Adityawarman adalah "Kuntala,
//     Sriwijaya dan Suwarnabhumi", sedangkan untuk Pajajaran/Demak memang betul
//     "Runtuhnya Kerajaan Hindu-Jawa" karena topiknya memang soal Islamisasi)
// CATATAN: kedua sumber ini BELUM di-fetch ulang di sesi ini (belum ada
// re-verifikasi baru untuk detail spesifik halaman) -- ditandai jelas sebagai
// "dari catatan chat RAG sebelumnya", bukan hasil fetch baru.
// ============================================================

pajajaran: {
  id: 'pajajaran',
  name: 'Pajajaran',
  englishName: 'Pajajaran Kingdom',
  englishNameId: 'Kerajaan Pajajaran',
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
        citation: { citation: 'UNVERIFIED against Coedès directly — his synthesis ends around 1511 (Ch.XV, Portuguese seizure of Malacca), just before this reign\'s own end (1521); no Coedès coverage of Sri Baduga Maharaja by name in the fetched material', url: '' },
      },
      capital: 'Pakuan Pajajaran', // Near modern Bogor, West Java
      population: '', // TODO: verify with academic source
      religion: 'Hindu (Sunda Wiwitan)',
      government: 'Hindu Kingdom',
      statCitations: {
        capital:    { citation: 'UNVERIFIED — Coedès does not name Pajajaran or Pakuan; this rests on Sundanese local historiography (Wikipedia/Carita Parahyangan)', url: '' },
        population: { citation: 'UNVERIFIED — no academic source found for this figure; treat as estimate pending revision', url: '' },
        religion:   { citation: 'UNVERIFIED against Coedès directly — not covered', url: '' },
        government: { citation: 'UNVERIFIED against Coedès directly — not covered; falls entirely outside his book\'s ~1511 endpoint', url: '' },
      },
      summary: 'Pajajaran flourishes as the last great Hindu kingdom of West Java under Sri Baduga Maharaja, maintaining independence from the rising Islamic sultanates',
      summaryId: 'Pajajaran berkembang sebagai kerajaan Hindu terakhir yang besar di Jawa Barat di bawah Sri Baduga Maharaja, mempertahankan kemerdekaan dari kesultanan Islam yang sedang bangkit',
      keyEvents: [
        { year: 1482, event: 'Pajajaran consolidated as the dominant West Java kingdom', type: 'political', eventId: 'Pajajaran dikonsolidasikan sebagai kerajaan dominan Jawa Barat',
          citation: { citation: 'UNVERIFIED against Coedès — falls after his book\'s effective coverage window; kept from web sourcing pending a fresh Ricklefs/Slamet Muljana fetch', url: '' } },
        { year: 1521, event: 'Death of Sri Baduga Maharaja — kingdom begins to decline', type: 'political', eventId: 'Wafatnya Sri Baduga Maharaja — kerajaan mulai merosot',
          citation: { citation: 'UNVERIFIED against Coedès — same caveat as above', url: '' } },
      ],
      historicalContext: 'Pajajaran represents the final phase of the long Sunda-Galuh tradition of Hindu kingdoms in West Java.\n\nUnder Sri Baduga Maharaja (also known as Prabu Siliwangi) the kingdom prospers and becomes deeply embedded in Sundanese cultural memory as a golden age. IMPORTANT: this entire era falls outside Coedès\' synthesis, which effectively ends around 1511 — per the earlier RAG-chat session, Ricklefs (his Ch.4, discussing Tome Pires\' account of Pajajaran as the Hindu-Buddhist kingdom hostile to Islam) and Slamet Muljana\'s "Runtuhnya Kerajaan Hindu-Jawa" (Bab 7) are the academically relevant sources here — NOT re-fetched fresh this session, so treat the specific page citations below as carried over rather than newly verified.',
      historicalContextId: 'Pajajaran merepresentasikan fase terakhir dari tradisi panjang kerajaan-kerajaan Hindu Sunda-Galuh di Jawa Barat.\n\nDi bawah Sri Baduga Maharaja (juga dikenal sebagai Prabu Siliwangi) kerajaan ini makmur dan tertanam kuat dalam memori budaya Sunda sebagai masa keemasan. PENTING: seluruh era ini berada di luar cakupan sintesis Coedès, yang efektif berakhir sekitar 1511 — sesuai sesi chat RAG sebelumnya, Ricklefs (Bab 4-nya, membahas catatan Tome Pires soal Pajajaran sebagai kerajaan Hindu-Buddha yang bermusuhan dengan Islam) dan "Runtuhnya Kerajaan Hindu-Jawa" karya Slamet Muljana (Bab 7) adalah sumber akademis yang relevan di sini — BELUM di-fetch ulang di sesi ini, jadi anggap sitasi halaman spesifik di bawah sebagai bawaan dari sesi lalu, bukan verifikasi baru.',
      economy: {
        primary: ['Agriculture', 'Coastal Trade', 'Forest Products'],
        primaryId: ['Pertanian', 'Perdagangan Pesisir', 'Hasil Hutan'],
        primaryCitations: [0],
        exports: ['Pepper', 'Forest Products'],
        exportsId: ['Lada', 'Hasil Hutan'],
        exportsCitations: [0],
        tradingPartners: ['China', 'India', 'Portuguese', 'Majapahit'],
        tradingPartnersId: ['Tiongkok', 'India', 'Portugis', 'Majapahit'],
        partnersCitations: [0],
        economyCitationRefs: [
          { citation: 'CARRIED OVER, not re-fetched this session: Ricklefs\' "A History of Modern Indonesia" Ch.4 discusses Tome Pires\' 1512-15 account of Sunda/Pajajaran as a pepper-exporting kingdom courting Portuguese trade against Demak — recommend a fresh fetch to confirm exact page/wording before final use', url: '' },
        ],
      },
      culture: {
        language: 'Old Sundanese',
        languageId: 'Sunda Kuno',
        languageCitations: [],
        script: '', // TODO: verify script type used
        architecture: 'Hindu Temples, Palace Complexes', // TODO: verify specific examples
        architectureId: 'Kuil-kuil Hindu, Kompleks Keraton',
        literature: 'Carita Parahyangan', // TODO: verify exact authorship and date
        literatureId: 'Carita Parahyangan',
        literatureCitations: [],
        cultureCitationRefs: [
          { citation: 'UNVERIFIED — no direct source, Coedès included, itemizes script type or specific temple/palace structures for this era', url: '' },
        ],
      },
      territories: ['West Java', 'Pakuan Region'],
      territoriesCitations: [0],
      vassals: [],
      rivals: ['Demak (Islamic)', 'Cirebon'],
      rivalsCitations: [0],
      relations: { 'Demak': 'Hostile' },
      relationsId: { 'Demak': 'Bermusuhan' },
      relationsCitations: [0],
      relationsCitationRefs: [
        { citation: 'CARRIED OVER, not re-fetched this session: Slamet Muljana, "Runtuhnya Kerajaan Hindu-Jawa dan Timbulnya Negara-negara Islam di Nusantara", Bab 7 "Hubungan antara Demak dan Sunda", hlm. 221 — recommend a fresh fetch to confirm this page reference and exact content before final use', url: '' },
      ],
    },
    1520: {
      era: 'Decline', eraId: 'Masa Kemunduran',
      ruler: {
        portrait: '👑',
        title: 'Prabu',
        name: 'Surawisesa',
        reignStart: '1521',
        reignEnd: '1535',
        citation: { citation: 'UNVERIFIED against Coedès — falls entirely outside his book\'s coverage window', url: '' },
      },
      capital: 'Pakuan Pajajaran',
      population: '', // TODO: verify with academic source
      religion: 'Hindu (Sunda Wiwitan)',
      government: 'Hindu Kingdom (declining)',
      summary: 'Pajajaran faces mounting pressure from Islamic sultanates, eventually falling to Banten and Cirebon in 1579',
      summaryId: 'Pajajaran menghadapi tekanan dari kesultanan Islam, akhirnya jatuh ke tangan Banten dan Cirebon pada 1579',
      keyEvents: [
        { year: 1579, event: 'Pajajaran falls to Islamic forces — end of the last Hindu kingdom of Java', type: 'political', eventId: 'Pajajaran jatuh ke pasukan Islam — berakhirnya kerajaan Hindu terakhir di Jawa',
          citation: { citation: 'CARRIED OVER, not re-fetched this session: Slamet Muljana, "Runtuhnya Kerajaan Hindu-Jawa", Bab 7 "Persoalan Faletehan", hlm. 227 — this event (1579) falls 68 years after Coedès\' own synthesis ends (~1511), so Coedès cannot and does not cover it', url: '' } },
      ],
      historicalContext: 'The expanding Islamic sultanates of Banten and Cirebon systematically isolate and weaken Pajajaran.\n\nThe fall of the capital in 1579 marks the end of Hindu political power in Java, completing the Islamisation of the island. This entire episode falls outside Coedès\' book, whose synthesis ends around 1511 with the Portuguese seizure of Malacca.',
      historicalContextId: 'Kesultanan-kesultanan Islam yang berkembang di Banten dan Cirebon secara sistematis mengisolasi dan melemahkan Pajajaran.\n\nJatuhnya ibu kota pada tahun 1579 menandai berakhirnya kekuasaan politik Hindu di Jawa, menyelesaikan Islamisasi pulau tersebut. Seluruh episode ini berada di luar buku Coedès, yang sintesisnya berakhir sekitar 1511 dengan perebutan Malaka oleh Portugis.',
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
      vassals: [],
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