"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { whatsappLink } from "@/lib/wa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  { title: "Website Design & Build", desc: "Mobile-responsive, modern websites that turn visitors into customers. From 1-page to full multi-page with CMS.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Hosting & Domain Setup", desc: "Reliable hosting with 99.9% uptime, custom domain, SSL, and email. We handle all the technical setup so you don't have to.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { title: "WhatsApp & Telegram Bots", desc: "Akiba AI-powered bots that handle customer inquiries, take orders, and answer FAQs automatically — 24/7, even while you sleep.", img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop&auto=format", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Google Business Profile", desc: "Get found on Google Maps and Search. We handle verification, optimization, and listing management start to finish.", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop&auto=format", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Mobile Money Integration", desc: "Accept MTN MoMo and Airtel Money payments directly on your site. Your customers pay the way they already know.", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop&auto=format", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { title: "SEO & Maintenance", desc: "Ongoing updates, content changes, SEO optimization, and monitoring. Your site stays fresh, fast, and ranking.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

const stats = [
  { label: "Websites Built", value: "10+" },
  { label: "Happy Clients", value: "8+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Avg. Response", value: "< 2hrs" },
];

const testimonials = [
  { quote: "NileSites built our kindergarten website and handled everything from domain to hosting. Parents love being able to check updates online.", author: "Sarah Nakato", role: "Director, Little Steps Kindergarten" },
  { quote: "Professional work at a fair price. Our church website has increased new visitor inquiries significantly.", author: "Pastor David Okello", role: "Lead Pastor, Victory Chapel" },
  { quote: "The team set up my shop's website with MTN MoMo payments in under two weeks. Customers are now ordering online every day.", author: "Grace Auma", role: "Owner, Grace Fashion Boutique" },
  { quote: "I was skeptical about getting a website, but NileSites made the whole process simple. They even set up my Google Business Profile — I'm getting calls from Google Maps now.", author: "James Mugisha", role: "Manager, Mugisha Car Bond" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold-500/10 via-navy-900 to-navy-900" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-gold-500/30">
              Ugandan-owned Web Agency
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              More Customers. <br />
              <span className="text-gold-400">Less Headache.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              You don&apos;t want a website. You want more bookings, more customers, and a business 
              that runs without you. We build the digital tool that delivers all three.{" "}
              <span className="text-gold-400 font-semibold">Starting at UGX 450,000</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="bg-gold-500 text-navy-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/25 text-center"
              >
                See Plans & Pricing
              </Link>
              <a
                href={whatsappLink("Hi NileSites! I'd like to get a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-500/40 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:border-gold-500/60 hover:text-gold-400 transition-all text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gold-500 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-12 bg-navy-900 border-y border-navy-700" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
            {["MTN MoMo", "Airtel Money", "Google Business", "SSL Secured", "99.9% Uptime", "SEO Optimized"].map((item) => (
              <span key={item} className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">What We Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every service is designed to solve one problem: bringing you more customers with less work.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Perfect For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We build websites for every type of Ugandan business. Here are 15 we specialize in.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Retail & Shops", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
              { name: "Restaurants & Cafes", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 019.5 3h-1A2.5 2.5 0 006 5.5V8m12 0v13m0-13V6a2 2 0 10-2 2h2zm0 0V5.5A2.5 2.5 0 0017.5 3h-1A2.5 2.5 0 0014 5.5V8" },
              { name: "Lodges & Hotels", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "Churches & Ministries", icon: "M12 2l-8 5v5c0 5 3.5 10 8 12 4.5-2 8-7 8-12V7l-8-5z" },
              { name: "Schools & Education", icon: "M12 14l9-5-9-5-9 5 9 5z m0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
              { name: "Car Bonds & Dealerships", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { name: "Transport & Logistics", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" },
              { name: "Salons & Spas", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { name: "Farms & Agriculture", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
              { name: "Real Estate", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { name: "Gyms & Fitness", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { name: "NGOs & Nonprofits", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { name: "Clinics & Healthcare", icon: "M4.5 12H4a1 1 0 01-1-1V9a1 1 0 011-1h.5m0 4h1m0 0v4h-1m1-4h1.5M12 3l9 5v4a9 9 0 01-18 0V8l9-5z" },
              { name: "Law Firms & Legal", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
              { name: "Photographers & Creatives", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
            ].map((biz) => (
              <div key={biz.name} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gold-50 hover:border-gold-200 border border-gray-100 transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={biz.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-navy-900">{biz.name}</p>
              </div>
            ))}
          </div>
          <motion.div className="text-center mt-10" {...fadeUp}>
            <p className="text-gray-500 mb-4">Don&apos;t see your business type? We probably build for it too.</p>
            <a href={whatsappLink("Hi NileSites! Can you build a website for my business type?")} target="_blank" rel="noopener noreferrer" className="text-gold-600 font-medium hover:text-gold-700">
              Ask us &rarr;
            </a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real Ugandan business owners.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-8 h-8 text-gold-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-navy-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No hidden fees. Pay via MTN MoMo or Airtel Money.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "450,000", desc: "Perfect for new businesses", popular: false, delivery: "3–5 business days", specs: "1GB storage · SSL", features: ["1–5 page static site", "Mobile responsive design", "WhatsApp contact button", "Basic SEO setup", "1 round of revisions", "1 year hosting included", "Free .com domain (1 year)"] },
              { name: "Standard", price: "900,000", desc: "Best for growing businesses", popular: true, delivery: "5–10 business days", specs: "5GB storage · SSL", features: ["Up to 10 pages with CMS", "MoMo payment integration", "Google Business Profile setup", "Photo gallery & catalog", "Contact form with auto-reply", "SEO optimization", "3 rounds of revisions", "Free .com domain (1 year)"] },
              { name: "Premium", price: "1,500,000", desc: "Industry-specific solutions", popular: false, delivery: "10–20 business days", specs: "15GB storage · SSL", features: ["Booking/inventory systems", "E-commerce cart", "Custom forms & workflows", "Advanced SEO package", "Unlimited revisions", "Priority support", "Custom integrations", "Free .com domain (1 year)"] },
            ].map((plan, i) => (
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
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
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
                    plan.popular
                      ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                      : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            All plans include a free .com domain for the first year and 1 year of hosting. Payable via MTN MoMo or Airtel Money.
          </p>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Recent Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what we&apos;ve built for Ugandan and East African businesses.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Opportunity Radar Africa", tag: "Tech / AI", desc: "AI-powered platform connecting East African businesses with tenders, grants, jobs, and market intelligence.", url: "https://opportunityradar.africa", img: "/portfolio/opportunityradar.africa.png" },
              { title: "Chosen Center for Christ", tag: "Religious", desc: "Church site with AI Bible chat, Paystack giving, newsletter, and WhatsApp CTAs.", url: "https://chosen-center-christ.vercel.app", img: "/portfolio/chosen-center-christ.vercel.app.png" },
              { title: "Uganda Job Vault", tag: "Jobs", desc: "Job aggregator for the Ugandan market with clean searchable interface.", url: "https://uganda-job-vault.vercel.app", img: "/portfolio/uganda-job-vault.vercel.app.png" },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
                  {project.img && (
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top" loading="lazy" />
                  )}
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 z-10 bg-gold-500/90 text-navy-900 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gold-400 transition-colors">
                      Live &rarr;
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gold-700 bg-gold-100 px-2.5 py-1 rounded-full">{project.tag}</span>
                  <h3 className="text-lg font-semibold text-navy-900 mt-3 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-600 font-medium mt-3 inline-block hover:text-gold-700">
                      Visit Site &rarr;
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center mt-12" {...fadeUp}>
            <Link href="/portfolio" className="text-gold-600 font-medium hover:text-gold-700">
              View Full Portfolio &rarr;
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From first message to launch in as little as 3 days. No jargon, no surprises.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Chat With Us", desc: "Message us on WhatsApp. Tell us about your business and what you want to achieve." },
              { step: "2", title: "Get a Fixed Quote", desc: "We send a clear quote and timeline within 24 hours. No hidden fees, ever." },
              { step: "3", title: "We Build It", desc: "We design, build, and set up your domain, hosting, and payments. You review and approve." },
              { step: "4", title: "Launch & Grow", desc: "Your site goes live. We keep it updated, secure, and ranking with ongoing support." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="relative bg-gray-50 rounded-xl p-6 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 text-navy-900 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-gray-50" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Why Not a Freelancer or DIY Builder?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve seen too many businesses get burned. Here&apos;s what makes us different.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "You Get a Team, Not a Ghost", desc: "Freelancers disappear mid-project. We're a registered agency with a team — you always have someone to call." },
              { title: "Everything Done for You", desc: "Domain, hosting, SSL, email, payments, Google Business — we handle it all. You never touch technical settings." },
              { title: "We Stay After Launch", desc: "DIY builders stop at 'it's live.' We offer maintenance, updates, and support so your site keeps working and ranking." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CTASection />
    </>
  );
}
