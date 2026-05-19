// src/components/TerritoryInfo/TerritoryInfoPanel.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTerritoryData, regionalEvents } from '../../data/territories';
import WikiPanel from './WikiPanel';
import { useLanguage } from '../../contexts/LanguageContext';
import './TerritoryInfoPanel.css';

// Dummy sources — replace with real ones per territory via territoryData.sources
const DUMMY_SOURCES = [
  {
    type: 'primary',
    title: 'Nagarakretagama',
    author: 'Mpu Kontolodon',
    year: '1365',
    note: 'Primary Javanese court poem describing Majapahit territories',
  },
  {
    type: 'book',
    title: 'A History of Classical Malay Literature',
    author: 'R.O. Winstedt',
    year: '1940',
    note: 'Classic reference for early Malay literary tradition',
  },
  {
    type: 'journal',
    title: 'Trade and Society in the Banda Sea',
    author: 'Leonard Andaya',
    year: '1993',
    note: 'Journal of Southeast Asian Studies, Vol. 24',
  },


  {
    type: 'web',
    title: 'JSTOR — Southeast Asian Empires Collection',
    url: 'https://www.jstor.org/subject/southeastasia',
    note: 'Peer-reviewed academic articles',
  },
  {
    type: 'web',
    title: 'Cœdès, G. — The Indianized States of Southeast Asia',
    url: 'https://archive.org/details/indianizedstates00coed',
    year: '1968',
    note: 'Foundational work on Indianization in the region',
  },
];

const TAB_IDS = [
  { id: 'overview', icon: '📜' },
  { id: 'history',  icon: '📖' },
  { id: 'economy',  icon: '💰' },
  { id: 'culture',  icon: '🏛️' },
  { id: 'relations',icon: '⚖️' },
];

const TerritoryInfoPanel = ({ territoryId, currentYear, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const loc = (en, id) => (language === 'id' && id) ? id : en;
  const [activeTab, setActiveTab] = useState('overview');
  const [territoryData, setTerritoryData] = useState(null);
  const [wikiOpen, setWikiOpen] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const sourcesRef = useRef(null);

  useEffect(() => {
    if (territoryId && currentYear) {
      const data = getTerritoryData(territoryId, currentYear);
      setTerritoryData(data);
      // Close wiki panel when switching territories
      setWikiOpen(false);
      setSourcesOpen(false);
    }
  }, [territoryId, currentYear]);

  // Reset to overview tab when switching territories
  useEffect(() => {
    setActiveTab('overview');
  }, [territoryId]);

  // Close wiki panel when territory panel closes
  useEffect(() => {
    if (!isOpen) {
      setWikiOpen(false);
      setSourcesOpen(false);
    }
  }, [isOpen]);

  // Close sources popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sourcesRef.current && !sourcesRef.current.contains(e.target)) {
        setSourcesOpen(false);
      }
    };
    if (sourcesOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sourcesOpen]);

  const relevantEvents = useMemo(
    () => regionalEvents
      .filter(e => Math.abs(e.year - currentYear) <= 50)
      .sort((a, b) => a.year - b.year),
    [currentYear]
  );

  if (!territoryData) return null;

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

                {/* Sources button — below wiki button */}
                <div className="v3-sources-container" ref={sourcesRef}>
                  <button
                    className={`v3-sources-btn ${sourcesOpen ? 'active' : ''}`}
                    onClick={() => setSourcesOpen(prev => !prev)}
                    title={t.sourcesTitle}
                    aria-label={t.sourcesTitle}
                    aria-expanded={sourcesOpen}
                  >
                    <span className="sources-btn-icon" aria-hidden="true">📚</span>
                  </button>

                  <AnimatePresence>
                    {sourcesOpen && (
                      <motion.div
                        className="v3-sources-popup"
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      >
                        {/* Popup Header */}
                        <div className="sources-popup-header">
                          <span className="sources-popup-title">{t.sourcesTitle}</span>
                          <button
                            className="sources-popup-close"
                            onClick={() => setSourcesOpen(false)}
                            aria-label={t.closeSources}
                          ><span aria-hidden="true">✕</span></button>
                        </div>

                        <div className="sources-popup-divider" />

                        {/* Sources List */}
                        <div className="sources-popup-list">
                          {(territoryData.sources || DUMMY_SOURCES).map((source, idx) => (
                            <div key={idx} className={`source-item source-type-${source.type}`}>
                              <div className="source-type-badge">
                                {source.type === 'book' && '📖'}
                                {source.type === 'web' && '🌐'}
                                {source.type === 'journal' && '📄'}
                                {source.type === 'primary' && '📜'}
                              </div>
                              <div className="source-details">
                                {source.url ? (
                                  <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="source-title-link"
                                  >
                                    {source.title}
                                  </a>
                                ) : (
                                  <span className="source-title">{source.title}</span>
                                )}
                                {source.author && (
                                  <span className="source-author">{source.author}</span>
                                )}
                                {source.year && (
                                  <span className="source-year">{source.year}</span>
                                )}
                                {source.note && (
                                  <span className="source-note">{source.note}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Popup Footer */}
                        <div className="sources-popup-footer">
                          <span>{t.sourceFooter}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="header-content">
                  <div className="era-badge" style={{ backgroundColor: territoryData.color }}>
                    {loc(territoryData.era, territoryData.eraId)}
                  </div>

                  <h1 className="territory-name">{territoryData.name}</h1>
                  <h2 className="territory-english">{territoryData.englishName}</h2>

                  <div className="year-display">
                    <span className="year-label">Anno Domini</span>
                    <span className="year-value">{currentYear}</span>
                  </div>
                </div>

                <div className="header-decoration bottom-left" />
                <div className="header-decoration bottom-right" />
              </div>

              {/* Ruler Card */}
              <div className="v3-ruler-card">
                <div className="ruler-portrait">
                  <span className="portrait-emoji">{territoryData.ruler.portrait}</span>
                </div>
                <div className="ruler-info">
                  <span className="ruler-title">{territoryData.ruler.title}</span>
                  <span className="ruler-name">{territoryData.ruler.name}</span>
                  <span className="ruler-reign">
                    Reign: {territoryData.ruler.reignStart} – {territoryData.ruler.reignEnd}
                  </span>
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
                          <p className="summary-text">{loc(territoryData.summary, territoryData.summaryId)}</p>
                        </div>

                        <div className="v3-stats-grid">
                          {territoryData.capital && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">🏛️</span>
                              <span className="stat-label">{t.capital}</span>
                              <span className="stat-value">{territoryData.capital}</span>
                            </div>
                          )}
                          {territoryData.population && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">👥</span>
                              <span className="stat-label">{t.population}</span>
                              <span className="stat-value">{territoryData.population}</span>
                            </div>
                          )}
                          {territoryData.religion && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">⛪</span>
                              <span className="stat-label">{t.religion}</span>
                              <span className="stat-value">{territoryData.religion}</span>
                            </div>
                          )}
                          {territoryData.government && (
                            <div className="stat-card">
                              <span className="stat-icon" aria-hidden="true">👑</span>
                              <span className="stat-label">{t.government}</span>
                              <span className="stat-value">{territoryData.government}</span>
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
                                <span className="event-text">{loc(event.event, event.eventId)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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
                            {territoryData.historicalContext.split('\n\n').map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
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
                      </div>
                    )}

                    {activeTab === 'economy' && (
                      <div className="tab-economy">
                        <div className="v3-section">
                          <h3 className="section-title">
                            <span className="title-icon">⚒️</span>
                            {t.primaryIndustries}
                          </h3>
                          <div className="industry-list">
                            {territoryData.economy.primary.map((industry, idx) => (
                              <div key={idx} className="industry-card">
                                <span className="industry-icon">🏭</span>
                                <span className="industry-name">{industry}</span>
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
                            {territoryData.economy.exports.map((item, idx) => (
                              <div key={idx} className="export-tag">
                                {item}
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
                            {territoryData.economy.tradingPartners.map((partner, idx) => (
                              <div key={idx} className="partner-card">
                                <span className="partner-flag">🏴</span>
                                <span className="partner-name">{partner}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'culture' && (
                      <div className="tab-culture">
                        <div className="culture-grid">
                          <div className="culture-card">
                            <div className="culture-header">
                              <span className="culture-icon">🗣️</span>
                              <span className="culture-label">{t.language}</span>
                            </div>
                            <span className="culture-value">{territoryData.culture.language}</span>
                          </div>

                          <div className="culture-card">
                            <div className="culture-header">
                              <span className="culture-icon">✍️</span>
                              <span className="culture-label">{t.script}</span>
                            </div>
                            <span className="culture-value">{territoryData.culture.script}</span>
                          </div>

                          <div className="culture-card full-width">
                            <div className="culture-header">
                              <span className="culture-icon">🏛️</span>
                              <span className="culture-label">{t.architecture}</span>
                            </div>
                            <span className="culture-value">{territoryData.culture.architecture}</span>
                          </div>

                          <div className="culture-card full-width">
                            <div className="culture-header">
                              <span className="culture-icon">📚</span>
                              <span className="culture-label">{t.literature}</span>
                            </div>
                            <span className="culture-value">{territoryData.culture.literature}</span>
                          </div>
                        </div>
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
                                {territory}
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
                                  {vassal}
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
                                  {rival}
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
                            {Object.entries(territoryData.relations).map(([nation, status], idx) => (
                              <div key={idx} className="relation-card">
                                <span className="relation-nation">{nation.charAt(0).toUpperCase() + nation.slice(1)}</span>
                                <span className={`relation-status ${status.toLowerCase().replaceAll(' ', '-')}`}>
                                  {status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Wiki Panel — rendered outside territory panel AnimatePresence
          so it can animate independently */}
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