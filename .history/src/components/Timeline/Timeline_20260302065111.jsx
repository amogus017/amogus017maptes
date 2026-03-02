// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  
  // Scrolling state
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  
  const timelineRef = useRef(null);
  const contentRef = useRef(null);
  
  // Extended timeline range
  const TOTAL_MIN_YEAR = 400;
  const TOTAL_MAX_YEAR = 1600;
  const VISIBLE_YEARS = 400; // How many years visible at once
  
  // Current visible window
  const MIN_YEAR = 1200;
  const MAX_YEAR = 1600;

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

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX - scrollOffset);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newOffset = e.clientX - dragStart;
    const maxOffset = 0;
    const minOffset = -(contentRef.current?.scrollWidth - timelineRef.current?.clientWidth || 0);
    
    setScrollOffset(Math.max(minOffset, Math.min(maxOffset, newOffset)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  // Generate ruler ticks for ENTIRE range
  const generateRulerMarks = () => {
    const marks = [];
    const totalYears = TOTAL_MAX_YEAR - TOTAL_MIN_YEAR;
    const pixelsPerYear = 2; // Adjust density - higher = more spread out
    const totalWidth = totalYears * pixelsPerYear;
    
    for (let tickYear = TOTAL_MIN_YEAR; tickYear <= TOTAL_MAX_YEAR; tickYear += 5) {
      const position = ((tickYear - TOTAL_MIN_YEAR) / totalYears) * 100;
      
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

  // Calculate playhead position (current year indicator)
  const getPlayheadPosition = () => {
    const totalYears = TOTAL_MAX_YEAR - TOTAL_MIN_YEAR;
    return ((year - TOTAL_MIN_YEAR) / totalYears) * 100;
  };

  return (
    <div className="victoria3-timeline">
      <div className="v3-slider-container">
        <div className="slider-frame">
          
          {/* Scrollable timeline container */}
          <div 
            ref={timelineRef}
            className="timeline-viewport"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              ref={contentRef}
              className="timeline-content"
              style={{ 
                transform: `translateX(${scrollOffset}px)`,
                width: `${((TOTAL_MAX_YEAR - TOTAL_MIN_YEAR) / VISIBLE_YEARS) * 100}%`,
                minWidth: '200%' // Ensures scrollability
              }}
            >
              {/* Ruler background layer */}
              <div className="ruler-background-scrollable">
                {generateRulerMarks()}
              </div>

              {/* Playhead (current year indicator) */}
              <div 
                className="playhead"
                style={{ left: `${getPlayheadPosition()}%` }}
              >
                <div className="playhead-line" />
                <div className="year-tooltip-playhead">
                  {year}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="timeline-nav-controls">
            <button 
              className="nav-btn"
              onClick={() => setScrollOffset(prev => Math.min(0, prev + 200))}
            >
              ←
            </button>
            <button 
              className="nav-btn"
              onClick={() => setScrollOffset(prev => {
                const minOffset = -(contentRef.current?.scrollWidth - timelineRef.current?.clientWidth || 0);
                return Math.max(minOffset, prev - 200);
              })}
            >
              →
            </button>
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