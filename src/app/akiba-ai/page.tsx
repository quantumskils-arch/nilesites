"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { whatsappLink } from "@/lib/wa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const features = [
  { title: "24/7 Automated Responses", desc: "Never miss a customer inquiry. Your bot answers instantly, any time of day or night.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Order Taking", desc: "Customers can browse your catalog and place orders directly through WhatsApp or Telegram.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
  { title: "Multi-Language", desc: "Speak to customers in English, Luganda, or Swahili. Your bot understands and responds in their language.", icon: "M3 5h12M9 3v2m0 4v2m0 4v2M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" },
  { title: "Lead Qualification", desc: "Your bot captures contact details, understands what the customer wants, and qualifies leads before you even see them.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Website Integration", desc: "Embed the bot on your website so visitors can chat with you instantly without leaving your site.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
  { title: "Analytics Dashboard", desc: "See how many conversations your bot handles, what customers ask about most, and how many leads it captures.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

const useCases = [
  { title: "Retail & Shop", desc: "Products catalog, order taking, stock inquiries, delivery tracking" },
  { title: "Lodge & Hotel", desc: "Room bookings, availability checks, check-in/out info, local attractions" },
  { title: "Transport & Logistics", desc: "Route inquiries, fare quotes, booking management, real-time tracking" },
  { title: "Car Bond", desc: "Vehicle listings, test drive booking, payment plan inquiries, trade-in valuation" },
];

export default function AkibaAIPage() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-gold-500/30">
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Akiba AI</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your 24/7 automated assistant for WhatsApp and Telegram. Handles customer inquiries, takes orders, and qualifies leads — automatically.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Why Akiba AI?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most Ugandan customers start their journey on WhatsApp. Akiba AI meets them there — and handles the conversation from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Perfect For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Akiba AI adapts to your industry. Here&apos;s how different businesses use it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-navy-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-navy-800" {...fadeUp}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Automate Your Customer Conversations?</h2>
          <p className="text-gray-300 mb-8">Set up your Akiba AI bot in days, not weeks. Customers get instant responses. You get more time to focus on your business.</p>
          <a
            href={whatsappLink("Hi NileSites! I'm interested in Akiba AI for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Talk to Us About Akiba AI
          </a>
        </div>
      </motion.section>

      <CTASection />
    </>
  );
}
