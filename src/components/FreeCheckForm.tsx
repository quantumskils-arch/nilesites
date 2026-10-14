"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FreeCheckForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [site, setSite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    if (name.trim().length < 2) return setError("Please tell us your name."), setState("error");
    if (!/^\+?\d{7,15}$/.test(phone.replace(/[\s-]/g, "")))
      return setError("That WhatsApp number doesn't look right (7–15 digits)."), setState("error");
    let url = site.trim();
    if (!url) return setError("Please paste your website address."), setState("error");
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    try {
      new URL(url);
    } catch {
      return setError("That website address doesn't look valid."), setState("error");
    }
    setState("sending");
    try {
      const r = await fetch("/api/check-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), url }),
      });
      if (!r.ok) throw new Error();
      setState("done");
    } catch {
      setError("Something went wrong sending your request — please try WhatsApp instead.");
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-2xl p-8 text-center">
        <p className="text-4xl mb-3">✅</p>
        <h3 className="text-xl font-bold text-white mb-2">Check requested, {name.split(" ")[0]}!</h3>
        <p className="text-gray-300 text-[15px] leading-relaxed">
          Our watchdog agent is auditing your site right now. We&apos;ll WhatsApp your 0–100 score
          to {phone} — usually within the hour.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="grid sm:grid-cols-3 gap-3 mb-3">
        <input
          type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}
          className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400"
        />
        <input
          type="tel" placeholder="WhatsApp number" value={phone} onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400"
        />
        <input
          type="text" placeholder="yourwebsite.com" value={site} onChange={(e) => setSite(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400"
        />
      </div>
      {state === "error" && error && <p className="text-red-400 text-sm mb-3">{error}</p>}
      <motion.button
        onClick={submit} disabled={state === "sending"}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-500 to-amber-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50"
      >
        {state === "sending" ? "Requesting your check…" : "Run My Free Check →"}
      </motion.button>
      <p className="text-xs text-gray-500 mt-3 text-center">One automated homepage check. No spam, no obligation. We reply on WhatsApp.</p>
    </div>
  );
}
