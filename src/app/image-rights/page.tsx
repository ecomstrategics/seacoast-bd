import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Image Rights and Permissions",
  description:
    "Image credits, usage terms, and permission-request information for photography and renderings published by Seacoast Building & Design.",
  alternates: { canonical: "/image-rights" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "August 6, 2026";

export default function ImageRightsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container max-w-4xl">
          <p className="eyebrow">Image rights</p>
          <h1 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            Image rights and permission requests
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            This page explains the credits, usage terms, and permission process for photography and
            renderings published on seacoastbd.com.
          </p>
          <p className="mt-4 text-sm text-white/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl">
          <article className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <h2 id="license" className="scroll-mt-24 font-heading text-2xl font-bold text-navy">
              License and permitted use
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Images on this site are owned by Seacoast Building &amp; Design or displayed under
              license or permission from a credited partner or other applicable rights holder. Unless
              an image expressly states a separate license, all rights are reserved. Viewing an image
              on this site does not grant permission to copy, republish, distribute, modify, sell, or
              use it in advertising or other commercial material.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">
              Partner-supplied imagery
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Some custom-building photographs and concept renderings are supplied by Safe Room
              Designs and are identified through captions, credits, or structured image metadata.
              Where an individual photographer or rendering artist was not included in the supplied
              source materials, the structured metadata credits Safe Room Designs as the responsible
              supplying organization. Copyright remains with Safe Room Designs or the applicable
              original rights holder. Seacoast&apos;s permission to display partner imagery does not
              authorize reuse by another party.
            </p>

            <h2 id="permissions" className="mt-10 scroll-mt-24 font-heading text-2xl font-bold text-navy">
              Request permission or licensing information
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              To ask about using an image, send the exact image or page URL, the intended use,
              publication channel, duration, and territory through our contact page. Seacoast can
              review requests involving its own imagery. Partner-supplied imagery may require direct
              authorization from the applicable rights holder. No permission is granted unless it is
              confirmed in writing by the party authorized to grant it.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-orange-deep px-6 py-3 font-bold text-white hover:bg-copper"
            >
              Request image permission
            </Link>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">
              Credit or rights corrections
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              If you are a photographer, artist, or rights holder and believe an image credit or
              rights statement is incomplete or inaccurate, please contact us with the image URL and
              supporting information so the record can be reviewed and corrected.
            </p>

            <p className="mt-10 border-t border-navy/10 pt-6 text-sm leading-6 text-text-secondary">
              These image-specific terms supplement the site&apos;s broader {" "}
              <Link href="/terms" className="font-bold text-navy hover:text-orange">
                Terms of Service
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
