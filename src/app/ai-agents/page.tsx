import type { Metadata } from "next";
import AgentsPage from "@/components/AgentsPage";

export const metadata: Metadata = {
  title: "AI Agents That Never Sleep — NileSites Uganda",
  description:
    "Full-time AI agents for Ugandan businesses: website health monitoring, WhatsApp agents, competitor radar. Weekly WhatsApp reports from UGX 80,000/month.",
  openGraph: {
    title: "NileSites AI Agents — Websites that bring clients. Agents that never sleep.",
    description: "24/7 website monitoring, WhatsApp agents & automation for Ugandan businesses.",
    type: "website",
  },
  keywords: ["ai agents", "uganda", "website monitoring", "whatsapp bot", "automation", "nilesites"],
};

export default function AIAgentsPage() {
  return <AgentsPage />;
}
