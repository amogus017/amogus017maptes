// src/components/TerritoryInfo/WikiPanel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WikiPanel.css';

const LANGUAGES = {
  en: {
    code: 'en',
    label: 'EN',
    fullLabel: 'English',
    domain: 'en.wikipedia.org',
    loadingText: 'Fetching from Wikipedia...',
    creditText: 'Content from Wikipedia · CC BY-SA',
  },
  id: {
    code: 'id',
    label: 'ID',
    fullLabel: 'Indonesia',
    domain: 'id.wikipedia.org',
    loadingText: 'Mengambil dari Wikipedia...',
    creditText: 'Konten dari Wikipedia · CC BY-SA',
  },
};

const WikiPanel = ({ wikiSlug, idWikiSlug, territoryName, isOpen, onClose }) => {
  const [wikiContent, setWikiContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [collapsedSections, setCollapsedSections] = useState({});
  const [language, setLanguage] = useState('en');
  const [resolvedSlug, setResolvedSlug] = useState(null);
  const contentRef = useRef(null);

  const lang = LANGUAGES[language];

  // Fetch when territory or language changes
  useEffect(() => {
    if (!isOpen) return;
    const slug = language === 'en' ? wikiSlug : (idWikiSlug || wikiSlug);
    if (!slug) return;

    const fetchWiki = async () => {
      setLoading(true);
      setError(null);
      setWikiContent(null);
      setCollapsedSections({});
      setResolvedSlug(null);

      try {
        // Step 1 — resolve canonical slug via summary API
        const summaryRes = await fetch(
          `https://${lang.domain}/api/rest_v1/page/summary/${encodeURIComponent(slug)}`,
          {
            headers: {
              'Api-User-Agent': 'SoutheastAsianHistoricalAtlas/1.0 (educational project)',
            },
          }
        );

        let canonical;

        if (!summaryRes.ok) {
          // Summary failed — fall back to search API
          canonical = await resolveViaSearch(slug, lang.domain, territoryName);
          if (!canonical) throw new Error(`Could not find a Wikipedia article for "${territoryName}"`);
        } else {
          const summaryData = await summaryRes.json();
          canonical = summaryData.titles?.canonical || slug;
        }

        setResolvedSlug(canonical);

        // Step 2 — fetch full article HTML
        await fetchFullArticle(canonical, lang.domain);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWiki();
  }, [wikiSlug, idWikiSlug, isOpen, language, territoryName]);

  // Reset language when territory changes
  useEffect(() => {
    setLanguage('en');
  }, [wikiSlug]);

  // Clear content when panel closes
  useEffect(() => {
    if (!isOpen) {
      setWikiContent(null);
      setError(null);
      setResolvedSlug(null);
    }
  }, [isOpen]);

  // Helper: resolve via search API as fallback
  async function resolveViaSearch(slug, domain, fallbackName) {
    const searchQuery = fallbackName || slug;
    const searchRes = await fetch(
      `https://${domain}/w/api.php?` +
        new URLSearchParams({
          action: 'opensearch',
          search: searchQuery,
          limit: '1',
          namespace: '0',
          format: 'json',
          origin: '*',
        })
    );

    if (!searchRes.ok) return null;
    const [, titles] = await searchRes.json();
    return titles && titles.length > 0 ? titles[0] : null;
  }

  // Helper: fetch full article
  async function fetchFullArticle(title, domain) {
    const htmlRes = await fetch(
      `https://${domain}/api/rest_v1/page/html/${encodeURIComponent(title)}`,
      {
        headers: {
          'Api-User-Agent': 'SoutheastAsianHistoricalAtlas/1.0 (educational project)',
        },
      }
    );

    if (!htmlRes.ok) throw new Error('Failed to fetch article content.');

    const htmlText = await htmlRes.text();
    const parsed = parseWikiHTML(htmlText);
    setWikiContent(parsed);
  }

  // Parse HTML response into sections
  function parseWikiHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Remove unwanted elements
    doc.querySelectorAll('.mw-editsection, .reference, sup').forEach((el) => el.remove());

    const sections = [];
    const body = doc.body;

    // Intro section (everything before first <h2>)
    const introNodes = [];
    let node = body.firstChild;
    while (node && node.tagName !== 'H2') {
      if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
        introNodes.push(node.outerHTML || node.textContent);
      }
      node = node.nextSibling;
    }

    if (introNodes.length > 0) {
      sections.push({
        id: 'intro',
        title: 'Introduction',
        content: introNodes,
        isIntro: true,
      });
    }

    // Other sections split by <h2>
    const h2List = Array.from(body.querySelectorAll('h2'));
    h2List.forEach((h2, i) => {
      const sectionTitle = h2.textContent.trim();
      const sectionId = `section-${i}`;
      const sectionContent = [];

      let sibling = h2.nextElementSibling;
      while (sibling && sibling.tagName !== 'H2') {
        sectionContent.push(sibling.outerHTML);
        sibling = sibling.nextElementSibling;
      }

      sections.push({
        id: sectionId,
        title: sectionTitle,
        content: sectionContent,
        isIntro: false,
      });
    });

    return sections;
  }

  const toggleSection = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleOpenWiki = () => {
    if (resolvedSlug) {
      window.open(`https://${lang.domain}/wiki/${encodeURIComponent(resolvedSlug)}`, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="wiki-panel"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{
            type: 'tween',
            duration: 0.3,
            ease: [0, 0, 0.2, 1],
            delay: 0.05
          }}
        >
          {/* Header */}
          <div className="wiki-panel-header">
            <div className="wiki-header-left">
              <div className="wiki-logo">
                <span className="wiki-logo-w">W</span>
              </div>
              <div className="wiki-header-text">
                <div className="wiki-label">Wikipedia</div>
                <div className="wiki-territory-name" title={territoryName}>
                  {territoryName}
                </div>
              </div>
            </div>

            <div className="wiki-header-actions">
              {/* Language Toggle */}
              <div className="wiki-lang-toggle">
                <button
                  className={`wiki-lang-btn ${language === 'en' ? 'active' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </button>
                <button
                  className={`wiki-lang-btn ${language === 'id' ? 'active' : ''}`}
                  onClick={() => setLanguage('id')}
                >
                  ID
                </button>
              </div>

              {/* Open in new tab */}
              {resolvedSlug && (
                <button
                  className="wiki-open-btn"
                  onClick={handleOpenWiki}
                  aria-label="Open in Wikipedia"
                  title="Open in new tab"
                >
                  ↗
                </button>
              )}

              {/* Close button */}
              <button className="wiki-close-btn" onClick={onClose} aria-label="Close Wikipedia panel">
                ✕
              </button>
            </div>
          </div>

          <div className="wiki-header-divider" />

          {/* Loading State */}
          {loading && (
            <div className="wiki-loading">
              <div className="wiki-loading-spinner" />
              <div>{lang.loadingText}</div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="wiki-error">
              <div className="wiki-error-icon">⚠️</div>
              <div className="wiki-error-title">Unable to Load Article</div>
              <div className="wiki-error-msg">{error}</div>
              {wikiSlug && (
                <a
                  href={`https://${lang.domain}/wiki/${encodeURIComponent(wikiSlug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wiki-fallback-link"
                >
                  Open on Wikipedia
                </a>
              )}
            </div>
          )}

          {/* Content Area */}
          {wikiContent && !loading && (
            <div className="wiki-content-area" ref={contentRef}>
              {wikiContent.map((section) => (
                <div key={section.id} className="wiki-section">
                  {/* If it's the intro section, render directly without toggle */}
                  {section.isIntro ? (
                    <div
                      className="wiki-section-content"
                      dangerouslySetInnerHTML={{ __html: section.content.join('') }}
                    />
                  ) : (
                    <>
                      {/* Section Toggle Button */}
                      <button
                        className={`wiki-section-toggle ${collapsedSections[section.id] ? 'collapsed' : ''}`}
                        onClick={() => toggleSection(section.id)}
                      >
                        <span className="wiki-section-title">{section.title}</span>
                        <span
                          className="wiki-section-arrow"
                          style={{
                            transform: collapsedSections[section.id] ? 'rotate(0deg)' : 'rotate(90deg)',
                          }}
                        >
                          ▶
                        </span>
                      </button>

                      {/* OPTIMIZED: Use maxHeight instead of height:auto */}
                      <AnimatePresence initial={false}>
                        {!collapsedSections[section.id] && (
                          <motion.div
                            initial={{ opacity: 0, maxHeight: 0 }}
                            animate={{ 
                              opacity: 1, 
                              maxHeight: 2000,
                              transition: {
                                maxHeight: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                                opacity: { duration: 0.2 }
                              }
                            }}
                            exit={{ 
                              opacity: 0, 
                              maxHeight: 0,
                              transition: {
                                maxHeight: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                                opacity: { duration: 0.15 }
                              }
                            }}
                            className="wiki-section-content"
                            style={{ overflow: 'hidden' }}
                            dangerouslySetInnerHTML={{ __html: section.content.join('') }}
                          />
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          {wikiContent && (
            <div className="wiki-panel-footer">
              <div className="wiki-footer-text">{lang.creditText}</div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WikiPanel;