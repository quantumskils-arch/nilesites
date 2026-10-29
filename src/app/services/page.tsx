import type { Metadata } from "next";
import ClientServices from "./ClientServices";

export const metadata: Metadata = {
  title: "Services — NileSites | What We Build",
  description:
    "Website design, hosting, Telegram bots, Google Business Profile, SEO & maintenance for Ugandan businesses.",
};

export default function ServicesPage() {
  return <ClientServices />;
}
