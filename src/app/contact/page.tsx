import CTASection from "@/components/CTASection";

const paymentInfo = [
  { method: "MTN Mobile Money", number: "0700 000 000", name: "NileSites Ltd" },
  { method: "Airtel Money", number: "0700 000 001", name: "NileSites Ltd" },
  { method: "Bank Transfer", number: "1001002003004", name: "NileSites Ltd — Centenary Bank", note: "Request account details via WhatsApp" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to start your website? The fastest way to reach us is WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp (Fastest)</h3>
                    <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      +256 700 000 000
                    </a>
                    <p className="text-sm text-gray-500">Typically replies within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:hello@nilesites.com" className="text-primary-600 hover:text-primary-700">
                      hello@nilesites.com
                    </a>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Kampala, Uganda</p>
                    <p className="text-sm text-gray-500">Remote consultations available nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
              <p className="text-sm text-gray-600 mb-6">
                Pay securely via mobile money or bank transfer. We&apos;ll confirm your payment within minutes.
              </p>
              <div className="space-y-4">
                {paymentInfo.map((p) => (
                  <div key={p.method} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">{p.method}</h3>
                    <p className="text-lg font-mono text-primary-600 font-bold">{p.number}</p>
                    <p className="text-sm text-gray-500">{p.name}</p>
                    {p.note && <p className="text-xs text-gray-400 mt-1">{p.note}</p>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                After payment, send your receipt to us on WhatsApp so we can confirm and start building immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left mt-8">
            {[
              { q: "How long does it take to build a website?", a: "Starter sites are ready in 3–5 days. Standard sites take 1–2 weeks. Premium projects are quoted individually." },
              { q: "Do I need technical skills to manage my site?", a: "No. We handle everything. If you choose the Standard plan with CMS, we'll train you to update content easily." },
              { q: "What if I need changes after the site is live?", a: "Minor changes are free for the first 30 days. After that, we offer maintenance retainers or per-task pricing." },
              { q: "Can I pay in installments?", a: "Yes. We require a 50% deposit to start, and the balance on completion. Contact us to discuss payment plans." },
            ].map((faq) => (
              <details key={faq.q} className="bg-gray-50 rounded-xl p-5 border border-gray-100 group">
                <summary className="font-medium text-gray-900 cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
