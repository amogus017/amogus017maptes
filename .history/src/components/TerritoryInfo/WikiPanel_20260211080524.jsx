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
        // Handles wrong slugs, redirects, and language differences automatically
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
          // Summary failed — fall back to search API using territory name
          canonical = await resolveViaSearch(slug, lang.domain, territoryName);
          if (!canonical) throw new Error(`Could not find a Wikipedia article for "${territoryName}"`);
        } else {
          const summaryData = await summaryRes.json();
          // summary response gives us the real canonical title
          canonical = summaryData.titles?.canonical || slug;
        }

        setResolvedSlug(canonical);

        // Step 2 — fetch full article HTML using confirmed canonical title
        await fetchFullArticle(canonical, lang.domain);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWiki();
  }, [wikiSlug, idWikiSlug, isOpen, language]);

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

  // Fallback: search API to find the correct article title
  const resolveViaSearch = async (slug, domain, name) => {
    try {
      const searchTerm = name || slug.replace(/_/g, ' ');
      const searchRes = await fetch(
        `https://${domain}/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*&srlimit=1`
      );
      if (!searchRes.ok) return null;
      const searchData = await searchRes.json();
      const firstResult = searchData?.query?.search?.[0];
      if (!firstResult) return null;
      return firstResult.title.replace(/ /g, '_');
    } catch {
      return null;
    }
  };

  // Fetch and set full article HTML
  const fetchFullArticle = async (canonical, domain) => {
    const htmlRes = await fetch(
      `https://${domain}/api/rest_v1/page/html/${encodeURIComponent(canonical)}`,
      {
        headers: {
          'Api-User-Agent': 'SoutheastAsianHistoricalAtlas/1.0 (educational project)',
        },
      }
    );
    if (!htmlRes.ok) throw new Error(`Wikipedia returned ${htmlRes.status}`);
    const html = await htmlRes.text();
    const cleaned = cleanWikiHtml(html, domain);
    setWikiContent(cleaned);
  };

  // Clean and sanitize Wikipedia HTML
  const cleanWikiHtml = (rawHtml, domain) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');

    const removeSelectors = [
      '.mw-editsection',
      '.noprint',
      '.mw-empty-elt',
      'style',
      '.navbox',
      '.vertical-navbox',
      '.sistersitebox',
      '.ambox',
      '.hatnote',
      'sup.reference',
      '.reflist',
      '.mw-references-wrap',
      '#References',
    ];

    removeSelectors.forEach(sel => {
      doc.querySelectorAll(sel).forEach(el => el.remove());
    });

    // Fix protocol-relative image URLs
    doc.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src') || '';
      if (src.startsWith('//')) img.setAttribute('src', 'https:' + src);
      img.setAttribute('loading', 'lazy');
      img.classList.add('wiki-image');
    });

    // Fix internal links — point to correct language wiki
    doc.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('./') || href.startsWith('/wiki/')) {
        const title = href.replace('./', '').replace('/wiki/', '');
        a.setAttribute('href', `https://${domain}/wiki/${title}`);
      }
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    return doc.body.innerHTML;
  };

  // Parse HTML into collapsible sections
  const renderSections = () => {
    if (!wikiContent) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(wikiContent, 'text/html');
    const sections = [];
    let currentSection = { title: null, id: 'intro', content: [] };

    Array.from(doc.body.childNodes).forEach((node, idx) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName?.toLowerCase();
        if (tag === 'h2' || tag === 'h3') {
          if (currentSection.content.length > 0) sections.push({ ...currentSection });
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

    if (currentSection.content.length > 0) sections.push(currentSection);
    return sections;
  };

  const toggleSection = (sectionId) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const switchLanguage = (langCode) => {
    if (langCode === language) return;
    setLanguage(langCode);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const sections = wikiContent ? renderSections() : [];
  const wikiPageUrl = resolvedSlug
    ? `https://${lang.domain}/wiki/${resolvedSlug}`
    : `https://${lang.domain}/wiki/${language === 'en' ? wikiSlug : (idWikiSlug || wikiSlug)}`;

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
          {/* Header */}
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
              {/* Language Toggle */}
              <div className="wiki-lang-toggle">
                {Object.values(LANGUAGES).map(l => (
                  <button
                    key={l.code}
                    className={`wiki-lang-btn ${language === l.code ? 'active' : ''}`}
                    onClick={() => switchLanguage(l.code)}
                    title={l.fullLabel}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* Open in Wikipedia */}
              <a
                href={wikiPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-open-btn"
                title="Open in Wikipedia"
              >
                ↗
              </a>

              {/* Close */}
              <button className="wiki-close-btn" onClick={onClose} title="Close">
                ✕
              </button>
            </div>
          </div>

          <div className="wiki-header-divider" />

          {/* Content */}
          <div className="wiki-content-area" ref={contentRef}>
            {loading && (
              <div className="wiki-loading">
                <div className="wiki-loading-spinner" />
                <span>{lang.loadingText}</span>
              </div>
            )}

            {error && (
              <div className="wiki-error">
                <span className="wiki-error-icon">⚠</span>
                <span className="wiki-error-title">Could not load article</span>
                <span className="wiki-error-msg">{error}</span>
                <a
                  href={wikiPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wiki-fallback-link"
                >
                  Open directly on Wikipedia ↗
                </a>
              </div>
            )}

            {!loading && !error && sections.map((section) => (
              <div key={section.id} className="wiki-section">
                {section.title && (
                  <button
                    className={`wiki-section-toggle ${collapsedSections[section.id] ? 'collapsed' : ''}`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="wiki-section-title">{section.title}</span>
                    <span className="wiki-section-arrow">
                      {collapsedSections[section.id] ? '▸' : '▾'}
                    </span>
                  </button>
                )}

                <AnimatePresence initial={false}>
                  {!collapsedSections[section.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="wiki-section-content"
                      dangerouslySetInnerHTML={{ __html: section.content.join('') }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="wiki-panel-footer">
            <div className="footer-decoration" />
            <span className="wiki-footer-text">{lang.creditText}</span>
            <div className="footer-decoration" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WikiPanel;