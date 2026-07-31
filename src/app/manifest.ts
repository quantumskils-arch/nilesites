import { SITE_NAME, SITE_URL, CONTACT_EMAIL, LOCATION } from "@/lib/config";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "NileSites",
    description: "Premium web design for Ugandan businesses. Websites that grow your business.",
    start_url: SITE_URL,
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#d4a34a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
