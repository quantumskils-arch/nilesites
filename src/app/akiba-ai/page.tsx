import type { Metadata } from "next";
import ClientAkibaAI from "./ClientAkibaAI";

export const metadata: Metadata = {
  title: "Akiba AI — NileSites | Telegram Bot Overview",
  description:
    "Akiba AI Telegram bot for Ugandan businesses — FAQs, order intake, lead capture. Full details and pricing on the Telegram Bot page.",
};

export default function AkibaAIPage() {
  return <ClientAkibaAI />;
}
