// At the very top of App.jsx
import React, { useState } from 'react';  
import MyMap from "./components/Map/MyMap";
import Timeline from "./components/Timeline/Timeline";

function App() {
  const [currentYear, setCurrentYear] = useState(1350);

  const handleYearChange = (newYear) => {
    console.log("Year changed to:", newYear);
    setCurrentYear(newYear);
  };

  console.log("App rendering with currentYear:", currentYear);

  return (
    <div>
      
      {/* CRITICAL: Make sure currentYear={currentYear} is here! */}
      <MyMap currentYear={currentYear} />
      <div><Timeline onYearChange={handleYearChange} /></div>
      
    </div>
  );
}

export default App;
