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

const faqs = [
  { q: "How long does it take to build a website?", a: "Most sites are ready in 5–10 business days. Simple 1-page sites can be done in 3 days. Complex projects with custom features may take 2–3 weeks." },
  { q: "What do I need to provide?", a: "Your business name, logo (if you have one), photos, text content, and any specific features you need. We guide you through everything." },
  { q: "Do I need technical skills to manage my site?", a: "No. We build your site so you can update it easily, or we handle updates for you through our maintenance retainer." },
  { q: "How do I pay?", a: "We accept MTN MoMo, Airtel Money, and bank transfer. 50% deposit to start, 50% on completion." },
  { q: "What if I need changes after launch?", a: "All plans include revisions during development. After launch, we offer maintenance retainers for ongoing updates." },
  { q: "Do you offer hosting and domain?", a: "Yes — all plans include 1 year of hosting. Domains are extra (UGX 50,000–100,000/yr depending on extension)." },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Get in Touch
          </motion.h1>
          <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Ready to grow your business? Let&apos;s talk.
          </motion.p>
        </div>
      </section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Methods</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900">WhatsApp</h3>
                    <p className="text-gray-500 text-sm">Fastest response. We typically reply within 2 hours.</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-gold-600 font-medium text-sm hover:text-gold-700">Chat now &rarr;</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900">Email</h3>
                    <p className="text-gray-500 text-sm">For detailed inquiries and proposals.</p>
                    <a href="mailto:hello@nilesites.com" className="text-gold-600 font-medium text-sm hover:text-gold-700">hello@nilesites.com &rarr;</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900">Location</h3>
                    <p className="text-gray-500 text-sm">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Payment Methods</h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-700 font-bold text-sm">MTN</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">MTN Mobile Money</p>
                    <p className="text-gray-500 text-xs">Pay via MoMo to 256778030847</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-700 font-bold text-sm">AIRT</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Airtel Money</p>
                    <p className="text-gray-500 text-xs">Pay via Airtel Money to 256778030847</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">Bank Transfer</p>
                    <p className="text-gray-500 text-xs">Contact us for bank details</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                50% deposit to start work. 50% on completion before launch.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl border border-gray-100 open:shadow-sm transition-all">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-navy-900 font-medium list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </motion.section>

      <CTASection />
    </>
  );
}
