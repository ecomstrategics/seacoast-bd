import Link from "next/link";
import type { Container } from "@/data/containers";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function ContainerCard({ container }: { container: Container }) {
  return (
    <Link
      href={`/containers/${container.slug}`}
      className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <ImagePlaceholder label={`${container.name} photo`} ratio="16/9" tone="steel" />
      <div className="p-6">
        <div className="text-3xl" aria-hidden>{container.icon}</div>
        <h3 className="mt-3 font-heading text-xl font-bold text-navy group-hover:text-teal">{container.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-container-steel">{container.tagline}</p>
        <p className="mt-3 text-sm leading-6 text-text-secondary">{container.shortDescription}</p>
        {container.startingPrice && (
          <p className="mt-3 text-sm font-semibold text-teal">{container.startingPrice}</p>
        )}
        <span className="mt-4 inline-flex font-semibold text-teal">Explore →</span>
      </div>
    </Link>
  );
}
