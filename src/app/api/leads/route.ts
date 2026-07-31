import { NextResponse } from "next/server";

let leads: { name: string; phone: string; email: string; message: string; timestamp: string }[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const lead = {
      name,
      phone,
      email: email || "",
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("New lead captured:", lead);

    return NextResponse.json({ success: true, message: "Lead captured" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ leads });
}
