// components/Timeline/Victoria3Timeline.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const isProgrammaticScroll = useRef(false);

  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;
  const PIXELS_PER_YEAR = 2;

  // Frame padding — must match the padding value in .slider-frame CSS
  // This offset corrects the pixel→year calculation so the ruler zero
  // aligns with what the scroll position reports.
  const FRAME_PADDING = 20;

  // Half-viewport padding added to both ends of the inner track so that
  // year 400 and year 1600 can be scrolled to the exact center marker.
  // We use a CSS var so both JSX and CSS stay in sync; we read it at
  // runtime from the frame width when needed.
  const getHalfViewport = () =>
    scrollRef.current ? scrollRef.current.clientWidth / 2 : 0;

  const TOTAL_TRACK_WIDTH = (MAX_YEAR - MIN_YEAR) * PIXELS_PER_YEAR;

  // year → px offset inside the padded inner track
  const yearToPixel = useCallback(
    (y) => (y - MIN_YEAR) * PIXELS_PER_YEAR + getHalfViewport(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // scroll position → year
  // scrollLeft 0  means the left half-padding fills the viewport →
  //   center of viewport = halfViewport px = year MIN_YEAR
  const pixelToYear = useCallback((scrollLeft) => {
    const halfVp = getHalfViewport();
    // center of viewport in track coords = scrollLeft + halfVp
    // subtract the leading half-viewport padding to get ruler px
    const rulerPx = scrollLeft + halfVp - halfVp; // simplifies to scrollLeft
    return Math.round(rulerPx / PIXELS_PER_YEAR) + MIN_YEAR;
  }, []);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    onYearChange(newYear);
  };

  // Scroll so that `newYear` sits exactly under the center marker
  const scrollToYear = useCallback((newYear, smooth = false) => {
    if (!scrollRef.current) return;
    const frame = scrollRef.current;
    const halfVp = frame.clientWidth / 2;
    // target scrollLeft so that year pixel lands at viewport center
    const targetScroll = (newYear - MIN_YEAR) * PIXELS_PER_YEAR;
    // targetScroll = 0 when newYear = MIN_YEAR, meaning the track's
    // left half-padding exactly fills the left side → correct.

    isProgrammaticScroll.current = true;
    frame.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: smooth ? 'smooth' : 'auto',
    });

    clearTimeout(isProgrammaticScroll.timeout);
    isProgrammaticScroll.timeout = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, smooth ? 600 : 50);
  }, []);

  // On mobile mount/switch: align track to current year
  useEffect(() => {
    if (isMobile) scrollToYear(year, false);
  }, [isMobile]);

  // Auto-play — desktop only
  useEffect(() => {
    let interval;
    if (isPlaying && !isMobile) {
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
  }, [isPlaying, isMobile, onYearChange, scrollToYear]);

  // Generate ruler ticks/labels in pixel space
  const generateRulerMarks = () => {
    const marks = [];
    for (let tickYear = MIN_YEAR; tickYear <= MAX_YEAR; tickYear += 5) {
      // px is relative to the ruler-background element which starts at
      // the left edge of the inner track content (after the padding strip)
      const px = (tickYear - MIN_YEAR) * PIXELS_PER_YEAR;
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

      <div className="v3-slider-container">

        {/* Year tooltip — always centered above frame */}
        <div className="year-tooltip">
          {year}
        </div>

        {/* Wrapper gives us a positioned context for the mobile needle */}
        <div className="slider-frame-wrapper">

          {/* Mobile needle — absolutely centered over the frame */}
          {isMobile && <div className="mobile-needle" />}

          <div
            className="slider-frame"
            ref={scrollRef}
            onScroll={(e) => {
              if (!isMobile && (isDragging.current || isProgrammaticScroll.current)) return;
              // scrollLeft == 0  →  center of viewport == year MIN_YEAR
              const snapped = Math.max(
                MIN_YEAR,
                Math.min(MAX_YEAR, Math.round(e.target.scrollLeft / PIXELS_PER_YEAR) + MIN_YEAR)
              );
              setYear(snapped);
              onYearChange(snapped);
            }}
          >
            {/* timeline-inner width = track + half-viewport on each side
                so MIN_YEAR and MAX_YEAR can reach the center.
                We use CSS custom property set inline so both padding
                divs and the ruler share the same value.             */}
            <div
              className="timeline-inner"
              style={{ '--half-vp': `${scrollRef.current ? scrollRef.current.clientWidth / 2 : 200}px` }}
            >
              {/* Left spacer — allows MIN_YEAR to reach center */}
              <div className="timeline-edge-pad" />

              {/* Ruler */}
              <div className="ruler-content" style={{ width: `${TOTAL_TRACK_WIDTH}px` }}>
                <div className="ruler-background">
                  <div className="ruler-baseline" />
                  {generateRulerMarks()}
                </div>

                {/* Desktop slider */}
                <div className="slider-track">
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      className="v3-slider"
                      min={MIN_YEAR}
                      max={MAX_YEAR}
                      value={year}
                      onChange={(e) => {
                        if (isMobile) return;
                        const newYear = parseInt(e.target.value);
                        handleYearChange(newYear);

                        if (scrollRef.current) {
                          const frame = scrollRef.current;
                          const thumbPx = (newYear - MIN_YEAR) * PIXELS_PER_YEAR;
                          const scrollLeft = frame.scrollLeft;
                          const viewportWidth = frame.clientWidth;
                          const EDGE_THRESHOLD = viewportWidth * 0.25;
                          const distFromLeft = thumbPx - scrollLeft;
                          const distFromRight = scrollLeft + viewportWidth - thumbPx;

                          if (distFromLeft < EDGE_THRESHOLD || distFromRight < EDGE_THRESHOLD) {
                            frame.scrollLeft = Math.max(0, thumbPx - viewportWidth / 2);
                          }
                        }

                        clearTimeout(isDragging.timeout);
                        isDragging.timeout = setTimeout(() => {
                          isDragging.current = false;
                        }, 150);
                      }}
                      onPointerDown={() => {
                        if (isMobile) return;
                        if (scrollRef.current) scrollRef.current.style.touchAction = 'none';
                      }}
                      onPointerUp={() => {
                        if (scrollRef.current) scrollRef.current.style.touchAction = 'pan-x';
                      }}
                      onPointerCancel={() => {
                        if (scrollRef.current) scrollRef.current.style.touchAction = 'pan-x';
                      }}
                      style={{ width: `${TOTAL_TRACK_WIDTH}px` }}
                    />
                  </div>
                </div>
              </div>

              {/* Right spacer — allows MAX_YEAR to reach center */}
              <div className="timeline-edge-pad" />
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
                { year: 1300, event: "Foundation of Majapahit" },
                { year: 1350, event: "Golden Age Begins" },
                { year: 1400, event: "Height of Power" },
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