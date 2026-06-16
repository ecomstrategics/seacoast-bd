import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navy py-32 text-white">
      <div className="container text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-4 font-heading text-5xl font-bold">404</h1>
        <p className="mt-6 max-w-lg mx-auto text-lg text-white/80">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-orange-deep px-6 py-3 font-bold text-white transition hover:bg-copper">Back to Home</Link>
          <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy">Contact Us</Link>
          <a href="tel:+19415005431" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy">(941) 500-5431</a>
        </div>
      </div>
    </section>
  );
}
