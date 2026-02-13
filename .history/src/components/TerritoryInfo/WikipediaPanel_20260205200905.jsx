// src/components/TerritoryInfo/WikipediaPanel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WikipediaPanel.css';

const WikipediaPanel = ({ territoryName, isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [wikiData, setWikiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && territoryName) {
      fetchWikipediaContent();
    }
  }, [isOpen, territoryName]);

  const fetchWikipediaContent = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Search for the article
      const searchResponse = await fetch(
        `https://en.wikipedia.org/w/api.php?` +
        `action=query&list=search&srsearch=${encodeURIComponent(territoryName)}&` +
        `format=json&origin=*`
      );
      const searchData = await searchResponse.json();
      
      if (searchData.query.search.length === 0) {
        setError('No Wikipedia article found');
        setLoading(false);
        return;
      }

      const pageTitle = searchData.query.search[0].title;
      
      // Get the full article content
      const contentResponse = await fetch(
        `https://en.wikipedia.org/w/api.php?` +
        `action=query&prop=extracts|pageimages&exintro=1&explaintext=1&` +
        `piprop=thumbnail&pithumbsize=400&titles=${encodeURIComponent(pageTitle)}&` +
        `format=json&origin=*`
      );
      const contentData = await contentResponse.json();
      
      const pages = contentData.query.pages;
      const pageId = Object.keys(pages)[0];
      const page = pages[pageId];
      
      setWikiData({
        title: page.title,
        extract: page.extract,
        thumbnail: page.thumbnail?.source,
        url: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, '_'))}`
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to load Wikipedia content');
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="wiki-panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Wikipedia Panel */}
          <motion.div 
            className="wiki-panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="wiki-panel-header">
              <div className="wiki-header-decoration top-left" />
              <div className="wiki-header-decoration top-right" />
              
              <button className="wiki-close-btn" onClick={onClose}>
                <span>✕</span>
              </button>
              
              <div className="wiki-header-content">
                <div className="wiki-logo">
                  <span className="wiki-icon">📖</span>
                  <span className="wiki-title">Wikipedia</span>
                </div>
                <h2 className="wiki-territory-name">{territoryName}</h2>
              </div>
              
              <div className="wiki-header-decoration bottom-left" />
              <div className="wiki-header-decoration bottom-right" />
            </div>

            {/* Content */}
            <div className="wiki-panel-content">
              {loading && (
                <div className="wiki-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading Wikipedia article...</p>
                </div>
              )}

              {error && (
                <div className="wiki-error">
                  <span className="error-icon">⚠️</span>
                  <p>{error}</p>
                  <p className="error-hint">Try searching on Wikipedia directly</p>
                </div>
              )}

              {wikiData && !loading && !error && (
                <div className="wiki-content">
                  {wikiData.thumbnail && (
                    <div className="wiki-image-container">
                      <img 
                        src={wikiData.thumbnail} 
                        alt={wikiData.title}
                        className="wiki-image"
                      />
                    </div>
                  )}
                  
                  <h3 className="wiki-article-title">{wikiData.title}</h3>
                  
                  <div className="wiki-extract">
                    {wikiData.extract}
                  </div>

                  <a 
                    href={wikiData.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="wiki-read-more"
                  >
                    <span>Read full article on Wikipedia</span>
                    <span className="external-icon">↗</span>
                  </a>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="wiki-panel-footer">
              <div className="footer-decoration" />
              <span className="footer-text">Content from Wikipedia, the free encyclopedia</span>
              <div className="footer-decoration" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WikipediaPanel;
