import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, LOCATION } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NileSites — Premium Web Design for Ugandan Businesses",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "We build websites that bring you more customers, more bookings, and less headache. Starting at UGX 450,000. WhatsApp bots, SEO, and hosting included.",
  keywords: [
    "web design Uganda",
    "web designer Kampala",
    "websites for Ugandan businesses",
    "cheap website Uganda",
    "WhatsApp bot Uganda",
    "MTN MoMo payment integration",
    "website design cost Uganda",
  ],
  openGraph: {
    title: "NileSites — Premium Web Design for Ugandan Businesses",
    description: "Websites that grow your business. Starting at UGX 450,000.",
    type: "website",
    locale: "en_UG",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NileSites — Websites that grow your business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NileSites — Premium Web Design for Ugandan Businesses",
    description: "Websites that grow your business. Starting at UGX 450,000.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: SITE_NAME,
              description:
                "Premium web design agency for Ugandan businesses. Websites, hosting, WhatsApp bots, mobile money integration, and SEO.",
              url: SITE_URL,
              email: CONTACT_EMAIL,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kampala",
                addressCountry: "UG",
              },
              areaServed: "UG",
              priceRange: "UGX 450,000 - UGX 1,500,000",
              sameAs: [`https://wa.me/256778030847`],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}
