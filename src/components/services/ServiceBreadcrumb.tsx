import Link from "next/link";
import type { Service } from "@/types";

interface Props {
  service: Service;
}

export default function ServiceBreadcrumb({ service }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[#ede5d8] bg-[#faf7f2]"
    >
      <div className="container-xl">
        <ol
          className="flex items-center gap-1.5 py-3 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-1.5"
          >
            <Link
              href="/"
              itemProp="item"
              className="text-[#8a8a85] transition-colors hover:text-[#4a7d67]"
            >
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
            <ChevronIcon />
          </li>

          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-1.5"
          >
            <Link
              href="/services"
              itemProp="item"
              className="text-[#8a8a85] transition-colors hover:text-[#4a7d67]"
            >
              <span itemProp="name">Services</span>
            </Link>
            <meta itemProp="position" content="2" />
            <ChevronIcon />
          </li>

          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            aria-current="page"
          >
            <span itemProp="name" className="font-medium text-[#2e2e2c]">
              {service.name}
            </span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </div>
    </nav>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 flex-shrink-0 text-[#c9b89f]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  );
}
