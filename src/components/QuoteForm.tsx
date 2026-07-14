"use client";

import { type FormEvent, useState, useEffect } from "react";
import { containers } from "@/data/containers";
import { services } from "@/data/services";

const formspreeUrl = "https://formspree.io/f/xykaaarv";
const serviceDefaults = new Map<string, string>([
  ...services.map((service) => [service.slug, service.name] as const),
  ...containers.map((container) => [container.slug, container.name] as const),
  ["containers", "Container Project"],
  ["prebuilt-containers", "Available 20-Foot Mobile Container"],
]);

export function QuoteForm({
  defaultService,
  defaultCity,
}: {
  defaultService?: string;
  defaultCity?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [repKey, setRepKey] = useState<string>("");
  const [selectedService, setSelectedService] = useState(defaultService ?? "Not sure yet");

  useEffect(() => {
    // Read rep from cookie (set by RepBanner when ?rep= query param is present)
    const match = document.cookie.match(/(?:^|;\s*)rep=([^;]*)/);
    if (match) setRepKey(decodeURIComponent(match[1]));
    const serviceSlug = new URLSearchParams(window.location.search).get("service");
    if (serviceSlug) setSelectedService(serviceDefaults.get(serviceSlug) ?? defaultService ?? "Not sure yet");
  }, [defaultService]);

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

  const fieldClass =
    "rounded-xl border border-navy/20 bg-white px-4 py-3 text-charcoal placeholder:text-text-secondary transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30";

  return (
    <form
      id="quote-form"
      action={formspreeUrl}
      method="POST"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="grid scroll-mt-24 gap-5 rounded-3xl bg-white p-6 shadow-soft md:p-8 [color-scheme:light]"
    >
      {/* Formspree's honeypot is hidden from people and filters automated submissions when populated. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New project inquiry - Seacoast Building & Design" />
      <input type="hidden" name="formType" value="General Project Inquiry" />
      <input type="hidden" name="rep" value={repKey} />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input name="name" autoComplete="name" placeholder="Your full name" required className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="(941) 555-1234" required className={fieldClass} />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Email
        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required className={fieldClass} />
      </label>

      <fieldset className="grid gap-4">
        <legend className="mb-2 text-sm font-bold text-navy">Project Address</legend>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Street Address
          <input
            name="streetAddress"
            autoComplete="street-address"
            placeholder="123 Main Street"
            required
            className={fieldClass}
          />
        </label>
        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            City
            <input
              name="city"
              autoComplete="address-level2"
              placeholder="Fort Myers"
              defaultValue={defaultCity}
              required
              className={fieldClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            State
            <input
              name="state"
              autoComplete="address-level1"
              placeholder="FL"
              maxLength={30}
              required
              className={fieldClass}
            />
          </label>
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Service Needed
          <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} className={fieldClass}>
            <option>Not sure yet</option>
            {services.map((service) => <option key={service.slug}>{service.name}</option>)}
            <option>Container Project</option>
            <option>Available 20-Foot Mobile Container</option>
            {containers.map((container) => <option key={container.slug}>{container.name}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Property Type
          <select name="propertyType" className={fieldClass}>
            <option>Home</option>
            <option>Condo or HOA community</option>
            <option>Multi-family property</option>
            <option>Commercial property</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Project Details <span className="font-normal text-text-secondary">(required)</span>
        <textarea
          name="description"
          rows={5}
          minLength={15}
          required
          aria-describedby="project-details-help"
          placeholder="Tell us what you are seeing or planning and whether there is a deadline or active damage."
          className={fieldClass}
        />
        <span id="project-details-help" className="text-xs font-normal leading-5 text-text-secondary">
          A short description helps our team understand whether a call, inspection, or site visit is the right next step.
        </span>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Preferred Contact Method
        <select name="contactMethod" className={fieldClass}>
          <option>Phone</option>
          <option>Email</option>
          <option>Text</option>
        </select>
      </label>

      <div aria-live="polite" role="status">
        {status === "success" && <p className="rounded-xl bg-success/10 px-4 py-3 text-sm font-semibold text-success">Thanks—we received your request. A Seacoast team member will contact you to discuss the next step.</p>}
        {status === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Something went wrong. Please try again or call (941) 500-5431.</p>}
      </div>

      <button
        className="w-full rounded-full bg-orange-deep px-6 py-3.5 text-center font-bold text-white transition hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send My Project Details"}
      </button>
      <p className="text-center text-xs text-text-secondary">We will use these details only to respond about your project.</p>
    </form>
  );
}
