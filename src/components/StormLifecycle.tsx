import Link from "next/link";

const stages = [
  {
    id: "before",
    label: "Before",
    heading: "Storm Preparedness",
    blurb: "Proactive boarding, shuttering, supply delivery, and priority response contracts, locked in before hurricane season.",
    href: "/services/storm-preparedness",
    icon: "🛡️",
  },
  {
    id: "during",
    label: "During",
    heading: "Emergency Response",
    blurb: "Same-day boarding, tarp deployment, and damage stabilization when a storm is active or has just made landfall.",
    href: "/services/emergency-response",
    icon: "🚨",
  },
  {
    id: "after",
    label: "After",
    heading: "Storm Damage Repair",
    blurb: "Insurance documentation, adjuster coordination, and full repair from roofing to gutters to siding. Seacoast handles the claim and the rebuild.",
    href: "/services/storm-damage-repair",
    icon: "🔨",
  },
];

export function StormLifecycle({ activeStage }: { activeStage?: "before" | "during" | "after" }) {
  return (
    <section className="section dark-band bg-navy text-white">
      <div className="container">
        <p className="eyebrow text-teal/80">The Storm Lifecycle</p>
        <h2 className="mt-2 font-heading text-3xl font-bold">Seacoast covers every stage.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stages.map((stage, index) => {
            const isActive = stage.id === activeStage;
            return (
              <div key={stage.id} className="relative">
                {index < stages.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-px w-8 translate-x-full bg-white/20 md:block" aria-hidden />
                )}
                <Link
                  href={stage.href}
                  className={`group block rounded-2xl border p-6 transition hover:-translate-y-1 ${isActive ? "border-teal bg-teal/10" : "border-white/15 hover:border-teal/40 hover:bg-white/5"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/60">{stage.label}</span>
                  </div>
                  <div className="mt-3 text-3xl" aria-hidden>{stage.icon}</div>
                  <h3 className="mt-3 font-heading text-xl font-bold group-hover:text-teal">{stage.heading}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{stage.blurb}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-teal">Learn more →</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
