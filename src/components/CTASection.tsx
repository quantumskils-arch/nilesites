const WHATSAPP_NUMBER = "256778030847";

export default function CTASection() {
  return (
    <section className="bg-navy-800 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          You don&apos;t need a website. You need more customers, more bookings, and less headache. 
          Let&apos;s build the tool that delivers all three.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20NileSites!%20I'd%20like%20to%20get%20a%20website%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Start a Conversation
          </a>
          <a
            href="/pricing"
            className="border-2 border-gold-500/50 text-gold-300 px-8 py-3 rounded-lg font-semibold hover:bg-gold-500/10 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
