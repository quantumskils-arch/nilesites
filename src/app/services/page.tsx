import CTASection from "@/components/CTASection";

const services = [
  {
    title: "Website Design & Build",
    desc: "We build modern, mobile-responsive websites that load fast and look professional on any device. From simple 1-page brochure sites to multi-page businesses with galleries, menus, and catalogs.",
    features: [
      "Mobile-responsive on all devices",
      "Fast loading (optimized for Uganda's internet speeds)",
      "Custom design aligned with your brand",
      "Contact forms with auto-reply",
      "Photo/video gallery integration",
      "Social media link integration",
    ],
  },
  {
    title: "Hosting & Domain Setup",
    desc: "We handle the technical side so you don't have to. Your site stays live, secure, and fast with our managed hosting service.",
    features: [
      "99.9% uptime guarantee",
      "Free SSL certificate (HTTPS)",
      "Custom domain registration (.ug, .com, .org)",
      "Professional email setup (you@yourbusiness.com)",
      "Regular automated backups",
      "Free SSL certificate (HTTPS)",
    ],
  },
  {
    title: "WhatsApp & Telegram Bot Setup (Akiba AI)",
    desc: "Automate your customer communication with AI-powered chatbots. Answer FAQs, take orders, and qualify leads — even while you sleep.",
    features: [
      "24/7 automated customer responses",
      "Order taking & FAQ handling",
      "Multi-language support (English, Luganda, Swahili)",
      "Integration with your website",
      "Analytics dashboard",
      "Monthly subscription model — no large upfront cost",
    ],
  },
  {
    title: "MTN MoMo & Airtel Money Integration",
    desc: "Let customers pay you directly on your website via mobile money. No card required. No technical hassle.",
    features: [
      "Seamless MTN MoMo checkout",
      "Airtel Money payment support",
      "Automatic payment confirmation",
      "Transaction history & reporting",
      "Secure payment processing",
    ],
  },
  {
    title: "Google Business Profile Setup",
    desc: "Get found on Google Maps and Search. We set up, verify, and optimize your Google Business listing so customers can find you easily.",
    features: [
      "Complete profile setup & verification",
      "Photo upload & business description",
      "Category & service optimization",
      "Review management guidance",
      "Local SEO boost",
    ],
  },
  {
    title: "SEO & Ongoing Maintenance",
    desc: "Keep your site ranking well and running smoothly with our maintenance and SEO packages.",
    features: [
      "On-page SEO optimization",
      "Keyword research for your industry",
      "Content updates & new pages",
      "Performance monitoring",
      "Security updates & patches",
      "Monthly performance reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to build, launch, and grow your online presence — from one team.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12 flex items-center justify-center aspect-square lg:aspect-auto lg:h-80">
                    <svg className="w-24 h-24 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d={
                        i === 0 ? "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" :
                        i === 1 ? "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" :
                        i === 2 ? "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" :
                        i === 3 ? "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" :
                        i === 4 ? "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" :
                        "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      } />
                    </svg>
                  </div>
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
