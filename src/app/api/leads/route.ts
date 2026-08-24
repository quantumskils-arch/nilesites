import { NextResponse } from "next/server";
import { appendFile, mkdir, readFile } from "fs/promises";
import path from "path";
import { LEAD_TO_EMAIL, CONTACT_EMAIL } from "@/lib/config";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.NILESITES_TELEGRAM_CHAT_ID || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const DATA_DIR = path.join(process.cwd(), ".data");

interface Lead {
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
}

function leadLine(lead: Lead): string {
  return JSON.stringify(lead) + "\n";
}

async function persistLead(lead: Lead): Promise<boolean> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(path.join(DATA_DIR, "leads.jsonl"), leadLine(lead), "utf8");
    return true;
  } catch {
    return false;
  }
}

async function notifyTelegram(lead: Lead): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  const text = [
    "📥 New NileSites lead",
    `👤 ${lead.name}`,
    `📱 ${lead.phone}`,
    lead.email ? `✉️ ${lead.email}` : "",
    lead.message ? `💬 ${lead.message}` : "",
    `🕐 ${lead.timestamp}`,
  ]
    .filter(Boolean)
    .join("\n");
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    });
  } catch {
    // best-effort
  }
}

async function notifyEmail(lead: Lead): Promise<void> {
  if (!RESEND_API_KEY) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `NileSites Leads <${CONTACT_EMAIL}>`,
        to: [LEAD_TO_EMAIL],
        subject: `New NileSites lead: ${lead.name}`,
        text: [
          `Name: ${lead.name}`,
          `Phone: ${lead.phone}`,
          `Email: ${lead.email || "-"}`,
          `Message: ${lead.message || "-"}`,
          `Time: ${lead.timestamp}`,
        ].join("\n"),
      }),
    });
  } catch {
    // best-effort
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const lead: Lead = {
      name: String(name).slice(0, 120),
      phone: String(phone).slice(0, 40),
      email: email ? String(email).slice(0, 120) : "",
      message: message ? String(message).slice(0, 1000) : "",
      timestamp: new Date().toISOString(),
    };

    const persisted = await persistLead(lead);
    await Promise.all([notifyTelegram(lead), notifyEmail(lead)]);

    return NextResponse.json({ success: true, message: "Lead captured", persisted });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  try {
    const raw = await readFile(path.join(DATA_DIR, "leads.jsonl"), "utf8");
    const leads = raw
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as Lead);
    return NextResponse.json({ leads });
  } catch {
    return NextResponse.json({ leads: [] });
  }
}
