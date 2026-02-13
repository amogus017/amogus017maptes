// components/Timeline/RulerTimeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RulerTimeline.css';

const RulerTimeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const timelineRef = useRef(null);
  
  const MIN_YEAR = 1200;
  const MAX_YEAR = 1600;
  const TOTAL_YEARS = MAX_YEAR - MIN_YEAR;

  const handleYearChange = (newYear) => {
    const clampedYear = Math.max(MIN_YEAR, Math.min(MAX_YEAR, newYear));
    setYear(clampedYear);
    onYearChange(clampedYear);
  };

  // Handle mouse/touch dragging on the ruler
  const handleTimelineClick = (e) => {
    if (!timelineRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newYear = Math.round(MIN_YEAR + (percentage * TOTAL_YEARS));
    
    handleYearChange(newYear);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleTimelineClick(e);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleTimelineClick(e);
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
  }, [isDragging]);

  // Auto-play effect
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
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, onYearChange]);

  // Generate tick marks
  const generateTicks = () => {
    const ticks = [];
    
    // Major ticks every 100 years
    for (let y = MIN_YEAR; y <= MAX_YEAR; y += 100) {
      const position = ((y - MIN_YEAR) / TOTAL_YEARS) * 100;
      ticks.push({
        year: y,
        position,
        type: 'major',
        label: y
      });
    }
    
    // Medium ticks every 50 years (but not on major ticks)
    for (let y = MIN_YEAR + 50; y <= MAX_YEAR; y += 100) {
      const position = ((y - MIN_YEAR) / TOTAL_YEARS) * 100;
      ticks.push({
        year: y,
        position,
        type: 'medium',
        label: y
      });
    }
    
    // Minor ticks every 10 years
    for (let y = MIN_YEAR; y <= MAX_YEAR; y += 10) {
      const position = ((y - MIN_YEAR) / TOTAL_YEARS) * 100;
      // Skip if already a major or medium tick
      if (y % 100 !== 0 && y % 50 !== 0) {
        ticks.push({
          year: y,
          position,
          type: 'minor',
          label: null
        });
      }
    }
    
    return ticks;
  };

  const ticks = generateTicks();
  const currentPosition = ((year - MIN_YEAR) / TOTAL_YEARS) * 100;

  return (
    <div className="ruler-timeline">
      <div className="ruler-container">
        
        {/* Main ruler track */}
        <div 
          className="ruler-track"
          ref={timelineRef}
          onMouseDown={handleMouseDown}
        >
          {/* Background ruler line */}
          <div className="ruler-line" />
          
          {/* Progress fill */}
          <div 
            className="ruler-progress"
            style={{ width: `${currentPosition}%` }}
          />
          
          {/* Tick marks */}
          <div className="ruler-ticks">
            {ticks.map((tick, idx) => (
              <div
                key={`${tick.year}-${idx}`}
                className={`tick tick-${tick.type}`}
                style={{ left: `${tick.position}%` }}
              >
                {tick.label && (
                  <span className="tick-label">{tick.label}</span>
                )}
              </div>
            ))}
          </div>
          
          {/* Current year indicator */}
          <motion.div
            className="year-indicator"
            style={{ left: `${currentPosition}%` }}
            animate={{ scale: isDragging ? 1.2 : 1 }}
          >
            <div className="indicator-line" />
            <div className="indicator-handle" />
            <div className="year-display">
              {year}
            </div>
          </motion.div>
        </div>
        
        {/* Control buttons */}
        <div className="ruler-controls">
          <button 
            className="ruler-btn"
            onClick={() => handleYearChange(year - 10)}
            title="Back 10 years"
          >
            ◄◄
          </button>
          
          <button 
            className="ruler-btn"
            onClick={() => handleYearChange(year - 1)}
            title="Back 1 year"
          >
            ◄
          </button>
          
          <button 
            className={`ruler-btn play-btn ${isPlaying ? 'playing' : ''}`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          
          <button 
            className="ruler-btn"
            onClick={() => handleYearChange(year + 1)}
            title="Forward 1 year"
          >
            ►
          </button>
          
          <button 
            className="ruler-btn"
            onClick={() => handleYearChange(year + 10)}
            title="Forward 10 years"
          >
            ►►
          </button>
          
          <button 
            className="ruler-btn reset-btn"
            onClick={() => handleYearChange(MIN_YEAR)}
            title="Reset to start"
          >
            ⟲
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulerTimeline;