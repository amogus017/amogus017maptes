// src/components/TerritoryInfo/TerritoryInfoPanel.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTerritoryData, regionalEvents } from '../../data/territories';
import { academicSources } from '../../data/academicSources.js';
import WikiPanel from './WikiPanel';
import { useLanguage } from '../../contexts/LanguageContext';
import './TerritoryInfoPanel.css';

const TAB_IDS = [
  { id: 'overview', icon: '📜' },
  { id: 'history',  icon: '📖' },
  { id: 'economy',  icon: '💰' },
  { id: 'culture',  icon: '🏛️' },
  { id: 'relations',icon: '⚖️' },
];


const isUnverifiedCitation = (cit) => !!cit && typeof cit.citation === 'string' && cit.citation.startsWith('UNVERIFIED');

const AUDIT_COMMENTARY_TRIGGERS = [
  'dates the', 'corroborates', 'confirms the', 'confirms Coedès', 'verifies the',
  'matches the', 'matching the', 'consistent with', 'kept as', 'kept from',
  'treat as', 'treat with', 'not independently', 'directly documenting',
  'the same citation', 'general continuity', 'describes the', 'the stormy',
  'the mongol conflict', 'confirms these', 'confirms the kingdom',
  // sourcing-methodology commentary (talks about the research process itself,
  // not the kingdom's history)
  'coedès does not', 'does not mention', 'does not name', 'does not detail',
  'does not cover', 'does not discuss', 'does not itemize', 'does not confirm',
  'so wikipedia', 'so web source', 'not covered by coedès', 'falls within coedès',
  'falls outside coedès', 'carried over', 'not re-fetched', 'the sibling',
  'as already flagged',
];

const AUDIT_PREFIX_RE = /^CARRIED OVER, not re-fetched this session:\s*/i;
const AUDIT_COMMENTARY_TRIGGER_RE = new RegExp(
  AUDIT_COMMENTARY_TRIGGERS.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
  'i'
);

const stripAuditCommentary = (rawText) => {
  const text = rawText.replace(AUDIT_PREFIX_RE, '');
  const dashRe = /\s+—\s+/g;
  const positions = [];
  let m;
  while ((m = dashRe.exec(text))) positions.push(m.index);
  for (let i = positions.length - 1; i >= 0; i--) {
    if (AUDIT_COMMENTARY_TRIGGER_RE.test(text.slice(positions[i]))) {
      return text.slice(0, positions[i]).trim();
    }
  }
  return text.trim();
};


const CITATION_ANNOTATION_RE = /((?:p\.\s?\d+(?:[-–—]\d+)?|hlm\.?\s?\d+(?:[-–—]\d+)?|\)))\s+—\s+.*$/i;
const stripCitationAnnotation = (text) => text.replace(CITATION_ANNOTATION_RE, '$1').trim();


const REGION_NAME_ID = {
  'Bali': 'Bali',
  'Batanghari River Basin': 'Lembah Sungai Batanghari',
  'Central Java': 'Jawa Tengah',
  'Citanduy River Basin': 'Lembah Sungai Citanduy',
  'Citarum River Basin': 'Lembah Sungai Citarum',
  'Daha River Basin': 'Lembah Sungai Daha',
  'East Java': 'Jawa Timur',
  'East Java (reduced)': 'Jawa Timur (menyusut)',
  'East Kalimantan': 'Kalimantan Timur',
  'East of West Java': 'Bagian timur Jawa Barat',
  'East part of East Java': 'Bagian timur Jawa Timur',
  'Interior Sumatra': 'Pedalaman Sumatra',
  'Interior West Java (shrinking)': 'Pedalaman Jawa Barat (menyusut)',
  'Java': 'Jawa',
  'Kedu Plain': 'Dataran Kedu',
  'Mahakam River Basin': 'Lembah Sungai Mahakam',
  'Malay Peninsula': 'Semenanjung Melayu',
  'Musi River Delta': 'Delta Sungai Musi',
  'North Coast of Central Java': 'Pesisir Utara Jawa Tengah',
  'Northern Central Java Coast': 'Pesisir Utara Jawa Tengah',
  'Pakuan Region': 'Wilayah Pakuan',
  'Parts of Kalimantan': 'Sebagian Kalimantan',
  'Parts of Sumatra': 'Sebagian Sumatra',
  'Parts of Sumatra (via Pamalayu)': 'Sebagian Sumatra (melalui Ekspedisi Pamalayu)',
  'Southern Central Java': 'Jawa Tengah Selatan',
  'Southern Sumatra': 'Sumatra Selatan',
  'Sumatra': 'Sumatra',
  'West Java': 'Jawa Barat',
  'West part of East Java': 'Bagian barat Jawa Timur',
  'Jambi (rising in power, eventually eclipsing Palembang)': 'Jambi (kekuatannya meningkat, akhirnya melampaui Palembang)',
  'Kedah': 'Kedah',
  'Various Regional Polities': 'Berbagai Kerajaan Regional',
  'Banten': 'Banten',
  'Chola Dynasty': 'Dinasti Chola',
  'Cirebon': 'Cirebon',
  'Demak (Islamic)': 'Demak (Islam)',
  'Galuh': 'Galuh',
  'Islamic Coastal States': 'Negara-negara Pesisir Islam',
  'Janggala': 'Janggala',
  'Kediri (Jayakatwang)': 'Kediri (Jayakatwang)',
  'Kediri Kingdom (Kertajaya)': 'Kerajaan Kediri (Kertajaya)',
  'Kutai Kartanegara': 'Kutai Kartanegara',
  'Majapahit': 'Majapahit',
  'Melayu Kingdom': 'Kerajaan Melayu',
  'Panjalu': 'Panjalu',
  'Regional Borneo Polities': 'Berbagai Kerajaan Regional Kalimantan',
  'Regional Competitors': 'Pesaing Regional',
  'Sunda': 'Sunda',
  'Tumapel': 'Tumapel',
  'Yuan China': 'Tiongkok Yuan',
  'Yuan Mongols': 'Mongol Yuan',
};


const RELIGION_ID = {
  'Buddhist (Mahayana)': 'Buddha (Mahayana)',
  'Buddhist (Mahayana) and Hindu': 'Buddha (Mahayana) dan Hindu',
  'Hindu': 'Hindu',
  'Hindu (Shaivism)': 'Hindu (aliran Siwa)',
  'Hindu (Sunda Wiwitan)': 'Hindu (Sunda Wiwitan)',
  'Hindu (Vaishnavism)': 'Hindu (aliran Waisnawa)',
  'Hindu-Buddhist': 'Hindu-Buddha',
  'Hindu-Buddhist (Shaiva-Buddha syncretism)': 'Hindu-Buddha (sinkretisme Siwa-Buddha)',
  'Hindu-Buddhist (Tantric Buddhism)': 'Hindu-Buddha (Buddha Tantrayana)',
  'Hindu-Buddhist (with growing Islamic influence)': 'Hindu-Buddha (dengan pengaruh Islam yang berkembang)',
  'Mahayana Buddhism': 'Buddha Mahayana',
};
const GOVERNMENT_ID = {
  'Hindu Kingdom': 'Kerajaan Hindu',
  'Hindu Kingdom (conquered, absorbed into Kutai Kartanegara)': 'Kerajaan Hindu (ditaklukkan, digabungkan ke Kutai Kartanegara)',
  'Hindu Kingdom (declining)': 'Kerajaan Hindu (memudar)',
  'Hindu-Buddhist Empire': 'Kekaisaran Hindu-Buddha',
  'Hindu-Buddhist Kingdom': 'Kerajaan Hindu-Buddha',
  'Kingdom': 'Kerajaan',
  'Thalassocracy': 'Talasokrasi',
  'Weakened Empire': 'Kekaisaran yang Melemah',
  'Weakened Thalassocracy': 'Talasokrasi yang Melemah',
};

const TerritoryInfoPanel = ({ territoryId, currentYear, isOpen, onClose, startYear, endYear }) => {
  const { language, t } = useLanguage();
  const loc = (en, id) => (language === 'id' && id) ? id : en;
  const publicCitationText = (cit) => {
    if (isUnverifiedCitation(cit)) {
      return loc('Not verified against the primary academic source — treat as approximate.', 'Belum diverifikasi terhadap sumber akademis utama — anggap sebagai perkiraan.');
    }
    const clean = stripAuditCommentary(cit.citation);
    return language === 'id' ? stripCitationAnnotation(clean) : clean;
  };
  const locRegion = (name) => (language === 'id' && REGION_NAME_ID[name]) ? REGION_NAME_ID[name] : name;
  const UNDOCUMENTED = loc('Undocumented', 'Belum terdokumentasi');

  const statValueOrPlaceholder = (statKey, displayValue) =>
    isUnverifiedCitation(territoryData?.statCitations?.[statKey]) ? UNDOCUMENTED : displayValue;
  
  const allRefsUnverified = (refsArray) => !!refsArray && refsArray.length > 0 && refsArray.every(isUnverifiedCitation);
  
  const indexedValueOrPlaceholder = (displayValue, refsArray, citationsArray, idx) => {
    const specificIdx = citationsArray?.[idx];
    if (specificIdx === undefined) {
      return allRefsUnverified(refsArray) ? UNDOCUMENTED : displayValue;
    }
    return isUnverifiedCitation(refsArray?.[specificIdx]) ? UNDOCUMENTED : displayValue;
  };

  const multiCitedValueOrPlaceholder = (displayValue, refsArray, citationIndices) => {
    if (!citationIndices || citationIndices.length === 0) {
      return allRefsUnverified(refsArray) ? UNDOCUMENTED : displayValue;
    }
    const allUnverified = citationIndices.every(ci => isUnverifiedCitation(refsArray?.[ci]));
    return allUnverified ? UNDOCUMENTED : displayValue;
  };
  const [activeTab, setActiveTab] = useState('overview');
  const [territoryData, setTerritoryData] = useState(null);
  const [wikiOpen, setWikiOpen] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);

  const scrollToRef = (i) => {
    setSourcesOpen(true);
    setTimeout(() => {
      document.getElementById(`src-ref-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const scrollToOvRef = (i) => {
    setSourcesOpen(true);
    setTimeout(() => {
      document.getElementById(`ov-ref-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const scrollToEconRef = (i) => {
    setSourcesOpen(true);
    setTimeout(() => {
      document.getElementById(`econ-ref-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const scrollToCultureRef = (i) => {
    setSourcesOpen(true);
    setTimeout(() => {
      document.getElementById(`cult-ref-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const scrollToRelationsRef = (i) => {
    setSourcesOpen(true);
    setTimeout(() => {
      document.getElementById(`rel-ref-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const scrollToSummaryRef = (i) => {
    setSourcesOpen(true);
    setTimeout(() => {
      document.getElementById(`sum-ref-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const scrollToHistCtxRef = (i) => {
    setSourcesOpen(true);
    setTimeout(() => {
      document.getElementById(`histctx-ref-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const overviewCitations = useMemo(() => {
    if (!territoryData) return { statRefs: {}, eventRefs: [], allRefs: [] };
    const allRefs = [];
    const statRefs = {};
    for (const key of ['capital', 'population', 'religion', 'government']) {
      const cit = territoryData.statCitations?.[key];
      if (cit && !isUnverifiedCitation(cit)) { statRefs[key] = allRefs.length; allRefs.push(cit); }
    }
    const eventRefs = (territoryData.keyEvents || []).map(event => {
      if (!event.citation || isUnverifiedCitation(event.citation)) return null;
      const existing = allRefs.findIndex(r => r.citation === event.citation.citation);
      if (existing >= 0) return existing;
      const idx = allRefs.length;
      allRefs.push(event.citation);
      return idx;
    });
    return { statRefs, eventRefs, allRefs };
  }, [territoryData]);

  const clampedYear = (startYear && endYear)
    ? Math.min(endYear, Math.max(startYear, currentYear))
    : currentYear;
  const isOutOfRange = !!(startYear && endYear &&
    (currentYear < startYear || currentYear > endYear));

  useEffect(() => {
    if (territoryId && clampedYear) {
      const data = getTerritoryData(territoryId, clampedYear);
      setTerritoryData(data);
      // Close wiki panel when switching territories
      setWikiOpen(false);
    }
  }, [territoryId, clampedYear]);

  // Reset to overview tab when switching territories
  useEffect(() => {
    setActiveTab('overview');
    setSourcesOpen(false);
  }, [territoryId]);

  // Close wiki panel when territory panel closes
  useEffect(() => {
    if (!isOpen) setWikiOpen(false);
  }, [isOpen]);

  const relevantEvents = useMemo(
    () => regionalEvents
      .filter(e => Math.abs(e.year - clampedYear) <= 50)
      .sort((a, b) => a.year - b.year),
    [clampedYear]
  );

  const periodCitations = useMemo(() => {
    const kingdom = academicSources[territoryId];
    if (!kingdom) return [];
    const period = kingdom.periods.find(p => clampedYear >= p.start && clampedYear <= p.end);
    if (!period) return [];
    return period.chunks.filter(c => c.citation && c.citation.trim() !== '');
  }, [territoryId, clampedYear]);

  if (!territoryData) return null;

  const economy = territoryData.economy;
  const displayPrimary   = (language === 'id' && economy.primaryId?.length)        ? economy.primaryId        : economy.primary;
  const displayExports   = (language === 'id' && economy.exportsId?.length)         ? economy.exportsId         : economy.exports;
  const displayPartners  = (language === 'id' && economy.tradingPartnersId?.length) ? economy.tradingPartnersId : economy.tradingPartners;
  const displayRelations = (language === 'id' && territoryData.relationsId && Object.keys(territoryData.relationsId).length)
    ? territoryData.relationsId : territoryData.relations;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop — only show when wiki is NOT open to avoid double backdrop */}
            {!wikiOpen && (
              <motion.div
                className="v3-panel-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
              />
            )}

            {/* Backdrop when wiki IS open — covers full screen */}
            {wikiOpen && (
              <motion.div
                className="v3-panel-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setWikiOpen(false);
                  onClose();
                }}
              />
            )}

            {/* Main Panel */}
            <motion.div
              className="v3-territory-panel"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%'}}
              transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Ornate Header */}
              <div className="v3-panel-header">
                <div className="header-decoration top-left" />
                <div className="header-decoration top-right" />

                {/* Close button — top left */}
                <button className="v3-close-btn" onClick={onClose} aria-label={t.closePanel}>
                  <span aria-hidden="true">✕</span>
                </button>

                {/* Wiki button — top right */}
                <button
                  className={`v3-wiki-btn ${wikiOpen ? 'active' : ''}`}
                  onClick={() => setWikiOpen(prev => !prev)}
                  title={wikiOpen ? t.closeWiki : t.openWiki}
                  aria-label={wikiOpen ? t.closeWikiPanel : t.openWikiPanel}
                  aria-expanded={wikiOpen}
                >
                  <span className="wiki-btn-w" aria-hidden="true">W</span>
                </button>

                <div className="header-content">
                  <div className="era-badge" style={{ backgroundColor: territoryData.color }}>
                    {loc(territoryData.era, territoryData.eraId)}
                  </div>

                  <h1 className="territory-name">{loc(territoryData.name, territoryData.nameId)}</h1>
                  <h2 className="territory-english">{loc(territoryData.englishName, territoryData.englishNameId)}</h2>

                  <div className="year-display">
                    <span className="year-label">{t.yearLabel}</span>
                    <span className="year-value">{clampedYear}</span>
                  </div>
                </div>

                <div className="header-decoration bottom-left" />
                <div className="header-decoration bottom-right" />
              </div>

              {/* Out-of-range banner */}
              {isOutOfRange && (
                <div className="v3-outofrange-banner">
                  <span aria-hidden="true">{currentYear > endYear ? (territoryData.renamedTo ? '🔄' : '⚔️') : '📜'}</span>
                  <span>
                    {currentYear > endYear
                      ? (territoryData.renamedTo
                          ? loc(
                              `${territoryData.name} was renamed ${loc(territoryData.renamedTo, territoryData.renamedToId)} in ${endYear} CE — showing last recorded state`,
                              `${territoryData.name} berganti nama menjadi ${loc(territoryData.renamedTo, territoryData.renamedToId)} pada ${endYear} M — menampilkan catatan terakhir`
                            )
                          : loc(
                              `${territoryData.name} fell in ${endYear} CE — showing last recorded state`,
                              `${territoryData.name} runtuh pada ${endYear} M — menampilkan catatan terakhir`
                            ))
                      : loc(
                          `${territoryData.name} was founded in ${startYear} CE — showing earliest known state`,
                          `${territoryData.name} didirikan pada ${startYear} M — menampilkan catatan awal`
                        )}
                  </span>
                </div>
              )}

              {/* Ruler Card */}
              {(() => {
                const r = territoryData.ruler;
                const isUnknown = r.name === 'Unknown';
                const isInterregnum = r.name === 'Interregnum';
                const reignLabel = isInterregnum
                  ? loc('Period', 'Periode')
                  : loc('Reign', 'Berkuasa');
                return (
                  <div className="v3-ruler-card">
                    <div className="ruler-portrait">
                      <span className="portrait-emoji">
                        {isInterregnum ? '⚔️' : r.portrait}
                      </span>
                    </div>
                    <div className="ruler-info">
                      {!isInterregnum && (
                        <span className="ruler-title">{r.title}</span>
                      )}
                      <span className={`ruler-name${isUnknown || isInterregnum ? ' ruler-name--dim' : ''}`}>
                        {isUnknown
                          ? loc('Unknown', 'Tidak Diketahui')
                          : isInterregnum
                            ? loc('Interregnum', 'Masa Peralihan')
                            : r.name}
                      </span>
                      {!isUnknown && (r.reignStart || r.reignEnd) && (
                        <span className="ruler-reign">
                          {reignLabel}: {r.reignStart}{r.reignStart && r.reignEnd ? ' – ' : ''}{r.reignEnd}
                        </span>
                      )}
                    </div>
                    {territoryData.primeMinister && (
                      <div className="minister-info">
                        <div className="minister-portrait">
                          <span>{territoryData.primeMinister.portrait}</span>
                        </div>
                        <div className="minister-details">
                          <span className="minister-title">{territoryData.primeMinister.title}</span>
                          <span className="minister-name">{territoryData.primeMinister.name}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Tab Navigation */}
              <div className="v3-tab-nav" role="tablist" aria-label={t.tabsAriaLabel}>
                {TAB_IDS.map(tab => {
                  const labelMap = { overview: t.tabOverview, history: t.tabHistory, economy: t.tabEconomy, culture: t.tabCulture, relations: t.tabRelations };
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={`tabpanel-${tab.id}`}
                      className={`v3-tab ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <span className="tab-icon" aria-hidden="true">{tab.icon}</span>
                      <span className="tab-label">{labelMap[tab.id]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="v3-tab-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'overview' && (
                      <div className="tab-overview">
                        <div className="v3-section">
                          <p className="summary-text">
                            {allRefsUnverified(territoryData.summaryCitationRefs)
                              ? UNDOCUMENTED
                              : loc(territoryData.summary, territoryData.summaryId)}
                            {!allRefsUnverified(territoryData.summaryCitationRefs) && territoryData.summaryCitationRefs?.map((ref, i) => (
                              <a key={i} className="source-context-ref" href={`#sum-ref-${i}`} onClick={(e) => { e.preventDefault(); scrollToSummaryRef(i); }}>[{i + 1}]</a>
                            ))}
                          </p>
                          {!allRefsUnverified(territoryData.summaryCitationRefs) && territoryData.summaryCitationRefs?.length > 0 && (
                            <div className="sources-accordion">
                              <button
                                className={`sources-accordion-toggle ${sourcesOpen ? 'open' : ''}`}
                                onClick={() => setSourcesOpen(prev => !prev)}
                              >
                                <span>📚 {loc('References', 'Referensi')} ({territoryData.summaryCitationRefs.length})</span>
                                <span className="sources-chevron">{sourcesOpen ? '▴' : '▾'}</span>
                              </button>
                              {sourcesOpen && (
                                <div className="sources-list">
                                  {territoryData.summaryCitationRefs.map((ref, i) => (
                                    <div key={i} id={`sum-ref-${i}`} className="source-ref-item">
                                      <span className="source-ref-number">[{i + 1}]</span>
                                      <div className="source-ref-body">
                                        <span className="source-citation">{publicCitationText(ref)}</span>
                                        {ref.url && (
                                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="source-link">
                                            {loc('View Document →', 'Lihat Dokumen →')}
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="v3-stats-grid">
                          {territoryData.capital && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">🏛️</span>
                              <span className="stat-label">{t.capital}</span>
                              <span className="stat-value">
                                {statValueOrPlaceholder('capital', loc(territoryData.capital, territoryData.capitalId))}
                                {overviewCitations.statRefs.capital !== undefined && (
                                  <a className="source-context-ref" href={`#ov-ref-${overviewCitations.statRefs.capital}`} onClick={(e) => { e.preventDefault(); scrollToOvRef(overviewCitations.statRefs.capital); }}>[{overviewCitations.statRefs.capital + 1}]</a>
                                )}
                              </span>
                            </div>
                          )}
                          {territoryData.population && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">👥</span>
                              <span className="stat-label">{t.population}</span>
                              <span className="stat-value">
                                {statValueOrPlaceholder('population', loc(territoryData.population, territoryData.populationId))}
                                {overviewCitations.statRefs.population !== undefined && (
                                  <a className="source-context-ref" href={`#ov-ref-${overviewCitations.statRefs.population}`} onClick={(e) => { e.preventDefault(); scrollToOvRef(overviewCitations.statRefs.population); }}>[{overviewCitations.statRefs.population + 1}]</a>
                                )}
                              </span>
                            </div>
                          )}
                          {territoryData.religion && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">⛪</span>
                              <span className="stat-label">{t.religion}</span>
                              <span className="stat-value">
                                {statValueOrPlaceholder('religion', loc(territoryData.religion, RELIGION_ID[territoryData.religion]))}
                                {overviewCitations.statRefs.religion !== undefined && (
                                  <a className="source-context-ref" href={`#ov-ref-${overviewCitations.statRefs.religion}`} onClick={(e) => { e.preventDefault(); scrollToOvRef(overviewCitations.statRefs.religion); }}>[{overviewCitations.statRefs.religion + 1}]</a>
                                )}
                              </span>
                            </div>
                          )}
                          {territoryData.government && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">👑</span>
                              <span className="stat-label">{t.government}</span>
                              <span className="stat-value">
                                {statValueOrPlaceholder('government', loc(territoryData.government, GOVERNMENT_ID[territoryData.government]))}
                                {overviewCitations.statRefs.government !== undefined && (
                                  <a className="source-context-ref" href={`#ov-ref-${overviewCitations.statRefs.government}`} onClick={(e) => { e.preventDefault(); scrollToOvRef(overviewCitations.statRefs.government); }}>[{overviewCitations.statRefs.government + 1}]</a>
                                )}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="v3-section">
                          <h3 className="section-title">
                            <span className="title-icon">⚔️</span>
                            {t.keyEvents}
                          </h3>
                          <div className="events-timeline">
                            {territoryData.keyEvents.map((event, idx) => (
                              <div key={idx} className={`timeline-event ${event.type}`}>
                                <span className="event-year">{event.year}</span>
                                <span className="event-dot" />
                                <span className="event-text">
                                  {loc(event.event, event.eventId)}
                                  {overviewCitations.eventRefs[idx] !== null && overviewCitations.eventRefs[idx] !== undefined && (
                                    <a className="source-context-ref" href={`#ov-ref-${overviewCitations.eventRefs[idx]}`} onClick={(e) => { e.preventDefault(); scrollToOvRef(overviewCitations.eventRefs[idx]); }}>[{overviewCitations.eventRefs[idx] + 1}]</a>
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {overviewCitations.allRefs.length > 0 && (
                          <div className="sources-accordion">
                            <button
                              className={`sources-accordion-toggle ${sourcesOpen ? 'open' : ''}`}
                              onClick={() => setSourcesOpen(prev => !prev)}
                            >
                              <span>📚 {loc('References', 'Referensi')} ({overviewCitations.allRefs.length})</span>
                              <span className="sources-chevron">{sourcesOpen ? '▴' : '▾'}</span>
                            </button>
                            {sourcesOpen && (
                              <div className="sources-list">
                                {overviewCitations.allRefs.map((ref, i) => (
                                  <div key={i} id={`ov-ref-${i}`} className="source-ref-item">
                                    <span className="source-ref-number">[{i + 1}]</span>
                                    <div className="source-ref-body">
                                      <span className="source-citation">{publicCitationText(ref)}</span>
                                      {ref.url && (
                                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="source-link">
                                          {loc('View Document →', 'Lihat Dokumen →')}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'history' && (
                      <div className="tab-history">
                        <div className="v3-section">
                          <h3 className="section-title">
                            <span className="title-icon">📖</span>
                            {t.historicalContext}
                          </h3>
                          <div className="history-text">
                            {(() => {
                              if (allRefsUnverified(territoryData.historicalContextCitationRefs)) {
                                return <p>{UNDOCUMENTED}</p>;
                              }
                              const paragraphs = (loc(territoryData.historicalContext, territoryData.historicalContextId) || '').split('\n\n');
                              return paragraphs.map((paragraph, idx) => (
                                <p key={idx}>
                                  {paragraph}
                                  {idx === paragraphs.length - 1 && territoryData.historicalContextCitationRefs?.map((ref, i) => (
                                    <a key={i} className="source-context-ref" href={`#histctx-ref-${i}`} onClick={(e) => { e.preventDefault(); scrollToHistCtxRef(i); }}>[{i + 1}]</a>
                                  ))}
                                </p>
                              ));
                            })()}
                            {!allRefsUnverified(territoryData.historicalContextCitationRefs) && territoryData.historicalContextCitationRefs?.length > 0 && (
                              <div className="sources-accordion">
                                <button
                                  className={`sources-accordion-toggle ${sourcesOpen ? 'open' : ''}`}
                                  onClick={() => setSourcesOpen(prev => !prev)}
                                >
                                  <span>📚 {loc('References', 'Referensi')} ({territoryData.historicalContextCitationRefs.length})</span>
                                  <span className="sources-chevron">{sourcesOpen ? '▴' : '▾'}</span>
                                </button>
                                {sourcesOpen && (
                                  <div className="sources-list">
                                    {territoryData.historicalContextCitationRefs.map((ref, i) => (
                                      <div key={i} id={`histctx-ref-${i}`} className="source-ref-item">
                                        <span className="source-ref-number">[{i + 1}]</span>
                                        <div className="source-ref-body">
                                          <span className="source-citation">{publicCitationText(ref)}</span>
                                          {ref.url && (
                                            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="source-link">
                                              {loc('View Document →', 'Lihat Dokumen →')}
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                            {periodCitations.map((chunk, i) =>
                              chunk.text && chunk.text.trim() !== '' ? (
                                <p key={`src-${i}`} className="source-context-text">
                                  {chunk.text}{' '}
                                  <a
                                    className="source-context-ref"
                                    href={`#src-ref-${i}`}
                                    onClick={(e) => { e.preventDefault(); scrollToRef(i); }}
                                  >[{i + 1}]</a>
                                </p>
                              ) : null
                            )}
                          </div>
                        </div>

                        <div className="v3-section">
                          <h3 className="section-title">
                            <span className="title-icon">🗓️</span>
                            {t.regionalTimeline}
                          </h3>
                          <div className="regional-timeline">
                            {relevantEvents.map((event, idx) => (
                              <div
                                key={idx}
                                className={`regional-event ${event.year === currentYear ? 'current' : ''}`}
                              >
                                <div className="event-marker">
                                  <span className="marker-year">{event.year}</span>
                                </div>
                                <div className="event-content">
                                  <span className="event-title">{event.title}</span>
                                  <span className="event-region">{event.impact}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {periodCitations.length > 0 && (
                          <div className="sources-accordion">
                            <button
                              className={`sources-accordion-toggle ${sourcesOpen ? 'open' : ''}`}
                              onClick={() => setSourcesOpen(prev => !prev)}
                            >
                              <span>📚 {loc('References', 'Referensi')} ({periodCitations.length})</span>
                              <span className="sources-chevron">{sourcesOpen ? '▴' : '▾'}</span>
                            </button>
                            {sourcesOpen && (
                              <div className="sources-list">
                                {periodCitations.map((chunk, i) => (
                                  <div key={i} id={`src-ref-${i}`} className="source-ref-item">
                                    <span className="source-ref-number">[{i + 1}]</span>
                                    <div className="source-ref-body">
                                      <span className="source-citation">{chunk.citation}</span>
                                      {chunk.url && (
                                        <a href={chunk.url} target="_blank" rel="noopener noreferrer" className="source-link">
                                          {loc('View Document →', 'Lihat Dokumen →')}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'economy' && (
                      <div className="tab-economy">
                        {displayExports.length === 0 && displayPartners.length === 0 ? (
                          <p className="tab-empty-notice">{t.noEconomyData}</p>
                        ) : (
                          <>
                            <div className="v3-section">
                              <h3 className="section-title">
                                <span className="title-icon">⚒️</span>
                                {t.primaryIndustries}
                              </h3>
                              <div className="industry-list">
                                {displayPrimary.map((industry, idx) => (
                                  <div key={idx} className="industry-card">
                                    <span className="industry-icon">🏭</span>
                                    <span className="industry-name">
                                      {indexedValueOrPlaceholder(industry, economy.economyCitationRefs, economy.primaryCitations, idx)}
                                      {economy.economyCitationRefs && economy.primaryCitations?.[idx] !== undefined && (
                                        <a className="source-context-ref" href={`#econ-ref-${economy.primaryCitations[idx]}`} onClick={(e) => { e.preventDefault(); scrollToEconRef(economy.primaryCitations[idx]); }}>[{economy.primaryCitations[idx] + 1}]</a>
                                      )}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="v3-section">
                              <h3 className="section-title">
                                <span className="title-icon">📦</span>
                                {t.exports}
                              </h3>
                              <div className="exports-grid">
                                {displayExports.map((item, idx) => (
                                  <div key={idx} className="export-tag">
                                    {indexedValueOrPlaceholder(item, economy.economyCitationRefs, economy.exportsCitations, idx)}
                                    {economy.economyCitationRefs && economy.exportsCitations?.[idx] !== undefined && (
                                      <a className="source-context-ref" href={`#econ-ref-${economy.exportsCitations[idx]}`} onClick={(e) => { e.preventDefault(); scrollToEconRef(economy.exportsCitations[idx]); }}>[{economy.exportsCitations[idx] + 1}]</a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="v3-section">
                              <h3 className="section-title">
                                <span className="title-icon">🚢</span>
                                {t.tradingPartners}
                              </h3>
                              <div className="partners-list">
                                {displayPartners.map((partner, idx) => (
                                  <div key={idx} className="partner-card">
                                    <span className="partner-flag">🏴</span>
                                    <span className="partner-name">
                                      {indexedValueOrPlaceholder(partner, economy.economyCitationRefs, economy.partnersCitations, idx)}
                                      {economy.economyCitationRefs && economy.partnersCitations?.[idx] !== undefined && (
                                        <a className="source-context-ref" href={`#econ-ref-${economy.partnersCitations[idx]}`} onClick={(e) => { e.preventDefault(); scrollToEconRef(economy.partnersCitations[idx]); }}>[{economy.partnersCitations[idx] + 1}]</a>
                                      )}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                        {economy.economyCitationRefs?.length > 0 && (
                          <div className="sources-accordion">
                            <button
                              className={`sources-accordion-toggle ${sourcesOpen ? 'open' : ''}`}
                              onClick={() => setSourcesOpen(prev => !prev)}
                            >
                              <span>📚 {loc('References', 'Referensi')} ({economy.economyCitationRefs.length})</span>
                              <span className="sources-chevron">{sourcesOpen ? '▴' : '▾'}</span>
                            </button>
                            {sourcesOpen && (
                              <div className="sources-list">
                                {economy.economyCitationRefs.map((ref, i) => (
                                  <div key={i} id={`econ-ref-${i}`} className="source-ref-item">
                                    <span className="source-ref-number">[{i + 1}]</span>
                                    <div className="source-ref-body">
                                      <span className="source-citation">{publicCitationText(ref)}</span>
                                      {ref.url && (
                                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="source-link">
                                          {loc('View Document →', 'Lihat Dokumen →')}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'culture' && (
                      <div className="tab-culture">
                        {!territoryData.culture.language && !territoryData.culture.script && !territoryData.culture.architecture && !territoryData.culture.literature ? (
                          <p className="tab-empty-notice">{t.noCultureData}</p>
                        ) : (
                          <div className="culture-grid">
                            <div className="culture-card">
                              <div className="culture-header">
                                <span className="culture-icon">🗣️</span>
                                <span className="culture-label">{t.language}</span>
                              </div>
                              <span className="culture-value">
                                {multiCitedValueOrPlaceholder(loc(territoryData.culture.language, territoryData.culture.languageId), territoryData.culture.cultureCitationRefs, territoryData.culture.languageCitations)}
                                {territoryData.culture.cultureCitationRefs && territoryData.culture.languageCitations?.map((ci, i) => (
                                  <a key={i} className="source-context-ref" href={`#cult-ref-${ci}`} onClick={(e) => { e.preventDefault(); scrollToCultureRef(ci); }}>[{ci + 1}]</a>
                                ))}
                              </span>
                            </div>

                            <div className="culture-card">
                              <div className="culture-header">
                                <span className="culture-icon">✍️</span>
                                <span className="culture-label">{t.script}</span>
                              </div>
                              <span className="culture-value">
                                {multiCitedValueOrPlaceholder(loc(territoryData.culture.script, territoryData.culture.scriptId), territoryData.culture.cultureCitationRefs, territoryData.culture.scriptCitations)}
                                {territoryData.culture.cultureCitationRefs && territoryData.culture.scriptCitations?.map((ci, i) => (
                                  <a key={i} className="source-context-ref" href={`#cult-ref-${ci}`} onClick={(e) => { e.preventDefault(); scrollToCultureRef(ci); }}>[{ci + 1}]</a>
                                ))}
                              </span>
                            </div>

                            <div className="culture-card full-width">
                              <div className="culture-header">
                                <span className="culture-icon">🏛️</span>
                                <span className="culture-label">{t.architecture}</span>
                              </div>
                              <span className="culture-value">
                                {multiCitedValueOrPlaceholder(loc(territoryData.culture.architecture, territoryData.culture.architectureId), territoryData.culture.cultureCitationRefs, territoryData.culture.architectureCitations)}
                                {territoryData.culture.cultureCitationRefs && territoryData.culture.architectureCitations?.map((ci, i) => (
                                  <a key={i} className="source-context-ref" href={`#cult-ref-${ci}`} onClick={(e) => { e.preventDefault(); scrollToCultureRef(ci); }}>[{ci + 1}]</a>
                                ))}
                              </span>
                            </div>

                            <div className="culture-card full-width">
                              <div className="culture-header">
                                <span className="culture-icon">📚</span>
                                <span className="culture-label">{t.literature}</span>
                              </div>
                              <span className="culture-value">
                                {territoryData.culture.literatureItems ? (
                                  territoryData.culture.literatureItems.map((item, idx) => {
                                    const display = (language === 'id' && territoryData.culture.literatureItemsId?.[idx]) ? territoryData.culture.literatureItemsId[idx] : item;
                                    const ci = territoryData.culture.literatureCitations?.[idx];
                                    return (
                                      <span key={idx}>
                                        {idx > 0 && ', '}
                                        {indexedValueOrPlaceholder(display, territoryData.culture.cultureCitationRefs, territoryData.culture.literatureCitations, idx)}
                                        {territoryData.culture.cultureCitationRefs && ci !== undefined && (
                                          <a className="source-context-ref" href={`#cult-ref-${ci}`} onClick={(e) => { e.preventDefault(); scrollToCultureRef(ci); }}>[{ci + 1}]</a>
                                        )}
                                      </span>
                                    );
                                  })
                                ) : (
                                  loc(territoryData.culture.literature, territoryData.culture.literatureId)
                                )}
                              </span>
                            </div>
                          </div>
                        )}
                        {territoryData.culture.cultureCitationRefs?.length > 0 && (
                          <div className="sources-accordion">
                            <button
                              className={`sources-accordion-toggle ${sourcesOpen ? 'open' : ''}`}
                              onClick={() => setSourcesOpen(prev => !prev)}
                            >
                              <span>📚 {loc('References', 'Referensi')} ({territoryData.culture.cultureCitationRefs.length})</span>
                              <span className="sources-chevron">{sourcesOpen ? '▴' : '▾'}</span>
                            </button>
                            {sourcesOpen && (
                              <div className="sources-list">
                                {territoryData.culture.cultureCitationRefs.map((ref, i) => (
                                  <div key={i} id={`cult-ref-${i}`} className="source-ref-item">
                                    <span className="source-ref-number">[{i + 1}]</span>
                                    <div className="source-ref-body">
                                      <span className="source-citation">{publicCitationText(ref)}</span>
                                      {ref.url && (
                                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="source-link">
                                          {loc('View Document →', 'Lihat Dokumen →')}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'relations' && (
                      <div className="tab-relations">
                        <div className="v3-section">
                          <h3 className="section-title">
                            <span className="title-icon">🏰</span>
                            {t.territories}
                          </h3>
                          <div className="territory-tags">
                            {territoryData.territories.map((territory, idx) => (
                              <span key={idx} className="territory-tag owned">
                                {indexedValueOrPlaceholder(locRegion(territory), territoryData.relationsCitationRefs, territoryData.territoriesCitations, idx)}
                                {territoryData.relationsCitationRefs && territoryData.territoriesCitations?.[idx] !== undefined && (
                                  <a className="source-context-ref" href={`#rel-ref-${territoryData.territoriesCitations[idx]}`} onClick={(e) => { e.preventDefault(); scrollToRelationsRef(territoryData.territoriesCitations[idx]); }}>[{territoryData.territoriesCitations[idx] + 1}]</a>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>

                        {territoryData.vassals.length > 0 && (
                          <div className="v3-section">
                            <h3 className="section-title">
                              <span className="title-icon">🤝</span>
                              {t.vassals}
                            </h3>
                            <div className="territory-tags">
                              {territoryData.vassals.map((vassal, idx) => (
                                <span key={idx} className="territory-tag vassal">
                                  {indexedValueOrPlaceholder(locRegion(vassal), territoryData.relationsCitationRefs, territoryData.vassalsCitations, idx)}
                                  {territoryData.relationsCitationRefs && territoryData.vassalsCitations?.[idx] !== undefined && (
                                    <a className="source-context-ref" href={`#rel-ref-${territoryData.vassalsCitations[idx]}`} onClick={(e) => { e.preventDefault(); scrollToRelationsRef(territoryData.vassalsCitations[idx]); }}>[{territoryData.vassalsCitations[idx] + 1}]</a>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {territoryData.rivals.length > 0 && (
                          <div className="v3-section">
                            <h3 className="section-title">
                              <span className="title-icon">⚔️</span>
                              {t.rivals}
                            </h3>
                            <div className="territory-tags">
                              {territoryData.rivals.map((rival, idx) => (
                                <span key={idx} className="territory-tag rival">
                                  {indexedValueOrPlaceholder(locRegion(rival), territoryData.relationsCitationRefs, territoryData.rivalsCitations, idx)}
                                  {territoryData.relationsCitationRefs && territoryData.rivalsCitations?.[idx] !== undefined && (
                                    <a className="source-context-ref" href={`#rel-ref-${territoryData.rivalsCitations[idx]}`} onClick={(e) => { e.preventDefault(); scrollToRelationsRef(territoryData.rivalsCitations[idx]); }}>[{territoryData.rivalsCitations[idx] + 1}]</a>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="v3-section">
                          <h3 className="section-title">
                            <span className="title-icon">📜</span>
                            {t.diplomaticRelations}
                          </h3>
                          <div className="relations-list">
                            {Object.entries(displayRelations).map(([nation, status], idx) => (
                              <div key={idx} className="relation-card">
                                <span className="relation-nation">
                                  {nation.charAt(0).toUpperCase() + nation.slice(1)}
                                  {territoryData.relationsCitationRefs && territoryData.relationsCitations?.[idx] !== undefined && (
                                    <a className="source-context-ref" href={`#rel-ref-${territoryData.relationsCitations[idx]}`} onClick={(e) => { e.preventDefault(); scrollToRelationsRef(territoryData.relationsCitations[idx]); }}>[{territoryData.relationsCitations[idx] + 1}]</a>
                                  )}
                                </span>
                                <span className={`relation-status ${status.toLowerCase().replaceAll(' ', '-')}`}>
                                  {indexedValueOrPlaceholder(status, territoryData.relationsCitationRefs, territoryData.relationsCitations, idx)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {territoryData.relationsCitationRefs?.length > 0 && (
                          <div className="sources-accordion">
                            <button
                              className={`sources-accordion-toggle ${sourcesOpen ? 'open' : ''}`}
                              onClick={() => setSourcesOpen(prev => !prev)}
                            >
                              <span>📚 {loc('References', 'Referensi')} ({territoryData.relationsCitationRefs.length})</span>
                              <span className="sources-chevron">{sourcesOpen ? '▴' : '▾'}</span>
                            </button>
                            {sourcesOpen && (
                              <div className="sources-list">
                                {territoryData.relationsCitationRefs.map((ref, i) => (
                                  <div key={i} id={`rel-ref-${i}`} className="source-ref-item">
                                    <span className="source-ref-number">[{i + 1}]</span>
                                    <div className="source-ref-body">
                                      <span className="source-citation">{publicCitationText(ref)}</span>
                                      {ref.url && (
                                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="source-link">
                                          {loc('View Document →', 'Lihat Dokumen →')}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="v3-panel-footer">
                <div className="footer-decoration" />
                <span className="footer-text">{t.footerText}</span>
                <div className="footer-decoration" />
                <span className="footer-disclaimer">{t.sourceFooter}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Wiki Panel??? */}
      <WikiPanel
        wikiSlug={territoryData?.wikiSlug}
        idWikiSlug={territoryData?.idWikiSlug}
        territoryName={territoryData?.name}
        isOpen={isOpen && wikiOpen}
        onClose={() => setWikiOpen(false)}
        defaultLanguage={language}
      />
    </>
  );
};

export default TerritoryInfoPanel;