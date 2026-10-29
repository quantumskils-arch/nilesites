#!/usr/bin/env python3
"""Proposal-Deck Automation v1 — generates a branded PDF proposal deck from a short form.

Usage:
  python proposal_deck.py build <input.json> [output.pdf]
  python proposal_deck.py sample   # generates a sample input.json + output.pdf

Input JSON fields (all optional except client_name):
  {
    "client_name": "Jane Nakato",
    "business_name": "Nakato Clinic",
    "business_type": "Clinic / Healthcare",
    "location": "Kampala, Uganda",
    "contact_phone": "+256 7XX XXX XXX",
    "contact_email": "jane@nakatoclinic.com",
    "your_name": "NileSites",
    "your_whatsapp": "+256 778 030 847",
    "your_email": "hello@nilesites.com",
    "services": [
      {"name": "Website Rescue Sprint", "price": "UGX 350,000", "desc": "One perfect page, live in 5 working days."}
    ],
    "call_notes": "Client needs a patient-booking page and Google Business setup.",
    "timeline": "5–10 business days",
    "deposit": "50% to start, 50% on launch",
    "payment_methods": "MTN MoMo / Airtel Money to 256778030847",
    "validity": "Quote valid for 14 days"
  }

Output: branded multi-page PDF (cover, services & pricing, timeline & process, terms).
Saves to ./proposals/ by default. Operator delivers the PDF to the client via WhatsApp/Telegram/email.
"""
import json, os, sys, datetime
from html import escape

try:
    from fpdf import FPDF
except ImportError:
    print("fpdf2 not installed. Run: pip3 install fpdf2")
    sys.exit(1)

NAVY = (10, 22, 40)
BLUE = (37, 99, 235)
AMBER = (245, 158, 11)
LIGHT = (241, 245, 249)
GRAY = (100, 116, 139)

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "proposals")
os.makedirs(OUT_DIR, exist_ok=True)


def _register_fonts(pdf):
    pdf.add_font("DejaVu", "", f"{FONT_DIR}/DejaVuSans.ttf")
    pdf.add_font("DejaVu", "B", f"{FONT_DIR}/DejaVuSans-Bold.ttf")
    pdf.set_font("DejaVu", "", 10)


class ProposalPDF(FPDF):
    def __init__(self, data):
        super().__init__(orientation="P", unit="mm", format="A4")
        self.data = data
        self.set_auto_page_break(True, margin=18)
        self.set_margins(15, 18, 15)
        _register_fonts(self)

    def header(self):
        # Top navy band
        self.set_fill_color(*NAVY)
        self.rect(0, 0, self.w, 14, "F")
        self.set_fill_color(*AMBER)
        self.rect(0, 14, self.w, 0.5, "F")
        self.set_text_color(255, 255, 255)
        self.set_font("DejaVu", "B", 13)
        self.set_xy(15, 4)
        self.cell(0, 8, "NileSites", new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(147, 197, 253)
        self.set_font("DejaVu", "", 8)
        self.set_xy(15, 10)
        self.cell(0, 6, "Web Design for Ugandan Businesses", new_x="LMARGIN", new_y="NEXT")
        self.ln(14)

    def footer(self):
        self.set_y(-12)
        self.set_draw_color(203, 213, 225)
        self.set_line_width(0.5)
        self.line(15, self.get_y(), self.w - 15, self.get_y())
        self.ln(2)
        self.set_text_color(*GRAY)
        self.set_font("DejaVu", "", 7.5)
        self.cell(0, 5, "NileSites · hello@nilesites.com · wa.me/256778030847 · Kampala, Uganda",
                  new_x="LMARGIN", new_y="NEXT", align="C")
        self.cell(0, 5, f"Page {self.page_no()} / {{nb}}", new_x="LMARGIN", new_y="NEXT", align="C")


def ptext(pdf, text, size=10, color=(15, 23, 40), bold=False, style="", align="L", spacing=1.5, margin_l=15, margin_r=15):
    pdf.set_text_color(*color)
    pdf.set_font("DejaVu", bold and "B" or style, size)
    pdf.set_x(margin_l)
    pdf.multi_cell(pdf.w - margin_l - margin_r, size * spacing, text, align=align)


def pheading(pdf, text, size=14, color=BLUE, space_before=8):
    pdf.ln(space_before)
    pdf.set_text_color(*color)
    pdf.set_font("DejaVu", "B", size)
    pdf.set_x(15)
    pdf.cell(0, size * 1.4, text, new_x="LMARGIN", new_y="NEXT")


def cover_page(pdf, d):
    pdf.add_page()
    pdf.ln(30)
    pdf.set_draw_color(*AMBER)
    pdf.set_line_width(2.5)
    pdf.line(15, pdf.get_y(), pdf.w - 15, pdf.get_y())
    pdf.ln(10)
    ptext(pdf, "Website Proposal", size=24, color=NAVY, bold=True, align="C", spacing=1.2)
    pdf.ln(6)
    ptext(pdf, f"Prepared for <b>{escape(d.get('client_name',''))}</b>", size=17, color=NAVY, bold=True, align="C")
    ptext(pdf, escape(d.get("business_name", "")), size=13, color=(70, 130, 200), align="C")
    ptext(pdf, escape(d.get("business_type", "")), size=11, color=(147, 197, 253), align="C")
    pdf.ln(8)
    pdf.set_draw_color(*AMBER)
    pdf.set_line_width(2.5)
    pdf.line(15, pdf.get_y(), pdf.w - 15, pdf.get_y())
    pdf.ln(12)
    info = [
        ("Business", d.get("business_name", "")),
        ("Type", d.get("business_type", "")),
        ("Location", d.get("location", "")),
        ("Contact", d.get("contact_phone", "")),
        ("Email", d.get("contact_email", "")),
        ("Prepared by", d.get("your_name", "NileSites")),
        ("Date", datetime.date.today().strftime("%d %B %Y")),
    ]
    for k, v in info:
        pdf.set_x(15)
        pdf.set_text_color(*NAVY)
        pdf.set_font("DejaVu", "B", 10)
        pdf.cell(35, 7, k, new_x="RIGHT", new_y="TOP", align="L")
        pdf.set_text_color(15, 23, 40)
        pdf.set_font("DejaVu", "", 10)
        pdf.cell(0, 7, v, new_x="LMARGIN", new_y="NEXT", align="L")
    pdf.ln(10)
    ptext(pdf,
        f"This proposal is prepared by <b>{escape(d.get('your_name','NileSites'))}</b> "
        f"({escape(d.get('your_whatsapp',''))} · {escape(d.get('your_email',''))}). "
        f"Quote valid {d.get('validity', '14 days')}.",
        size=9, color=GRAY, align="C")


def services_page(pdf, d):
    pdf.add_page()
    pheading(pdf, "Services & Pricing")
    ptext(pdf,
        "Based on our conversation, here's the plan we recommend for your business. "
        "All prices are in UGX and include 1 year of hosting plus a free .com domain for year one.",
        size=9.5)
    pdf.ln(4)
    # Table header
    pdf.set_fill_color(*NAVY)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("DejaVu", "B", 10)
    pdf.set_x(15)
    pdf.cell(42, 8, "Service", new_x="RIGHT", new_y="TOP", align="L", fill=True)
    pdf.cell(75, 8, "What you get", new_x="RIGHT", new_y="TOP", align="L", fill=True)
    pdf.cell(28, 8, "Price", new_x="LMARGIN", new_y="NEXT", align="L", fill=True)
    pdf.ln(1)
    fill = False
    for s in d.get("services", []):
        pdf.set_fill_color(*LIGHT if fill else (255, 255, 255))
        pdf.set_text_color(*NAVY)
        pdf.set_font("DejaVu", "B", 9.5)
        pdf.set_x(15)
        pdf.cell(42, 10, escape(s.get("name", "")), new_x="RIGHT", new_y="TOP", align="L", fill=True)
        pdf.set_text_color(15, 23, 40)
        pdf.set_font("DejaVu", "", 9.5)
        pdf.cell(75, 10, escape(s.get("desc", "")), new_x="RIGHT", new_y="TOP", align="L", fill=True)
        pdf.set_text_color(*AMBER)
        pdf.set_font("DejaVu", "B", 10)
        pdf.cell(28, 10, escape(s.get("price", "")), new_x="LMARGIN", new_y="NEXT", align="L", fill=True)
        fill = not fill
    pdf.ln(6)
    if d.get("call_notes"):
        pheading(pdf, "What we heard from you")
        ptext(pdf, escape(d["call_notes"]), size=9.5)


def process_page(pdf, d):
    pdf.add_page()
    pheading(pdf, "Timeline & Process")
    steps = [
        ("01", "Discovery", "We confirm your content, logo, photos and services on WhatsApp."),
        ("02", "Design", "You pick from 2 design directions on day 1. That's your only job."),
        ("03", "Build", "We design, develop and test on real phones in Kampala."),
        ("04", "Launch", "Domain, hosting, Google Business setup — then handover call."),
    ]
    for n, title, desc in steps:
        pdf.set_x(15)
        pdf.set_fill_color(*AMBER)
        pdf.set_text_color(NAVY)
        pdf.set_font("DejaVu", "B", 11)
        pdf.cell(14, 8, n, new_x="RIGHT", new_y="TOP", align="C", fill=True)
        pdf.set_text_color(*NAVY)
        pdf.set_font("DejaVu", "B", 10)
        pdf.cell(30, 8, title, new_x="RIGHT", new_y="TOP", align="L")
        pdf.set_text_color(15, 23, 40)
        pdf.set_font("DejaVu", "", 9.5)
        pdf.cell(0, 8, desc, new_x="LMARGIN", new_y="NEXT", align="L")
        pdf.ln(2)
    pdf.ln(4)
    meta = [
        ("Estimated timeline", d.get("timeline", "5–10 business days")),
        ("Deposit & payment", d.get("deposit", "50% to start, 50% on launch")),
        ("Payment methods", d.get("payment_methods", "MTN MoMo / Airtel Money")),
        ("Quote validity", d.get("validity", "14 days")),
    ]
    for k, v in meta:
        pdf.set_x(15)
        pdf.set_text_color(*NAVY)
        pdf.set_font("DejaVu", "B", 9.5)
        pdf.cell(42, 7, k, new_x="RIGHT", new_y="TOP", align="L")
        pdf.set_text_color(15, 23, 40)
        pdf.set_font("DejaVu", "", 9.5)
        pdf.cell(0, 7, v, new_x="LMARGIN", new_y="NEXT", align="L")
    pdf.ln(8)
    ptext(pdf,
        "Next step: reply on WhatsApp with “I accept” and we'll send the deposit link and "
        "kickoff form. Questions? Message us anytime.",
        size=9.5)
    pdf.ln(6)
    pdf.set_draw_color(203, 213, 225)
    pdf.set_line_width(0.5)
    pdf.line(15, pdf.get_y(), pdf.w - 15, pdf.get_y())
    pdf.ln(4)
    ptext(pdf,
        f"{escape(d.get('your_name','NileSites'))} · {escape(d.get('your_whatsapp',''))} · "
        f"{escape(d.get('your_email',''))} · Kampala, Uganda",
        size=8, color=GRAY, align="C")


def build(input_path, output_path=None):
    with open(input_path) as f:
        d = json.load(f)
    if not d.get("client_name"):
        print("input.json must include client_name")
        return 1
    if not output_path:
        safe = "".join(c for c in d["client_name"] if c.isalnum() or c in (" ", "-", "_")).rstrip()
        safe = safe.replace(" ", "_")
        output_path = os.path.join(OUT_DIR, f"proposal_{safe}_{datetime.date.today().isoformat()}.pdf")
    pdf = ProposalPDF(d)
    pdf.alias_nb_pages()
    cover_page(pdf, d)
    services_page(pdf, d)
    process_page(pdf, d)
    pdf.output(output_path)
    print(output_path)
    return 0


def sample():
    sample_path = os.path.join(OUT_DIR, "sample_input.json")
    sample = {
        "client_name": "Jane Nakato",
        "business_name": "Nakato Family Clinic",
        "business_type": "Medical Clinic",
        "location": "Ntinda, Kampala",
        "contact_phone": "+256 7XX XXX XXX",
        "contact_email": "jane@nakatoclinic.com",
        "your_name": "NileSites",
        "your_whatsapp": "+256 778 030 847",
        "your_email": "hello@nilesites.com",
        "services": [
            {"name": "Website Rescue Sprint", "price": "UGX 350,000", "desc": "One perfect page — services, about, contact, Google Business setup. Live in 5 working days."},
            {"name": "Starter Plan", "price": "UGX 450,000", "desc": "1–5 page site, mobile responsive, WhatsApp button, basic SEO, 1 year hosting."},
        ],
        "call_notes": "Needs a patient-booking info page and Google Business verification so local patients can find the clinic. Budget-conscious, wants to start small.",
        "timeline": "5–10 business days",
        "deposit": "50% to start, 50% on launch",
        "payment_methods": "MTN MoMo / Airtel Money to 256778030847",
        "validity": "14 days",
    }
    with open(sample_path, "w") as f:
        json.dump(sample, f, indent=2)
    print(sample_path)
    build(sample_path)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("usage: proposal_deck.py build <input.json> [output.pdf]")
        print("       proposal_deck.py sample")
        sys.exit(1)
    if sys.argv[1] == "sample":
        sample()
    elif sys.argv[1] == "build":
        if len(sys.argv) < 3:
            print("usage: proposal_deck.py build <input.json> [output.pdf]")
            sys.exit(1)
        raise SystemExit(build(sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else None))
    else:
        print(f"unknown command: {sys.argv[1]}")
        sys.exit(1)
