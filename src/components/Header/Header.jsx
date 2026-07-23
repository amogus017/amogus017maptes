import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { buildSearchIndex } from '../../data/searchIndex';
import './Header.css';

const NAV_CONTENT = {
  limitasi: {
    id: {
      title: 'Limitasi Atlas',
      points: [
        'Atlas ini hanya menampilkan kerajaan utama Hindu-Buddha Nusantara (400–1600 M).',
        'Mencakup ±20 kerajaan besar yang relevan dengan kurikulum Sejarah SMA.',
        'Pemilihan kerajaan didasarkan pada silabus Kurikulum Merdeka Fase E; kerajaan kecil atau lokal yang tidak dibahas kurikulum tidak ditampilkan.',
        'Kesultanan Islam dan periode sebelum Hindu-Buddha tidak termasuk.',
        'Kelengkapan data bervariasi; beberapa kerajaan hanya memiliki data dasar.',
      ],
    },
    en: {
      title: 'Atlas Limitations',
      points: [
        'This atlas covers only major Hindu-Buddhist kingdoms of Nusantara (400–1600 CE).',
        'Approx. 20 major kingdoms aligned with the Indonesian SMA history curriculum.',
        'Kingdom selection follows the Kurikulum Merdeka Fase E syllabus; smaller or local kingdoms not covered by the curriculum are not included.',
        'Islamic sultanates and pre-Hindu/Buddhist periods are not included.',
        'Data completeness varies; some kingdoms have only basic information.',
      ],
    },
  },
  sumber: {
    id: {
      title: 'Sumber Wilayah',
      items: [
        { author: 'Lazardi Wong Jogja', title: 'YouTube', year: '' },
        { author: 'Emperor Tigerstar', title: 'YouTube', year: '' },
      ],
    },
    en: {
      title: 'Territory Sources',
      items: [
        { author: 'Lazardi Wong Jogja', title: 'YouTube', year: '' },
        { author: 'Emperor Tigerstar', title: 'YouTube', year: '' },
      ],
    },
  },
};

function NavDropdownContent({ content }) {
  return (
    <>
      {content.points && (
        <ul className="nav-dropdown-list">
          {content.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
      {content.items && (
        <ul className="nav-dropdown-list">
          {content.items.map((item, i) => (
            <li key={i}>
              <span className="src-author">{item.author}</span>
              {item.title && <span className="src-title"> — {item.title}</span>}
              {item.year && <span className="src-year"> ({item.year})</span>}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function Header({ onKingdomSelect, onOpenTutorial }) {
  const { language, setLanguage, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);
  const searchRef = useRef(null);
  const navRef = useRef(null);

  const handleSelect = (result) => {
    onKingdomSelect({ id: result.kingdomId, startYear: result.year });
    setQuery('');
    setOpen(false);
  };

  const q = query.toLowerCase();
  const allResults = q.length >= 2
    ? buildSearchIndex().filter(r =>
        r.label.toLowerCase().includes(q) || r.labelId.toLowerCase().includes(q)
      )
    : [];
  const grouped = {
    kingdom: allResults.filter(r => r.type === 'kingdom').slice(0, 5),
    ruler:   allResults.filter(r => r.type === 'ruler').slice(0, 5),
    event:   allResults.filter(r => r.type === 'event').slice(0, 5),
  };
  const hasResults = allResults.length > 0;

  const formatSub = (r) => {
    const suf = language === 'id' ? 'M' : 'CE';
    if (r.type === 'kingdom') return `${r.startYear}–${r.endYear} ${suf}`;
    if (r.type === 'ruler')   return `${r.kingdomName} · ${r.reignStart}–${r.reignEnd} ${suf}`;
    return `${r.year} ${suf}`;
  };

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setOpen(false);
      if (navRef.current && !navRef.current.contains(e.target)) setOpenPanel(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLabel = (key) => key === 'limitasi'
    ? (language === 'id' ? 'Limitasi' : 'Limitations')
    : (language === 'id' ? 'Sumber Wilayah' : 'Territory Sources');

  return (
    <header className="app-header" role="banner">
      <h1 className="app-header-title">
        <span className="app-header-logo">⚜</span>
        <span className="app-header-title-stack">
          <span className="app-header-title-main">Atlas</span>
          <span className="app-header-title-sub">Nusantara</span>
          <span className="app-header-period">400 – 1600 M</span>
        </span>
      </h1>

      <div className="app-header-search" ref={searchRef}>
        <input
          className="app-header-search-input"
          type="search"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => query.length > 0 && setOpen(true)}
          aria-label={t.searchAriaLabel}
          aria-expanded={open}
          aria-autocomplete="list"
        />
        {open && hasResults && (
          <ul className="app-header-dropdown" role="listbox">
            {grouped.kingdom.length > 0 && <>
              <li className="dropdown-group-header">
                {language === 'id' ? 'Kerajaan' : 'Kingdoms'}
              </li>
              {grouped.kingdom.map(r => (
                <li key={r.kingdomId} className="app-header-dropdown-item" role="option" onMouseDown={() => handleSelect(r)}>
                  <span className="dropdown-name">{language === 'id' ? r.labelId : r.label}</span>
                  <span className="dropdown-period">{formatSub(r)}</span>
                </li>
              ))}
            </>}
            {grouped.ruler.length > 0 && <>
              <li className="dropdown-group-header">
                {language === 'id' ? 'Penguasa' : 'Rulers'}
              </li>
              {grouped.ruler.map((r, i) => (
                <li key={`${r.kingdomId}-${r.reignStart}-${i}`} className="app-header-dropdown-item" role="option" onMouseDown={() => handleSelect(r)}>
                  <span className="dropdown-item-icon">👤</span>
                  <span className="dropdown-name">{r.label}</span>
                  <span className="dropdown-period">{formatSub(r)}</span>
                </li>
              ))}
            </>}
            {grouped.event.length > 0 && <>
              <li className="dropdown-group-header">
                {language === 'id' ? 'Peristiwa' : 'Events'}
              </li>
              {grouped.event.map(r => (
                <li key={r.label} className="app-header-dropdown-item" role="option" onMouseDown={() => handleSelect(r)}>
                  <span className="dropdown-item-icon">{r.icon}</span>
                  <span className="dropdown-name">{language === 'id' ? r.labelId : r.label}</span>
                  <span className="dropdown-period">{formatSub(r)}</span>
                </li>
              ))}
            </>}
          </ul>
        )}
      </div>

      {/* Center nav */}
      <div className="app-header-nav" ref={navRef}>

        {/* Desktop: individual buttons */}
        {(['limitasi', 'sumber']).map(key => (
          <div key={key} className="nav-item nav-item-desktop">
            <button
              className={`nav-btn${openPanel === key ? ' active' : ''}`}
              onClick={() => setOpenPanel(p => p === key ? null : key)}
            >
              {navLabel(key)}
            </button>
            {openPanel === key && (
              <div className="nav-dropdown">
                <div className="nav-dropdown-title">{NAV_CONTENT[key][language].title}</div>
                <NavDropdownContent content={NAV_CONTENT[key][language]} />
              </div>
            )}
          </div>
        ))}

        {/* Mobile: ··· collapsed menu */}
        <div className="nav-item nav-item-mobile">
          <button
            className={`nav-btn nav-mobile-btn${openPanel === 'mobile' ? ' active' : ''}`}
            onClick={() => setOpenPanel(p => p === 'mobile' ? null : 'mobile')}
            aria-label="Menu"
          >···</button>
          {openPanel === 'mobile' && (
            <div className="nav-dropdown nav-mobile-dropdown">
              {(['limitasi', 'sumber']).map(key => (
                <div key={key} className="mobile-nav-section">
                  <div className="nav-dropdown-title">{navLabel(key)}</div>
                  <NavDropdownContent content={NAV_CONTENT[key][language]} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="app-header-lang" role="group" aria-label="Language">
        <div className="app-header-lang-toggle">
          {['id', 'en'].map(code => (
            <button
              key={code}
              className={`app-header-lang-btn${language === code ? ' active' : ''}`}
              onClick={() => setLanguage(code)}
              aria-pressed={language === code}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className="app-header-lang-btn header-tutorial-btn"
          onClick={onOpenTutorial}
          aria-label={t.tutorial?.reopen ?? 'Tutorial'}
          title={t.tutorial?.reopen ?? 'Tutorial'}
        >
          ?
        </button>
      </div>
    </header>
  );
}
