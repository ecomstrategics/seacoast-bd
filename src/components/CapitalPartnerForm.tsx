"use client";

import { type FormEvent, useState, useEffect } from "react";

const formspreeUrl = "https://formspree.io/f/xykaaarv";

export function CapitalPartnerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [repKey, setRepKey] = useState<string>("");

  useEffect(() => {
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

  const fieldClass =
    "rounded-xl border border-navy/20 bg-white px-4 py-3 text-charcoal placeholder:text-text-secondary transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30";

  return (
    <form action={formspreeUrl} method="POST" onSubmit={handleSubmit} className="grid gap-5 rounded-3xl bg-white p-6 shadow-soft md:p-8 [color-scheme:light]">
      {/* Hidden tracking fields */}
      <input type="hidden" name="inquiryType" value="Capital Partner" />
      <input type="hidden" name="rep" value={repKey} />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input name="name" autoComplete="name" placeholder="Your full name" required className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Company / Fund
          <input name="company" autoComplete="organization" placeholder="Firm or entity name" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input name="email" type="email" autoComplete="email" placeholder="you@firm.com" required className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="(941) 555-1234" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Partner Type
          <select name="partnerType" className={fieldClass}>
            <option>Build-to-rent fund</option>
            <option>Single-family rental operator</option>
            <option>Senior housing investor</option>
            <option>Land operator / developer</option>
            <option>Private equity / family office</option>
            <option>Other</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Product Type
          <select name="productType" className={fieldClass}>
            <option>Build-to-rent community</option>
            <option>For-sale single-family</option>
            <option>55+ senior housing</option>
            <option>Other residential development</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Target Market / Area
          <input name="market" placeholder="e.g. Fort Myers, Sarasota, or another Florida market" className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Timeline
          <select name="timeline" className={fieldClass}>
            <option>Early planning</option>
            <option>Next 3 to 6 months</option>
            <option>6 to 12 months</option>
            <option>Active now</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Details
        <textarea name="description" rows={5} placeholder="Tell us about the location, product type, approximate unit count, schedule, and what you want Seacoast to evaluate." className={fieldClass} />
      </label>

      {status === "success" && <p className="rounded-xl bg-success/10 px-4 py-3 text-sm font-semibold text-success">Thanks—your project details were sent. A Seacoast team member will follow up.</p>}
      {status === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Something went wrong. Please try again or call (941) 500-5431.</p>}

      <button
        className="w-full rounded-full bg-orange-deep px-6 py-3.5 text-center font-bold text-white transition hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Project Details"}
      </button>
      <p className="text-center text-xs text-text-secondary">We will use these details only to respond about the opportunity.</p>
    </form>
  );
}
