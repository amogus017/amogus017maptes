import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import './TutorialOverlay.css';

const STEPS = [
  { selector: null },
  { selector: '.victoria3-timeline' },
  { selector: '.slider-frame' },
  { selector: '.v3-play-controls' },
  { selector: '.leaflet-container', hoverEffect: true, trimBottom: '.victoria3-timeline' },
  { selector: '.v3-territory-panel', autoSelect: 'srivijaya', prefer: 'right' },
  { selector: '.v3-wiki-btn', prefer: 'right' },
  { selector: '.v3-tab-nav', prefer: 'right', closeOnLeave: true },
  { selector: '.app-header-search' },
  { selector: '.v3-ask-ai-btn' },
  { selector: '.app-header-lang' },
  { selector: '.header-tutorial-btn' },
  { selector: null },
];

const PAD = 8;
const LAST = STEPS.length - 1;
const TOOLTIP_W = 300;

function getEmpireLabelRect(text) {
  const labels = document.querySelectorAll('.label-text');
  const el = Array.from(labels).find(l =>
    l.textContent.toLowerCase().includes(text.toLowerCase())
  );
  if (!el) return getRect('.leaflet-container');
  const r = el.getBoundingClientRect();
  const P = 50;
  const top  = Math.max(0, r.top  - P);
  const left = Math.max(0, r.left - P);
  return {
    top,
    left,
    width:  Math.min(window.innerWidth,  r.right  + P) - left,
    height: Math.min(window.innerHeight, r.bottom + P) - top,
  };
}

function getRect(selector) {
  if (!selector) return null;
  const el = document.querySelector(selector);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const top    = Math.max(0, r.top    - PAD);
  const left   = Math.max(0, r.left   - PAD);
  const right  = Math.min(window.innerWidth,  r.right  + PAD);
  const bottom = Math.min(window.innerHeight, r.bottom + PAD);
  return { top, left, width: right - left, height: bottom - top };
}

function tooltipStyle(rect, prefer) {
  if (!rect) return {};
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const w  = Math.min(TOOLTIP_W, vw - 32);

  // prefer === 'right': position card to the right of the spotlight (e.g. side panel)
  if (prefer === 'right') {
    const spaceRight = vw - (rect.left + rect.width);
    if (spaceRight >= w + 16) {
      return {
        width: w,
        top: Math.max(70, Math.min(rect.top + 20, vh - 200)),
        left: rect.left + rect.width + 12,
      };
    }
    // Not enough room on the right (mobile) — fall back to bottom-center
    return { width: w, bottom: 90, left: Math.max(16, (vw - w) / 2) };
  }

  // Large element (e.g. full-screen map): pin above the timeline
  if (rect.height > vh * 0.5) {
    return { width: w, bottom: 90, left: Math.max(16, (vw - w) / 2) };
  }

  const spaceBelow = vh - (rect.top + rect.height);
  const spaceAbove = rect.top;
  const style = { width: w };

  if (spaceBelow >= 150 || spaceBelow >= spaceAbove) {
    style.top = rect.top + rect.height + 12;
  } else {
    style.bottom = vh - rect.top + 12;
  }

  let left = rect.left + rect.width / 2 - w / 2;
  style.left = Math.max(12, Math.min(left, vw - w - 12));
  return style;
}

export default function TutorialOverlay({ isOpen, onClose, onAutoSelect, onClosePanel }) {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [rect, setRect] = useState(null);

  const measure = useCallback(() => {
    const { selector, autoSelect, labelText, trimBottom } = STEPS[step];
    if (labelText) {
      setRect(getEmpireLabelRect(labelText));
      return;
    }
    if (autoSelect && onAutoSelect) {
      onAutoSelect(autoSelect);
      setTimeout(() => setRect(getRect(selector)), 350);
      return;
    }
    let r = getRect(selector);
    if (r && trimBottom) {
      const trimEl = document.querySelector(trimBottom);
      if (trimEl) {
        const trimTop = trimEl.getBoundingClientRect().top;
        r = { ...r, height: Math.max(0, trimTop - r.top) };
      }
    }
    setRect(r);
  }, [step, onAutoSelect]);

  useEffect(() => {
    if (isOpen) setStep(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [isOpen, measure]);

  useEffect(() => {
    if (!isOpen) return;
    if (STEPS[step].hoverEffect) {
      document.body.classList.add('tut-map-active');
    }
    return () => document.body.classList.remove('tut-map-active');
  }, [isOpen, step]);

  useEffect(() => {
    if (!isOpen) return;
    const leave = () => { if (STEPS[step].closeOnLeave) onClosePanel?.(); };
    const onKey = (e) => {
      if (e.key === 'Escape') { leave(); onClose(); }
      else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        leave();
        setStep(s => { if (s < LAST) return s + 1; onClose(); return s; });
      } else if (e.key === 'ArrowLeft') {
        leave();
        setStep(s => Math.max(0, s - 1));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, step, onClosePanel]);

  const leave = () => { if (STEPS[step].closeOnLeave) onClosePanel?.(); };
  const next = () => { leave(); setStep(s => s < LAST ? s + 1 : (onClose(), s)); };
  const prev = () => { leave(); setStep(s => Math.max(0, s - 1)); };
  const handleClose = () => { leave(); onClose(); };

  const stepData  = t.tutorial.steps[step];
  const tStyle    = tooltipStyle(rect, STEPS[step].prefer);
  const isModal   = !rect;

  const motionStyle = isModal
    ? { top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }
    : { position: 'fixed', ...tStyle };

  const motionAnim = isModal
    ? { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } }
    : { initial: { opacity: 0, y: 6 },        animate: { opacity: 1, y: 0 } };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="tut-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div className={`tut-backdrop${isModal ? ' tut-backdrop--dim' : ''}`} />

          {rect && (
            <div
              className="tut-spotlight"
              style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
            />
          )}

          {rect && STEPS[step].pulse && (
            <div
              className="tut-pulse-marker"
              style={{
                top:  rect.top  + rect.height / 2,
                left: rect.left + rect.width  / 2,
              }}
            />
          )}

          <motion.div
            key={step}
            className={`tut-card${isModal ? ' tut-card--modal' : ''}`}
            style={motionStyle}
            {...motionAnim}
            transition={{ duration: 0.18 }}
          >
            <div className="tut-step-dots">
              {STEPS.map((_, i) => (
                <span key={i} className={`tut-dot${i === step ? ' tut-dot--active' : ''}`} />
              ))}
            </div>

            <div className="tut-card-title">{stepData.title}</div>
            <div className="tut-card-body">{stepData.body}</div>

            <div className="tut-card-actions">
              <button className="tut-btn tut-btn--ghost" onClick={handleClose}>
                {t.tutorial.skip}
              </button>
              <div className="tut-btn-group">
                {step > 0 && (
                  <button className="tut-btn tut-btn--outline" onClick={prev}>
                    {t.tutorial.prev}
                  </button>
                )}
                <button className="tut-btn tut-btn--primary" onClick={() => step < LAST ? next() : onClose()}>
                  {step === LAST ? t.tutorial.done : t.tutorial.next}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
