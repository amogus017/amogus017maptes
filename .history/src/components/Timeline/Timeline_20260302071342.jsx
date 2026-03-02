// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  
  // ✨ NEW: Scrollable timeline state
  const [viewportStart, setViewportStart] = useState(1200);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartYear, setDragStartYear] = useState(1200);
  
  // ✨ NEW: Ref for container width
  const containerRef = useRef(null);
  
  // NEW: Extended range
  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;
  const VIEWPORT_YEARS = 400;

  const handleYearChange = (newYear) => {
    setYear(newYear);
    onYearChange(newYear);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartYear(viewportStart);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const deltaX = e.clientX - dragStartX;
    const containerWidth = containerRef.current.offsetWidth;
    const yearsDelta = -Math.round((deltaX / containerWidth) * VIEWPORT_YEARS);
    
    const newStart = Math.max(
      MIN_YEAR,
      Math.min(MAX_YEAR - VIEWPORT_YEARS, dragStartYear + yearsDelta)
    );

    setViewportStart(newStart);
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
  }, [isDragging, dragStartX, dragStartYear]);

  const generateRulerMarks = () => {
    const marks = [];
    const viewportEnd = viewportStart + VIEWPORT_YEARS;
    
    for (let tickYear = viewportStart; tickYear <= viewportEnd; tickYear += 5) {
      const position = ((tickYear - viewportStart) / VIEWPORT_YEARS) * 100;
      
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
        <div className="slider-frame" ref={containerRef}>
          
          {/* Ruler background layer with drag functionality */}
          <div 
            className="ruler-background"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="ruler-baseline" />
            {generateRulerMarks()}
          </div>

          {/* Slider on top */}
          <div className="slider-track">
            <div className="slider-wrapper">
              <div
                className="year-tooltip"
                style={{
                  left: `${((year - viewportStart) / VIEWPORT_YEARS) * 100}%`,
                }}
              >
                {year}
              </div>

              <input
                type="range"
                className="v3-slider"
                min={viewportStart}
                max={viewportStart + VIEWPORT_YEARS}
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