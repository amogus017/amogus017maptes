// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const isProgrammaticScroll = useRef(false); // tracks whether scroll was triggered by code

  // Define min and max years
  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;

  // Scalable year → pixel mapping
  const PIXELS_PER_YEAR = 2;
  const TOTAL_WIDTH = (MAX_YEAR - MIN_YEAR) * PIXELS_PER_YEAR;
  const yearToPixel = useCallback((y) => (y - MIN_YEAR) * PIXELS_PER_YEAR, []);
  const pixelToYear = useCallback((px) => Math.round(px / PIXELS_PER_YEAR) + MIN_YEAR, []);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    onYearChange(newYear);
  };

  // Scroll the frame — marks scroll as programmatic so onScroll ignores it
  const scrollToYear = useCallback((newYear, smooth = false) => {
    if (!scrollRef.current) return;
    const frame = scrollRef.current;
    const targetScroll = yearToPixel(newYear) - frame.clientWidth / 2;

    isProgrammaticScroll.current = true;
    frame.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: smooth ? 'smooth' : 'auto',
    });

    // Clear the flag after scroll animation finishes
    clearTimeout(isProgrammaticScroll.timeout);
    isProgrammaticScroll.timeout = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, smooth ? 600 : 50);
  }, [yearToPixel]);

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
          scrollToYear(next, true);
          return next;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying, onYearChange, scrollToYear]);

  // Generate ruler ticks and labels using pixel positions
  const generateRulerMarks = () => {
    const marks = [];
    for (let tickYear = MIN_YEAR; tickYear <= MAX_YEAR; tickYear += 5) {
      const px = yearToPixel(tickYear);
      const isMajor = tickYear % 100 === 0;
      const isMedium = tickYear % 50 === 0 && !isMajor;
      const isMinor = tickYear % 25 === 0 && !isMedium && !isMajor;

      let tickClass = 'micro';
      if (isMajor) tickClass = 'major';
      else if (isMedium) tickClass = 'medium';
      else if (isMinor) tickClass = 'minor';

      marks.push(
        <div
          key={`tick-${tickYear}`}
          className={`ruler-tick ${tickClass}`}
          style={{ left: `${px}px` }}
        />
      );

      if (isMajor || isMedium) {
        marks.push(
          <div
            key={`label-${tickYear}`}
            className={`ruler-label ${isMajor ? 'major-label' : 'medium-label'}`}
            style={{ left: `${px}px` }}
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

      {/* Victorian Slider with Ruler Background */}
      <div className="v3-slider-container">

        {/* Year tooltip — centered, outside scroll frame */}
        <div className="year-tooltip">
          {year}
        </div>

        <div
          className="slider-frame"
          ref={scrollRef}
          onScroll={(e) => {
            // Ignore scroll events triggered by code — only react to user-initiated scrolls
            if (isDragging.current || isProgrammaticScroll.current) return;
            const viewportCenter = e.target.scrollLeft + e.target.clientWidth / 2;
            const snapped = Math.max(MIN_YEAR, Math.min(MAX_YEAR, pixelToYear(viewportCenter)));
            setYear(snapped);
            onYearChange(snapped);
          }}
        >

          {/* Inner track — full timeline width */}
          <div className="timeline-scroll-wrapper">
            <div className="timeline-inner" style={{ width: `${TOTAL_WIDTH}px` }}>

              {/* Ruler background layer */}
              <div className="ruler-background">
                <div className="ruler-baseline" />
                {generateRulerMarks()}
              </div>

              {/* Slider on top */}
              <div className="slider-track">
                <div className="slider-wrapper">
                  <input
                    type="range"
                    className="v3-slider"
                    min={MIN_YEAR}
                    max={MAX_YEAR}
                    value={year}
                    onChange={(e) => {
                      
                      const newYear = parseInt(e.target.value);
                      handleYearChange(newYear);

                      if (scrollRef.current) {
                        const frame = scrollRef.current;
                        const thumbPx = yearToPixel(newYear);
                        const scrollLeft = frame.scrollLeft;
                        const viewportWidth = frame.clientWidth;
                        const EDGE_THRESHOLD = viewportWidth * 0.25;

                        const distFromLeft = thumbPx - scrollLeft;
                        const distFromRight = scrollLeft + viewportWidth - thumbPx;

                        if (distFromLeft < EDGE_THRESHOLD || distFromRight < EDGE_THRESHOLD) {
                          // scrollToYear handles isProgrammaticScroll internally
                          frame.scrollLeft = Math.max(0, thumbPx - viewportWidth / 2);;
                        }
                      }

                      clearTimeout(isDragging.timeout);
                      isDragging.timeout = setTimeout(() => {
                        isDragging.current = false;
                      }, 150);
                    }}
                    onPointerDown={() => {
                      if (scrollRef.current) scrollRef.current.style.touchAction = 'none';
                    }}
                    onPointerUp={() => {
                      if (scrollRef.current) scrollRef.current.style.touchAction = 'pan-x';
                    }}
                    onPointerCancel={() => {
                      if (scrollRef.current) scrollRef.current.style.touchAction = 'pan-x';
                    }}
                    style={{ width: `${TOTAL_WIDTH}px` }}
                  />
                </div>
              </div>

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
                  onClick={() => {
                    handleYearChange(event.year);
                    scrollToYear(event.year, true);
                  }}
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