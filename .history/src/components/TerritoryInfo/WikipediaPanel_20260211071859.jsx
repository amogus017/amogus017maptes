// src/components/TerritoryInfo/WikiPanel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WikiPanel.css';

const WikiPanel = ({ wikiSlug, territoryName, isOpen, onClose }) => {
  const [wikiContent, setWikiContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [collapsedSections, setCollapsedSections] = useState({});
  const contentRef = useRef(null);

  useEffect(() => {
    if (!wikiSlug || !isOpen) return;

    const fetchWiki = async () => {
      setLoading(true);
      setError(null);
      setWikiContent(null);
      setCollapsedSections({});

      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/html/${encodeURIComponent(wikiSlug)}`,
          {
            headers: {
              'Api-User-Agent': 'SoutheastAsianHistoricalAtlas/1.0 (educational project)',
            },
          }
        );

        if (!response.ok) throw new Error(`Wikipedia returned ${response.status}`);

        const html = await response.text();
        const cleaned = cleanWikiHtml(html);
        setWikiContent(cleaned);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWiki();
  }, [wikiSlug, isOpen]);

  // Clean and sanitize Wikipedia HTML
  const cleanWikiHtml = (rawHtml) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');

    // Remove unwanted elements
    const removeSelectors = [
      '.mw-editsection',       // edit buttons
      '.noprint',              // print-only stuff
      '.mw-empty-elt',         // empty elements
      'style',                 // inline styles
      '.navbox',               // navigation boxes
      '.vertical-navbox',
      '.sistersitebox',
      '.ambox',                // article message boxes (cleanup tags etc)
      '.hatnote',              // "for other uses" notes — keep or remove your choice
      'sup.reference',         // citation superscripts
      '.reflist',              // references section
      '.mw-references-wrap',
      '#References',
      '.wikitable.sortable',   // sortable tables can be left but stripped of JS
    ];

    removeSelectors.forEach(sel => {
      doc.querySelectorAll(sel).forEach(el => el.remove());
    });

    // Fix image URLs — Wikipedia uses protocol-relative URLs
    doc.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src') || '';
      if (src.startsWith('//')) {
        img.setAttribute('src', 'https:' + src);
      }
      // Add loading lazy for performance
      img.setAttribute('loading', 'lazy');
      img.classList.add('wiki-image');
    });

    // Fix internal links to open Wikipedia in new tab
    doc.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('./') || href.startsWith('/wiki/')) {
        const title = href.replace('./', '').replace('/wiki/', '');
        a.setAttribute('href', `https://en.wikipedia.org/wiki/${title}`);
      }
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    return doc.body.innerHTML;
  };

  // Extract sections from rendered HTML for collapsible behavior
  const renderSections = () => {
    if (!wikiContent) return null;

    const parser = new DOMParser();
    const doc = parser.parseFromString(wikiContent, 'text/html');
    const body = doc.body;

    const sections = [];
    let currentSection = { title: null, id: 'intro', content: [] };

    Array.from(body.childNodes).forEach((node, idx) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName?.toLowerCase();

        if (tag === 'h2' || tag === 'h3') {
          if (currentSection.content.length > 0) {
            sections.push({ ...currentSection });
          }
          currentSection = {
            title: node.textContent.trim(),
            id: `section-${idx}`,
            content: [],
          };
        } else {
          currentSection.content.push(node.outerHTML);
        }
      }
    });

    if (currentSection.content.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  const toggleSection = (sectionId) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = wikiContent ? renderSections() : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="wiki-panel"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 200, delay: 0.05 }}
        >
          {/* Wiki Panel Header */}
          <div className="wiki-panel-header">
            <div className="wiki-header-left">
              <div className="wiki-logo">
                <span className="wiki-logo-w">W</span>
              </div>
              <div className="wiki-header-text">
                <span className="wiki-label">Wikipedia</span>
                <span className="wiki-territory-name">{territoryName}</span>
              </div>
            </div>

            <div className="wiki-header-actions">
              {wikiSlug && (
                <a
                  href={`https://en.wikipedia.org/wiki/${wikiSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wiki-open-btn"
                  title="Open in Wikipedia"
                >
                  ↗
                </a>
              )}
              <button className="wiki-close-btn" onClick={onClose} title="Close">
                ✕
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="wiki-header-divider" />

          {/* Content Area */}
          <div className="wiki-content-area" ref={contentRef}>
            {loading && (
              <div className="wiki-loading">
                <div className="wiki-loading-spinner" />
                <span>Fetching from Wikipedia...</span>
              </div>
            )}

            {error && (
              <div className="wiki-error">
                <span className="wiki-error-icon">⚠</span>
                <span className="wiki-error-title">Could not load article</span>
                <span className="wiki-error-msg">{error}</span>
                <a
                  href={`https://en.wikipedia.org/wiki/${wikiSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wiki-fallback-link"
                >
                  Open directly on Wikipedia ↗
                </a>
              </div>
            )}

            {!loading && !error && sections && sections.map((section, idx) => (
              <div key={section.id} className="wiki-section">
                {section.title ? (
                  <button
                    className={`wiki-section-toggle ${collapsedSections[section.id] ? 'collapsed' : ''}`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="wiki-section-title">{section.title}</span>
                    <span className="wiki-section-arrow">
                      {collapsedSections[section.id] ? '▸' : '▾'}
                    </span>
                  </button>
                ) : null}

                <AnimatePresence initial={false}>
                  {!collapsedSections[section.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="wiki-section-content"
                      dangerouslySetInnerHTML={{
                        __html: section.content.join(''),
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="wiki-panel-footer">
            <div className="footer-decoration" />
            <span className="wiki-footer-text">Content from Wikipedia · CC BY-SA</span>
            <div className="footer-decoration" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WikiPanel;