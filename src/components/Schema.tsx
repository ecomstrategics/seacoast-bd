// Schema.tsx — JSON-LD helper functions and script emitter
// All helpers return plain objects; SchemaScript renders them as <script> tags.

export type SchemaObject = Record<string, unknown>;

export function localBusinessSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Seacoast Building & Design",
    url: "https://seacoastbd.com",
    telephone: "+1-941-500-5431",
    description:
      "Full-service property solutions contractor serving Southwest Florida. Roofing, siding, storm damage repair, storm preparedness, container guest houses, and more.",
    areaServed: [
      "Hillsborough County, FL",
      "Manatee County, FL",
      "Sarasota County, FL",
      "Charlotte County, FL",
      "Lee County, FL",
      "Collier County, FL",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
  };
}

export function serviceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string[];
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://seacoastbd.com${url}`,
    serviceType: serviceType ?? name,
    provider: localBusinessSchema(),
    areaServed: areaServed ?? ["Southwest Florida"],
  };
}

export function productSchema({
  name,
  description,
  url,
  sku,
  offers,
}: {
  name: string;
  description: string;
  url: string;
  sku?: string;
  offers?: { price?: string; priceCurrency?: string; availability?: string };
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `https://seacoastbd.com${url}`,
    ...(sku ? { sku } : {}),
    brand: {
      "@type": "Brand",
      name: "SWFL Containers",
    },
    offers: {
      "@type": "Offer",
      availability: offers?.availability ?? "https://schema.org/InStock",
      seller: localBusinessSchema(),
      // Numeric price emitted only when known; otherwise expose currency via priceSpecification
      // to keep the Offer valid for Google Rich Results without inventing a dollar figure.
      ...(offers?.price
        ? { price: offers.price, priceCurrency: offers?.priceCurrency ?? "USD" }
        : {
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: offers?.priceCurrency ?? "USD",
            },
          }),
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://seacoastbd.com${item.href}` } : {}),
    })),
  };
}

export function SchemaScript({ schema }: { schema: SchemaObject | SchemaObject[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(Array.isArray(schema) ? schema : schema) }}
    />
  );
}
