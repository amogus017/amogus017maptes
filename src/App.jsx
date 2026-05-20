import React, { useState, useMemo } from 'react';
import MyMap from "./components/Map/MyMap";
import Timeline from "./components/Timeline/Timeline";
import TerritoryInfoPanel from "./components/TerritoryInfo/TerritoryInfoPanel";
import HistoryBot from "./components/HistoryBot/HistoryBot";
import Header from "./components/Header/Header";
import { getTerritoryData } from "./data/territories";
import { getTerritoryInfo, EMPIRES } from "./data/boundaries";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import './App.css';

function AppContent() {
  const { t } = useLanguage();
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
  };

  const handleKingdomSelect = (empire) => {
    const info = getTerritoryInfo(empire.id, empire.startYear);
    setCurrentYear(empire.startYear);
    setSelectedTerritory(info);
    setIsPanelOpen(true);
  };

  const enrichedTerritory = useMemo(() => {
    if (!selectedTerritory) return null;
    const empire = EMPIRES[selectedTerritory.id];
    return {
      ...selectedTerritory,
      ...(getTerritoryData(selectedTerritory.id, currentYear) ?? {}),
      startYear: empire?.startYear,
      endYear: empire?.endYear,
    };
  }, [selectedTerritory, currentYear]);

  return (
    <div>
      <Header onKingdomSelect={handleKingdomSelect} />
      <MyMap
        currentYear={currentYear}
        onTerritoryClick={handleTerritoryClick}
      />

      <Timeline onYearChange={handleYearChange} currentYear={currentYear} isPanelOpen={isPanelOpen} />

      <TerritoryInfoPanel
        territoryId={selectedTerritory?.id}
        currentYear={currentYear}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        startYear={EMPIRES[selectedTerritory?.id]?.startYear}
        endYear={EMPIRES[selectedTerritory?.id]?.endYear}
      />

      <HistoryBot
        selectedTerritory={enrichedTerritory}
        currentYear={currentYear}
        isOpen={isBotOpen}
        onClose={() => setIsBotOpen(false)}
      />

      <button
        className="v3-ask-ai-btn"
        onClick={() => setIsBotOpen(prev => !prev)}
        title={selectedTerritory ? t.askAbout(selectedTerritory.name) : t.askDefault}
      >
        <span className="v3-ask-ai-icon">⚜</span>
        <span className="v3-ask-ai-label">
          {selectedTerritory ? t.askAbout(selectedTerritory.name) : t.askDefault}
        </span>
      </button>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
