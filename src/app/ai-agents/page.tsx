import type { Metadata } from "next";
import AgentsPage from "@/components/AgentsPage";

export const metadata: Metadata = {
  title: "AI Agents That Never Sleep — NileSites Uganda",
    description:
    "Full-time AI agents for Ugandan businesses: website health monitoring, Telegram bots, competitor radar. Weekly scorecards from UGX 80,000/month.",
  openGraph: {
    title: "NileSites AI Agents — Websites that bring clients. Agents that never sleep.",
    description: "24/7 website monitoring, Telegram bots & automation for Ugandan businesses.",
  },
  keywords: ["ai agents", "uganda", "website monitoring", "telegram bot", "automation", "nilesites"],
};

export default function AIAgentsPage() {
  return <AgentsPage />;
}
