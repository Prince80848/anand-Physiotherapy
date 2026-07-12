import type { Metadata } from "next";
import { CLINIC_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Physiotherapy Blog | ${CLINIC_NAME}`,
  description:
    "Expert physiotherapy articles, tips, and guides from the team at Anand Physiotherapy, Patna. Covering back pain, stroke recovery, paediatric therapy, and more.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  return (
    <main>
      <h1>Physiotherapy Blog</h1>
      {/* TODO: Render blog post cards — connect MDX or CMS */}
    </main>
  );
}
