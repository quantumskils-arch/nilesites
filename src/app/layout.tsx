import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const m=localStorage.getItem('nilesites-dark');const d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(m==='true'||(!m&&d))document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}
