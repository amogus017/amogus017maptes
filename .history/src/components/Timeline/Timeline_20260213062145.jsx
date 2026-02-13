// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  
  // Define min and max years as constants to avoid calculation errors
  const MIN_YEAR = 1200;
  const MAX_YEAR = 1600;

  // Historical events with Victoria 3 flavor
  const getHistoricalContext = () => {
    const contexts = {
      1300: {
        title: "Foundation of Majapahit",
        description: "Raden Wijaya establishes the empire",
        color: "#FFD700"
      },
      1350: {
        title: "Golden Age Begins",
        description: "Majapahit expands across the archipelago",
        color: "#FFA500"
      },
      1400: {
        title: "Height of Power",
        description: "Empire reaches its territorial peak under Hayam Wuruk",
        color: "#FF8C00"
      },
      1850: {
        title: "Colonial Era",
        description: "European powers divide Southeast Asia",
        color: "#8B4513"
      },
    };

    // Find closest context
    const years = Object.keys(contexts).map(Number);
    const closest = years.reduce((prev, curr) => 
      Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
    );
    
    return contexts[closest];
  };

  const context = getHistoricalContext();

  const handleYearChange = (newYear) => {
    setYear(newYear);
    onYearChange(newYear);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setYear(current => {
          const next = current + 1;
          if (next > MAX_YEAR) {
            setIsPlaying(false);
            return MIN_YEAR;
          }
          onYearChange(next);
          return next;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying, onYearChange]);

  // Generate ruler ticks and labels
  const generateRulerMarks = () => {
    const marks = [];
    
    // Generate ticks every 25 years
    for (let tickYear = MIN_YEAR; tickYear <= MAX_YEAR; tickYear += 25) {
      const position = ((tickYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
      const isMajor = tickYear % 100 === 0; // Major tick every 100 years
      
      marks.push(
        <div
          key={`tick-${tickYear}`}
          className={`ruler-tick ${isMajor ? 'major' : 'minor'}`}
          style={{ left: `${position}%` }}
        />
      );
      
      // Add label only for major ticks
      if (isMajor) {
        marks.push(
          <div
            key={`label-${tickYear}`}
            className="ruler-label"
            style={{ left: `${position}%` }}
          >
            {tickYear}
          </div>
        );
      }
    }
    
    return marks;
  };

  return (
    <div className="victoria3-timeline">
      {/* Ornate Header */}
      {/* <div className="v3-timeline-header">
        <div className="ornate-border-top" />
        
        <motion.div 
          className="year-plaque"
          key={year}
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="year-number">{year}</div>
          <div className="year-roman">{toRoman(year)}</div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="context-panel"
            key={context.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ borderColor: context.color }}
          >
            <h3>{context.title}</h3>
            <p>{context.description}</p>
          </motion.div>
        </AnimatePresence>
      </div> */}

      {/* Victorian Slider with Ruler Background */}
      <div className="v3-slider-container">
        <div className="slider-frame">
          
          {/* Ruler background layer */}
          <div className="ruler-background">
            {/* <div className="ruler-baseline" /> */}
            {generateRulerMarks()}
          </div>

          {/* Slider on top */}
          <div className="slider-track">
            {/* Year that follows slider position */}
            <div className="slider-wrapper">
              <div
                className="year-tooltip"
                style={{
                  left: `${((year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100}%`,
                }}
              >
                {year}
              </div>

              <input
                type="range"
                className="v3-slider"
                min={MIN_YEAR}
                max={MAX_YEAR}
                value={year}
                onChange={(e) => handleYearChange(parseInt(e.target.value))}
                style={{
                  background: `transparent`,
                  // background: `linear-gradient(to right, 
                  //   rgba(139, 69, 19, 0.6) 0%, 
                  //   rgba(133, 109, 45, 0.6) ${((year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100}%, 
                  //   rgba(244, 232, 208, 0.4) ${((year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100}%, 
                  //   rgba(244, 232, 208, 0.4) 100%)`,
                    
                }}
              />
            </div>
          </div>

          
        </div>
      </div>

      {/* Victorian Control Panel */}
      {/* <div className="v3-control-panel">
        <button 
          className="v3-btn primary"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
          <span className="btn-text">{isPlaying ? 'Pause' : 'Play'}</span>
        </button>

        <div className="year-controls">
          <button 
            className="v3-btn secondary"
            onClick={() => handleYearChange(Math.max(MIN_YEAR, year - 10))}
          >
            -X
          </button>
          <button 
            className="v3-btn secondary"
            onClick={() => handleYearChange(Math.max(MIN_YEAR, year - 1))}
          >
            -I
          </button>
          <button 
            className="v3-btn secondary"
            onClick={() => handleYearChange(Math.min(MAX_YEAR, year + 1))}
          >
            +I
          </button>
          <button 
            className="v3-btn secondary"
            onClick={() => handleYearChange(Math.min(MAX_YEAR, year + 10))}
          >
            +X
          </button>
        </div>

        <button 
          className="v3-btn accent"
          onClick={() => setShowEventPanel(!showEventPanel)}
        >
          <span className="btn-icon">📜</span>
          <span className="btn-text">Events</span>
        </button>
      </div> */}

      {/* Events Panel */}
      <AnimatePresence>
        {showEventPanel && (
          <motion.div
            className="events-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <h4>Historical Events</h4>
            <div className="events-list">
              {[
                { year: 1887, event: "French Indochina Formed" },
                { year: 1942, event: "Japanese Invasion" },
                { year: 1945, event: "End of World War II" },
                { year: 1957, event: "Malayan Independence" },
                { year: 1975, event: "Vietnam Reunification" },
              ].map((event) => (
                <button
                  key={event.year}
                  className={`event-item ${year === event.year ? "active" : ""}`}
                  onClick={() => handleYearChange(event.year)}
                >
                  <span className="event-year">{event.year}</span>
                  <span className="event-name">{event.event}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <div className="ornate-border-bottom" /> */}
    </div>
  );
};

// Helper function for Roman numerals
function toRoman(num) {
  const romanNumerals = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  
  let roman = '';
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }
  return roman;
}

export default Victoria3Timeline;