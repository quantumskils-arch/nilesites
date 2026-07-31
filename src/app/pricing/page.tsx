"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

const WHATSAPP_NUMBER = "256778030847";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const plans = [
  { name: "Starter", price: "450,000", desc: "Perfect for new businesses starting their online presence", popular: false, features: ["1–5 page static site", "Mobile responsive design", "WhatsApp contact button", "Basic SEO setup", "1 round of revisions", "1 year hosting included"] },
  { name: "Standard", price: "900,000", desc: "Best for growing businesses ready to scale", popular: true, features: ["Up to 10 pages with CMS", "MoMo payment integration", "Google Business Profile setup", "Photo gallery & catalog", "Contact form with auto-reply", "SEO optimization", "3 rounds of revisions"] },
  { name: "Premium", price: "1,500,000", desc: "Industry-specific solutions with custom features", popular: false, features: ["Booking/inventory systems", "E-commerce cart", "Custom forms & workflows", "Advanced SEO package", "Unlimited revisions", "Priority support", "Custom integrations"] },
];

const addOns = [
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
                <p className="text-3xl font-bold text-navy-900 mb-6">
                  UGX {plan.price}
                  <span className="text-sm font-normal text-gray-500"> starting</span>
                </p>
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20NileSites!%20I'm%20interested%20in%20the%20${plan.name}%20plan%20(UGX%20${plan.price}).`}
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
            All prices exclude domain registration (UGX 50,000–100,000/yr). Payable via MTN MoMo or Airtel Money.
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

      <motion.section className="py-20 bg-navy-900" {...fadeUp}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Something Custom?</h2>
          <p className="text-gray-300 mb-8">
            Every business is different. Tell us what you need and we&apos;ll build a plan around it.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20NileSites!%20I'd%20like%20a%20custom%20quote%20for%20my%20business%20website.`}
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
