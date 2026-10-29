"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/wa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function ClientContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const btn = form.querySelector("button[type=submit]") as HTMLButtonElement;
    btn.disabled = true;
    btn.textContent = "Sending...";
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setState("done");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="bg-green-100 border border-green-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Message Sent! 🎉</h3>
        <p className="text-gray-600">We&apos;ll get back to you within 2 hours on WhatsApp.</p>
      </div>
    );
  }

  return (
    <motion.section className="py-20 bg-white" {...fadeUp}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">Send Us a Message</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Prefer a form? Tell us about your project and we&apos;ll get back to you within 2 hours.
        </p>
        <form
          className="bg-gray-50 rounded-xl border border-gray-100 p-8 space-y-5 max-w-2xl mx-auto"
          onSubmit={submit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1.5" htmlFor="name">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Sarah Nakato"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1.5" htmlFor="phone">
                Phone (WhatsApp) *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="e.g. +256 7XX XXX XXX"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1.5" htmlFor="email">
              Email (optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-900 mb-1.5" htmlFor="message">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="What kind of website do you need?"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
          <button
            type="submit"
            disabled={state === "sending"}
            className="w-full bg-gold-500 text-navy-900 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50"
          >
            {state === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
