export default function CTASection() {
  return (
    <section className="bg-primary-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Take Your Business Online?
        </h2>
        <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          Let&apos;s build a website that works for your business. From simple info pages to full booking systems — we handle everything.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/256700000000?text=Hi%20NileSites!%20I'd%20like%20to%20get%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Start a Conversation
          </a>
          <a
            href="/pricing"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
