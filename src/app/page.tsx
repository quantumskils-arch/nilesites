"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { whatsappLink } from "@/lib/wa";

const AgentGlobe = dynamic(() => import("@/components/AgentGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_35%_35%,#3b82f6_0%,transparent_55%),radial-gradient(circle_at_65%_65%,#f59e0b_0%,transparent_55%)] opacity-40" />
  ),
});

import ServiceArt, { type ServiceArtKind } from "@/components/ServiceArt";

// Precomputed at module scope (render must stay pure — React Compiler lint).
const heroParticles = Array.from({ length: 20 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: 4 + Math.random() * 2,
  delay: Math.random() * 3,
}));

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services: { title: string; desc: string; kind: ServiceArtKind; icon: string }[] = [
  { title: "Website Design & Build", desc: "Mobile-responsive, modern websites that turn visitors into customers. From 1-page to full multi-page with CMS.", kind: "design", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Hosting & Domain Setup", desc: "Reliable hosting with 99.9% uptime, custom domain, SSL, and email. We handle all the technical setup so you don't have to.", kind: "hosting", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { title: "WhatsApp & Telegram Bots", desc: "Akiba AI-powered bots that handle customer inquiries, take orders, and answer FAQs automatically — 24/7, even while you sleep.", kind: "bots", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Google Business Profile", desc: "Get found on Google Maps and Search. We handle verification, optimization, and listing management start to finish.", kind: "gbp", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Mobile Money Integration", desc: "Accept MTN MoMo and Airtel Money payments directly on your site. Your customers pay the way they already know.", kind: "momo", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { title: "SEO & Maintenance", desc: "Ongoing updates, content changes, SEO optimization, and monitoring. Your site stays fresh, fast, and ranking.", kind: "seo", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

const stats = [
  { label: "Starter Launch", value: "3–5 days" },
  { label: "Plans, Fixed Price", value: "3" },
  { label: "Avg. Reply Time", value: "< 2hrs" },
  { label: "Based In", value: "Kampala" },
];

const processSteps = [
  { n: "01", title: "Tell us about your business", desc: "Chat on WhatsApp or book a call. We learn what you sell and who your customers are — no forms, no jargon." },
  { n: "02", title: "Get a fixed quote & plan", desc: "You pick a plan, we confirm the scope and delivery date in writing. 50% deposit starts the build." },
  { n: "03", title: "We build & you review", desc: "Your site goes live on a preview link in days, not months. You request changes until it's right." },
  { n: "04", title: "Launch & we maintain it", desc: "Domain, hosting, SSL and Google Business all set up. We stay on for updates and monitoring." },
];

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-amber-500/10 to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        {!reduceMotion && (
          <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] z-0 pointer-events-none" aria-hidden="true">
            <AgentGlobe />
          </div>
        )}
        <div className="absolute inset-0 -z-10">
          {heroParticles.map((p, i) => (
            <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-blue-400/20" style={{ left: p.left, top: p.top }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0.2, 0.6, 0.2], scale: [0, 1, 0], y: [0, -50, 0] }} transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <motion.div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 mb-6 backdrop-blur" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <span className="bg-gradient-to-r from-blue-500 to-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">✨ PREMIUM</span>
                <span className="text-sm text-gray-200">Ugandan-owned • Built in Kampala</span>
              </motion.div>
              <motion.h1 className="text-[40px] sm:text-5xl lg:text-[64px] font-bold text-white leading-[0.95] tracking-tight mb-5" style={{ fontFamily: "var(--font-playfair)" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
                More Customers.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent font-normal italic">Less Headache.</span>
              </motion.h1>
              <motion.p className="text-[17px] sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                You don&apos;t want a website. You want more bookings and a business that runs without you. We design, host and maintain the tool that delivers it — <span className="text-white font-semibold">from UGX 450,000</span>.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <Link
                  href="/pricing"
                  className="bg-gradient-to-r from-blue-500 to-amber-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all text-center"
                >
                  See Plans & Pricing →
                </Link>
                <a
                  href={whatsappLink("Hi NileSites! I'd like to get a website for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all text-center border border-white/20"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Kampala-based team
                </div>
                <div className="text-sm text-gray-300">Fixed-price plans</div>
                <div className="text-sm text-gray-300">MoMo &amp; Airtel accepted</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative lg:pl-6">
              <div className="relative z-10 bg-white rounded-[20px] shadow-2xl shadow-gray-900/30 overflow-hidden border border-white/10">
                <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center gap-1.5 px-4">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-medium">nilesites.com — Preview</span>
                </div>
                <img src="/portfolio/opportunityradar.africa.png" alt="Opportunity Radar preview" className="w-full aspect-[16/10] object-cover object-top" />
                <div className="p-4 flex items-center justify-between bg-white">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Opportunity Radar Africa</p>
                    <p className="text-xs text-gray-500">AI platform • Live on Vercel</p>
                  </div>
                  <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full font-medium">Live ✓</span>
                </div>
              </div>
              <motion.div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 hidden sm:flex items-center gap-3" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Launch in 3–5 days</p>
                  <p className="text-xs text-gray-500">Domain + hosting included</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <motion.div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent mb-1" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}>{stat.value}</motion.div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-12 bg-gray-900 border-y border-gray-700" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
            {["MTN MoMo", "Airtel Money", "Google Business", "SSL Secured", "99.9% Uptime", "SEO Optimized"].map((item, i) => (
              <motion.span key={item} className="text-sm font-medium text-gray-400 flex items-center gap-2" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <motion.svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>What We Build</motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Every service is designed to solve one problem: bringing you more customers with less work.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-40 bg-gradient-to-br from-blue-100 to-amber-100 relative overflow-hidden">
                  <ServiceArt kind={service.kind} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  <motion.div className="absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" initial={{ scale: 0.8, rotate: -10 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </motion.div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="rounded-xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-blue-500 to-amber-500 p-[2px] hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.48, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/ai-agents" className="block bg-navy-900 rounded-[10px] overflow-hidden h-full">
                <div className="h-40 relative overflow-hidden">
                  <ServiceArt kind="agents" className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">🤖 NEW</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Agents That Never Sleep</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">24/7 website watchdogs, WhatsApp agents & rival radars. From UGX 80,000/mo.</p>
                  <span className="text-amber-400 text-sm font-semibold group-hover:text-amber-300">Meet the agents →</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Perfect For</motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>We build websites for every type of Ugandan business. Here are 15 we specialize in.</motion.p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Retail & Shops", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
              { name: "Restaurants & Cafes", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 019.5 3h-1A2.5 2.5 0 006 5.5V8m12 0v13m0-13V6a2 2 0 10-2 2h2zm0 0V5.5A2.5 2.5 0 0017.5 3h-1A2.5 2.5 0 0014 5.5V8" },
              { name: "Lodges & Hotels", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "Churches & Ministries", icon: "M12 2l-8 5v5c0 5 3.5 10 8 12 4.5-2 8-7 8-12V7l-8-5z" },
              { name: "Schools & Education", icon: "M12 14l9-5-9-5-9 5 9 5z m0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
              { name: "Car Bonds & Dealerships", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { name: "Transport & Logistics", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" },
              { name: "Salons & Spas", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { name: "Farms & Agriculture", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
              { name: "Real Estate", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { name: "Gyms & Fitness", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { name: "NGOs & Nonprofits", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { name: "Clinics & Healthcare", icon: "M4.5 12H4a1 1 0 01-1-1V9a1 1 0 011-1h.5m0 4h1m0 0v4h-1m1-4h1.5M12 3l9 5v4a9 9 0 01-18 0V8l9-5z" },
              { name: "Law Firms & Legal", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
              { name: "Photographers & Creatives", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
            ].map((biz, i) => (
              <motion.div key={biz.name} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-amber-50 hover:border-amber-200 border border-gray-100 transition-all hover:-translate-y-0.5 group" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} whileHover={{ scale: 1.05 }}>
                <motion.div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform" initial={{ scale: 0.8, rotate: -10 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={biz.icon} />
                  </svg>
                </motion.div>
                <p className="text-sm font-medium text-gray-900">{biz.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center mt-10" {...fadeUp}>
            <p className="text-gray-500 mb-4">Don&apos;t see your business type? We probably build for it too.</p>
            <a href={whatsappLink("Hi NileSites! Can you build a website for my business type?")} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-700">
              Ask us &rarr;
            </a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>How It Works</motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Four steps from first chat to live website. No surprises, no hidden fees.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.n}
                className="relative bg-white rounded-xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent block mb-3">{step.n}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Transparent Pricing</motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>No hidden fees. Pay via MTN MoMo or Airtel Money.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "450,000", desc: "Perfect for new businesses", popular: false, delivery: "3–5 business days", specs: "1GB storage · SSL", features: ["1–5 page static site", "Mobile responsive design", "WhatsApp contact button", "Basic SEO setup", "1 round of revisions", "1 year hosting included", "Free .com domain (1 year)"] },
              { name: "Standard", price: "900,000", desc: "Best for growing businesses", popular: true, delivery: "5–10 business days", specs: "5GB storage · SSL", features: ["Up to 10 pages with CMS", "MoMo payment integration", "Google Business Profile setup", "Photo gallery & catalog", "Contact form with auto-reply", "SEO optimization", "3 rounds of revisions", "Free .com domain (1 year)"] },
              { name: "Premium", price: "1,500,000", desc: "Industry-specific solutions", popular: false, delivery: "10–20 business days", specs: "15GB storage · SSL", features: ["Booking/inventory systems", "E-commerce cart", "Custom forms & workflows", "Advanced SEO package", "Unlimited revisions", "Priority support", "Custom integrations", "Free .com domain (1 year)"] },
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-xl p-8 transition-all hover:-translate-y-1 ${
                  plan.popular
                    ? "border-2 border-blue-500 shadow-lg shadow-blue-500/10"
                    : "border border-gray-200 shadow-sm hover:shadow-lg"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {plan.popular && (
                  <motion.span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                    Most Popular
                  </motion.span>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-2">
                  UGX {plan.price}
                  <span className="text-sm font-normal text-gray-500"> starting</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">⏱ {plan.delivery}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">💾 {plan.specs}</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  {plan.features.map((item, j) => (
                    <motion.li key={item} className="flex items-start gap-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.05 }}>
                      <motion.svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: j * 0.1 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hi NileSites! I'm interested in the ${plan.name} plan (UGX ${plan.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-amber-500 text-white hover:shadow-lg hover:shadow-blue-500/30"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            All plans include a free .com domain for the first year and 1 year of hosting. Payable via MTN MoMo or Airtel Money.
          </p>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Recent Work</motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>See what we&apos;ve built for Ugandan and East African businesses.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Opportunity Radar Africa", tag: "Tech / AI", desc: "AI-powered platform connecting East African businesses with tenders, grants, jobs, and market intelligence.", url: "https://opportunityradar.africa", img: "/portfolio/opportunityradar.africa.png" },
              { title: "Chosen Center for Christ", tag: "Religious", desc: "Church site with AI Bible chat, Paystack giving, newsletter, and WhatsApp CTAs.", url: "https://chosen-center-christ.vercel.app", img: "/portfolio/chosen-center-christ.vercel.app.png" },
              { title: "Uganda Job Vault", tag: "Jobs", desc: "Job aggregator for the Ugandan market with clean searchable interface.", url: "https://uganda-job-vault.vercel.app", img: "/portfolio/uganda-job-vault.vercel.app.png" },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-amber-600 flex items-center justify-center relative overflow-hidden">
                  {project.img && (
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top" loading="lazy" />
                  )}
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-lg text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-white transition-colors">
                      Live &rarr;
                    </a>
                  )}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} />
                </div>
                <div className="p-6">
                  <motion.span className="text-xs font-medium bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.25 }}>{project.tag}</motion.span>
                  <motion.h3 className="text-lg font-semibold text-gray-900 mt-3 mb-1" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.3 }}>{project.title}</motion.h3>
                  <motion.p className="text-sm text-gray-600" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.35 }}>{project.desc}</motion.p>
                  {project.url && (
                    <motion.a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium mt-3 inline-block hover:text-blue-700" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.4 }}>
                      Visit Site &rarr;
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center mt-12" {...fadeUp}>
            <Link href="/portfolio" className="text-blue-600 font-medium hover:text-blue-700">
              View Full Portfolio &rarr;
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why Not a Freelancer or DIY Builder?</motion.h2>
            <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>We&apos;ve seen too many businesses get burned. Here&apos;s what makes us different.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "You Get a Team, Not a Ghost", desc: "Freelancers disappear mid-project. We're a registered agency with a team — you always have someone to call." },
              { title: "Everything Done for You", desc: "Domain, hosting, SSL, email, payments, Google Business — we handle it all. You never touch technical settings." },
              { title: "We Stay After Launch", desc: "DIY builders stop at 'it's live.' We offer maintenance, updates, and support so your site keeps working and ranking." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>{item.title}</motion.h3>
                <motion.p className="text-sm text-gray-600 leading-relaxed" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>{item.desc}</motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-14 bg-gradient-to-r from-blue-600 via-blue-700 to-navy-900 relative overflow-hidden" {...fadeUp}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(251,191,36,0.18)_0%,transparent_45%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="flex-1">
            <span className="inline-block bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">Website Rescue Sprint</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              No website yet? Live in 5 days for UGX 350,000.
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base max-w-xl">
              One perfect page — domain, hosting, Google setup and WhatsApp button included. Built for busy owners who need results, not a six-week project.
            </p>
          </div>
          <Link
            href="/rescue"
            className="shrink-0 bg-white text-blue-700 px-7 py-3.5 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
          >
            See how the Sprint works →
          </Link>
        </div>
      </motion.section>

      <CTASection />
    </>
  );
}
