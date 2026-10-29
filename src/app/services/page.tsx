"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ServiceArt, { type ServiceArtKind } from "@/components/ServiceArt";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const services: { title: string; desc: string; features: string[]; kind: ServiceArtKind; icon: string }[] = [
  { title: "Web Design & Build", desc: "Mobile-responsive, modern websites built for Ugandan businesses. From 1-page to full multi-page sites with CMS.", features: ["Custom design aligned with your brand", "Mobile-first responsive layout", "Fast loading (under 3s on 4G)", "Contact forms with auto-reply", "Photo galleries and catalogs", "Content management system"], kind: "design", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Hosting & Domain", desc: "Reliable hosting with custom domain registration, SSL certificates, and professional email setup.", features: ["Custom domain (yourbusiness.ug)", "Free SSL certificate", "Professional email (@yourbusiness.com)", "Daily backups", "1 year hosting included in all plans"], kind: "hosting", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { title: "Telegram Bot", desc: "Akiba AI-powered Telegram bot that answers FAQs, takes orders, and captures leads — messages queue to your phone.", features: ["FAQs answered automatically", "Order taking and lead capture", "Lead qualification", "Messages queue to your phone"], kind: "bots", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Google Business Profile", desc: "Get your business on Google Maps and Search. We handle verification, optimization, and listing management.", features: ["Google verification handled for you", "Profile optimization with photos", "Keyword-optimized description", "Review monitoring and response", "Post updates and offers", "Performance insights"], kind: "gbp", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "SEO & Maintenance", desc: "Ongoing site updates, content changes, SEO optimization, and performance monitoring to keep your site ranking.", features: ["Monthly content updates", "SEO keyword optimization", "Performance monitoring", "Security patches and updates", "Monthly traffic reports", "Priority email and WhatsApp support"], kind: "seo", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            What We Build
          </motion.h1>
          <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Every service is designed to bring you more customers with less work.
          </motion.p>
        </div>
      </section>

      <div className="divide-y divide-gray-100">
      <section className="bg-navy-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">🤖 NEW SERVICE LINE</span>
            <h2 className="text-3xl font-bold text-white mb-3">NileSites AI Agents</h2>
            <p className="text-gray-300 leading-relaxed max-w-xl">Full-time agents that watch your website, rivals and reviews 24/7 — and report to you on WhatsApp. From UGX 80,000/month.</p>
          </div>
          <Link href="/ai-agents" className="shrink-0 bg-gradient-to-r from-blue-500 to-amber-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            Meet the agents →
          </Link>
        </div>
      </section>
        {services.map((service, index) => (
          <motion.section key={service.title} className="py-20" {...fadeUp}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <ServiceArt kind={service.kind} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <CTASection />
    </>
  );
}
