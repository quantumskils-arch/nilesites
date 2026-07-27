import Link from "next/link";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "Website Design & Build",
    desc: "Mobile-responsive, modern websites built for Ugandan businesses. From 1-page to full multi-page sites with CMS.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Hosting & Domain Setup",
    desc: "Reliable hosting with 99.9% uptime, custom domain registration, SSL certificates, and email setup included.",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  },
  {
    title: "WhatsApp & Telegram Bots",
    desc: "Akiba AI-powered bots that handle customer inquiries, orders, and FAQs automatically — 24/7.",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  },
  {
    title: "Google Business Profile",
    desc: "Get your business on Google Maps and Search. We handle verification, optimization, and listing management.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Mobile Money Integration",
    desc: "Accept MTN MoMo and Airtel Money payments directly on your site. Seamless checkout for your customers.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "SEO & Maintenance",
    desc: "Ongoing site updates, content changes, SEO optimization, and performance monitoring to keep your site ranking.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

const stats = [
  { label: "Websites Built", value: "10+" },
  { label: "Happy Clients", value: "8+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Support Response", value: "< 2hrs" },
];

const testimonials = [
  {
    quote: "NileSites built our kindergarten website and handled everything from domain to hosting. Parents love being able to check updates online.",
    author: "Sarah Nakato",
    role: "Director, Little Steps Kindergarten",
  },
  {
    quote: "Professional work at a fair price. Our church website has increased new visitor inquiries significantly.",
    author: "Pastor David Okello",
    role: "Lead Pastor, Victory Chapel",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0tMjQgMGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary-500/20 text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary-500/30">
              Ugandan-owned Web Agency
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Websites for{" "}
              <span className="text-accent-400">Ugandan Businesses</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We build modern, mobile-responsive websites that help you attract customers, 
              accept payments, and grow your business online. Starting at{" "}
              <span className="text-accent-400 font-semibold">UGX 450,000</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="bg-accent-500 text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-400 transition-colors text-center"
              >
                See Plans & Pricing
              </Link>
              <a
                href="https://wa.me/256700000000?text=Hi%20NileSites!%20I'd%20like%20to%20get%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Get Online</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We handle the full lifecycle — from building your site to keeping it running.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from real Ugandan business owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <svg className="w-8 h-8 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Pricing Built for Ugandan SMEs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Pay via MTN MoMo or Airtel Money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Starter</h3>
              <p className="text-sm text-gray-500 mb-4">Perfect for new businesses</p>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                UGX 450,000
                <span className="text-sm font-normal text-gray-500"> starting</span>
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                {["1–5 page static site", "Mobile responsive design", "WhatsApp contact button", "Basic SEO setup", "1 round of revisions", "1 year hosting included"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/256700000000?text=Hi%20NileSites!%20I'm%20interested%20in%20the%20Starter%20plan%20(UGX%20450k)." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-xl border-2 border-primary-500 p-8 shadow-md hover:shadow-lg transition-shadow relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Standard</h3>
              <p className="text-sm text-gray-500 mb-4">Best for growing businesses</p>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                UGX 900,000
                <span className="text-sm font-normal text-gray-500"> starting</span>
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                {["Up to 10 pages with CMS", "MoMo payment integration", "Google Business Profile setup", "Photo gallery & catalog", "Contact form with auto-reply", "SEO optimization", "3 rounds of revisions"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/256700000000?text=Hi%20NileSites!%20I'm%20interested%20in%20the%20Standard%20plan%20(UGX%20900k)." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Premium</h3>
              <p className="text-sm text-gray-500 mb-4">Industry-specific solutions</p>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                UGX 1,500,000
                <span className="text-sm font-normal text-gray-500"> starting</span>
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                {["Booking/inventory systems", "E-commerce cart", "Custom forms & workflows", "Advanced SEO package", "Unlimited revisions", "Priority support", "Custom integrations"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/256700000000?text=Hi%20NileSites!%20I'm%20interested%20in%20the%20Premium%20plan%20(UGX%201.5M).%20I'd%20like%20a%20custom%20quote%20for%20my%20industry." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Get Started
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            All prices exclude domain registration (UGX 50,000–100,000/yr). Payable via MTN MoMo or Airtel Money.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what we&apos;ve built for other Ugandan businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Little Steps Kindergarten", tag: "Education", desc: "Multi-page school site with gallery, events calendar, and parent portal." },
              { title: "Victory Chapel Church", tag: "Religious", desc: "Full church site with sermon archive, event booking, and donation integration." },
              { title: "Your Business Here", tag: "Next Project", desc: "Let's build your professional website. Contact us today.", placeholder: true },
            ].map((project) => (
              <div key={project.title} className={`group rounded-xl overflow-hidden border border-gray-200 ${project.placeholder ? 'bg-gray-50 border-dashed' : 'bg-white'} hover:shadow-lg transition-shadow`}>
                <div className={`aspect-video ${project.placeholder ? 'bg-gray-100 flex items-center justify-center' : 'bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center'}`}>
                  {project.placeholder ? (
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  ) : (
                    <svg className="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">{project.tag}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                  {!project.placeholder && (
                    <Link href="/portfolio" className="text-sm text-primary-600 font-medium mt-3 inline-block hover:text-primary-700">
                      View Project &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="text-primary-600 font-medium hover:text-primary-700">
              View Full Portfolio &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
