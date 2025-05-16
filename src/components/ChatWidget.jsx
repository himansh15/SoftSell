import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  "How do I sell my license?",
  "Which software do you support?",
];

const RESPONSES = {
  "how do i sell my license":"Just fill out the quote form and our team will reach out shortly.",
  "which software do you support":"We support Microsoft, Adobe, Autodesk, and many more.",
  default:"Great question! Please leave your details, and our team will assist shortly."
};

function getResponse(q) {
  const lq = q.toLowerCase().trim();
  return RESPONSES[lq] || RESPONSES.default;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 How can I help you today? (Try a quick question below.)" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current)
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  function sendMessage(msg) {
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: getResponse(msg) }
      ]);
    }, 700 + Math.random() * 800);
  }

  function handleSend(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    setInput("");
  }

  function handleSuggestion(q) {
    sendMessage(q);
    setInput("");
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed z-50 bottom-24 right-6 w-80 rounded-xl shadow-xl border flex flex-col overflow-hidden"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border-subtle)",
              transition: "background 0.3s, border-color 0.3s"
            }}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            {/* Chat header */}
            <div
              className="px-4 py-2 flex justify-between items-center"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-button-text)",
                transition: "background 0.3s, color 0.3s"
              }}
            >
              <span className="font-bold">AI Assistant</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-lg font-bold focus:outline-none focus-visible:ring-2"
                style={{
                  color: "inherit",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer"
                }}
              >&times;</button>
            </div>
            {/* Chat messages */}
            <div
              className="flex-1 p-4 overflow-y-auto max-h-80 space-y-2"
              aria-live="polite"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      style={
                        msg.from === "user"
                          ? {
                              background: "var(--color-accent)",
                              color: "var(--color-button-text)",
                              transition: "background 0.2s, color 0.2s"
                            }
                          : {
                              background: "var(--color-chat-bot-bg, #f3f4f6)",
                              color: "var(--color-text-base)",
                              transition: "background 0.2s, color 0.2s"
                            }
                      }
                      className="px-3 py-2 rounded-lg max-w-xs"
                    >
                      {msg.text}
                      {i === 0 && (
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {QUESTIONS.map((q) => (
                            <button
                              type="button"
                              key={q}
                              onClick={() => handleSuggestion(q)}
                              className="border rounded px-2 py-0.5 mt-1 text-xs transition focus:outline-none focus-visible:ring-2"
                              style={{
                                background: "var(--color-suggestion-bg, #e8faf3)",
                                color: "var(--color-suggestion-text, #065f46)",
                                borderColor: "var(--color-accent)",
                                fontWeight: 500,
                                transition: "background 0.2s, color 0.2s, border-color 0.2s"
                              }}
                              onKeyDown={e =>
                                (e.key === "Enter" || e.key === " ") && handleSuggestion(q)
                              }
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
            {/* Input area */}
            <form
              onSubmit={handleSend}
              className="flex border-t p-2"
              style={{
                background: "var(--color-chat-input-bg, #f3f4f6)",
                borderColor: "var(--color-border-subtle)"
              }}
            >
              <input
                className="flex-1 px-3 py-2 rounded border outline-none"
                style={{
                  background: "var(--color-input-bg, var(--color-surface))",
                  color: "var(--color-text-base)",
                  borderColor: "var(--color-border-subtle)",
                  transition: "background 0.2s, color 0.2s, border-color 0.2s"
                }}
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                ref={inputRef}
                autoComplete="off"
              />
              <button
                className="ml-2 px-4 py-2 font-bold rounded focus:outline-none focus-visible:ring-2"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-button-text)",
                  transition: "background 0.2s, color 0.2s"
                }}
                type="submit"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Floating Open Button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl text-2xl focus:outline-none focus-visible:ring-2"
          style={{
            background: "var(--color-accent)",
            color: "var(--color-button-text)",
            transition: "background 0.2s, color 0.2s"
          }}
          onClick={() => setOpen(true)}
          aria-label="Open AI Chat"
          tabIndex={0}
        >
          <span role="img" aria-label="Chatbot" className="text-2xl">🤖</span>
        </button>
      )}
    </>
  );
}