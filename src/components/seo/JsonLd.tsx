interface Props {
  schema: Record<string, unknown>;
}

/**
 * Injects JSON-LD structured data into the page.
 * Usage: <JsonLd schema={localBusinessSchema} />
 */
export default function JsonLd({ schema }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
