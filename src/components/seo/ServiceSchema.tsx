// ============================================================
// ServiceSchema — JSON-LD structured data for each service page
// Outputs MedicalTherapy + FAQPage schema for Google rich results
// ============================================================

import type { Service } from "@/types";
import { CLINIC_NAME, SITE_URL, CLINIC_ADDRESS, CLINIC_PHONE } from "@/lib/constants";

interface Props {
  service: Service;
}

export default function ServiceSchema({ service }: Props) {
  const medicalTherapySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.name,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    medicineSystem: "https://schema.org/WesternConventional",
    recognizingAuthority: {
      "@type": "Organization",
      name: CLINIC_NAME,
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#clinic`,
      name: CLINIC_NAME,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC_ADDRESS,
        addressLocality: "Patna",
        addressRegion: "Bihar",
        postalCode: "800001",
        addressCountry: "IN",
      },
      telephone: CLINIC_PHONE,
      url: SITE_URL,
    },
    relevantSpecialty: "https://schema.org/PhysicalTherapy",
  };

  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTherapySchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
