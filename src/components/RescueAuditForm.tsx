"use client";

import { useState } from "react";

type State = "idle" | "sending" | "done" | "error" | "unconfigured";

export default function RescueAuditForm() {
  const [state, setState] = useState<State>("idle");
  const [errMsg, setErrMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      url: String(data.get("url") || ""),
    };
    setState("sending");
    try {
      const r = await fetch("/api/check-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.success) {
        setState("done");
        form.reset();
      } else if (r.status === 503) {
        setState("unconfigured");
      } else {
        setErrMsg(String(j.error || "Something went wrong. Please try WhatsApp instead."));
        setState("error");
      }
    } catch {
      setErrMsg("Network problem. Please try WhatsApp instead.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-emerald-900">
        <p className="font-semibold mb-1">✓ Request queued</p>
        <p className="text-sm">We have your details. Our team will WhatsApp you the free teardown score, usually within the hour.</p>
      </div>
    );
  }

  if (state === "unconfigured") {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-900">
        <p className="font-semibold mb-1">Form is warming up</p>
        <p className="text-sm">The online form isn&apos;t live yet — message us on WhatsApp instead and we&apos;ll send your free teardown right away.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
      <div>
        <label htmlFor="rescue-name" className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
        <input id="rescue-name" name="name" required minLength={2} maxLength={60} placeholder="e.g. Nakato" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label htmlFor="rescue-phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp number</label>
        <input id="rescue-phone" name="phone" required inputMode="tel" placeholder="e.g. 0772 123456" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label htmlFor="rescue-url" className="block text-sm font-medium text-gray-700 mb-1">Your website (or your Facebook page link)</label>
        <input id="rescue-url" name="url" required placeholder="e.g. yourbusiness.com" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {state === "error" && <p className="text-sm text-red-600">{errMsg}</p>}
      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full bg-gradient-to-r from-blue-500 to-amber-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Get my free teardown"}
      </button>
      <p className="text-xs text-gray-500 text-center">Automated check, human reply. No obligation, no spam.</p>
    </form>
  );
}
