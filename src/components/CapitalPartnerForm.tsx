"use client";

import { type FormEvent, useState, useEffect } from "react";

const formspreeUrl = "https://formspree.io/f/xykaaarv";

export function CapitalPartnerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [repKey, setRepKey] = useState<string>("");
  const [inquirySource, setInquirySource] = useState<string>("capital-partners");

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)rep=([^;]*)/);
    if (match) setRepKey(decodeURIComponent(match[1]));
    const source = new URLSearchParams(window.location.search).get("source");
    if (source) {
      setInquirySource(source);
    } else if (document.referrer.includes("/road-to-housing-act")) {
      setInquirySource("road-act");
    }
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
    "min-w-0 w-full max-w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-charcoal placeholder:text-text-secondary transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30";
  const labelClass = "grid min-w-0 gap-2 text-sm font-semibold text-navy";

  return (
    <form action={formspreeUrl} method="POST" onSubmit={handleSubmit} aria-busy={isSubmitting} className="grid min-w-0 w-full max-w-full gap-5 rounded-3xl bg-white p-6 shadow-soft md:p-8 [color-scheme:light]">
      {/* Hidden tracking fields */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="inquiryType" value="Capital Partner Project Review" />
      <input type="hidden" name="rep" value={repKey} />
      <input type="hidden" name="inquirySource" value={inquirySource} />
      <input type="hidden" name="leadOwner" value="Clear Dayland" />
      <input type="hidden" name="_subject" value="Capital Partners project review for Clear Dayland" />

      <div>
        <p className="font-heading text-2xl font-bold text-navy">Tell us what you are planning</p>
        <p className="mt-2 text-sm leading-6 text-text-secondary">Share what you know now. The inquiry is assigned to Clear Dayland, Seacoast&apos;s owner, for project-fit review and follow-up.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Name
          <input name="name" autoComplete="name" placeholder="Your full name" required className={fieldClass} />
        </label>
        <label className={labelClass}>
          Company / Organization
          <input name="company" autoComplete="organization" placeholder="Firm, fund, nonprofit, or agency" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Email
          <input name="email" type="email" autoComplete="email" placeholder="you@firm.com" required className={fieldClass} />
        </label>
        <label className={labelClass}>
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="(941) 555-1234" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Partner Type
          <select name="partnerType" defaultValue="" className={fieldClass}>
            <option value="">Select the closest fit</option>
            <option>Developer / property owner</option>
            <option>Build-to-rent / single-family rental operator</option>
            <option>Affordable housing developer</option>
            <option>Multifamily owner / operator</option>
            <option>Active-adult / senior housing team</option>
            <option>Public / nonprofit housing organization</option>
            <option>Landowner / land developer</option>
            <option>Private equity / family office</option>
            <option>Other</option>
          </select>
        </label>
        <label className={labelClass}>
          Project Type
          <select name="productType" defaultValue="" required className={fieldClass}>
            <option value="" disabled>Select a project type</option>
            <option>Build-to-rent / single-family rental</option>
            <option>Major rehabilitation / renovate-to-rent</option>
            <option>Commercial / condominium / HOA rehabilitation</option>
            <option>Addition / property expansion</option>
            <option>Other construction project</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Property Address / Target Market
        <input name="market" autoComplete="street-address" placeholder="Address, city, or Florida market" className={fieldClass} />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Estimated Construction Value
          <select name="constructionValue" defaultValue="" required className={fieldClass}>
            <option value="" disabled>Select an approximate range</option>
            <option>Under $20,000</option>
            <option>$20,000–$49,999</option>
            <option>$50,000–$99,999</option>
            <option>$100,000–$499,999</option>
            <option>$500,000–$999,999</option>
            <option>$1 million–$4.99 million</option>
            <option>$5 million or more</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className={labelClass}>
          Approximate Homes / Units / Structures (optional)
          <input name="unitCount" placeholder="e.g. 1 property or 120 units" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Current Stage
          <select name="projectStage" defaultValue="" className={fieldClass}>
            <option value="">Select a stage</option>
            <option>Site identified / due diligence</option>
            <option>Concept / feasibility</option>
            <option>Plans in development</option>
            <option>Permit-ready / seeking construction pricing</option>
            <option>Existing property / rehabilitation planning</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className={labelClass}>
          Target Start
          <select name="timeline" defaultValue="" className={fieldClass}>
            <option value="">Select a target</option>
            <option>Within 1 to 3 months</option>
            <option>3 to 6 months</option>
            <option>6 to 12 months</option>
            <option>More than 12 months</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Plans / Documents Link
          <input name="plansUrl" type="url" inputMode="url" placeholder="Optional shared-folder or file link" className={fieldClass} />
        </label>
        <label className={labelClass}>
          ROAD Act Context
          <select name="roadActContext" defaultValue="" className={fieldClass}>
            <option value="">Select if known</option>
            <option>Potentially relevant; counsel is reviewing</option>
            <option>Potentially relevant; legal review not started</option>
            <option>Not relevant to this project</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Project Details
        <textarea name="description" rows={5} placeholder="Tell us about the property, current conditions or plans, desired scope, schedule, and the decision you need to make." className={fieldClass} />
      </label>

      <div aria-live="polite" role="status">
        {status === "success" && <p className="rounded-xl bg-success/10 px-4 py-3 text-sm font-semibold text-success">Thanks—we received your project details for Clear Dayland&apos;s review. Seacoast will follow up.</p>}
        {status === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Something went wrong. Please try again or call (941) 500-5431.</p>}
      </div>

      <button
        className="w-full rounded-full bg-orange-deep px-6 py-3.5 text-center font-bold text-white transition hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request Project Review"}
      </button>
      <p className="text-center text-xs leading-5 text-text-secondary">
        We will use these details only to respond about the opportunity. This form requests a construction-project review; Seacoast does not provide legal or investment advice or determine eligibility under H.R. 6644.
      </p>
    </form>
  );
}
