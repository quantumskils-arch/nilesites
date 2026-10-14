"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import FreeCheckForm from "@/components/FreeCheckForm";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/CTASection";
import { whatsappLink } from "@/lib/wa";

const AgentGlobe = dynamic(() => import("@/components/AgentGlobe"), {
  ssr: false,
  loading: () => <div className="w-full h-[420px] lg:h-[560px]" aria-hidden />,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const feedEvents = [
  { icon: "🔍", text: "Watchdog checked 12 client sites", sub: "11 up • 1 slow — owner notified" },
  { icon: "📊", text: "Monday scorecard sent", sub: "87/100 🟢 — forwarded on WhatsApp" },
  { icon: "🎯", text: "Radar found 3 weak rival sites", sub: "Outreach drafts ready for review" },
  { icon: "💬", text: "Akiba answered 48 customer questions", sub: "2 orders taken while owner slept" },
  { icon: "⭐", text: "New 5-star Google review detected", sub: "Thank-you reply drafted" },
  { icon: "🔒", text: "SSL renewed automatically", sub: "Client site stays trusted" },
];

function LiveFeed() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % feedEvents.length), 2800);
    return () => clearInterval(t);
  }, []);
  const event = feedEvents[index];
  return (
    <div className="relative bg-navy-800/80 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-400 font-mono">agents.nilesites.com — live</span>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> LIVE
        </span>
      </div>
      <div className="p-5 min-h-[132px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center text-xl shrink-0">
              {event.icon}
            </div>
            <div>
              <p className="text-white font-semibold text-[15px] leading-snug">{event.text}</p>
              <p className="text-gray-400 text-sm mt-1 font-mono">{event.sub}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-1.5 mt-4">
          {feedEvents.map((_, i) => (
            <button
              key={i}
              aria-label={`Show event ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-amber-400" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const marqueeItems = [
  "24/7 monitoring", "WhatsApp reports", "No tech skills needed", "UGX pricing",
  "MoMo payments", "Same-week setup", "Human review always", "Cancel anytime",
];

const agents = [
  {
    status: "live", name: "Website Health Watchdog",
    outcome: "Never lose a customer to a broken website again.",
    rhythm: "Every Monday: 0–100 scorecard on WhatsApp. Instant alert if your site goes down.",
    price: "UGX 150,000 audit · UGX 80,000/mo",
    wa: "Hi NileSites! I'd like the Website Health Watchdog for my business.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
  },
  {
    status: "live", name: "Akiba WhatsApp Agent",
    outcome: "Answer customers and take orders while you sleep.",
    rhythm: "24/7: FAQs, catalog, orders, MoMo follow-ups — in English, Luganda, Swahili.",
    price: "From UGX 900,000 + UGX 100,000/mo",
    wa: "Hi NileSites! I'd like an Akiba WhatsApp Agent for my business.",
    img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop&auto=format",
  },
  {
    status: "custom", name: "Client & Competitor Radar",
    outcome: "Know when rivals drop prices or go out of stock — first.",
    rhythm: "Weekly: rival price/stock intel sheet + new-lead alerts for your sales team.",
    price: "From UGX 500,000 + UGX 300,000/mo",
    wa: "Hi NileSites! Tell me about the Competitor Radar service.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
  },
  {
    status: "custom", name: "Review & Reputation Watcher",
    outcome: "Every Google review answered. None missed, ever.",
    rhythm: "Instant: new-review alert with a drafted reply for you to approve.",
    price: "UGX 80,000/mo add-on",
    wa: "Hi NileSites! I'd like the Review Watcher for my business.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
  },
  {
    status: "custom", name: "Proposal-Deck Automation",
    outcome: "Quotes out the same day, not next week.",
    rhythm: "On demand: branded proposal deck generated from a short form or call notes.",
    price: "From UGX 900,000 + UGX 100,000/mo",
    wa: "Hi NileSites! Tell me about Proposal-Deck Automation.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&auto=format",
  },
  {
    status: "custom", name: "Shorts Engine",
    outcome: "One recording becomes 30 days of TikTok, Reels & Shorts.",
    rhythm: "Monthly: 8–10 captioned clips per episode, scheduled for you.",
    price: "From UGX 600,000/mo",
    wa: "Hi NileSites! Tell me about the Shorts Engine service.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop&auto=format",
  },
];

const steps = [
  { n: "01", title: "We plug in", desc: "You share your website and WhatsApp number. Setup takes days, not months — no tech skills needed from you." },
  { n: "02", title: "Agents watch 24/7", desc: "They check your site, rivals, reviews and inbox around the clock — including Sundays and public holidays." },
  { n: "03", title: "You get WhatsApp reports", desc: "Short, plain-English updates with exactly what to do. Forward them, approve them, or ignore them." },
];

const faqs = [
  { q: "Do I need any technical skills?", a: "None. If you can use WhatsApp, you can use our agents. We handle setup, hosting and maintenance — you just read short reports and approve actions." },
  { q: "What happens when my site goes down?", a: "Our watchdog checks every morning. The moment your site stops responding, you get an instant alert — usually before your customers even notice. We then help you get it back up." },
  { q: "How do I pay?", a: "MTN MoMo or Airtel Money, monthly. No contracts — cancel anytime with a WhatsApp message. Setups are one-time payments." },
  { q: "Are these robots messaging my customers?", a: "No. Agents draft, humans approve. Nothing goes to your customers without your say-so — and every outreach carries an opt-out." },
  { q: "Can I start with just one agent?", a: "Yes — most clients start with the Website Health Watchdog (UGX 80,000/mo) and add agents as they see results." },
];

export default function AgentsPage() {
  return (
    <div className="bg-navy-900 text-white overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-amber-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/15 rounded-full blur-[130px]" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <motion.div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 mb-6 backdrop-blur" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <span className="bg-gradient-to-r from-blue-500 to-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">🤖 NEW</span>
                <span className="text-sm text-gray-200">NileSites AI Agents • Live in Kampala</span>
              </motion.div>
              <motion.h1 className="text-[42px] sm:text-6xl lg:text-[68px] font-bold leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
                Websites that bring clients.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent font-normal italic">Agents that never sleep.</span>
              </motion.h1>
              <motion.p className="text-[17px] sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                Full-time AI agents that watch your website, your rivals and your reviews — and report to you on WhatsApp in plain English. <span className="text-white font-semibold">From UGX 80,000/month.</span>
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                <a
                  href="#free-check"
                  className="bg-gradient-to-r from-blue-500 to-amber-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all text-center"
                >
                  Get a Free Website Check →
                </a>
                <a href="#agents" className="bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all text-center border border-white/20">
                  Meet the agents ↓
                </a>
              </motion.div>
              <motion.div className="flex items-center gap-4 text-sm text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> 2 agents live now</span>
                <span className="text-gray-600">•</span><span>4 more on custom order</span>
                <span className="text-gray-600">•</span><span>MTN MoMo & Airtel accepted</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="relative">
              <div className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] lg:w-[620px] lg:h-[620px] opacity-70" aria-hidden>
                <AgentGlobe />
              </div>
              <div className="relative">
              <LiveFeed />
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">24/7</p>
                  <p className="text-xs text-gray-400 mt-1">monitoring, incl. Sundays & holidays</p>
                </div>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">WhatsApp</p>
                  <p className="text-xs text-gray-400 mt-1">reports in plain English, zero jargon</p>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/10 bg-white/[0.02] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-sm font-medium text-gray-300 flex items-center gap-6">
              {item} <span className="text-amber-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* AGENTS */}
      <section id="agents" className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <p className="text-amber-400 font-semibold text-sm tracking-widest mb-3">THE TEAM THAT NEVER SLEEPS</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Meet your new <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent italic">full-time staff</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Each agent has one job, works 24/7, and reports on WhatsApp. Green badges are live today — gold badges are built to order in 2–4 weeks.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                className="group bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 hover:bg-white/[0.06] transition-all hover:-translate-y-1 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={agent.img} alt={agent.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${agent.status === "live" ? "bg-emerald-400/90 text-navy-900" : "bg-amber-400/90 text-navy-900"}`}>
                    {agent.status === "live" ? "● LIVE NOW" : "◆ CUSTOM BUILD"}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{agent.name}</h3>
                  <p className="text-gray-200 text-[15px] leading-relaxed mb-3">{agent.outcome}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{agent.rhythm}</p>
                  <p className="text-amber-400 font-semibold text-sm mb-5">{agent.price}</p>
                  <a
                    href={whatsappLink(agent.wa)}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-auto block text-center bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-amber-500 border border-white/15 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                  >
                    Ask about this agent →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-20 bg-navy-800/60 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>Running in 3 steps. Zero tech skills.</h2>
            <p className="text-gray-400">If you can use WhatsApp, you can run AI agents.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.n} className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-7" {...fadeUp} transition={{ delay: i * 0.12, duration: 0.5 }}>
                <span className="text-5xl font-bold bg-gradient-to-br from-blue-500/40 to-amber-500/40 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair)" }}>{step.n}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>What lands on your phone <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent italic">every Monday</span></h2>
            <p className="text-gray-400 text-sm">Illustrative sample report — real ones carry your business name and numbers.</p>
          </motion.div>
          <motion.div className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 max-w-xl mx-auto" {...fadeUp}>
            <div className="bg-emerald-500 px-5 py-3 flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">N</span>
              <div>
                <p className="text-white font-semibold text-sm">NileSites Watchdog</p>
                <p className="text-emerald-50 text-xs">Monday 07:00 • online</p>
              </div>
            </div>
            <div className="p-5 text-[15px] leading-relaxed">
              <p className="mb-3">Hi! Your weekly website check: <strong>87/100</strong> 🟢 <em>(was 59 — up 28!)</em></p>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Broken links fixed — all 15 links healthy now</li>
                <li>✅ Mobile view added — site looks right on phones</li>
                <li>📌 Next: 3 images still need descriptions for Google</li>
              </ul>
              <p className="mt-3 text-gray-500 text-sm">— sent by your website team</p>
              <p className="mt-2 text-right text-xs text-gray-400">07:00 ✓✓</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FREE CHECK */}
      <section id="free-check" className="pb-20 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-8" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>Try it free, <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent italic">right now</span></h2>
            <p className="text-gray-400">Drop your site below. Our watchdog audits it and we WhatsApp you the score.</p>
          </motion.div>
          <motion.div {...fadeUp}>
            <FreeCheckForm />
          </motion.div>
        </div>
      </section>

      {/* MINI PRICING */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { t: "One-time SEO Audit", p: "UGX 150,000", d: "Full 0–100 breakdown + fix list. Once." },
              { t: "Health Watchdog", p: "UGX 80,000/mo", d: "Weekly scorecards + instant down-alerts.", hot: true },
              { t: "Custom Agent", p: "From UGX 500,000", d: "Built for your workflow + monthly care." },
            ].map((row, i) => (
              <motion.div key={row.t} className={`rounded-2xl p-6 text-center border ${row.hot ? "bg-gradient-to-b from-amber-400/15 to-transparent border-amber-400/40" : "bg-white/[0.04] border-white/10"}`} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <p className="text-sm text-gray-400 mb-1">{row.t}</p>
                <p className="text-2xl font-bold text-white mb-1">{row.p}</p>
                <p className="text-sm text-gray-400">{row.d}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/pricing" className="text-amber-400 hover:text-amber-300 font-semibold text-sm">See full pricing with website plans →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "var(--font-playfair)" }} {...fadeUp}>Fair questions</motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details key={i} className="group bg-white/[0.04] border border-white/10 rounded-xl open:border-amber-400/40 transition-colors" {...fadeUp} transition={{ delay: i * 0.06, duration: 0.4 }}>
                <summary className="cursor-pointer list-none flex items-center justify-between p-5 font-semibold text-white text-[15px]">
                  {faq.q}
                  <span className="text-amber-400 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-gray-400 text-[15px] leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
