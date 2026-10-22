import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/wa";
import RescueAuditForm from "@/components/RescueAuditForm";

export const metadata: Metadata = {
  title: "Website Rescue Sprint — Live in 5 Days for UGX 350,000 | NileSites",
  description:
    "No website? Broken website? We put a proper, phone-perfect site online in 5 working days for UGX 350,000 all-in. Domain, hosting, Google setup included. Kampala.",
  openGraph: {
    title: "Website live in 5 days. UGX 350K flat. — NileSites Kampala",
    description:
      "We fix it in 5 working days — domain, hosting, SEO included. Or we keep working free until it's done.",
    type: "website",
  },
  alternates: { canonical: "/rescue" },
};

const WA_TEARDOWN = whatsappLink("Hi NileSites! Send me the free website teardown for my business.");
const WA_BOOK = whatsappLink("Hi NileSites! I'd like to book a Website Rescue Sprint (UGX 350,000).");

const included = [
  "Custom design — no cheap theme, no template everyone has",
  "Phone-first: loads fast on 4G, tested on real Android",
  "Click-to-chat WhatsApp button + tap-to-call",
  "Google Business Profile set up or fixed",
  "Local SEO + schema so Google knows what you do, where",
  "Your own domain (.ug or .com) — year 1 included",
  "Hosting + SSL certificate — year 1 included",
  "Opening hours, map, and directions customers trust",
  "Photos of your work — optimised to load instantly",
  "1 revision round + handover call recording to keep",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "I already have a Facebook page. Why do I need a website?",
    a: "Your page is rented space — Facebook can change the rules tomorrow. Your website is an address only you own: it shows up on Google, it doesn't get buried by an algorithm, and it makes you look like the established business you already are.",
  },
  {
    q: "What if it's not done in 5 days?",
    a: "Then we keep working free until it is. The only thing we ever need from you is the content (photos, services, hours) — if that's ready on day one, the site is live by day five.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes: 50% to start, 50% when it's live, both by MTN MoMo or Airtel Money. For the larger packages we can split further — just ask.",
  },
  {
    q: "Will I be able to change it myself?",
    a: "The Sprint is intentionally simple — small edits we do for you free for 30 days. If you want full editing control, that's what the Standard package (CMS included) is for, and we'll show you how on the handover call.",
  },
  {
    q: "I've been burned by a developer before.",
    a: "Common here. That's why the price is fixed before we start, payment is split until you see it live, and there's a written checklist of what you're getting. Nothing hidden, nothing hourly.",
  },
];

export default function RescuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "NileSites — Website Rescue Sprint",
            description:
              "Fixed-price website design in Kampala. One-page business sites live in 5 days for UGX 350,000.",
            areaServed: "Kampala, Uganda",
            priceRange: "UGX 350,000–1,500,000",
            telephone: "+256-778-030-847",
            address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
            makesOffer: [
              { "@type": "Offer", name: "Website Rescue Sprint", price: "350000", priceCurrency: "UGX" },
              { "@type": "Offer", name: "NileSites Starter", price: "450000", priceCurrency: "UGX" },
              { "@type": "Offer", name: "NileSites Standard", price: "900000", priceCurrency: "UGX" },
              { "@type": "Offer", name: "NileSites Premium", price: "1500000", priceCurrency: "UGX" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-amber-500/10 to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              ⚡ Website Rescue Sprint
            </span>
            <h1 className="text-[38px] sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.02] tracking-tight mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
              Your business is great.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent font-normal italic">Google doesn&apos;t know it yet.</span>
            </h1>
            <p className="text-[17px] text-gray-300 leading-relaxed max-w-xl mb-7">
              We take Kampala businesses with no website — or a dead one — and put a proper, phone-perfect site online in <span className="text-white font-semibold">5 working days</span>. One flat price. No six-week excuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA_TEARDOWN} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-amber-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all text-center">
                Get my free teardown →
              </a>
              <a href="#sprint" className="border border-white/25 text-gray-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center">
                How the Sprint works
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">Automated check, human reply. No obligation — and no follow-up spam.</p>
          </div>

          <div className="bg-white rounded-[20px] shadow-2xl shadow-black/40 p-7 border border-white/10">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">The Sprint</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-1">
              UGX 350K <span className="text-base font-medium text-gray-500">all-in</span>
            </p>
            <ul className="my-5 space-y-2.5 text-sm text-gray-700">
              {["Live in 5 working days", "Domain + hosting + SSL (year 1)", "Google-ready: SEO + local schema", "WhatsApp button that actually works", "50% to start, 50% on go-live"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WA_BOOK} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Book the sprint on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <div className="bg-gray-900 border-t border-white/10 py-3.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-gray-300">
          <span><strong className="text-amber-400">5 days</strong> — not 5 weeks</span>
          <span><strong className="text-amber-400">Fixed price</strong> — quoted before we start</span>
          <span><strong className="text-amber-400">MoMo + Airtel</strong> — pay like a local</span>
          <span><strong className="text-amber-400">Not happy by day 7?</strong> — we work free until you are</span>
        </div>
      </div>

      {/* How it works + form */}
      <section id="sprint" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Three steps. One of them is you sending photos on WhatsApp.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">You run the business. We run the build. Designed so a busy owner with a phone can get it done between customers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="grid gap-6">
              {[
                { n: "1", t: "Free teardown", d: "We run an automated check on how your business shows up on Google today — and send a plain-English score with the 3 things costing you customers. Yours to keep either way." },
                { n: "2", t: "15-minute kickoff", d: "Pay 50% by MoMo or Airtel Money. Send your logo, photos and services on WhatsApp — voice notes fine. You pick from 2 design directions on day 1. That's your only job." },
                { n: "3", t: "Live in 5 days", d: "We build, test on real phones, set up your Google Business Profile, and hand over the keys. You approve one round of changes. Then it's online — permanently yours." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-amber-500 text-white font-bold flex items-center justify-center">{s.n}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{s.t}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:sticky md:top-24">
              <h3 className="font-semibold text-gray-900 mb-1 text-lg">Start with the free teardown</h3>
              <p className="text-sm text-gray-600 mb-4">Tell us where to check. We reply on WhatsApp with your score — no obligation.</p>
              <RescueAuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">What&apos;s included</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair)" }}>
              Everything a Kampala business actually needs. Nothing it doesn&apos;t.
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-10 max-w-4xl mx-auto">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 py-3 border-b border-dashed border-gray-200 text-sm text-gray-700">
                <svg className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why now */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Why now</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Your customers ask Google before they ask you.</h2>
          <p className="text-gray-300 max-w-3xl mb-10">A July 2026 audit of 11,582 African small businesses found that only <strong className="text-white">4.5%</strong> are fully readable by Google and AI assistants. Most businesses with a website still fail basic checks. The ones that are ready get the call.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { b: "41%", s: "of map-listed African SMEs have a real website at all — the rest live on borrowed Facebook pages" },
              { b: "85%", s: "of existing sites are missing the structured data Google needs to recommend them" },
              { b: "1 client", s: "is usually enough to pay for the site — one patient, one case, one booking" },
            ].map((stat) => (
              <div key={stat.b} className="border-l-3 border-amber-400 pl-5" style={{ borderLeftWidth: 3 }}>
                <p className="text-4xl font-bold text-amber-400 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{stat.b}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{stat.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ladder */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">Pricing ladder</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair)" }}>Start small. Grow when it&apos;s paying for itself.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { name: "Rescue Sprint", price: "350K", desc: "One perfect page. Everything included. Live in 5 days.", tag: "Entry point", hi: true },
              { name: "Starter", price: "450K", desc: "Multi-section site: services, gallery, team, FAQ.", tag: "Growing businesses", hi: false },
              { name: "Standard", price: "900K", desc: "5–10 pages with CMS, MoMo payments, SEO pack.", tag: "Most chosen", hi: false },
              { name: "Premium", price: "1.5M", desc: "Booking or e-commerce, custom flows, priority build.", tag: "Market leaders", hi: false },
            ].map((tier) => (
              <div key={tier.name} className={`rounded-xl p-5 flex flex-col relative ${tier.hi ? "border-2 border-amber-500 shadow-lg shadow-amber-500/10" : "border border-gray-200"}`}>
                {tier.hi && (
                  <span className="absolute -top-3 left-4 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">Start here</span>
                )}
                <h3 className="font-semibold text-gray-900 mb-1">{tier.name}</h3>
                <p className="text-2xl font-bold text-blue-700 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>UGX {tier.price}</p>
                <p className="text-sm text-gray-600 flex-1">{tier.desc}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-600 mt-3">{tier.tag}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Care Plan add-on: UGX 150K/month — updates, uptime watching, monthly health scorecard. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">Straight answers</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-playfair)" }}>Questions owners actually ask</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqs.map((f) => (
              <details key={f.q} className="py-4 group">
                <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between gap-4 list-none">
                  {f.q}
                  <span className="text-blue-600 text-xl font-bold shrink-0 group-open:hidden">+</span>
                  <span className="text-blue-600 text-xl font-bold shrink-0 hidden group-open:inline">–</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.2)_0%,transparent_50%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>See your score before you spend a shilling.</h2>
          <p className="text-blue-100/90 mb-8 max-w-xl mx-auto">One message on WhatsApp gets you the free teardown: where your business shows up on Google, what&apos;s broken, and what it would take to fix it. Then you decide.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_TEARDOWN} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
              Message us on WhatsApp →
            </a>
            <Link href="/pricing" className="border border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Compare all plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
