"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/wa";

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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("nilesites-dark-mode");
    if (stored) {
      if (stored === "true") {
        html.classList.add("dark");
        setDarkMode(true);
      } else {
        html.classList.remove("dark");
        setDarkMode(false);
      }
    } else if (prefersDark) {
      html.classList.add("dark");
      setDarkMode(true);
    } else {
      html.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((current) => {
      const html = document.documentElement;
      if (current) {
        html.classList.remove("dark");
      } else {
        html.classList.add("dark");
      }
      return !current;
    });
  };

  return (
    <header
      className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700"
    >
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
              href={whatsappLink("Hi NileSites! I'm interested in a website.")}
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

          <button
            className="md:hidden ml-4 p-2 rounded-lg hover:bg-navy-700 text-gray-300"
            onClick={() => toggleDarkMode()}
            aria-label="Toggle dark mode"
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.9 15.4a8.58 8.58 0 0 1-1.5 3.3c.2 1.1.2 2.3.2 3.5 0 1.5-.01 3.0-.2 4.5a10.96 10.96 0 0 1-4.2 2.2c-.8-.1-1.6-.2-2.4-.2-2 0-3.5.8-4.5 2.1-.9.1-1.8.1-2.8.1-1 0-2.1-.01-3.1-.03a8.5 8.5 0 0 1-2.1-1.3 8.38 8.38 0 0 1-1.5-3.2 8.43 8.43 0 0 1 .2-3.4 8.35 8.35 0 0 1 1.7-.3c1.1 0 2.2.1 3.3.2zM6.8 10.9a6.08 6.08 0 0 0-1.1 2.2c0 .8.1 1.6.1 2.4 0 1.3-.01 2.6-.1 3.8-.2.8-.4 1.5-.8 2.1-.4-.1-1.1-.4-1.6-.8a7.24 7.24 0 0 0-1.5-1.3c-.4-.3-.7-.7-.9-1.2-.1-.3-.2-.6-.2-.9 0-.2.1-.4.1-.5.1-.2.2-.3.3-.4.1-.2.1-.4.1-.5 0-.2-.1-.4-.2-.5a6.81 6.81 0 0 0-1.3-1.2 6.79 6.79 0 0 0-1.2-1.2 6.77 6.77 0 0 0-1.2 1.2 6.78 6.78 0 0 0 .1 1.3c.2.5.5.9.9.9.2 0 .4-.1.5-.2.1-.2.2-.4.2-.6v-.5a6.76 6.76 0 0 0-1.1-1.3c-.3-.2-.6-.4-.8-.7a5.96 5.96 0 0 1-.7-1.2 5.96 5.96 0 0 1 .01-1.3c.2-.5.6-.9 1.1-1.2.4-.2.9-.3 1.4-.3.3 0 .6.1.8.1.2.1.4.1.5 0 .1-.1.2-.1.4a5.79 5.79 0 0 1 .01 1.3 5.8 5.8 0 0 1 .7 1.1zM10.5 14.7a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 1 1 12 3a9 9 0 0 1 6.354 6.646m5.646-1.854c-.39-.39-.93-.39-1.32 0L12 12.686l-3.354-3.354a9 9 0 1 1-1.273-1.273z" />
              </svg>
            )}
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
                href={whatsappLink("Hi NileSites! I'm interested in a website.")}
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