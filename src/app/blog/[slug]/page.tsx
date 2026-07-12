import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // TODO: Fetch blog post metadata from MDX / CMS by slug
  return {
    title: `Blog Post | Anand Physiotherapy`,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // TODO: Fetch and render blog post content
  return (
    <main>
      <article>
        <h1>{slug}</h1>
        {/* TODO: Render MDX/CMS content */}
      </article>
    </main>
  );
}
