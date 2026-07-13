import Link from "next/link";
import Image from "next/image";
import type { Container } from "@/data/containers";

const cardImages: Record<string, string> = {
  storage: "/images/containers/card-storage.webp",
  "guest-houses": "/images/containers/card-guest-houses.webp",
  "offices-workshops": "/images/containers/card-offices-workshops.webp",
  "storm-shelters": "/images/containers/card-storm-shelters.webp",
};

export function ContainerCard({ container }: { container: Container }) {
  return (
    <Link
      href={`/containers/${container.slug}`}
      className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={cardImages[container.slug] ?? "/images/containers/card-storage.webp"}
          alt={`Representative ${container.name.toLowerCase()} configuration`}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <div className="text-3xl" aria-hidden>{container.icon}</div>
        <h3 className="mt-3 font-heading text-xl font-bold text-navy group-hover:text-orange">{container.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-container-steel">{container.tagline}</p>
        <p className="mt-3 text-sm leading-6 text-text-secondary">{container.shortDescription}</p>
        {container.startingPrice && (
          <p className="mt-3 text-sm font-semibold text-orange">{container.startingPrice}</p>
        )}
        <span className="mt-4 inline-flex font-semibold text-orange">Explore →</span>
      </div>
    </Link>
  );
}
