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
    searchPlaceholder: 'Cari...',
    searchAriaLabel: 'Cari kerajaan',

    // Tutorial
    tutorial: {
      steps: [
        {
          title: 'Selamat Datang di Atlas Nusantara',
          body: 'Jelajahi kerajaan Hindu-Buddha Nusantara (400–1600 M) melalui peta interaktif berbasis waktu ini.',
        },
        {
          title: 'Linimasa Waktu',
          body: 'Seret garis waktu atau tekan ▶ untuk menganimasikan kerajaan yang tumbuh dan jatuh dari masa ke masa.',
        },
        {
          title: 'Penanda Tahun',
          body: 'Angka-angka pada penggaris ini adalah tahun Masehi (M). Gulir ke kiri atau kanan untuk menjelajahi rentang waktu 400–1600 M.',
        },
        {
          title: 'Putar Otomatis',
          body: 'Tekan ▶ untuk memutar maju atau ◀ untuk mundur. Tekan ⏸ untuk menjeda. Saat animasi berjalan, pilih kecepatan ×1 hingga ×10.',
        },
        {
          title: 'Peta Wilayah',
          body: 'Wilayah berwarna adalah kerajaan aktif. Arahkan kursor untuk pratinjau, klik untuk membuka panel detail penuh.',
        },
        {
          title: 'Panel Detail Kerajaan',
          body: 'Setiap kerajaan memiliki 5 tab: Ikhtisar, Sejarah, Ekonomi, Budaya, dan Hubungan. Kartu penguasa dan tahun di atas diperbarui secara langsung saat Anda menggeser linimasa.',
        },
        {
          title: 'Buka Wikipedia',
          body: 'Tombol Wikipedia membuka artikel ensiklopedia tentang kerajaan ini di panel samping — bacaan lanjutan langsung di satu layar.',
        },
        {
          title: 'Tab Ringkasan',
          body: 'Tab-tab di bawah ini menyajikan informasi lengkap: Ikhtisar, Sejarah, Ekonomi, Budaya, dan Hubungan diplomatik kerajaan yang dipilih.',
        },
        {
          title: 'Cari Kerajaan',
          body: 'Ketik nama kerajaan di kotak pencarian untuk langsung melompat ke eranya di peta.',
        },
        {
          title: 'Chatbot AI Sejarah',
          body: 'Tombol ⚜ membuka HistoryBot — asisten AI yang siap menjawab pertanyaan tentang kerajaan yang sedang dipilih.',
        },
        {
          title: 'Ganti Bahasa',
          body: 'Gunakan tombol ID / EN di pojok kanan atas untuk mengganti bahasa antarmuka antara Bahasa Indonesia dan Inggris.',
        },
        {
          title: 'Buka Panduan Lagi',
          body: 'Tombol ? ini akan membuka kembali panduan ini kapan saja jika Anda membutuhkan bantuan.',
        },
        {
          title: 'Siap Menjelajah!',
          body: 'Mulai jelajahi Nusantara. Klik wilayah mana saja di peta untuk memulai.',
        },
      ],
      next: 'Lanjut',
      prev: 'Kembali',
      skip: 'Lewati',
      done: 'Mulai Jelajah',
      reopen: 'Panduan',
    },
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
    searchPlaceholder: 'Search...',
    searchAriaLabel: 'Search kingdoms',

    // Tutorial
    tutorial: {
      steps: [
        {
          title: 'Welcome to Atlas Nusantara',
          body: 'Explore Hindu-Buddhist kingdoms of the Nusantara (400–1600 CE) through this interactive time-based map.',
        },
        {
          title: 'Timeline',
          body: 'Drag the ruler or press ▶ to animate kingdoms rising and falling through time.',
        },
        {
          title: 'Year Marks',
          body: 'The numbers on this ruler are years CE (AD). Scroll left or right to explore the full 400–1600 CE range.',
        },
        {
          title: 'Auto-play Controls',
          body: 'Press ▶ to play forward or ◀ to play in reverse. Press ⏸ to pause. While playing, choose a speed from ×1 to ×10.',
        },
        {
          title: 'Map Territories',
          body: 'Colored regions are active kingdoms. Hover to preview, click to open the full detail panel.',
        },
        {
          title: 'Kingdom Detail Panel',
          body: 'Each kingdom has 5 tabs: Overview, History, Economy, Culture, and Relations. The ruler card and year at the top update live as you move the timeline.',
        },
        {
          title: 'Open Wikipedia',
          body: 'The Wikipedia button opens an encyclopedia article about this kingdom in a side panel — deeper reading without leaving the map.',
        },
        {
          title: 'Summary Tabs',
          body: 'These tabs present the full information: Overview, History, Economy, Culture, and Diplomatic Relations for the selected kingdom.',
        },
        {
          title: 'Search a Kingdom',
          body: 'Type a kingdom name in the search box to jump directly to its era on the map.',
        },
        {
          title: 'AI History Chatbot',
          body: 'The ⚜ button opens HistoryBot — an AI you can ask about any selected kingdom.',
        },
        {
          title: 'Language Switch',
          body: 'Use the ID / EN buttons in the top-right to switch the interface between Bahasa Indonesia and English.',
        },
        {
          title: 'Reopen This Guide',
          body: 'The ? button will reopen this tutorial anytime you need a reminder of how things work.',
        },
        {
          title: 'You\'re Ready!',
          body: 'Start exploring Nusantara. Click any colored region on the map to begin.',
        },
      ],
      next: 'Next',
      prev: 'Back',
      skip: 'Skip',
      done: 'Start Exploring',
      reopen: 'Guide',
    },
  },
};

export default translations;
