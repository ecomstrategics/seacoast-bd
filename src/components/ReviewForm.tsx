"use client";

import { type FormEvent, useState } from "react";

const formspreeUrl = "https://formspree.io/f/xykaaarv";

export function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
      {/* Routes the submission to Seacoast for manual moderation before any review is posted. */}
      <input type="hidden" name="_subject" value="New website review submission - Seacoast Building & Design" />
      <input type="hidden" name="formType" value="Customer Review" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input name="name" autoComplete="name" placeholder="Your name" required className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          City
          <input name="city" placeholder="e.g. Fort Myers" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Rating
          <select name="rating" defaultValue="5 stars" className={fieldClass}>
            <option>5 stars</option>
            <option>4 stars</option>
            <option>3 stars</option>
            <option>2 stars</option>
            <option>1 star</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Project
        <input name="project" placeholder="e.g. Roof replacement, storm repair, container build" className={fieldClass} />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Your Review
        <textarea name="review" rows={6} required placeholder="Tell us about your experience working with Seacoast Building & Design." className={fieldClass} />
      </label>

      <label className="flex items-start gap-3 text-sm text-text-secondary">
        <input type="checkbox" name="permissionToPublish" value="Yes" className="mt-1 h-4 w-4 rounded border-navy/30 text-orange focus:ring-orange/30" />
        I give Seacoast Building &amp; Design permission to publish this review on their website.
      </label>

      {status === "success" && <p className="rounded-xl bg-success/10 px-4 py-3 text-sm font-semibold text-success">Thank you. Your review was sent to our team and will be reviewed before it is posted.</p>}
      {status === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Something went wrong. Please try again or call (941) 500-5431.</p>}

      <button
        className="w-full rounded-full bg-orange-deep px-6 py-3.5 text-center font-bold text-white transition hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Your Review"}
      </button>
    </form>
  );
}
