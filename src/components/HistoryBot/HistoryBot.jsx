import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { askGemini } from "./GeminiService";
import { useLanguage } from "../../contexts/LanguageContext";
import "./HistoryBot.css";

function renderWithCitations(text) {
  const parts = text.split(/(\[\d+\])/g);
  return parts.map((part, i) =>
    /^\[\d+\]$/.test(part)
      ? <sup key={i} className="hbot-cite-marker">{part}</sup>
      : part
  );
}

export default function HistoryBot({ selectedTerritory, currentYear, isOpen, onClose }) {
  const { t, language } = useLanguage();

  const getGreeting = (territory, year) => {
    if (!territory) return t.greetingDefault;
    const name = (language === 'id' && territory.nameId) ? territory.nameId : territory.name;
    const era = (language === 'id' && territory.eraId) ? territory.eraId : territory.era;
    return t.greetingTerritory(name, year, era);
  };

  const [messages, setMessages] = useState([
    { role: "bot", text: getGreeting(selectedTerritory, currentYear), sources: [] },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [contextAware, setContextAware] = useState(true);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const messagesRef = useRef(messages);
  const prevTerritoryId = useRef(selectedTerritory?.id);
  const contextHistoriesRef = useRef({});
  const freeHistoryRef = useRef(null);

  // Keep messagesRef in sync so save-on-toggle captures latest messages
  useEffect(() => { messagesRef.current = messages; }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Territory changed — only act in context mode
  useEffect(() => {
    if (!selectedTerritory?.id) return;
    if (selectedTerritory.id === prevTerritoryId.current) return;

    if (contextAware) {
      if (prevTerritoryId.current) {
        contextHistoriesRef.current[prevTerritoryId.current] = messagesRef.current;
      }
      const saved = contextHistoriesRef.current[selectedTerritory.id];
      setMessages(saved ?? [{ role: "bot", text: getGreeting(selectedTerritory, currentYear), sources: [] }]);
    }

    prevTerritoryId.current = selectedTerritory.id;
  }, [selectedTerritory?.id]);

  // Language change: refresh greeting if chat is still at the untouched greeting
  useEffect(() => {
    setMessages(prev => (prev.length === 1
      ? [{ role: "bot", text: getGreeting(selectedTerritory, currentYear), sources: [] }]
      : prev));
  }, [language]);

  const toggleContext = () => {
    if (contextAware) {
      // Save context history, load free history
      if (selectedTerritory?.id) {
        contextHistoriesRef.current[selectedTerritory.id] = messagesRef.current;
      }
      const freeGreeting = [{ role: "bot", text: t.greetingDefault, sources: [] }];
      setMessages(freeHistoryRef.current ?? freeGreeting);
      setContextAware(false);
    } else {
      // Save free history, restore context history (same kingdom) or fresh greeting
      freeHistoryRef.current = messagesRef.current;
      if (selectedTerritory?.id) {
        const saved = contextHistoriesRef.current[selectedTerritory.id];
        setMessages(saved ?? [{ role: "bot", text: getGreeting(selectedTerritory, currentYear), sources: [] }]);
      }
      setContextAware(true);
    }
  };

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg, sources: [] }]);
    setLoading(true);

    try {
      const context = contextAware ? selectedTerritory : null;
      const reply = await askGemini(userMsg, context, currentYear);
      setMessages(prev => [...prev, { role: "bot", text: reply.text, sources: reply.sources }]);
    } catch {
      setMessages(prev => [...prev, { role: "bot", text: "⚠️ Error: Could not get a response. Please try again.", sources: [] }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function clearChat() {
    const greeting = (contextAware && selectedTerritory)
      ? [{ role: "bot", text: getGreeting(selectedTerritory, currentYear), sources: [] }]
      : [{ role: "bot", text: t.greetingDefault, sources: [] }];

    if (contextAware && selectedTerritory?.id) {
      delete contextHistoriesRef.current[selectedTerritory.id];
    } else {
      freeHistoryRef.current = null;
    }
    setMessages(greeting);
  }

  const displayName = selectedTerritory
    ? ((language === 'id' && selectedTerritory.nameId) ? selectedTerritory.nameId : selectedTerritory.name)
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="hbot-panel"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          role="dialog"
          aria-label={t.botAriaLabel}
        >
          {/* Header */}
          <div className="hbot-header">
            <div className="hbot-header-left">
              <span className="hbot-icon" aria-hidden="true">📜</span>
              <div>
                <div className="hbot-title">{t.botTitle}</div>
                <div className="hbot-subtitle">
                  {contextAware && selectedTerritory
                    ? `${displayName} · ${currentYear} M`
                    : (language === 'id' ? 'Obrolan Bebas' : 'Free Chat')}
                </div>
              </div>
            </div>
            <div className="hbot-header-actions">
              {selectedTerritory && (
                <button
                  className={`hbot-context-btn${contextAware ? ' active' : ''}`}
                  onClick={toggleContext}
                  title={contextAware
                    ? (language === 'id' ? 'Beralih ke Obrolan Bebas' : 'Switch to Free Chat')
                    : (language === 'id' ? 'Beralih ke Mode Konteks' : 'Switch to Context Mode')}
                  aria-pressed={contextAware}
                >
                  {contextAware ? '📍' : '🌐'}
                </button>
              )}
              <button className="hbot-btn-icon" onClick={clearChat} title={t.clearChat} aria-label={t.clearChat}>
                <span aria-hidden="true">↺</span>
              </button>
              <button className="hbot-btn-icon" onClick={onClose} title={t.closeChatbot} aria-label={t.closeChatbot}>
                <span aria-hidden="true">✕</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="hbot-messages" aria-live="polite" aria-label={t.messagesAriaLabel}>
            {messages.map((msg, i) => (
              <div key={i} className={`hbot-msg hbot-msg--${msg.role}`}>
                {msg.role === "bot" && <span className="hbot-msg-avatar" aria-hidden="true">⚜</span>}
                <div className="hbot-msg-content">
                  <div className="hbot-msg-bubble">{renderWithCitations(msg.text)}</div>
                  {msg.sources?.length > 0 && (
                    <div className="hbot-sources">
                      {msg.sources.map((s, j) => (
                        <div key={j} className="hbot-source-item">
                          <span className="hbot-source-num" aria-hidden="true">[{s.citationNumber ?? j + 1}]</span>
                          {s.url
                            ? <a href={s.url} target="_blank" rel="noopener noreferrer" className="hbot-source-citation hbot-source-link">{s.citation}</a>
                            : <span className="hbot-source-citation">{s.citation}</span>
                          }
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="hbot-msg hbot-msg--bot" aria-label={t.thinkingAriaLabel}>
                <span className="hbot-msg-avatar" aria-hidden="true">⚜</span>
                <div className="hbot-msg-bubble hbot-typing" aria-hidden="true">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="hbot-input-row">
            <input
              ref={inputRef}
              className="hbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.inputPlaceholder}
              aria-label={t.inputAriaLabel}
              disabled={loading}
            />
            <button
              className="hbot-send-btn"
              onClick={handleSend}
              disabled={loading || !input.trim()}
              aria-label={t.sendMessage}
            >
              <span aria-hidden="true">➤</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
