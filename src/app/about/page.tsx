import type { Metadata } from "next";
import ClientAbout from "./ClientAbout";

export const metadata: Metadata = {
  title: "About — NileSites | Web Design Team in Kampala",
  description:
    "Who we are: a Kampala-based team building fixed-price websites for Ugandan businesses. Honest process, no surprises.",
};

export default function AboutPage() {
  return <ClientAbout />;
}
