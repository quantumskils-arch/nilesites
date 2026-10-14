"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/wa";

export default function CTASection() {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-amber-500/10 to-transparent" />
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-blue-400/20" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0.2, 0.6, 0.2], scale: [0, 1, 0], y: [0, -50, 0] }} transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Ready to Grow Your Business?
        </motion.h2>
        <motion.p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          You don&apos;t need a website. You need more customers, more bookings, and less headache. 
          Let&apos;s build the tool that delivers all three.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <a
            href={whatsappLink("Hi NileSites! I'd like to get a website for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-colors"
          >
            Start a Conversation
          </a>
          <a
            href="/pricing"
            className="border-2 border-blue-500/50 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-colors"
          >
            View Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
