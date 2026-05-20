// components/Timeline/Timeline.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Timeline.css';

const Victoria3Timeline = ({ onYearChange, currentYear: externalYear, isPanelOpen }) => {
  const [year, setYear] = useState(1350);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playDirection, setPlayDirection] = useState('forward'); // 'forward' | 'reverse'
  const [playSpeed, setPlaySpeed] = useState(1);
  const [isEditingYear, setIsEditingYear] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const isDraggingTimeout = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const isProgrammaticScrollTimeout = useRef(null);
  const lastEdgeScrollRef = useRef(0);
  const edgeScrollRafRef = useRef(null);

  // Adjust this to control edge-scroll speed (milliseconds)
  const EDGE_SCROLL_DURATION = 2100;

  const MIN_YEAR = 400;
  const MAX_YEAR = 1600;

  const PIXELS_PER_YEAR = 2;
  const TOTAL_WIDTH = (MAX_YEAR - MIN_YEAR) * PIXELS_PER_YEAR;
  const yearToPixel = useCallback((y) => (y - MIN_YEAR) * PIXELS_PER_YEAR, []);
  const pixelToYear = useCallback((px) => Math.round(px / PIXELS_PER_YEAR) + MIN_YEAR, []);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    onYearChange(newYear);
  };

  const scrollToYear = useCallback((newYear, smooth = false) => {
    if (!scrollRef.current) return;
    const frame = scrollRef.current;
    const targetScroll = yearToPixel(newYear) - frame.clientWidth / 2;

    isProgrammaticScroll.current = true;
    frame.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: smooth ? 'smooth' : 'auto',
    });

    clearTimeout(isProgrammaticScrollTimeout.current);
    isProgrammaticScrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, smooth ? 600 : 50);
  }, [yearToPixel]);

  // Custom RAF-based smooth scroll — duration in ms, easeInOutCubic easing
  const smoothScrollTo = useCallback((element, targetLeft, duration) => {
    cancelAnimationFrame(edgeScrollRafRef.current);
    const startLeft = element.scrollLeft;
    const distance = targetLeft - startLeft;
    if (distance === 0) return;
    const startTime = performance.now();

    isProgrammaticScroll.current = true;
    clearTimeout(isProgrammaticScrollTimeout.current);

    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      element.scrollLeft = startLeft + distance * ease;

      if (t < 1) {
        edgeScrollRafRef.current = requestAnimationFrame(animate);
      } else {
        isProgrammaticScrollTimeout.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 50);
      }
    };

    edgeScrollRafRef.current = requestAnimationFrame(animate);
  }, []);

  // Pause autoplay when the territory panel opens
  useEffect(() => {
    if (isPanelOpen) setIsPlaying(false);
  }, [isPanelOpen]);

  // Sync to externally-driven year changes (e.g. kingdom search select)
  useEffect(() => {
    if (externalYear == null || externalYear === year) return;
    setYear(externalYear);
    scrollToYear(externalYear, true);
  }, [externalYear]); // scrollToYear is stable; year excluded to avoid loop

  // Confirm typed year — clamp silently to MIN/MAX
  const confirmYear = useCallback(() => {
    const parsed = parseInt(inputValue);
    const clamped = isNaN(parsed)
      ? year
      : Math.max(MIN_YEAR, Math.min(MAX_YEAR, parsed));
    handleYearChange(clamped);
    scrollToYear(clamped, true);
    setIsEditingYear(false);
  }, [inputValue, year, scrollToYear, handleYearChange]);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setYear(current => {
        if (playDirection === 'forward') {
          const next = Math.min(current + playSpeed, MAX_YEAR);
          if (next >= MAX_YEAR) { setIsPlaying(false); return MAX_YEAR; }
          onYearChange(next);
          scrollToYear(next, true);
          return next;
        } else {
          const next = Math.max(current - playSpeed, MIN_YEAR);
          if (next <= MIN_YEAR) { setIsPlaying(false); return MIN_YEAR; }
          onYearChange(next);
          scrollToYear(next, true);
          return next;
        }
      });
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying, playDirection, playSpeed, onYearChange, scrollToYear]);

  const rulerMarks = useMemo(() => {
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

  return (
    <div className={`victoria3-timeline${isPanelOpen ? ' panel-open' : ''}`}>

      <div className="v3-slider-container">

        {/* Play controls — pinned left, same level as year tooltip */}
        <div className="v3-play-controls">
          <button
            className={`v3-play-btn${isPlaying && playDirection === 'reverse' ? ' playing' : ''}`}
            onClick={() => {
              if (isPlaying && playDirection === 'reverse') {
                setIsPlaying(false);
              } else {
                setPlayDirection('reverse');
                setIsPlaying(true);
              }
            }}
            aria-label="Play reverse"
            title="Play in reverse"
          >◀</button>
          <button
            className={`v3-play-btn${isPlaying && playDirection === 'forward' ? ' playing' : ''}`}
            onClick={() => {
              if (isPlaying && playDirection === 'forward') {
                setIsPlaying(false);
              } else {
                setPlayDirection('forward');
                setIsPlaying(true);
              }
            }}
            aria-label="Play forward"
            title="Play forward"
          >▶</button>
          <div className={`v3-speed-chips${isPlaying ? ' visible' : ''}`}>
            {[1, 2, 3, 5, 10].map(s => (
              <button
                key={s}
                className={`v3-speed-chip${playSpeed === s ? ' active' : ''}`}
                onClick={() => setPlaySpeed(s)}
                aria-label={`Speed ×${s}`}
              >×{s}</button>
            ))}
          </div>
        </div>

        {/* Year tooltip — click to edit */}
        {isEditingYear ? (
          <input
            className="year-tooltip year-tooltip-input"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={confirmYear}
            onKeyDown={(e) => {
              if (e.key === 'Enter') confirmYear();
              if (e.key === 'Escape') setIsEditingYear(false);
            }}
            autoFocus
          />
        ) : (
          <div
            className="year-tooltip year-tooltip-editable"
            role="button"
            tabIndex={0}
            onClick={() => {
              setInputValue(String(year));
              setIsEditingYear(true);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setInputValue(String(year));
                setIsEditingYear(true);
              }
            }}
            title="Click to type a year"
            aria-label={`Current year: ${year}. Click to edit.`}
          >
            {year}
          </div>
        )}

        <div
          className="slider-frame"
          ref={scrollRef}
          onScroll={(e) => {
            if (isDragging.current || isProgrammaticScroll.current) return;
            const target = e.target;
            const viewportCenter = target.scrollLeft + target.clientWidth / 2;
            const snapped = Math.max(MIN_YEAR, Math.min(MAX_YEAR, pixelToYear(viewportCenter)));
            setYear(snapped);
            onYearChange(snapped);
          }}
        >
          <div className="timeline-scroll-wrapper">
            <div className="timeline-inner" style={{ width: `${TOTAL_WIDTH}px` }}>

              <div className="ruler-background">
                <div className="ruler-baseline" style={{ width: `${TOTAL_WIDTH}px` }} />
                {rulerMarks}
              </div>

              <div className="slider-track">
                <div className="slider-wrapper">
                  <input
                    type="range"
                    className="v3-slider"
                    aria-label="Select year"
                    aria-valuemin={MIN_YEAR}
                    aria-valuemax={MAX_YEAR}
                    aria-valuenow={year}
                    aria-valuetext={`Year ${year} CE`}
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
                        const EDGE_THRESHOLD = viewportWidth * 0.1579597878
                        78
                        ;

                        const distFromLeft = thumbPx - scrollLeft;
                        const distFromRight = scrollLeft + viewportWidth - thumbPx;

                        if (distFromLeft < EDGE_THRESHOLD || distFromRight < EDGE_THRESHOLD) {
                          const now = Date.now();
                          if (now - lastEdgeScrollRef.current > EDGE_SCROLL_DURATION * 0.9) {
                            lastEdgeScrollRef.current = now;
                            const direction = distFromRight < EDGE_THRESHOLD ? 1 : -1;
                            smoothScrollTo(
                              frame,
                              Math.max(0, frame.scrollLeft + direction * viewportWidth * 0.4),
                              EDGE_SCROLL_DURATION
                            );
                          }
                        }
                      }

                      clearTimeout(isDraggingTimeout.current);
                      isDraggingTimeout.current = setTimeout(() => {
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

    </div>
  );
};

export default Victoria3Timeline;