// At the very top of App.jsx
import React, { useState, useMemo } from 'react';
import MyMap from "./components/Map/MyMap";
import Timeline from "./components/Timeline/Timeline";
import TerritoryInfoPanel from "./components/TerritoryInfo/TerritoryInfoPanel";
import HistoryBot from "./components/HistoryBot/HistoryBot";
import { getTerritoryData } from "./data/territories";
import './App.css';


function App() {
  const [currentYear, setCurrentYear] = useState(1350);
  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);

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

  // Memoised — only recomputes when territory or year actually changes
  const enrichedTerritory = useMemo(() => selectedTerritory
    ? { ...selectedTerritory, ...(getTerritoryData(selectedTerritory.id, currentYear) ?? {}) }
    : null,
  [selectedTerritory, currentYear]);

  return (
    <div>
      <MyMap
        currentYear={currentYear}
        onTerritoryClick={handleTerritoryClick}
      />

      <Timeline onYearChange={handleYearChange} />

      {/* Territory Information Panel */}
      <TerritoryInfoPanel
        territoryId={selectedTerritory?.id}
        currentYear={currentYear}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
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
