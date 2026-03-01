// src/components/TerritoryInfo/TerritoryInfoPanel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTerritoryData, regionalEvents } from '../../data/territories';
import WikiPanel from './WikiPanel';
import './TerritoryInfoPanel.css';

// Dummy sources — replace with real ones per territory via territoryData.sources
const DUMMY_SOURCES = [
  {
    type: 'primary',
    title: 'Nagarakretagama',
    author: 'Mpu Prapanca',
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

const TerritoryInfoPanel = ({ territoryId, currentYear, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [territoryData, setTerritoryData] = useState(null);
  const [wikiOpen, setWikiOpen] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const data = getTerritoryData(territoryId, currentYear);
    setTerritoryData(data);
  }, [territoryId, currentYear]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab, territoryData]);

  // CRITICAL: Return null if no data yet
  if (!territoryData) return null;

  // CRITICAL: Safely destructure with defaults
  const { 
    territoryInfo = {}, 
    stats = {}, 
    ruler = {}, 
    culture = {}, 
    relations = {}, 
    history = {}, 
    economyInfo = {} 
  } = territoryData;
  
  const sources = territoryData.sources || DUMMY_SOURCES;

  const toggleWiki = () => {
    setWikiOpen((prev) => !prev);
    setSourcesOpen(false);
  };

  const toggleSources = () => {
    setSourcesOpen((prev) => !prev);
    if (!sourcesOpen) setWikiOpen(false);
  };

  const renderSourceIcon = (type) => {
    switch (type) {
      case 'primary': return '📜';
      case 'book': return '📚';
      case 'journal': return '📄';
      case 'web': return '🌐';
      default: return '📖';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop when wiki is closed */}
          <AnimatePresence>
            {!wikiOpen && (
              <motion.div
                key="backdrop-no-wiki"
                className="v3-panel-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
              />
            )}
          </AnimatePresence>

          {/* Backdrop when wiki IS open */}
          <AnimatePresence>
            {wikiOpen && (
              <motion.div
                key="backdrop-with-wiki"
                className="v3-panel-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setWikiOpen(false);
                  onClose();
                }}
              />
            )}
          </AnimatePresence>

          {/* MAIN PANEL - OPTIMIZED */}
          <motion.div
            className="v3-territory-panel"
            ref={scrollContainerRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{
              type: 'tween',
              duration: 0.3,
              ease: [0, 0, 0.2, 1]
            }}
          >
            {/* Ornate Header */}
            <div className="v3-panel-header">
              <div className="header-decoration top-left" />
              <div className="header-decoration top-right" />

              {/* Close Button */}
              <button className="v3-close-btn" onClick={onClose} aria-label="Close panel">
                ✕
              </button>

              {/* Wikipedia Button - SAFE CHECK */}
              {territoryInfo?.wikiSlug && (
                <button
                  className={`v3-wiki-btn ${wikiOpen ? 'active' : ''}`}
                  onClick={toggleWiki}
                  aria-label="Toggle Wikipedia panel"
                >
                  <span className="wiki-btn-w">W</span>
                </button>
              )}

              {/* Sources Button */}
              <div className="v3-sources-container">
                <button
                  className={`v3-sources-btn ${sourcesOpen ? 'active' : ''}`}
                  onClick={toggleSources}
                  aria-label="Toggle sources"
                >
                  <span className="sources-btn-icon">📖</span>
                </button>

                {/* Sources Popup */}
                <AnimatePresence>
                  {sourcesOpen && (
                    <motion.div
                      className="v3-sources-popup"
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
                    >
                      <div className="sources-popup-header">
                        <span className="sources-popup-title">Sources & References</span>
                        <button
                          className="sources-popup-close"
                          onClick={() => setSourcesOpen(false)}
                          aria-label="Close sources"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="sources-popup-divider" />

                      <div className="sources-popup-content">
                        {sources.map((source, index) => (
                          <div key={index} className="source-item">
                            <div className="source-icon">{renderSourceIcon(source.type)}</div>
                            <div className="source-info">
                              <div className="source-title">
                                {source.url ? (
                                  <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="source-link"
                                  >
                                    {source.title}
                                  </a>
                                ) : (
                                  source.title
                                )}
                              </div>
                              {source.author && <div className="source-author">{source.author}</div>}
                              {source.year && <div className="source-year">{source.year}</div>}
                              {source.note && <div className="source-note">{source.note}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="header-content">
                <div className="era-badge" style={{ background: territoryInfo?.colorPrimary || '#D4AF37' }}>
                  {territoryInfo?.era || 'Unknown Era'}
                </div>
                <h2 className="territory-name">{territoryInfo?.name || 'Territory'}</h2>
                {territoryInfo?.nameEnglish && (
                  <p className="territory-english">{territoryInfo.nameEnglish}</p>
                )}
                <div className="year-display">
                  <div className="year-label">Anno Domini</div>
                  <div className="year-value">{currentYear}</div>
                </div>
              </div>

              <div className="header-decoration bottom-left" />
              <div className="header-decoration bottom-right" />
            </div>

            {/* Tab Navigation */}
            <div className="v3-tabs">
              {[
                { id: 'overview', icon: '🏛️', label: 'Overview' },
                { id: 'history', icon: '📜', label: 'History' },
                { id: 'economy', icon: '💰', label: 'Economy' },
                { id: 'culture', icon: '🎭', label: 'Culture' },
                { id: 'relations', icon: '🤝', label: 'Relations' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`v3-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="v3-panel-content">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {/* Stats Grid */}
                    <div className="v3-stats-grid">
                      <div className="v3-stat-card">
                        <div className="stat-label">💰 Treasury</div>
                        <div className="stat-value">{stats?.treasury?.toLocaleString() || '0'}</div>
                        <div className="stat-unit">Gold Ducats</div>
                      </div>
                      <div className="v3-stat-card">
                        <div className="stat-label">🏛️ Authority</div>
                        <div className="stat-value">{stats?.authority || '0'}%</div>
                        <div className="stat-unit">Centralization</div>
                      </div>
                      <div className="v3-stat-card">
                        <div className="stat-label">⚔️ Military</div>
                        <div className="stat-value">{stats?.military?.toLocaleString() || '0'}</div>
                        <div className="stat-unit">Active Forces</div>
                      </div>
                      <div className="v3-stat-card">
                        <div className="stat-label">👥 Population</div>
                        <div className="stat-value">
                          {stats?.population ? (stats.population / 1000000).toFixed(1) + 'M' : '0M'}
                        </div>
                        <div className="stat-unit">Citizens</div>
                      </div>
                      <div className="v3-stat-card">
                        <div className="stat-label">🌾 Stability</div>
                        <div className="stat-value">{stats?.stability || '0'}%</div>
                        <div className="stat-unit">Internal Peace</div>
                      </div>
                      <div className="v3-stat-card">
                        <div className="stat-label">📈 Prestige</div>
                        <div className="stat-value">{stats?.prestige || '0'}</div>
                        <div className="stat-unit">Global Influence</div>
                      </div>
                    </div>

                    {/* Ruler Card */}
                    {ruler && (
                      <div className="v3-ruler-card">
                        <div className="ruler-portrait">{ruler?.portrait || '👑'}</div>
                        <div className="ruler-info">
                          <div className="ruler-title">{ruler?.title || 'Ruler'}</div>
                          <div className="ruler-name">{ruler?.name || 'Unknown'}</div>
                          <div className="ruler-reign">Reign: {ruler?.reign || 'N/A'}</div>
                          {ruler?.traits && ruler.traits.length > 0 && (
                            <div className="ruler-traits">
                              {ruler.traits.map((trait, i) => (
                                <span key={i} className="trait-badge">{trait}</span>
                              ))}
                            </div>
                          )}
                        </div>
                        {ruler?.ministers && ruler.ministers.length > 0 && (
                          <div className="minister-info">
                            <div className="minister-label">Key Ministers</div>
                            {ruler.ministers.map((minister, i) => (
                              <div key={i} className="minister-entry">
                                <strong>{minister.title}:</strong> {minister.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'history' && (
                  <motion.div
                    key="history"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="v3-section">
                      <h3 className="section-title">Historical Narrative</h3>
                      <div className="history-text">
                        {history?.narrative && history.narrative.length > 0 ? (
                          history.narrative.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))
                        ) : (
                          <p>No historical narrative available.</p>
                        )}
                      </div>
                    </div>

                    <div className="v3-section">
                      <h3 className="section-title">Regional Timeline</h3>
                      <div className="regional-timeline">
                        {regionalEvents
                          ?.filter((event) => event.year <= currentYear)
                          .sort((a, b) => b.year - a.year)
                          .slice(0, 8)
                          .map((event, i) => (
                            <div
                              key={i}
                              className={`regional-event ${event.year === currentYear ? 'current' : ''}`}
                            >
                              <div className="event-marker">
                                <div className="marker-year">{event.year}</div>
                              </div>
                              <div className="event-content">
                                <div className="event-title">{event.title}</div>
                                <div className="event-region">{event.region}</div>
                              </div>
                            </div>
                          )) || <p>No timeline events available.</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'economy' && (
                  <motion.div
                    key="economy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="v3-section">
                      <h3 className="section-title">Primary Industries</h3>
                      <div className="industry-list">
                        {economyInfo?.industries && economyInfo.industries.length > 0 ? (
                          economyInfo.industries.map((industry, i) => (
                            <div key={i} className="industry-card">
                              <div className="industry-icon">{industry.icon}</div>
                              <div className="industry-name">{industry.name}</div>
                            </div>
                          ))
                        ) : (
                          <p>No industry data available.</p>
                        )}
                      </div>
                    </div>

                    <div className="v3-section">
                      <h3 className="section-title">Major Exports</h3>
                      <div className="exports-grid">
                        {economyInfo?.exports && economyInfo.exports.length > 0 ? (
                          economyInfo.exports.map((exportItem, i) => (
                            <div key={i} className="export-tag">{exportItem}</div>
                          ))
                        ) : (
                          <p>No export data available.</p>
                        )}
                      </div>
                    </div>

                    <div className="v3-section">
                      <h3 className="section-title">Trade Partners</h3>
                      <div className="partners-list">
                        {economyInfo?.tradePartners && economyInfo.tradePartners.length > 0 ? (
                          economyInfo.tradePartners.map((partner, i) => (
                            <div key={i} className="partner-card">
                              <div className="partner-flag">{partner.flag}</div>
                              <div className="partner-name">{partner.name}</div>
                            </div>
                          ))
                        ) : (
                          <p>No trade partner data available.</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'culture' && (
                  <motion.div
                    key="culture"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="culture-grid">
                      <div className="culture-card">
                        <div className="culture-header">
                          <div className="culture-icon">🗣️</div>
                          <div className="culture-label">Official Language</div>
                        </div>
                        <div className="culture-value">{culture?.language || 'Unknown'}</div>
                      </div>

                      <div className="culture-card">
                        <div className="culture-header">
                          <div className="culture-icon">🕉️</div>
                          <div className="culture-label">Primary Religion</div>
                        </div>
                        <div className="culture-value">{culture?.religion || 'Unknown'}</div>
                      </div>

                      <div className="culture-card full-width">
                        <div className="culture-header">
                          <div className="culture-icon">🏛️</div>
                          <div className="culture-label">Architecture</div>
                        </div>
                        <div className="culture-value">{culture?.architecture || 'Unknown'}</div>
                      </div>

                      <div className="culture-card full-width">
                        <div className="culture-header">
                          <div className="culture-icon">🎨</div>
                          <div className="culture-label">Cultural Practices</div>
                        </div>
                        <div className="culture-value">{culture?.practices || 'Unknown'}</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'relations' && (
                  <motion.div
                    key="relations"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {relations?.controlled && relations.controlled.length > 0 && (
                      <div className="v3-section">
                        <h3 className="section-title">Controlled Territories</h3>
                        <div className="territory-tags">
                          {relations.controlled.map((territory, i) => (
                            <div key={i} className="territory-tag owned">{territory}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {relations?.vassals && relations.vassals.length > 0 && (
                      <div className="v3-section">
                        <h3 className="section-title">Vassal States</h3>
                        <div className="territory-tags">
                          {relations.vassals.map((vassal, i) => (
                            <div key={i} className="territory-tag vassal">{vassal}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {relations?.rivals && relations.rivals.length > 0 && (
                      <div className="v3-section">
                        <h3 className="section-title">Rival Powers</h3>
                        <div className="territory-tags">
                          {relations.rivals.map((rival, i) => (
                            <div key={i} className="territory-tag rival">{rival}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {relations?.diplomatic && relations.diplomatic.length > 0 && (
                      <div className="v3-section">
                        <h3 className="section-title">Diplomatic Relations</h3>
                        <div className="relations-list">
                          {relations.diplomatic.map((relation, i) => (
                            <div key={i} className="relation-card">
                              <div className="relation-nation">{relation.nation}</div>
                              <div className={`relation-status ${relation.status.toLowerCase().replace(' ', '-')}`}>
                                {relation.status}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(!relations?.controlled || relations.controlled.length === 0) && 
                     (!relations?.vassals || relations.vassals.length === 0) && 
                     (!relations?.rivals || relations.rivals.length === 0) && 
                     (!relations?.diplomatic || relations.diplomatic.length === 0) && (
                      <p>No relations data available.</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="v3-panel-footer">
              <div className="footer-decoration" />
              <div className="footer-text">Atlas of Southeast Asia</div>
              <div className="footer-decoration" />
            </div>
          </motion.div>

          {/* Wikipedia Panel */}
          <WikiPanel
            wikiSlug={territoryInfo?.wikiSlug}
            idWikiSlug={territoryInfo?.idWikiSlug}
            territoryName={territoryInfo?.nameEnglish || territoryInfo?.name || 'Territory'}
            isOpen={wikiOpen}
            onClose={() => setWikiOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default TerritoryInfoPanel;