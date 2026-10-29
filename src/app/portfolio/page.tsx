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

const projects = [
  { title: "Opportunity Radar Africa", tag: "Our own products", desc: "Search and filter tenders, grants and jobs, free while we validate.", features: ["Tender search", "Grant listings", "Job vacancies", "Mobile-first design"], url: "https://opportunityradar.africa", img: "/portfolio/opportunityradar.africa.png" },
  { title: "Chosen Center for Christ", tag: "Religious", desc: "Full church site with sermon archive, newsletter, and ministry pages.", features: ["Sermon archive with audio", "Newsletter signup", "Ministry pages", "Service times"], url: "https://chosen-center-christ.vercel.app", img: "/portfolio/chosen-center-christ.vercel.app.png" },
  { title: "Uganda Job Vault", tag: "Our own products", desc: "Career-prep store: past papers, CV templates, MoMo checkout.", features: ["Past papers", "CV templates", "Mobile-first design", "MoMo checkout"], url: "https://uganda-job-vault.vercel.app", img: "/portfolio/uganda-job-vault.vercel.app.png" },
  { title: "Kazinga LC1", tag: "Government / Community", desc: "A community information portal for Kazinga LC1, keeping residents informed with notices and local resources.", features: ["Community notices", "Contact directory", "Mobile-responsive"], url: "https://kazinga-lc1.vercel.app", img: "/portfolio/kazinga-lc1.vercel.app.png" },
  { title: "Botanical Vault", tag: "E-commerce / Niche", desc: "A specialized e-commerce storefront with product catalog and streamlined checkout.", features: ["Product catalog", "Responsive storefront", "Clean checkout flow"], url: "https://botanical-vault.vercel.app", img: "/portfolio/botanical-vault.vercel.app.png" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Selected work, including our own products
          </motion.h1>
          <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Real websites and platforms we&apos;ve built for Ugandan and East African businesses.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
                  {project.img ? (
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <svg className="w-20 h-20 text-gold-500/30 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="relative z-10 text-xs text-gold-500/50 mt-2">Screenshot coming soon</span>
                    </div>
                  )}
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 z-10 bg-gold-500/90 text-navy-900 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-gold-400 transition-colors">
                      Live &rarr;
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gold-700 bg-gold-100 px-2.5 py-1 rounded-full">{project.tag}</span>
                  <h3 className="text-xl font-semibold text-navy-900 mt-3 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((f) => (
                      <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section className="py-20 bg-white" {...fadeUp}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 bg-gray-50">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">Want to Be Our Next Success Story?</h3>
            <p className="text-gray-600 mb-6">Your business could be featured here. Let&apos;s build something great together.</p>
            <a
              href={whatsappLink("Hi NileSites! I'd like to discuss a new project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </motion.section>

      <CTASection />
    </>
  );
}
