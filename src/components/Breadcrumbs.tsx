import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: BreadcrumbItem[]; tone?: "dark" | "light" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://seacoastbd.com${item.href}` } : {}),
    })),
  };

  const listColor = tone === "light" ? "text-text-secondary" : "text-white/65";
  const currentColor = tone === "light" ? "text-navy" : "text-white/90";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${listColor}`}>
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden>/</span>}
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className="font-medium text-orange hover:underline">{item.label}</Link>
              ) : (
                <span className={`font-medium ${currentColor}`} aria-current={index === items.length - 1 ? "page" : undefined}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
