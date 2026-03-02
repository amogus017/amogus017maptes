// components/Timeline/Timeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  
  const scrollContainerRef = useRef(null);
  
  // ✨ SIMPLE: Extended range, all rendered at once
  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;
  const TOTAL_YEARS = MAX_YEAR - MIN_YEAR; // 1200 years

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

  // ✨ SIMPLE: Generate ALL ticks once (400-1600)
  const generateRulerMarks = () => {
    const marks = [];
    
    for (let tickYear = MIN_YEAR; tickYear <= MAX_YEAR; tickYear += 5) {
      // Position as percentage of FULL range
      const position = ((tickYear - MIN_YEAR) / TOTAL_YEARS) * 100;
      
      const isMajor = tickYear % 100 === 0;
      const isMedium = tickYear % 50 === 0 && !isMajor;
      const isMinor = tickYear % 25 === 0 && !isMedium && !isMajor;
      const isMicro = !isMajor && !isMedium && !isMinor;
      
      let tickClass = 'micro';
      if (isMajor) tickClass = 'major';
      else if (isMedium) tickClass = 'medium';
      else if (isMinor) tickClass = 'minor';
      
      marks.push(
        <div
          key={`tick-${tickYear}`}
          className={`ruler-tick ${tickClass}`}
          style={{ left: `${position}%` }}
        />
      );
      
      if (isMajor || isMedium) {
        marks.push(
          <div
            key={`label-${tickYear}`}
            className={`ruler-label ${isMajor ? 'major-label' : 'medium-label'}`}
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
      <div className="v3-slider-container">
        <div className="slider-frame">
          
          {/* ✨ SIMPLE: Scrollable container with overflow */}
          <div className="ruler-scroll-container" ref={scrollContainerRef}>
            {/* Ruler content - 3x width of container (1200 years / 400 year viewport) */}
            <div className="ruler-content-wide">
              <div className="ruler-baseline" />
              {generateRulerMarks()}
            </div>
          </div>

          {/* Slider overlay - follows scroll position */}
          <div className="slider-overlay">
            <div className="slider-wrapper">
              <div
                className="year-tooltip"
                style={{
                  left: `${((year - MIN_YEAR) / TOTAL_YEARS) * 100}%`,
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
              />
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Victoria3Timeline;