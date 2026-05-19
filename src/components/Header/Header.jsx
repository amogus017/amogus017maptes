import { useState, useRef, useEffect } from 'react';
import { EMPIRES } from '../../data/boundaries';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

export default function Header({ onKingdomSelect }) {
  const { language, setLanguage, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

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
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="app-header" role="banner">
      <h1 className="app-header-title">
        <span className="app-header-logo">⚜</span>
        <span className="app-header-title-stack">
          <span className="app-header-title-main">Atlas Nusantara</span>
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
