import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "NileSites — Professional Websites in Uganda",
  description:
    "NileSites builds modern, mobile-responsive websites for Ugandan businesses. Websites starting at UGX 450,000. WhatsApp bots, SEO, and hosting included.",
  openGraph: {
    title: "NileSites — Professional Websites in Uganda",
    description:
      "Modern, affordable websites for Ugandan businesses. Starting at UGX 450,000.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
