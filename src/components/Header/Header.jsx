import { useState, useRef, useEffect } from 'react';
import { EMPIRES } from '../../data/boundaries';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const NAV_CONTENT = {
  limitasi: {
    id: {
      title: 'Limitasi Atlas',
      points: [
        'Atlas ini hanya menampilkan kerajaan Hindu-Buddha Nusantara (400–1600 M).',
        'Mencakup ±20 kerajaan besar yang relevan dengan kurikulum Sejarah SMA.',
        'Kesultanan Islam dan periode sebelum Hindu-Buddha tidak termasuk.',
        'Kelengkapan data bervariasi; beberapa kerajaan hanya memiliki data dasar.',
      ],
    },
    en: {
      title: 'Atlas Limitations',
      points: [
        'This atlas covers only Hindu-Buddhist kingdoms of Nusantara (400–1600 CE).',
        'Approx. 20 major kingdoms aligned with the Indonesian SMA history curriculum.',
        'Islamic sultanates and pre-Hindu/Buddhist periods are not included.',
        'Data completeness varies; some kingdoms have only basic information.',
      ],
    },
  },
  sumber: {
    id: {
      title: 'Sumber & Referensi',
      items: [
        { author: 'George Coedès', title: 'The Indianized States of Southeast Asia', year: '1968' },
        { author: 'O.W. Wolters', title: 'History, Culture and Region in Southeast Asian Perspectives', year: '1982' },
        { author: 'Slamet Muljana', title: 'Tafsir Sejarah Nagarakretagama', year: '1979' },
        { author: 'Slamet Muljana', title: 'Runtuhnya Kerajaan Hindu-Jawa dan Timbulnya Negara-Negara Islam di Nusantara', year: '2005' },
        { author: 'Wikipedia ID/EN', title: 'Artikel Kerajaan Nusantara', year: '' },
      ],
    },
    en: {
      title: 'Sources & References',
      items: [
        { author: 'George Coedès', title: 'The Indianized States of Southeast Asia', year: '1968' },
        { author: 'O.W. Wolters', title: 'History, Culture and Region in Southeast Asian Perspectives', year: '1982' },
        { author: 'Slamet Muljana', title: 'Tafsir Sejarah Nagarakretagama', year: '1979' },
        { author: 'Slamet Muljana', title: 'Runtuhnya Kerajaan Hindu-Jawa', year: '2005' },
        { author: 'Wikipedia ID/EN', title: 'Nusantara Kingdom Articles', year: '' },
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

export default function Header({ onKingdomSelect }) {
  const { language, setLanguage, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);
  const searchRef = useRef(null);
  const navRef = useRef(null);

  const kingdoms = Object.values(EMPIRES);
  const filtered = query.length > 0
    ? kingdoms.filter(e => e.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSelect = (empire) => {
    onKingdomSelect(empire);
    setQuery('');
    setOpen(false);
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
    : (language === 'id' ? 'Sumber' : 'Sources');

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
        {open && filtered.length > 0 && (
          <ul className="app-header-dropdown" role="listbox">
            {filtered.map(empire => (
              <li
                key={empire.id}
                className="app-header-dropdown-item"
                role="option"
                onMouseDown={() => handleSelect(empire)}
              >
                <span className="dropdown-name">{empire.name}</span>
                <span className="dropdown-period">{empire.startYear}–{empire.endYear} M</span>
              </li>
            ))}
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
    </header>
  );
}
