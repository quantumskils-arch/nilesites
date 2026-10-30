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
  { name: "Starter", price: "450,000", desc: "Perfect for new businesses", popular: false, delivery: "3-5 days", specs: "1GB · SSL", features: ["1-5 page site", "Mobile responsive", "WhatsApp button", "Basic SEO", "1 revision", "1yr hosting", ".com domain (1yr)"] },
  { name: "Standard", price: "900,000", desc: "Best for growing businesses", popular: true, delivery: "5-10 days", specs: "5GB · SSL", features: ["Up to 10 pages CMS", "Google Business Profile", "Gallery & catalog", "Auto-reply form", "SEO optimization", "3 revisions", ".com domain (1yr)"] },
  { name: "Premium", price: "1,500,000", desc: "Industry-specific solutions", popular: false, delivery: "10-20 days", specs: "15GB · SSL", features: ["Booking/inventory", "Custom forms", "Advanced SEO", "Unlimited revisions", "Priority support", ".com domain (1yr)"] },
];

const addOns = [
  { name: "Watchdog", price: "80,000/mo", desc: "Weekly scorecard + down-alerts (audit 150,000 once)" },
  { name: "Review Watcher", price: "Build to order", desc: "New-review alerts + drafted replies. 2-4 weeks." },
  { name: "Custom Agent", price: "from 500,000", desc: "Built for your workflow" },
  { name: "Telegram Bot", price: "900,000 + 100,000/mo", desc: "FAQs, order intake, lead capture" },
  { name: "Extra Page", price: "50,000", desc: "Beyond plan limit" },
];

export default function ClientPricing() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Simple Pricing</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">No hidden fees. Pay via MTN MoMo or Airtel Money.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`card-lift rounded-xl p-8 border ${plan.popular ? "border-2 border-gold-500 shadow-lg" : "border-gray-200 shadow-sm hover:shadow-xl"}`}>
                <h3 className="font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{plan.desc}</p>
                <p className="text-3xl font-bold text-blue-700 mb-1">UGX {plan.price}</p>
                <span className="block text-xs text-gray-500 mb-3">{plan.delivery}</span>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-blue-500">&#10003;</span>{f}</li>
                  ))}
                </ul>
                <a href={whatsappLink(`Hi NileSites! I'm interested in the ${plan.name} plan.`)} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-navy-900 mb-8">Add-Ons</h2>
          <div className="divide-y divide-gray-100 border rounded-xl overflow-hidden">
            {addOns.map((a) => (
              <div key={a.name} className="card-lift flex justify-between p-4 hover:bg-gray-50">
                <div><h3 className="font-medium text-navy-900">{a.name}</h3><p className="text-sm text-gray-500">{a.desc}</p></div>
                <span className="font-semibold text-gold-600 whitespace-nowrap">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
