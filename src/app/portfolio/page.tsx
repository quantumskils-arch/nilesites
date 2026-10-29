import type { Metadata } from "next";
import ClientPortfolio from "./ClientPortfolio";

export const metadata: Metadata = {
  title: "Portfolio — NileSites | Websites We've Built",
  description:
    "Recent NileSites projects for Ugandan businesses — real sites, fixed-price builds, delivered in days.",
};

export default function PortfolioPage() {
  return <ClientPortfolio />;
}
