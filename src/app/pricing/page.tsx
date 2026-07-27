import CTASection from "@/components/CTASection";

const tiers = [
  {
    name: "Starter",
    price: "450,000",
    desc: "Perfect for new businesses, freelancers, and startups who need a professional online presence.",
    popular: false,
    features: [
      "1–5 page static website",
      "Mobile responsive design",
      "WhatsApp contact button",
      "Basic SEO (meta tags, sitemap)",
      "Contact form",
      "1 round of revisions",
      "1 year hosting included",
      "SSL certificate",
    ],
    whatsapp: "Hi%20NileSites!%20I'm%20interested%20in%20the%20Starter%20plan%20(UGX%20450k).",
  },
  {
    name: "Standard",
    price: "900,000",
    desc: "Best for growing businesses that need a dynamic site with payment and catalog features.",
    popular: true,
    features: [
      "Up to 10 pages with CMS",
      "Mobile responsive design",
      "MTN MoMo & Airtel Money integration",
      "Google Business Profile setup & verification",
      "Photo gallery & product catalog",
      "Contact form with auto-reply",
      "3 rounds of revisions",
      "1 year hosting + domain fee included",
      "SEO optimization",
    ],
    whatsapp: "Hi%20NileSites!%20I'm%20interested%20in%20the%20Standard%20plan%20(UGX%20900k).",
  },
  {
    name: "Premium",
    price: "1,500,000",
    desc: "For businesses needing custom features — booking systems, inventory, e-commerce, and more.",
    popular: false,
    features: [
      "Custom features per industry",
      "Booking/reservation system (lodges)",
      "Vehicle/catalog inventory (car bond)",
      "Route/schedule display (transport)",
      "E-commerce cart support",
      "Custom forms & workflows",
      "Advanced SEO package",
      "Unlimited revisions",
      "Priority 24/7 support",
      "Custom integrations",
    ],
    whatsapp: "Hi%20NileSites!%20I'm%20interested%20in%20the%20Premium%20plan%20(UGX%201.5M).%20I'd%20like%20a%20custom%20quote.",
  },
];

const addons = [
  { name: "WhatsApp/Telegram Bot (Akiba AI)", price: "Setup + Monthly" },
  { name: "Additional Pages (per page)", price: "UGX 50,000" },
  { name: "Domain Registration (per year)", price: "UGX 50,000–100,000" },
  { name: "Professional Email Setup", price: "UGX 30,000" },
  { name: "Monthly Maintenance Retainer", price: "UGX 50,000/mo" },
  { name: "Social Media Management Add-on", price: "UGX 150,000/mo" },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Transparent Pricing</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              No hidden fees. No surprises. Pay via MTN MoMo or Airtel Money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl border ${
                  tier.popular ? "border-primary-500 shadow-xl ring-1 ring-primary-500" : "border-gray-200 shadow-sm"
                } p-8 hover:shadow-xl transition-shadow`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-5 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{tier.desc}</p>
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  UGX {tier.price}
                  <span className="text-base font-normal text-gray-500"> starting</span>
                </p>
                <p className="text-xs text-gray-400 mb-8">One-time build fee. Hosting included year 1.</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/256700000000?text=${tier.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-colors ${
                    tier.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Choose {tier.name}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Add-On Services</h2>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
              {addons.map((addon) => (
                <div key={addon.name} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-900 font-medium">{addon.name}</span>
                  <span className="text-primary-600 font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">
              * WhatsApp/Telegram Bot pricing follows Akiba AI&apos;s existing subscription model — separate from website build fee.
            </p>
          </div>

          <div className="mt-16 bg-gray-900 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Industry-Specific Project?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Lodge booking system, car bond inventory, transport schedule display, or e-commerce store? 
              Tell us what you need and we&apos;ll quote you within 24 hours.
            </p>
            <a
              href="https://wa.me/256700000000?text=Hi%20NileSites!%20I%20have%20an%20industry-specific%20project.%20I'd%20like%20a%20custom%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-500 text-gray-900 px-8 py-3.5 rounded-xl font-semibold hover:bg-accent-400 transition-colors"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
