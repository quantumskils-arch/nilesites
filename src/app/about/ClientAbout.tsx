"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const values = [
  { title: "Honest Advice", desc: "We won't sell you what you don't need. Every recommendation is based on what actually grows your business." },
  { title: "Ugandan First", desc: "We understand the local market — mobile money, WhatsApp as primary communication, and the importance of word-of-mouth." },
  { title: "Done for You", desc: "We handle everything — domain, hosting, design, content, and maintenance. You focus on running your business." },
  { title: "Long-Term Partnership", desc: "We don't disappear after launch. We're here for ongoing support, updates, and growth." },
];

export default function ClientAbout() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            About NileSites
          </motion.h1>
          <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            We&apos;re on a mission to help Ugandan businesses thrive online.
          </motion.p>
        </div>
      </section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Most Ugandan SMEs know they need an online presence but don&apos;t know where to start. 
              Tech companies overcharge, freelancers disappear, and DIY builders produce sites that don&apos;t work on mobile. 
              We exist to fix that — delivering professional, affordable websites that actually work for Ugandan businesses.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2026, NileSites was born from a simple observation: Ugandan businesses were being 
              priced out of the web. International agencies charged thousands of dollars. Local freelancers 
              delivered inconsistent quality. There was nothing in between. We built NileSites to fill that gap — 
              delivering agency-quality websites at prices that make sense for Ugandan SMEs. Every site we build 
              includes hosting, domain setup, and ongoing support. No surprises, no hidden costs.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Zaq", role: "Founder & Lead Developer", bio: "Building web solutions for Ugandan businesses. Expert in Next.js, AI agents, and mobile money integration." },
              { name: "Kod", role: "Technical Lead", bio: "Infrastructure and automation specialist. Keeps everything running — from hosting to CI/CD." },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl p-8 border border-gray-200 text-center hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900">{member.name}</h3>
                <p className="text-sm text-gold-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CTASection />
    </>
  );
}
