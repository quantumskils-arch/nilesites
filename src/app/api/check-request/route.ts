import { NextResponse } from "next/server";

const GH_TOKEN = process.env.GITHUB_QUEUE_TOKEN || "";
const GH_REPO = process.env.GITHUB_QUEUE_REPO || ""; // owner/repo, private

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
    if (!GH_TOKEN || !GH_REPO) {
      return NextResponse.json({ error: "Check service not configured yet" }, { status: 503 });
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const content = Buffer.from(
      JSON.stringify({ name, phone, url, at: new Date().toISOString() }),
      "utf8"
    ).toString("base64");
    const r = await fetch(`https://api.github.com/repos/${GH_REPO}/contents/requests/${id}.json`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GH_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: `check request ${id}`, content }),
    });
    if (!r.ok) throw new Error("queue write failed");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Could not queue your check" }, { status: 500 });
  }
}
