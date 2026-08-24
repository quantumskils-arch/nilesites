import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "NileSites — Premium Web Design for Ugandan Businesses",
  description:
    "We build websites that bring you more customers, more bookings, and less headache. Starting at UGX 450,000. WhatsApp bots, SEO, and hosting included.",
  openGraph: {
    title: "NileSites — Premium Web Design for Ugandan Businesses",
    description: "Websites that grow your business. Starting at UGX 450,000.",
    type: "website",
  },
  keywords: [
    "web design",
    "uganda",
    "business website",
    "nilesites",
    "premium web design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="class:dark:translate-y-1">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}