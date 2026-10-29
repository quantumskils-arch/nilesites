import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { whatsappLink } from "@/lib/wa";
import ServiceArt, { type ServiceArtKind } from "@/components/ServiceArt";

export const metadata: Metadata = {
  title: "Home — NileSites | Websites for Ugandan Businesses",
  description:
    "Websites for Ugandan businesses. Starting at UGX 450,000. Hosting included for the first year.",
};

const heroParticles = Array.from({ length: 20 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: 4 + Math.random() * 2,
  delay: Math.random() * 3,
}));

const services: { title: string; desc: string; kind: ServiceArtKind; icon: string }[] = [
  { title: "Website Design & Build", desc: "Mobile-responsive, modern websites that turn visitors into customers. From 1-page to full multi-page with CMS.", kind: "design", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Hosting & Domain Setup", desc: "Reliable hosting with custom domain, SSL, and email. We handle all the technical setup so you don't have to.", kind: "hosting", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { title: "Telegram Bot", desc: "Akiba AI-powered Telegram bot that answers FAQs, takes orders, and captures leads — messages queue to your phone.", kind: "bots", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Google Business Profile", desc: "Get found on Google Maps and Search. We guide you through verification, optimization, and listing management.", kind: "gbp", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "SEO & Maintenance", desc: "Ongoing updates, content changes, SEO optimization, and monitoring.", kind: "seo", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

const stats = [
  { label: "Starter Launch", value: "3–5 days" },
  { label: "Plans, Fixed Price", value: "3" },
  { label: "Based In", value: "Kampala" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-amber-500/10 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
            <div className="text-left lg:text-right">
              <span className="bg-gradient-to-r from-blue-500 to-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">✨ PREMIUM</span>
              <h1 className="text-[40px] sm:text-5xl lg:text-[64px] font-bold text-white leading-[0.95] tracking-tight mb-5">
                More Customers.<br /><span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent font-normal italic">Less Headache.</span>
              </h1>
              <p className="text-[17px] sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-7">
                You don&apos;t want a website. You want more bookings and a business that runs without you. We design, host and maintain the tool that delivers it — <span className="text-white font-semibold">from UGX 450,000</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/pricing" className="bg-gradient-to-r from-blue-500 to-amber-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all text-center">See Plans & Pricing →</Link>
                <a href={whatsappLink("Hi NileSites! I'd like to get a website for my business.")} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all text-center border border-white/20">Chat on WhatsApp</a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-300"><span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Kampala-based team</div>
                <div className="text-sm text-gray-300">Fixed-price plans</div>
                <div className="text-sm text-gray-300">MoMo &amp; Airtel accepted</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent">{stat.value}</span>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-900 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {["MTN MoMo", "Airtel Money", "Google Business", "SSL Secured", "SEO Optimized"].map((item) => (
              <span key={item} className="text-sm font-medium text-gray-400 flex items-center gap-2">{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent text-center mb-16">What We Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-amber-100 relative overflow-hidden">
                  <ServiceArt kind={service.kind} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
