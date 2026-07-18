// Schema.tsx — JSON-LD helper functions and script emitter
// All helpers return plain objects; SchemaScript renders them as <script> tags.

export type SchemaObject = Record<string, unknown>;

export function localBusinessSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "Organization"],
    "@id": "https://seacoastbd.com/#organization",
    name: "Seacoast Building & Design",
    url: "https://seacoastbd.com",
    logo: "https://seacoastbd.com/logo.png",
    image: "https://seacoastbd.com/images/og-default.jpg",
    slogan: "Protect. Improve. Expand.",
    telephone: "+1-941-500-5431",
    description:
      "Florida-certified contractor serving Southwest Florida with buildouts, major rehabilitation, roofing, storm restoration, exterior improvements, additions, and selected container-based projects.",
    areaServed: [
      "Hillsborough County, FL",
      "Manatee County, FL",
      "Sarasota County, FL",
      "Charlotte County, FL",
      "Lee County, FL",
      "Collier County, FL",
    ],
    sameAs: [
      "https://www.facebook.com/seacoastbuilding/",
      "https://www.instagram.com/seacoastband/",
      "https://www.youtube.com/@SeacoastBuildingDesign",
    ],
    brand: {
      "@type": "Brand",
      name: "Seacoast Building & Design",
    },
    founder: [
      { "@id": "https://seacoastbd.com/about#clear-dayland" },
      { "@id": "https://seacoastbd.com/about#chandra-dayland" },
    ],
  };
}

export function personSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://seacoastbd.com/about#clear-dayland",
    name: "Clear Dayland",
    jobTitle: "Owner",
    worksFor: { "@id": "https://seacoastbd.com/#organization" },
    description:
      "Owner of Seacoast Building & Design, with experience in residential and commercial construction, roofing, production, sales, and storm-related property work.",
    image: "https://seacoastbd.com/images/about/clear-dayland.webp",
    knowsAbout: [
      "Residential roofing",
      "Commercial roofing",
      "Storm damage restoration",
      "Commercial buildouts",
      "Major rehabilitation",
      "Build-to-rent construction",
      "Storm preparedness programs",
      "Shipping container build-outs",
      "General contracting",
    ],
  };
}

export function chandraSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://seacoastbd.com/about#chandra-dayland",
    name: "Chandra Dayland",
    jobTitle: "Co-Owner",
    worksFor: { "@id": "https://seacoastbd.com/#organization" },
    description:
      "Co-owner and operations lead of Seacoast Building & Design, overseeing client communication, team training, accounting, analytics, management, and sales.",
    image: "https://seacoastbd.com/images/about/chandra-dayland.webp",
    knowsAbout: [
      "Construction operations management",
      "Employee training and team management",
      "Accounting and analytics",
      "Client communications and sales",
      "Construction project coordination",
    ],
  };
}

export function webSiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Seacoast Building & Design",
    url: "https://seacoastbd.com",
    publisher: { "@id": "https://seacoastbd.com/#organization" },
  };
}

export function videoObjectSchema({
  name,
  description,
  videoId,
  uploadDate,
  duration,
}: {
  name: string;
  description: string;
  videoId: string;
  uploadDate?: string;
  duration?: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    ...(uploadDate ? { uploadDate } : {}),
    ...(duration ? { duration } : {}),
    publisher: { "@id": "https://seacoastbd.com/#organization" },
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
  image,
  offers,
}: {
  name: string;
  description: string;
  url: string;
  sku?: string;
  image?: string | string[];
  offers?: { price?: string; priceCurrency?: string; availability?: string };
}): SchemaObject {
  const absoluteImage = image
    ? (Array.isArray(image) ? image : [image]).map((src) =>
        src.startsWith("http") ? src : `https://seacoastbd.com${src}`,
      )
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `https://seacoastbd.com${url}`,
    ...(sku ? { sku } : {}),
    ...(absoluteImage ? { image: absoluteImage } : {}),
    brand: {
      "@type": "Brand",
      name: "Seacoast Building & Design",
    },
    ...(offers && (offers.price || offers.availability)
      ? {
          offers: {
            "@type": "Offer",
            url: `https://seacoastbd.com${url}`,
            seller: { "@id": "https://seacoastbd.com/#organization" },
            ...(offers.price ? { price: offers.price, priceCurrency: offers.priceCurrency ?? "USD" } : {}),
            ...(offers.availability ? { availability: offers.availability } : {}),
          },
        }
      : {}),
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
