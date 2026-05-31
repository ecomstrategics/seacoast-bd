import Link from "next/link";

export type CrossSellItem = { title: string; href: string; blurb: string; icon?: string };

export function CrossSellBlock({
  heading = "What pairs with this",
  items,
}: {
  heading?: string;
  items: CrossSellItem[];
}) {
  return (
    <section className="section bg-cool-gray">
      <div className="container">
        <p className="eyebrow">Related services</p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-navy">{heading}</h2>
        <div className={`mt-8 grid gap-6 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              {item.icon && <div className="text-3xl" aria-hidden>{item.icon}</div>}
              <h3 className="mt-4 font-heading text-lg font-bold text-navy group-hover:text-teal">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{item.blurb}</p>
              <span className="mt-4 inline-flex font-semibold text-teal">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
