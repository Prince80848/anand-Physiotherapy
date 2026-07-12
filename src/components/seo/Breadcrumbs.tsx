import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

/**
 * SEO Breadcrumbs — renders both visible breadcrumb nav AND BreadcrumbList JSON-LD schema.
 * This is the canonical breadcrumb component to use on inner pages.
 */
export default function SeoBreadcrumbs({ items }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <span>/</span>
              {i === items.length - 1 ? (
                <span className="text-gray-900">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600">{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
