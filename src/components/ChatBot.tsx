"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { findBestAnswer } from "@/lib/chat-knowledge";

import { whatsappLink } from "@/lib/wa";

interface Message {
  role: "bot" | "user";
  text: string;
  followUp?: string[];
}

interface LeadForm {
  name: string;
  phone: string;
  email: string;
}

// Audit intent + a website address in the same message → queue a real check.
const AUDIT_INTENT =
  /\b(audit|health\s*check|website\s*check|check\s*(my|this|the|your)?\s*(site|website|page)?|seo\s*check|score\s*(my|this|the)?\s*(site|website)?|run\s+(a|an)\s+(check|audit)|what'?s\s+missing|analy[sz]e)\b/i;
const URL_RE = /(?:https?:\/\/)?(?:www\.)?(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s]*)?/i;

function findAuditUrl(text: string): string | null {
  if (!AUDIT_INTENT.test(text)) return null;
  const m = text.match(URL_RE);
  if (!m) return null;
  let url = m[0].replace(/[.,;:!?)\]]+$/, "");
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  return url;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"lead" | "chat">("lead");
  const [lead, setLead] = useState<LeadForm>({ name: "", phone: "", email: "" });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const transcriptSent = useRef(false);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSubmitLead = async () => {
    if (!lead.name.trim() || !lead.phone.trim()) return;
    setSaving(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {}
    setSaving(false);
    setStep("chat");
    const greeting = findBestAnswer("hello");
    setMessages([{ role: "bot", text: `Hi ${lead.name}! 👋 Welcome to NileSites. Ask me anything about our services.`, followUp: greeting.followUp }]);
  };

  const handleSend = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || typing) return;
    setInput("");

    const userMsg: Message = { role: "user", text: msg };
    const history = [...messages, userMsg]
      .slice(-6)
      .map((m) => ({ role: m.role === "user" ? "user" : "assistant" as const, text: m.text }));
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    // Audit request with a pasted link → queue a REAL check (same pipeline as
    // the Free Check form) instead of letting the brain promise one.
    const auditUrl = findAuditUrl(msg);
    const validPhone = /^\+?\d{7,15}$/.test(lead.phone.replace(/[\s-]/g, ""));
    if (auditUrl && lead.name.trim().length >= 2 && validPhone) {
      try {
        const r = await fetch("/api/check-request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: lead.name.trim(), phone: lead.phone.trim(), url: auditUrl }),
        });
        if (r.ok) {
          const botMsg: Message = {
            role: "bot",
            text: `✅ Queued! I've logged a free health check for ${auditUrl} using your WhatsApp number ${lead.phone}.\n\nOur watchdog agent scores it 0–100 — title, speed, mobile view, broken links, security — and the team WhatsApps you the findings, usually within the hour.`,
            followUp: ["What does the score include?", "How much does the Watchdog cost?", "I'd like to get started"],
          };
          setMessages((prev) => [...prev, botMsg]);
          setTyping(false);
          return;
        }
      } catch {}
      // Queue failed — fall through to the brain (it will redirect honestly).
    }

    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, history }),
      });
      if (!r.ok) throw new Error();
      const data = await r.json();
      if (!data.reply) throw new Error();
      const botMsg: Message = { role: "bot", text: String(data.reply) };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      // Offline fallback: instant keyword brain, no network needed.
      const botAnswer = findBestAnswer(msg);
      const botMsg: Message = { role: "bot", text: botAnswer.text, followUp: botAnswer.followUp };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  const toggleChat = () => {
    if (open && messages.length > 0 && !transcriptSent.current) {
      transcriptSent.current = true;
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          phone: lead.phone,
          type: "transcript",
          messages: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      }).catch(() => {});
    }
    setOpen(!open);
  };

  return (
    <>
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-110 active:scale-95 shadow-blue-500/25"
        aria-label="Open Akiba AI Chat"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          )}
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 left-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-navy-900 text-white px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-navy-900 font-bold text-xs">AI</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">Akiba AI Assistant</p>
                <p className="text-xs text-gray-300">NileSites — Ask me anything!</p>
              </div>
            </div>

            <div className="flex-1 min-h-0">
              {step === "lead" ? (
                <div className="p-5 space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="text-navy-900 font-semibold mb-1">Chat with Akiba AI</h3>
                    <p className="text-gray-500 text-sm mb-4">Leave your details so we can follow up if needed.</p>
                  </div>
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={lead.name}
                    onChange={e => setLead(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    onKeyDown={e => e.key === "Enter" && handleSubmitLead()}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    value={lead.phone}
                    onChange={e => setLead(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    onKeyDown={e => e.key === "Enter" && handleSubmitLead()}
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={lead.email}
                    onChange={e => setLead(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    onKeyDown={e => e.key === "Enter" && handleSubmitLead()}
                  />
                  <button
                    onClick={handleSubmitLead}
                    disabled={saving || !lead.name.trim() || !lead.phone.trim()}
                    className="w-full bg-gold-500 text-navy-900 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? "Starting..." : "Start Chat"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy. Your info stays with us.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-[400px]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-navy-900 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {msg.text.split("\n").map((line, j) => (
                            <p key={j}>{line || <br />}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                      {messages.length > 0 && messages[messages.length - 1].followUp && !typing && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {messages[messages.length - 1].followUp!.map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => handleSend(suggestion)}
                            className="text-xs bg-gold-50 text-gold-700 px-2.5 py-1.5 rounded-full border border-gold-200 hover:bg-gold-100 transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                      {typing && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 rounded-xl px-4 py-3 flex gap-1">
                            {[0, 1, 2].map((d) => (
                              <span key={d} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                            ))}
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                  </div>

                  <div className="border-t border-gray-100 p-3 flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Type your question..."
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                    <button
                      onClick={() => handleSend()}
                      disabled={!input.trim()}
                      className="bg-navy-900 text-white px-3.5 py-2 rounded-lg text-sm font-medium hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>Powered by Akiba AI</span>
              <a href={whatsappLink("Hi NileSites! I'd like to know more.")} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
