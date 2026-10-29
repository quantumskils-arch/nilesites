"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/wa";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function ClientTelegramBot() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-amber-500/30">
              Telegram Bot • Build to Order
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
              Akiba Telegram Bot
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              A Telegram bot that answers your customers&apos; FAQs and captures their order details.
              Every message queues to your phone — you confirm payment by MTN MoMo or Airtel Money
              and fulfill the order yourself.
            </p>
            <a
              href={whatsappLink("Hi NileSites! I want the Akiba Telegram Bot for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-navy-900 px-9 py-4 rounded-xl font-semibold hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/30"
            >
              Start on WhatsApp →
            </a>
          </motion.div>
        </div>
      </section>

      {/* HONEST SCOPE */}
      <motion.section className="py-20" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What it does</h2>
              <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Answers FAQs — 24/7</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Your bot replies to common questions from your knowledge base, any time of day or night. English only.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Captures order details</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Customers tell the bot what they want. The bot records item, quantity, and delivery details — no cart, no checkout, no payment link.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Lead capture</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Name, phone, and what they need — saved so you can follow up.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Messages queue to your phone</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Every customer message lands in your Telegram. You reply directly — no dashboard to log into.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Price</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-amber-400">UGX 900,000</span>
                <span className="text-gray-500 text-sm ml-2">one-off setup</span>
              </div>
              <div className="mb-6">
                <span className="text-xl font-bold text-emerald-400">UGX 100,000/mo</span>
                <span className="text-gray-500 text-sm ml-2">hosting + updates</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                No contracts. Cancel anytime. 50% deposit to start, 50% on handover (MoMo/Airtel).
              </p>
              <a
                href={whatsappLink("Hi NileSites! I'm ready to book the Akiba Telegram Bot.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-navy-800 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Book on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHAT IT DOES NOT DO */}
      <motion.section className="py-20 bg-navy-800/40 border-y border-white/10" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Honest about what&rsquo;s not included yet</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We don&rsquo;t oversell. Here&rsquo;s what this bot does not do — so you buy what you actually need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "No instant MoMo confirmation", d: "You confirm payment yourself via MoMo/Airtel and tell the customer the order is confirmed." },
              { t: "No analytics dashboard", d: "Messages go to your Telegram. No charts, no conversation metrics yet." },
              { t: "No catalog cart or checkout", d: "Customers describe what they want in words — no product images, cart, or payment button." },
              { t: "Not on WhatsApp", d: "This is a Telegram bot only. WhatsApp is not offered." },
              { t: "No autonomous fulfillment", d: "You fulfill the order. The bot captures the request — it doesn&rsquo;t deliver goods." },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <h4 className="text-gray-200 font-semibold text-sm mb-2">{item.t}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHAT YOU PROVIDE */}
      <motion.section className="py-20" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What you need to provide</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Five things. We handle the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { t: "BotFather token", d: "You create a bot with @BotFather on Telegram and send us the token. We never ask for your Telegram password." },
              { t: "FAQ text + price list", d: "Your common questions and answers, plus your catalog/prices in UGX." },
              { t: "MoMo/Airtel till number", d: "The till customers pay to — you confirm payments manually." },
              { t: "Operator phone", d: "The Telegram number where order messages are delivered." },
              { t: "Business hours & location", d: "So the bot can answer &ldquo;are you open?&rdquo; and &ldquo;where are you?&rdquo;." },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                className="flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1 text-blue-400 font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{item.t}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section className="py-20 bg-white text-gray-900" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">How it works — 4 steps</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", t: "Create bot", d: "You message @BotFather on Telegram, create your bot, send us the token." },
              { n: "2", t: "We build it", d: "We load your FAQ and prices. Ready in 1–2 days." },
              { n: "3", t: "Customers message", d: "Your bot answers FAQs and takes order details." },
              { n: "4", t: "You fulfill", d: "Orders queue to your phone. You confirm MoMo/Airtel payment and deliver." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                className="bg-white rounded-xl p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-amber-500 mb-3">{step.n}</div>
                <h4 className="text-navy-900 font-semibold mb-2">{step.t}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CTASection />
    </>
  );
}
