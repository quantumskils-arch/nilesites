// Central site configuration — single source of truth.

export const SITE_NAME = "NileSites";
export const SITE_URL = "https://nilesites.com";
export const CONTACT_EMAIL = "hello@nilesites.com";
export const LEAD_TO_EMAIL = "hello@nilesites.com";
export const LOCATION = "Kampala, Uganda";
export const WHATSAPP_NUMBER = "256778030847";

export const SITE = {
  name: SITE_NAME,
  tagline: "Websites that grow your business",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  phoneDisplay: "+256 778 030 847",
  whatsapp: WHATSAPP_NUMBER,
  location: LOCATION,
  currency: "UGX",
  founded: "2026",
  socials: {
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
} as const;

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hi NileSites! I'd like to get a website for my business.";
