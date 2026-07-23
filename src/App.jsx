import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MyMap from "./components/Map/MyMap";
import Timeline from "./components/Timeline/Timeline";
import TerritoryInfoPanel from "./components/TerritoryInfo/TerritoryInfoPanel";
import HistoryBot from "./components/HistoryBot/HistoryBot";
import Header from "./components/Header/Header";
import { getTerritoryData } from "./data/territories";
import { getTerritoryInfo, EMPIRES, initBoundaries } from "./data/boundaries";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import TutorialOverlay from "./components/Tutorial/TutorialOverlay";
import './App.css';

function AppContent() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState(732);
  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('atlas_tutorial_seen')) {
      setShowTutorial(true);
    }
  }, []);

  const handleCloseTutorial = useCallback(() => {
    localStorage.setItem('atlas_tutorial_seen', '1');
    setShowTutorial(false);
  }, []);

  const handleTutorialAutoSelect = useCallback((empireId) => {
    const info = getTerritoryInfo(empireId, currentYear);
    setSelectedTerritory(info);
    setIsPanelOpen(true);
  }, [currentYear]);

  const handleTutorialClosePanel = useCallback(() => {
    setIsPanelOpen(false);
  }, []);

  useEffect(() => {
    initBoundaries()
      .then(() => setIsMapReady(true))
      .catch(() => {
        console.error('Failed to load GeoJSON');
        setIsMapReady(true);
      });
  }, []);

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
      <Header onKingdomSelect={handleKingdomSelect} onOpenTutorial={() => setShowTutorial(true)} />
      {isMapReady && <MyMap
        currentYear={currentYear}
        onTerritoryClick={handleTerritoryClick}
      />}

      <Timeline onYearChange={handleYearChange} currentYear={currentYear} isPanelOpen={isPanelOpen} isBotOpen={isBotOpen} />

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

      <TutorialOverlay
        isOpen={showTutorial}
        onClose={handleCloseTutorial}
        onClosePanel={handleTutorialClosePanel}
        onAutoSelect={handleTutorialAutoSelect}
      />

      <AnimatePresence>
        {!isMapReady && (
          <motion.div
            className="map-loading-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="map-loading-content">
              <span className="map-loading-ornament" aria-hidden="true">⚜</span>
              <p className="map-loading-text">Loading</p>
              <div className="map-loading-dots" aria-hidden="true">
                <span /><span /><span />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
