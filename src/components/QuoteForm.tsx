"use client";

import { type FormEvent, useState, useEffect } from "react";
import { services } from "@/data/services";

// TODO: Replace with real Formspree form ID before launch
const formspreeUrl = "https://formspree.io/f/placeholder";

export function QuoteForm({
  defaultService,
  defaultCity,
}: {
  defaultService?: string;
  defaultCity?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [repKey, setRepKey] = useState<string>("");

  useEffect(() => {
    // Read rep from cookie (set by RepBanner when ?rep= query param is present)
    const match = document.cookie.match(/(?:^|;\s*)rep=([^;]*)/);
    if (match) setRepKey(decodeURIComponent(match[1]));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form action={formspreeUrl} method="POST" onSubmit={handleSubmit} className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft">
      {/* Hidden tracking fields */}
      {defaultCity && <input type="hidden" name="city" value={defaultCity} />}
      <input type="hidden" name="rep" value={repKey} />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input name="name" autoComplete="name" placeholder="Your full name" required className="rounded-xl border border-navy/15 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="(941) 555-1234" required className="rounded-xl border border-navy/15 px-4 py-3" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Email
        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="rounded-xl border border-navy/15 px-4 py-3" />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Service Needed
          <select name="service" defaultValue={defaultService ?? "Not sure yet"} className="rounded-xl border border-navy/15 px-4 py-3">
            <option>Not sure yet</option>
            {services.map((service) => <option key={service.slug}>{service.name}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Property Type
          <select name="propertyType" className="rounded-xl border border-navy/15 px-4 py-3">
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Description
        <textarea name="description" rows={5} placeholder="Tell us about the project, location, timeline, or damage you need help with." className="rounded-xl border border-navy/15 px-4 py-3" />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Preferred Contact Method
        <select name="contactMethod" className="rounded-xl border border-navy/15 px-4 py-3">
          <option>Phone</option>
          <option>Email</option>
          <option>Text</option>
        </select>
      </label>

      {status === "success" && <p className="rounded-xl bg-orange/10 px-4 py-3 text-sm font-semibold text-orange">Thanks -- your quote request was sent. We will follow up shortly.</p>}
      {status === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Something went wrong. Please try again or call (941) 500-5431.</p>}

      <button
        className="rounded-full bg-orange-deep px-6 py-3 font-bold text-white transition hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Quote Request"}
      </button>
    </form>
  );
}
