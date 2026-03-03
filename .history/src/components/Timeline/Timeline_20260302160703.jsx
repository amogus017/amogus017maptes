// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);

  const frameRef = useRef(null);      // scrollable .slider-frame
  const innerRef = useRef(null);      // fixed-width .timeline-inner
  const thumbRef = useRef(null);      // custom drag handle
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartYear = useRef(0);

  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;
  const PIXELS_PER_YEAR = 2;
  const TOTAL_WIDTH = (MAX_YEAR - MIN_YEAR) * PIXELS_PER_YEAR;
  const EDGE_THRESHOLD_RATIO = 0.25;

  const yearToPixel = useCallback((y) => (y - MIN_YEAR) * PIXELS_PER_YEAR, []);

  const pixelToYear = useCallback((px) => {
    const clamped = Math.max(0, Math.min(TOTAL_WIDTH, px));
    return Math.round(clamped / PIXELS_PER_YEAR) + MIN_YEAR;
  }, [TOTAL_WIDTH]);

  const handleYearChange = useCallback((newYear) => {
    const clamped = Math.max(MIN_YEAR, Math.min(MAX_YEAR, newYear));
    setYear(clamped);
    onYearChange(clamped);
  }, [onYearChange]);

  // Scroll only when thumb nears an edge — no fighting, no centering on every move
  const nudgeScrollIfNeeded = useCallback((newYear) => {
    if (!frameRef.current) return;
    const frame = frameRef.current;
    const thumbPx = yearToPixel(newYear);
    const scrollLeft = frame.scrollLeft;
    const viewportWidth = frame.clientWidth;
    const threshold = viewportWidth * EDGE_THRESHOLD_RATIO;

    const distFromLeft = thumbPx - scrollLeft;
    const distFromRight = scrollLeft + viewportWidth - thumbPx;

    if (distFromLeft < threshold || distFromRight < threshold) {
      frame.scrollLeft = Math.max(0, thumbPx - viewportWidth / 2);
    }
  }, [yearToPixel]);

  // ── Pointer drag handlers on the thumb ───────────────────────────────────

  const onThumbPointerDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation(); // don't bubble to track click
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartYear.current = year;
    thumbRef.current?.setPointerCapture(e.pointerId);
  }, [year]);

  const onThumbPointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    const deltaYears = dx / PIXELS_PER_YEAR;
    const newYear = Math.round(dragStartYear.current + deltaYears);
    handleYearChange(newYear);
    nudgeScrollIfNeeded(newYear);
  }, [handleYearChange, nudgeScrollIfNeeded]);

  const onThumbPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // ── Click anywhere on the ruler to jump ──────────────────────────────────

  const onTrackClick = useCallback((e) => {
    if (isDragging.current) return;
    if (!innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newYear = pixelToYear(clickX);
    handleYearChange(newYear);
    nudgeScrollIfNeeded(newYear);
  }, [pixelToYear, handleYearChange, nudgeScrollIfNeeded]);

  // ── Manual scroll syncs year ──────────────────────────────────────────────

  const onFrameScroll = useCallback((e) => {
    if (isDragging.current) return;
    const frame = e.target;
    const viewportCenter = frame.scrollLeft + frame.clientWidth / 2;
    const snapped = pixelToYear(viewportCenter);
    setYear(snapped);
    onYearChange(snapped);
  }, [pixelToYear, onYearChange]);

  // ── Auto-play ─────────────────────────────────────────────────────────────

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
          if (frameRef.current) {
            const frame = frameRef.current;
            frame.scrollLeft = Math.max(0, yearToPixel(next) - frame.clientWidth / 2);
          }
          return next;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying, onYearChange, yearToPixel]);

  // ── Ruler marks ───────────────────────────────────────────────────────────

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

  const thumbPx = yearToPixel(year);

  return (
    <div className="victoria3-timeline">
      <div className="v3-slider-container">

        {/* Year tooltip — centered, outside scroll frame */}
        <div className="year-tooltip">
          {year}
        </div>

        {/* Scrollable frame */}
        <div
          className="slider-frame"
          ref={frameRef}
          onScroll={onFrameScroll}
        >
          {/* Fixed-width inner track */}
          <div
            className="timeline-inner"
            ref={innerRef}
            style={{ width: `${TOTAL_WIDTH}px`, position: 'relative' }}
            onClick={onTrackClick}
          >
            {/* Ruler */}
            <div className="ruler-background">
              <div className="ruler-baseline" />
              {generateRulerMarks()}
            </div>

            {/* Custom drag thumb — replaces <input type="range"> entirely */}
            <div
              ref={thumbRef}
              className="timeline-thumb"
              style={{ left: `${thumbPx}px` }}
              onPointerDown={onThumbPointerDown}
              onPointerMove={onThumbPointerMove}
              onPointerUp={onThumbPointerUp}
              onPointerCancel={onThumbPointerUp}
            />
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
                { year: 1300, event: "Foundation of Majapahit" },
                { year: 1350, event: "Golden Age Begins" },
                { year: 1400, event: "Height of Power" },
              ].map((event) => (
                <button
                  key={event.year}
                  className={`event-item ${year === event.year ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYearChange(event.year);
                    if (frameRef.current) {
                      frameRef.current.scrollLeft = Math.max(
                        0, yearToPixel(event.year) - frameRef.current.clientWidth / 2
                      );
                    }
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