import { NextResponse } from "next/server";

const QUEUE_BOT_TOKEN = process.env.QUEUE_BOT_TOKEN || "";
const QUEUE_CHAT_ID = process.env.QUEUE_CHAT_ID || "";

function badHost(host: string): boolean {
  const h = host.toLowerCase();
  return (
    !h ||
    h === "localhost" ||
    h.endsWith(".localhost") ||
    h.endsWith(".internal") ||
    h.endsWith(".local") ||
    /^(\d{1,3}\.){3}\d{1,3}$/.test(h) || // bare IPs rejected here; worker re-checks after DNS
    h.includes(" ")
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").slice(0, 60).trim();
    const phone = String(body.phone || "").slice(0, 20).trim();
    let url = String(body.url || "").slice(0, 200).trim();

    if (name.length < 2 || !/^\+?\d{7,15}$/.test(phone.replace(/[\s-]/g, ""))) {
      return NextResponse.json({ error: "Invalid name or phone" }, { status: 400 });
    }
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    let host = "";
    try {
      host = new URL(url).hostname;
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }
    if (badHost(host)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }
    if (!QUEUE_BOT_TOKEN || !QUEUE_CHAT_ID) {
      return NextResponse.json({ error: "Check service not configured yet" }, { status: 503 });
    }

    const text = ["🔎 CHECK", `👤 ${name}`, `📱 ${phone}`, `🌐 ${url}`].join("\n");
    const r = await fetch(`https://api.telegram.org/bot${QUEUE_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: QUEUE_CHAT_ID, text }),
    });
    if (!r.ok) throw new Error("queue send failed");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Could not queue your check" }, { status: 500 });
  }
}
