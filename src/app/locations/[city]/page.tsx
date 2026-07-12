import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityFormatted = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Physiotherapy in ${cityFormatted} | Anand Physiotherapy Patna`,
    description: `Looking for physiotherapy in ${cityFormatted}, Patna? Anand Physiotherapy offers expert rehabilitation services near you.`,
    alternates: { canonical: `${SITE_URL}/locations/${city}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const cityFormatted = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <main>
      <h1>Physiotherapy in {cityFormatted}, Patna</h1>
      {/* TODO: Build location-specific content for local SEO */}
    </main>
  );
}
