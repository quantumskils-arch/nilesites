import Link from "next/link";
import CTASection from "@/components/CTASection";

const features = [
  {
    title: "24/7 Automated Responses",
    desc: "Your customers get instant answers to FAQs, business hours, pricing, and availability — even at 2 AM.",
  },
  {
    title: "Order Taking",
    desc: "Customers can place orders, check stock, and get receipts directly through WhatsApp or Telegram.",
  },
  {
    title: "Multi-Language Support",
    desc: "Speak to customers in English, Luganda, Swahili, or other languages. The bot auto-detects and responds accordingly.",
  },
  {
    title: "Lead Qualification",
    desc: "The bot asks qualifying questions before forwarding hot leads to your phone — saving you hours.",
  },
  {
    title: "Website Integration",
    desc: "Seamlessly embedded into your NileSites website. Customers can chat from your site or directly from WhatsApp.",
  },
  {
    title: "Analytics Dashboard",
    desc: "See how many conversations, what customers ask most, and which messages convert to sales.",
  },
];

const useCases = [
  {
    industry: "Retail & Shop",
    example: "Customers ask product prices, availability, and place orders via WhatsApp. Bot confirms payments via MoMo.",
  },
  {
    industry: "Lodge & Hotel",
    example: "Guests inquire about room availability, pricing, and make reservations — all through chat.",
  },
  {
    industry: "Transport & Logistics",
    example: "Customers check route schedules, book seats, and get fare quotes without calling.",
  },
  {
    industry: "Car Bond / Import",
    example: "Buyers inquire about specific vehicles, get price quotes, and schedule viewings via WhatsApp.",
  },
];

export default function AkibaAIPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-accent-500/30">
              Powered by Opportunity Radar
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Akiba AI{" "}
              <span className="text-accent-400">WhatsApp & Telegram Bots</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Automate your customer conversations with AI-powered chatbots. Handle FAQs, take orders, 
              and qualify leads — 24/7, in multiple languages. No app downloads needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/256700000000?text=Hi!%20I'm%20interested%20in%20Akiba%20AI%20bot%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-400 transition-colors text-center"
              >
                Get a Bot
              </a>
              <Link
                href="/pricing"
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Add a Bot to Your Website?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your website works while you sleep. A bot makes sure you never miss a customer inquiry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Works for Any Industry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how different businesses use Akiba AI bots to serve their customers better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((uc) => (
              <div key={uc.industry} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{uc.industry}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Automate Your Customer Conversations?</h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Setup fee + monthly subscription. No long-term contracts. Cancel anytime.
            </p>
            <a
              href="https://wa.me/256700000000?text=Hi!%20I'd%20like%20to%20know%20Akiba%20AI%20pricing%20and%20get%20a%20bot%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
            >
              Chat to Get Started
            </a>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
