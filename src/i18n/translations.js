const translations = {
  id: {
    // Legend & Events (MyMap)
    legendTitle: (year) => `Kerajaan Aktif (${year})`,
    legendAriaLabel: 'Kerajaan aktif',
    eventsTitle: 'Peristiwa',
    eventsAriaLabel: 'Peristiwa terkini',
    emptyState: 'Tidak ada kerajaan yang tercatat pada periode ini',

    // Tabs
    tabOverview: 'Ikhtisar',
    tabHistory: 'Sejarah',
    tabEconomy: 'Ekonomi',
    tabCulture: 'Budaya',
    tabRelations: 'Hubungan',

    // Stat labels
    capital: 'Ibu Kota',
    population: 'Populasi',
    religion: 'Agama',
    government: 'Pemerintahan',

    // Section headings
    keyEvents: 'Peristiwa Penting',
    historicalContext: 'Konteks Sejarah',
    regionalTimeline: 'Garis Waktu Regional',
    primaryIndustries: 'Industri Utama',
    exports: 'Ekspor',
    tradingPartners: 'Mitra Dagang',
    noEconomyData: 'Data ekonomi belum tersedia untuk periode ini',
    language: 'Bahasa',
    script: 'Aksara',
    architecture: 'Arsitektur',
    literature: 'Sastra',
    noCultureData: 'Data budaya belum tersedia untuk periode ini',
    territories: 'Wilayah',
    vassals: 'Vassal & Tributari',
    rivals: 'Rival',
    diplomaticRelations: 'Hubungan Diplomatik',

    // Panel buttons & actions
    closePanel: 'Tutup panel',
    openWiki: 'Buka Wikipedia',
    closeWiki: 'Tutup Wikipedia',
    openWikiPanel: 'Buka panel Wikipedia',
    closeWikiPanel: 'Tutup panel Wikipedia',
    sourcesTitle: 'Sumber & Referensi',
    closeSources: 'Tutup sumber',
    tabsAriaLabel: 'Tab informasi kerajaan',
    sourceFooter: 'Selalu verifikasi dengan sumber primer',
    footerText: 'Atlas Sejarah Asia Tenggara',

    // HistoryBot
    botTitle: 'Chatbot',
    botSubtitle: 'Tanya tentang sejarah Nusantara',
    botAriaLabel: 'Chatbot Sejarah AI',
    clearChat: 'Hapus obrolan',
    closeChatbot: 'Tutup chatbot',
    messagesAriaLabel: 'Pesan obrolan',
    thinkingAriaLabel: 'Sedang berpikir...',
    inputPlaceholder: 'Tanya tentang kerajaan ini...',
    inputAriaLabel: 'Ajukan pertanyaan tentang kerajaan ini',
    sendMessage: 'Kirim pesan',
    greetingTerritory: (name, year, era) =>
      `Anda menjelajahi ${name} dalam linimasa ini, masa ${era}. Apa yang ingin Anda ketahui tentang kerajaan ini?`,
    greetingDefault: 'Selamat datang, pelajar. Tanyakan apa saja tentang kerajaan pra-kolonial Nusantara (400–1600 M).',

    // Ask AI button
    askAbout: (name) => `Tanya: ${name}`,
    askDefault: 'Chatbot',

    // Header search
    searchPlaceholder: 'Cari kerajaan...',
    searchAriaLabel: 'Cari kerajaan',
  },

  en: {
    // Legend & Events (MyMap)
    legendTitle: (year) => `Active Empires (${year})`,
    legendAriaLabel: 'Active kingdoms',
    eventsTitle: 'Events',
    eventsAriaLabel: 'Recent events',
    emptyState: 'No recorded kingdoms for this period',

    // Tabs
    tabOverview: 'Overview',
    tabHistory: 'History',
    tabEconomy: 'Economy',
    tabCulture: 'Culture',
    tabRelations: 'Relations',

    // Stat labels
    capital: 'Capital',
    population: 'Population',
    religion: 'Religion',
    government: 'Government',

    // Section headings
    keyEvents: 'Key Events',
    historicalContext: 'Historical Context',
    regionalTimeline: 'Regional Timeline',
    primaryIndustries: 'Primary Industries',
    exports: 'Exports',
    tradingPartners: 'Trading Partners',
    noEconomyData: 'Economy data not yet available for this period',
    language: 'Language',
    script: 'Script',
    architecture: 'Architecture',
    literature: 'Literature',
    noCultureData: 'Culture data not yet available for this period',
    territories: 'Territories',
    vassals: 'Vassals & Tributaries',
    rivals: 'Rivals',
    diplomaticRelations: 'Diplomatic Relations',

    // Panel buttons & actions
    closePanel: 'Close panel',
    openWiki: 'Open Wikipedia',
    closeWiki: 'Close Wikipedia',
    openWikiPanel: 'Open Wikipedia panel',
    closeWikiPanel: 'Close Wikipedia panel',
    sourcesTitle: 'Sources & References',
    closeSources: 'Close sources',
    tabsAriaLabel: 'Kingdom information tabs',
    sourceFooter: 'Always verify with primary sources',
    footerText: 'Southeast Asian Historical Atlas',

    // HistoryBot
    botTitle: 'Chatbot',
    botSubtitle: 'Ask about Nusantara history',
    botAriaLabel: 'AI History chatbot',
    clearChat: 'Clear chat',
    closeChatbot: 'Close chatbot',
    messagesAriaLabel: 'Chat messages',
    thinkingAriaLabel: 'Thinking...',
    inputPlaceholder: 'Ask about this kingdom...',
    inputAriaLabel: 'Ask a question about this kingdom',
    sendMessage: 'Send message',
    greetingTerritory: (name, year, era) =>
      `You are exploring ${name} in this timeline, during the ${era}. What would you like to know about this kingdom?`,
    greetingDefault: 'Welcome, scholar. Ask me anything about the pre-colonial kingdoms of Nusantara (400–1600 CE).',

    // Ask AI button
    askAbout: (name) => `Ask: ${name}`,
    askDefault: 'Chatbot',

    // Header search
    searchPlaceholder: 'Search kingdoms...',
    searchAriaLabel: 'Search kingdoms',
  },
};

export default translations;
