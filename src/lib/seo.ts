import { SITE } from "./config";

export const defaultMetadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Premium Web Design for Ugandan Businesses`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "We build websites that bring you more customers, more bookings, and less headache. Starting at UGX 450,000. WhatsApp bots, SEO, hosting, and mobile money integration included.",
  keywords: [
    "web design Uganda",
    "web designer Kampala",
    "affordable websites Uganda",
    "NileSites",
    "WhatsApp bot Uganda",
    "mobile money integration",
    "website cost Uganda",
  ],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Premium Web Design for Ugandan Businesses`,
    description:
      "Websites that grow your business. Starting at UGX 450,000. Hosting, SEO, WhatsApp bots & mobile money included.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Premium Web Design for Ugandan Businesses`,
    description: "Websites that grow your business. Starting at UGX 450,000.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
} as const;

/** JSON-LD LocalBusiness schema for local SEO. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: "Web design agency in Kampala, Uganda. Websites, WhatsApp bots, SEO, and mobile money integration.",
    url: SITE.url,
    email: SITE.email,
    telephone: `+${SITE.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    geo: { "@type": "GeoCoordinates", latitude: 0.3476, longitude: 32.5825 },
    priceRange: "UGX 450,000 - UGX 1,500,000",
    sameAs: [],
    openingHours: "Mo-Sa 08:00-19:00",
  };
}
