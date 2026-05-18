// At the very top of App.jsx
import React, { useState, useMemo } from 'react';
import MyMap from "./components/Map/MyMap";
import Timeline from "./components/Timeline/Timeline";
import TerritoryInfoPanel from "./components/TerritoryInfo/TerritoryInfoPanel";
import HistoryBot from "./components/HistoryBot/HistoryBot";
import Header from "./components/Header/Header";
import { getTerritoryData } from "./data/territories";
import { getTerritoryInfo } from "./data/boundaries";
import './App.css';


function App() {
  const [currentYear, setCurrentYear] = useState(1350);
  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [language, setLanguage] = useState('id');

  const handleYearChange = (newYear) => {
    setCurrentYear(newYear);
  };

  const handleTerritoryClick = (territoryInfo) => {
    setSelectedTerritory(territoryInfo);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    // selectedTerritory kept in state so the bot retains context after panel closes
  };

  const handleKingdomSelect = (empire) => {
    const info = getTerritoryInfo(empire.id, empire.startYear);
    setCurrentYear(empire.startYear);
    setSelectedTerritory(info);
    setIsPanelOpen(true);
  };

  // Memoised — only recomputes when territory or year actually changes
  const enrichedTerritory = useMemo(() => selectedTerritory
    ? { ...selectedTerritory, ...(getTerritoryData(selectedTerritory.id, currentYear) ?? {}) }
    : null,
  [selectedTerritory, currentYear]);

  return (
    <div>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onKingdomSelect={handleKingdomSelect}
      />
      <MyMap
        currentYear={currentYear}
        onTerritoryClick={handleTerritoryClick}
      />

      <Timeline onYearChange={handleYearChange} currentYear={currentYear} isPanelOpen={isPanelOpen} />

      {/* Territory Information Panel */}
      <TerritoryInfoPanel
        territoryId={selectedTerritory?.id}
        currentYear={currentYear}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        language={language}
      />

      {/* AI Chatbot Panel */}
      <HistoryBot
        selectedTerritory={enrichedTerritory}
        currentYear={currentYear}
        isOpen={isBotOpen}
        onClose={() => setIsBotOpen(false)}
      />

      {/* Floating Ask AI button */}
      <button
        className="v3-ask-ai-btn"
        onClick={() => setIsBotOpen(prev => !prev)}
        title={selectedTerritory ? `Ask about ${selectedTerritory.name}` : 'Ask about Nusantara'}
      >
        <span className="v3-ask-ai-icon">⚜</span>
        <span className="v3-ask-ai-label">
          {selectedTerritory ? `Ask about ${selectedTerritory.name}` : 'Ask about Nusantara'}
        </span>
      </button>
    </div>
  );
}

export default App;
