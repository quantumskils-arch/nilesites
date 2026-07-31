"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const services = [
  { title: "Web Design & Build", desc: "Mobile-responsive, modern websites built for Ugandan businesses. From 1-page to full multi-page sites with CMS.", features: ["Custom design aligned with your brand", "Mobile-first responsive layout", "Fast loading (under 3s on 4G)", "Contact forms with auto-reply", "Photo galleries and catalogs", "Content management system"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Hosting & Domain", desc: "Reliable hosting with 99.9% uptime, custom domain registration, SSL certificates, and professional email setup.", features: ["99.9% uptime guarantee", "Custom domain (yourbusiness.ug)", "Free SSL certificate", "Professional email (@yourbusiness.com)", "Daily backups", "1 year hosting included in all plans"], img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { title: "WhatsApp & Telegram Bots", desc: "Akiba AI-powered bots that handle customer inquiries, take orders, and answer FAQs automatically — 24/7.", features: ["24/7 automated responses", "Order taking and catalog browsing", "Multi-language support (English, Luganda, Swahili)", "Lead qualification and capture", "Website and social media integration", "Analytics dashboard"], img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop&auto=format", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Mobile Money Integration", desc: "Accept MTN MoMo and Airtel Money payments directly on your site. Seamless checkout for your customers.", features: ["MTN MoMo payments", "Airtel Money payments", "Payment confirmation via SMS/WhatsApp", "Order tracking dashboard", "Transaction history", "No monthly fees — pay per transaction"], img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop&auto=format", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { title: "Google Business Profile", desc: "Get your business on Google Maps and Search. We handle verification, optimization, and listing management.", features: ["Google verification handled for you", "Profile optimization with photos", "Keyword-optimized description", "Review monitoring and response", "Post updates and offers", "Performance insights"], img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&auto=format", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "SEO & Maintenance", desc: "Ongoing site updates, content changes, SEO optimization, and performance monitoring to keep your site ranking.", features: ["Monthly content updates", "SEO keyword optimization", "Performance monitoring", "Security patches and updates", "Monthly traffic reports", "Priority email and WhatsApp support"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
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
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
