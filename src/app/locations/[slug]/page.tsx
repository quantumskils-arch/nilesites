import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import LocationContent from "@/components/LocationContent";

const LOCATIONS: Record<string, { name: string; blurb: string }> = {
  kampala: {
    name: "Kampala",
    blurb:
      "From shops in downtown Kampala to offices in Kololo and Ntinda, we build websites for businesses across the capital.",
  },
  ntinda: {
    name: "Ntinda",
    blurb:
      "Ntinda is home to countless growing businesses — cafes, salons, clinics, and tech startups. We build websites that help them stand out.",
  },
  entebbe: {
    name: "Entebbe",
    blurb:
      "From lakeside lodges to international schools, Entebbe businesses trust us for professional, mobile-friendly websites.",
  },
  mukono: {
    name: "Mukono",
    blurb:
      "Mukono's businesses are growing fast. Get a professional website that keeps up — with local support and honest pricing.",
  },
};

export function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS[slug];
  if (!loc) return { title: "Web Designer in Uganda" };
  return {
    title: `Web Design in ${loc.name} — NileSites Uganda`,
    description: `Professional, affordable websites for ${loc.name} businesses. Mobile-responsive design, SEO, and WhatsApp click-to-chat. Starting at UGX 450,000.`,
    alternates: { canonical: `https://nilesites.com/locations/${slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = LOCATIONS[slug];
  if (!loc) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">
          Location not found
        </h1>
        <Link href="/" className="text-gold-600 font-medium">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      <LocationContent name={loc.name} blurb={loc.blurb} />
      <CTASection />
    </>
  );
}
