// At the very top of App.jsx
import React, { useState } from 'react';
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
    console.log("Territory clicked:", territoryInfo);
    setSelectedTerritory(territoryInfo);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    // Optional: Clear selected territory after animation completes
    setTimeout(() => setSelectedTerritory(null), 300);
  };
  // Merge lightweight map info with full historical data for richer AI context
  const enrichedTerritory = selectedTerritory
    ? { ...selectedTerritory, ...(getTerritoryData(selectedTerritory.id, currentYear) ?? {}) }
    : null;

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
