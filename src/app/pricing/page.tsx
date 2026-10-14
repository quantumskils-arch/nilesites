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

const plans = [
  { name: "Starter", price: "450,000", desc: "Perfect for new businesses starting their online presence", popular: false, delivery: "3–5 business days", specs: "1GB storage · SSL · 1 email account", features: ["1–5 page static site", "Mobile responsive design", "WhatsApp contact button", "Basic SEO setup", "1 round of revisions", "1 year hosting included", "Free .com domain (1 year)"] },
  { name: "Standard", price: "900,000", desc: "Best for growing businesses ready to scale", popular: true, delivery: "5–10 business days", specs: "5GB storage · SSL · 5 email accounts", features: ["Up to 10 pages with CMS", "MoMo payment integration", "Google Business Profile setup", "Photo gallery & catalog", "Contact form with auto-reply", "SEO optimization", "3 rounds of revisions", "Free .com domain (1 year)"] },
  { name: "Premium", price: "1,500,000", desc: "Industry-specific solutions with custom features", popular: false, delivery: "10–20 business days", specs: "15GB storage · SSL · 10 email accounts", features: ["Booking/inventory systems", "E-commerce cart", "Custom forms & workflows", "Advanced SEO package", "Unlimited revisions", "Priority support", "Custom integrations", "Free .com domain (1 year)"] },
];

const addOns = [
  { name: "Website Health Watchdog", price: "80,000/mo", desc: "Weekly 0–100 scorecard + instant down-alerts (audit 150,000 once)" },
  { name: "Review & Reputation Watcher", price: "80,000/mo", desc: "New-review alerts with drafted replies for your approval" },
  { name: "Custom AI Agent", price: "from 500,000", desc: "Radar, decks, shorts engine or inbox triage — built for your workflow" },
  { name: "Akiba AI WhatsApp Bot", price: "150,000/mo", desc: "Automated customer support and order taking" },
  { name: "Additional Page", price: "50,000", desc: "Extra page beyond your plan's limit" },
  { name: "Custom Domain (.ug)", price: "80,000/yr", desc: "Professional .ug domain for your business" },
  { name: "Business Email Setup", price: "60,000/yr", desc: "Professional email (@yourbusiness.com)" },
  { name: "Maintenance Retainer", price: "50,000/mo", desc: "Monthly updates, backups, and support" },
  { name: "Social Media Management", price: "200,000/mo", desc: "Content creation and posting across platforms" },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Simple Pricing
          </motion.h1>
          <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            No hidden fees. Pay via MTN MoMo or Airtel Money.
          </motion.p>
        </div>
      </section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-xl p-8 transition-all hover:-translate-y-1 ${
                  plan.popular
                    ? "border-2 border-gold-500 shadow-lg shadow-gold-500/10"
                    : "border border-gray-200 shadow-sm hover:shadow-lg"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
                )}
                <h3 className="text-lg font-semibold text-navy-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <p className="text-3xl font-bold text-navy-900 mb-2">
                  UGX {plan.price}
                  <span className="text-sm font-normal text-gray-500"> starting</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">⏱ {plan.delivery}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">💾 {plan.specs}</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hi NileSites! I'm interested in the ${plan.name} plan (UGX ${plan.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all ${
                    plan.popular ? "bg-gold-500 text-navy-900 hover:bg-gold-400" : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            All plans include a free .com domain for the first year and 1 year of hosting. Subsequent years: domain UGX 50,000–100,000/yr depending on extension. Payable via MTN MoMo or Airtel Money.
          </p>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Add-Ons</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your site with these optional extras.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
              {addOns.map((addon) => (
                <div key={addon.name} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="font-medium text-navy-900">{addon.name}</h3>
                    <p className="text-sm text-gray-500">{addon.desc}</p>
                  </div>
                  <span className="text-gold-600 font-semibold whitespace-nowrap ml-4">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-navy-800" {...fadeUp}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-gold-500/30">
            🤖 Powered by Akiba AI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Try Our AI Assistant</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            See it in action — click the gold chat bubble in the bottom-left corner of this page and ask about our services. That&apos;s the same bot we build for your business.
          </p>
          <a
            href={whatsappLink("Hi NileSites! I'd like a demo of the Akiba AI bot for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Get a Live Demo
          </a>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-navy-900" {...fadeUp}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Something Custom?</h2>
          <p className="text-gray-300 mb-8">
            Every business is different. Tell us what you need and we&apos;ll build a plan around it.
          </p>
          <a
            href={whatsappLink("Hi NileSites! I'd like a custom quote for my business website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Get a Custom Quote
          </a>
        </div>
      </motion.section>
    </>
  );
}
