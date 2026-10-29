import type { Metadata } from "next";
import ClientPricing from "./ClientPricing";

export const metadata: Metadata = {
  title: "Pricing — NileSites | Simple Website Plans",
  description:
    "Transparent pricing: Starter UGX 450,000, Standard UGX 900,000, Premium UGX 1,500,000. Payable via MTN MoMo / Airtel Money.",
};

export default function PricingPage() {
  return <ClientPricing />;
}
