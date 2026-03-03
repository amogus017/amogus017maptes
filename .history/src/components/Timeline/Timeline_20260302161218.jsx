// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);

  const scrollRef = useRef(null);
  const thumbRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartYear = useRef(0);

  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;
  const PIXELS_PER_YEAR = 2;
  const TOTAL_WIDTH = (MAX_YEAR - MIN_YEAR) * PIXELS_PER_YEAR;

  const yearToPixel = useCallback((y) => (y - MIN_YEAR) * PIXELS_PER_YEAR, []);
  const pixelToYear = useCallback((px) => Math.round(px / PIXELS_PER_YEAR) + MIN_YEAR, []);
  const clampYear = (y) => Math.max(MIN_YEAR, Math.min(MAX_YEAR, y));

  const handleYearChange = useCallback((newYear) => {
    const clamped = clampYear(newYear);
    setYear(clamped);
    onYearChange(clamped);
  }, [onYearChange]);

  const scrollToYear = useCallback((y, smooth = false) => {
    if (!scrollRef.current) return;
    const frame = scrollRef.current;
    const target = yearToPixel(y) - frame.clientWidth / 2;
    frame.scrollTo({
      left: Math.max(0, target),
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, [yearToPixel]);

  // ── Custom pointer drag ────────────────────────────────────────────────────

  const onPointerDown = useCallback((e) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartYear.current = year;
    thumbRef.current?.setPointerCapture(e.pointerId);
  }, [year]);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current) return;

    const deltaPx = e.clientX - dragStartX.current;
    const deltaYears = Math.round(deltaPx / PIXELS_PER_YEAR);
    const newYear = clampYear(dragStartYear.current + deltaYears);

    setYear(newYear);
    onYearChange(newYear);

    // Auto-scroll when near viewport edge
    if (scrollRef.current) {
      const frame = scrollRef.current;
      const thumbPx = yearToPixel(newYear);
      const scrollLeft = frame.scrollLeft;
      const vw = frame.clientWidth;
      const EDGE = vw * 0.25;

      const distLeft = thumbPx - scrollLeft;
      const distRight = scrollLeft + vw - thumbPx;

      if (distLeft < EDGE || distRight < EDGE) {
        frame.scrollTo({
          left: Math.max(0, thumbPx - vw / 2),
          behavior: 'auto',
        });
      }
    }
  }, [onYearChange, yearToPixel]);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // ── Scroll → year sync ────────────────────────────────────────────────────

  const onScroll = useCallback((e) => {
    if (isDragging.current) return;
    const viewportCenter = e.target.scrollLeft + e.target.clientWidth / 2;
    const snapped = clampYear(pixelToYear(viewportCenter));
    setYear(snapped);
    onYearChange(snapped);
  }, [onYearChange, pixelToYear]);

  // ── Auto-play ──────────────────────────────────────────────────────────────

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

  // ── Ruler marks ───────────────────────────────────────────────────────────

  const generateRulerMarks = useCallback(() => {
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
  }, [yearToPixel]);

  // ── Render ────────────────────────────────────────────────────────────────

  const thumbLeft = yearToPixel(year);

  return (
    <div className="victoria3-timeline">
      <div className="v3-slider-container">

        {/* Year tooltip — centered, outside scroll frame */}
        <div className="year-tooltip">
          {year}
        </div>

        <div
          className="slider-frame"
          ref={scrollRef}
          onScroll={onScroll}
        >
          <div className="timeline-inner" style={{ width: `${TOTAL_WIDTH}px` }}>

            {/* Ruler */}
            <div className="ruler-background">
              <div className="ruler-baseline" />
              {generateRulerMarks()}
            </div>

            {/* Custom drag thumb — no native <input type="range"> */}
            <div className="slider-track">
              <div className="slider-wrapper">
                <div
                  ref={thumbRef}
                  className="v3-thumb"
                  style={{ left: `${thumbLeft}px` }}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                />
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
                  className={`event-item ${year === event.year ? 'active' : ''}`}
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