import type { Metadata } from "next";
import { CLINIC_NAME, SITE_URL } from "@/lib/constants";

interface BuildMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

/**
 * Helper to generate consistent Next.js Metadata for any page.
 * Usage: export const metadata = buildMetadata({ title, description, path })
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/images/og/default.jpg",
}: BuildMetadataParams): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${CLINIC_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${CLINIC_NAME}`,
      description,
      url,
      siteName: CLINIC_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${CLINIC_NAME}`,
      description,
      images: [ogImage],
    },
  };
}
