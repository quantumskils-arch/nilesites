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
  { title: "Web Design & Build", desc: "Mobile-responsive, modern websites built for Ugandan businesses.", features: ["Custom design", "Mobile-first", "Fast loading", "Contact forms", "CMS option"], kind: "design", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Hosting & Domain", desc: "Reliable hosting with custom domain, SSL, and professional email.", features: ["Custom domain", "SSL certificate", "Email setup", "Daily backups", "1 year included"], kind: "hosting", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { title: "Telegram Bot", desc: "Akiba AI Telegram bot — FAQs, order intake, lead capture. Messages queue to your phone.", features: ["FAQs answered", "Order intake", "Lead capture", "Messages to phone"], kind: "bots", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Google Business Profile", desc: "We guide you through verification, optimization, and listing management.", features: ["Verification guide", "Profile optimization", "Keyword description", "Review monitoring"], kind: "gbp", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "SEO & Maintenance", desc: "Ongoing updates, SEO optimization, and performance monitoring.", features: ["Content updates", "SEO keywords", "Performance watch", "Security patches", "Support"], kind: "seo", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

export default function ClientServices() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">What We Build</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Every service brings you more customers with less work.</p>
        </div>
      </section>
      <div className="divide-y divide-gray-100">
        <section className="bg-navy-900 py-14">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">AI Agents</span>
              <h2 className="text-3xl font-bold text-white mb-3">NileSites AI Agents</h2>
              <p className="text-gray-300 leading-relaxed max-w-xl">Full-time agents that watch your website and report to you. From UGX 80,000/month.</p>
            </div>
            <Link href="/ai-agents" className="shrink-0 bg-gradient-to-r from-blue-500 to-amber-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all btn-glow">Meet the agents</Link>
          </div>
        </section>
        {services.map((service, i) => (
          <section key={service.title} className="py-20">
            <div className={`card-lift max-w-7xl mx-auto px-4 flex flex-col gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3"><span className="text-amber-500 font-bold">✓</span><span className="text-gray-700">{f}</span></li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <ServiceArt kind={service.kind} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <CTASection />
    </>
  );
}
