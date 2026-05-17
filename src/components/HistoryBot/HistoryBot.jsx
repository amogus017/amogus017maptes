import { useState, useRef, useEffect } from "react";
import { askGemini } from "./GeminiService";
import "./HistoryBot.css";

export default function HistoryBot({ selectedTerritory, isOpen, onClose }) {
  const getGreeting = (territory) =>
    territory
      ? `You are exploring the ${territory.name}. What would you like to know about this kingdom?`
      : "Welcome, scholar. Ask me anything about the pre-colonial kingdoms of Nusantara (1200–1600 CE).";

  const [messages, setMessages] = useState([
    { role: "bot", text: getGreeting(selectedTerritory) },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const prevTerritoryName = useRef(selectedTerritory?.name);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Reset chat when territory changes
  useEffect(() => {
    if (selectedTerritory?.name && selectedTerritory.name !== prevTerritoryName.current) {
      prevTerritoryName.current = selectedTerritory.name;
      setMessages([{ role: "bot", text: getGreeting(selectedTerritory) }]);
    }
  }, [selectedTerritory?.name]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const reply = await askGemini(userMsg, selectedTerritory);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `⚠️ Error: ${err.message}`,
        },
      ]);
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
    setMessages([{ role: "bot", text: getGreeting(selectedTerritory) }]);
  }

  if (!isOpen) return null;

  return (
    <div className="hbot-panel">
      {/* Header */}
      <div className="hbot-header">
        <div className="hbot-header-left">
          <span className="hbot-icon">📜</span>
          <div>
            <div className="hbot-title">Sejarah AI</div>
            {selectedTerritory && (
              <div className="hbot-subtitle">{selectedTerritory.name}</div>
            )}
          </div>
        </div>
        <div className="hbot-header-actions">
          <button className="hbot-btn-icon" onClick={clearChat} title="Clear chat">
            ↺
          </button>
          <button className="hbot-btn-icon" onClick={onClose} title="Close">
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="hbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`hbot-msg hbot-msg--${msg.role}`}>
            {msg.role === "bot" && <span className="hbot-msg-avatar">⚜</span>}
            <div className="hbot-msg-bubble">{msg.text}</div>
          </div>
        ))}
        {loading && (
          <div className="hbot-msg hbot-msg--bot">
            <span className="hbot-msg-avatar">⚜</span>
            <div className="hbot-msg-bubble hbot-typing">
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
          placeholder="Ask about this kingdom..."
          disabled={loading}
        />
        <button
          className="hbot-send-btn"
          onClick={handleSend}
          disabled={loading || !input.trim()}
        >
          ➤
        </button>
      </div>
    </div>
  );
}