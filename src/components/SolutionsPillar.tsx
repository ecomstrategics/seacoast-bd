import Link from "next/link";

type PillarType = "protect" | "improve" | "expand";

const eyebrowLabels: Record<PillarType, string> = {
  protect: "Storm & Resilience",
  improve: "Exteriors & Renovations",
  expand: "Property Solutions",
};

export function SolutionsPillar({
  pillar,
  title,
  blurb,
  services,
  href,
}: {
  pillar: PillarType;
  title: string;
  blurb: string;
  services: { name: string; href: string }[];
  href: string;
}) {
  return (
    <div className="rounded-2xl border border-navy/10 border-t-4 border-t-orange bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-orange">{eyebrowLabels[pillar]}</p>
      <h3 className="mt-3 font-heading text-2xl font-bold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">{blurb}</p>
      <ul className="mt-5 space-y-2">
        {services.map((svc) => (
          <li key={svc.href}>
            <Link href={svc.href} className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-teal">
              <span aria-hidden className="text-teal">→</span>
              {svc.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href={href} className="mt-6 inline-block rounded-full border-2 border-orange px-5 py-2.5 text-sm font-bold text-orange transition hover:bg-orange hover:text-white">
        See all {title} services
      </Link>
    </div>
  );
}
