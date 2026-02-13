// src/components/TerritoryInfo/TerritoryInfoPanel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTerritoryData, regionalEvents } from '../../data/territories';
import './TerritoryInfoPanel.css';

const TerritoryInfoPanel = ({ territoryId, currentYear, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [territoryData, setTerritoryData] = useState(null);
  
  useEffect(() => {
    if (territoryId && currentYear) {
      const data = getTerritoryData(territoryId, currentYear);
      setTerritoryData(data);
    }
  }, [territoryId, currentYear]);

  if (!territoryData) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📜' },
    { id: 'history', label: 'History', icon: '📖' },
    { id: 'economy', label: 'Economy', icon: '💰' },
    { id: 'culture', label: 'Culture', icon: '🏛️' },
    { id: 'relations', label: 'Relations', icon: '⚖️' }
  ];

  const relevantEvents = regionalEvents.filter(
    e => Math.abs(e.year - currentYear) <= 50
  ).sort((a, b) => a.year - b.year);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="v3-panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Main Panel */}
          <motion.div 
            className="v3-territory-panel"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Ornate Header */}
            <div className="v3-panel-header">
              <div className="header-decoration top-left" />
              <div className="header-decoration top-right" />
              
              <button className="v3-close-btn" onClick={onClose}>
                <span>✕</span>
              </button>
              
              <div className="header-content">
                <div className="era-badge" style={{ backgroundColor: territoryData.color }}>
                  {territoryData.era}
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
            <div className="v3-tab-nav">
              {tabs.map(tab => (
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
                      {/* Summary */}
                      <div className="v3-section">
                        <p className="summary-text">{territoryData.summary}</p>
                      </div>

                      {/* Quick Stats */}
                      <div className="v3-stats-grid">
                        <div className="stat-card">
                          <span className="stat-icon">🏛️</span>
                          <span className="stat-label">Capital</span>
                          <span className="stat-value">{territoryData.capital}</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-icon">👥</span>
                          <span className="stat-label">Population</span>
                          <span className="stat-value">{territoryData.population}</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-icon">⛪</span>
                          <span className="stat-label">Religion</span>
                          <span className="stat-value">{territoryData.religion}</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-icon">👑</span>
                          <span className="stat-label">Government</span>
                          <span className="stat-value">{territoryData.government}</span>
                        </div>
                      </div>

                      {/* Key Events */}
                      <div className="v3-section">
                        <h3 className="section-title">
                          <span className="title-icon">⚔️</span>
                          Key Events
                        </h3>
                        <div className="events-timeline">
                          {territoryData.keyEvents.map((event, idx) => (
                            <div key={idx} className={`timeline-event ${event.type}`}>
                              <span className="event-year">{event.year}</span>
                              <span className="event-dot" />
                              <span className="event-text">{event.event}</span>
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
                          Historical Context
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
                          Regional Timeline
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
                                <span className="event-title">{event.event}</span>
                                <span className="event-region">{event.region}</span>
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
                          Primary Industries
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
                          Exports
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
                          Trading Partners
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
                            <span className="culture-label">Language</span>
                          </div>
                          <span className="culture-value">{territoryData.culture.language}</span>
                        </div>
                        
                        <div className="culture-card">
                          <div className="culture-header">
                            <span className="culture-icon">✍️</span>
                            <span className="culture-label">Script</span>
                          </div>
                          <span className="culture-value">{territoryData.culture.script}</span>
                        </div>
                        
                        <div className="culture-card full-width">
                          <div className="culture-header">
                            <span className="culture-icon">🏛️</span>
                            <span className="culture-label">Architecture</span>
                          </div>
                          <span className="culture-value">{territoryData.culture.architecture}</span>
                        </div>
                        
                        <div className="culture-card full-width">
                          <div className="culture-header">
                            <span className="culture-icon">📚</span>
                            <span className="culture-label">Literature</span>
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
                          Territories
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
                            Vassals & Tributaries
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
                            Rivals
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
                          Diplomatic Relations
                        </h3>
                        <div className="relations-list">
                          {Object.entries(territoryData.relations).map(([nation, status], idx) => (
                            <div key={idx} className="relation-card">
                              <span className="relation-nation">{nation.charAt(0).toUpperCase() + nation.slice(1)}</span>
                              <span className={`relation-status ${status.toLowerCase().replace(' ', '-')}`}>
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
              <span className="footer-text">Southeast Asian Historical Atlas</span>
              <div className="footer-decoration" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TerritoryInfoPanel;