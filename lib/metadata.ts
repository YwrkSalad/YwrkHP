import type { Metadata } from "next";

const SITE_NAME = "やわらか大学";
const BASE_URL = "https://ywrk.org";
const OGP_IMAGE = "/OGP/OGP_1200x630.png";

export function createMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}${path}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OGP_IMAGE],
    },
  };
}
