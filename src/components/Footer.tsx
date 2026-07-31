import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-white">NileSites</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              We don&apos;t just build websites — we build tools that bring you more customers, more bookings, and less headache.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-gold-400 transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-gold-400 transition-colors">Pricing</Link></li>
              <li><Link href="/portfolio" className="hover:text-gold-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/akiba-ai" className="hover:text-gold-400 transition-colors">Akiba AI</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="cursor-default">Website Design & Build</span></li>
              <li><span className="cursor-default">Hosting & Domain Setup</span></li>
              <li><span className="cursor-default">WhatsApp Bot Setup</span></li>
              <li><span className="cursor-default">SEO & Google Business</span></li>
              <li><span className="cursor-default">Mobile Money Integration</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/256778030847" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@nilesites.com" className="hover:text-gold-400 transition-colors">
                  hello@nilesites.com
                </a>
              </li>
              <li className="text-gray-500">Kampala, Uganda</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/256778030847" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="mailto:hello@nilesites.com" className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NileSites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
