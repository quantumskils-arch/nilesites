"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/akiba-ai", label: "Akiba AI" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-navy-900 font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-white">NileSites</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/256778030847?text=Hi%20NileSites!%20I'm%20interested%20in%20a%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-900 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors"
            >
              WhatsApp Us
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-navy-700 text-gray-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 border-t border-navy-700 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/256778030847?text=Hi%20NileSites!%20I'm%20interested%20in%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 text-navy-900 px-5 py-2 rounded-lg text-sm font-semibold text-center hover:bg-gold-400 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
