// At the very top of App.jsx
import React, { useState } from 'react';  
import MyMap from "./components/Map/MyMap";
import Timeline from "./components/Timeline/Timeline";
import TerritoryInfoPanel from "./components/TerritoryInfo/TerritoryInfoPanel";

function App() {
  const [currentYear, setCurrentYear] = useState(1350);
  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleYearChange = (newYear) => {
    console.log("Year changed to:", newYear);
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
  console.log("App rendering with currentYear:", currentYear);

  return (
    <div>

      {/* CRITICAL: Make sure currentYear={currentYear} is here! */}
      <MyMap currentYear={currentYear} />
      
      <Timeline onYearChange={handleYearChange} />

      {/* Territory Information Panel */}
      <TerritoryInfoPanel
        territoryId={selectedTerritory?.id}
        currentYear={currentYear}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />
    </div>
  );
}

export default App;
