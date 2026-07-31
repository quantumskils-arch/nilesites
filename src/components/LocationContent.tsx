"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/wa";

interface Props {
  name: string;
  blurb: string;
}

export default function LocationContent({ name, blurb }: Props) {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Web Design in {name}
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {blurb}
          </motion.p>
        </div>
      </section>

      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Websites That Work on Phones", desc: "Most Ugandans browse on mobile. Every site we build is mobile-first and loads fast on 4G." },
              { title: "Payments Your Customers Know", desc: "MTN MoMo and Airtel Money integration built in — your customers pay the way they already pay." },
              { title: "Found on Google", desc: `Google Business Profile setup and local SEO so customers in ${name} find you first.` },
              { title: "No Technical Headaches", desc: "Domain, hosting, SSL, email — handled for you. You focus on your business." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={whatsappLink(`Hi NileSites! I'd like a website for my business in ${name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Get a Free Quote for {name}
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Starting at UGX 450,000 · Free .com domain · 1 year hosting included
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
