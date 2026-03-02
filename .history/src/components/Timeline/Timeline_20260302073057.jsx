// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  
  // ✨ NEW: Scrollable timeline state
  const [viewportCenter, setViewportCenter] = useState(1400); // Center year of viewport
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartCenter, setDragStartCenter] = useState(1400);
  
  const containerRef = useRef(null);
  
  // Timeline configuration
  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;
  const VIEWPORT_YEARS = 400; // Years visible at once
  
  // Calculate viewport bounds
  const viewportStart = Math.max(MIN_YEAR, viewportCenter - VIEWPORT_YEARS / 2);
  const viewportEnd = Math.min(MAX_YEAR, viewportCenter + VIEWPORT_YEARS / 2);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    onYearChange(newYear);
    
    // ✨ FIX: Auto-center viewport on selected year
    const buffer = VIEWPORT_YEARS * 0.1; // 10% buffer before re-centering
    if (newYear < viewportStart + buffer || newYear > viewportEnd - buffer) {
      setViewportCenter(newYear);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartCenter(viewportCenter);
  };

  const handleMouseMove = (e) => {
  if (!isDragging || !containerRef.current) return;
  
  const deltaX = e.clientX - dragStartX;
  const containerWidth = containerRef.current.offsetWidth;
  
  // ✅ FIX: Remove the negative sign - drag direction should match pan direction
  const yearsDelta = (deltaX / containerWidth) * VIEWPORT_YEARS; // Changed from -(deltaX...)
  
  const newCenter = Math.max(
    MIN_YEAR + VIEWPORT_YEARS / 2,
    Math.min(MAX_YEAR - VIEWPORT_YEARS / 2, dragStartCenter + yearsDelta)
  );

  setViewportCenter(newCenter);
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
  }, [isDragging, dragStartX, dragStartCenter]);

  // ✨ FIX: Generate ALL ticks once, positioned relative to FULL timeline width
  const generateRulerMarks = () => {
    const marks = [];
    const totalYears = MAX_YEAR - MIN_YEAR;
    
    // Generate ticks for ENTIRE range
    for (let tickYear = MIN_YEAR; tickYear <= MAX_YEAR; tickYear += 5) {
      // ✨ FIX: Position relative to the FULL extended ruler width
      const position = ((tickYear - MIN_YEAR) / totalYears) * 100;
      
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

  // ✨ FIX: Calculate CSS transform to pan the ruler correctly
  const getRulerTransform = () => {
    const totalYears = MAX_YEAR - MIN_YEAR;
    
    // Calculate what percentage of the full timeline the viewport center represents
    const centerRatio = (viewportCenter - MIN_YEAR) / totalYears;
    
    // Shift the ruler so that centerRatio aligns with 50% of the visible container
    // Formula: We want (centerRatio * rulerWidth) to be at 50% of viewport
    const shift = -(centerRatio * 100 - 50);
    
    return `translateX(${shift}%)`;
  };

  // ✨ FIX: Calculate ruler content width relative to viewport
  const getRulerWidth = () => {
    const totalYears = MAX_YEAR - MIN_YEAR;
    // Ruler should be (totalYears / VIEWPORT_YEARS) times the container width
    return `${(totalYears / VIEWPORT_YEARS) * 100}%`;
  };

  return (
    <div className="victoria3-timeline">
      <div className="v3-slider-container">
        <div className="slider-frame" ref={containerRef}>
          
          {/* Ruler background layer with drag functionality */}
          <div 
            className="ruler-background"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* ✨ FIX: Panning container for smooth scroll */}
            <div 
              className="ruler-content"
              style={{ 
                width: getRulerWidth(),
                transform: getRulerTransform(),
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              <div className="ruler-baseline" />
              {generateRulerMarks()}
            </div>
          </div>

          {/* Slider on top */}
          <div className="slider-track">
            <div className="slider-wrapper">
              {/* ✨ FIX: Tooltip positioned relative to viewport */}
              <div
                className="year-tooltip"
                style={{
                  left: `${((year - viewportStart) / (viewportEnd - viewportStart)) * 100}%`,
                }}
              >
                {year}
              </div>

              {/* ✨ FIX: Slider range matches viewport */}
              <input
                type="range"
                className="v3-slider"
                min={viewportStart}
                max={viewportEnd}
                value={Math.max(viewportStart, Math.min(viewportEnd, year))}
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