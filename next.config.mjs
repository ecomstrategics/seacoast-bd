/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/*/hqdefault.jpg",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/testimonials",
        destination: "/customer-reviews",
        permanent: true,
      },
      {
        source: "/company-and-industry-news",
        destination: "/road-to-housing-act",
        permanent: true,
      },
      {
        source: "/f-a-q",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/room-additions",
        destination: "/services/room-additions",
        permanent: true,
      },
      {
        source: "/roofing-services",
        destination: "/services/roofing",
        permanent: true,
      },
      {
        source: "/project-portfolio",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/our-work/cinnamon-cove-gutters-fascia-soffits",
        destination: "/our-work/cinnamon-cove-shuffleboard-project",
        permanent: true,
      },
      {
        source: "/roofing-contractor-services",
        destination: "/services/roofing",
        permanent: true,
      },
      {
        source: "/project-discount-offers",
        destination: "/financing",
        permanent: true,
      },
      {
        source: "/floridas-2025-residential-demographics",
        destination: "/road-to-housing-act",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/Seacost-Roof-Cleaning-Maintenance-Contract.pdf",
        destination: "/services/exterior-cleaning-services",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/Hurricane-Preparedness-Website-PDF.pdf",
        destination: "/services/storm-preparedness",
        permanent: true,
      },
      // Preserve useful links and search equity from the former WordPress site.
      {
        source: "/about-seacoast-building-and-design",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/are-solar-panels-worth-it",
        destination: "/services/solar-services",
        permanent: true,
      },
      {
        source: "/asphalt-shingle-vs-metal-roofs",
        destination: "/services/roofing",
        permanent: true,
      },
      {
        source: "/commercial-roof-restoration",
        destination: "/commercial-roofing",
        permanent: true,
      },
      {
        source: "/r-panel-commercial-roofing",
        destination: "/commercial-roofing",
        permanent: true,
      },
      {
        source: "/storm-proof-your-roof",
        destination: "/services/roofing",
        permanent: true,
      },
      {
        source: "/your-guide-to-tpo-roofing",
        destination: "/commercial-roofing",
        permanent: true,
      },
      {
        source: "/benefits-of-power-washing",
        destination: "/services/exterior-cleaning-services",
        permanent: true,
      },
      {
        source: "/exterior-cleaning-services",
        destination: "/services/exterior-cleaning-services",
        permanent: true,
      },
      {
        source: "/pressure-washing-is-essential",
        destination: "/services/exterior-cleaning-services",
        permanent: true,
      },
      {
        source: "/a-guide-to-hurricane-recovery",
        destination: "/services/storm-damage-repair",
        permanent: true,
      },
      {
        source: "/choosing-a-hurricane-damage-contractor",
        destination: "/services/storm-damage-repair",
        permanent: true,
      },
      {
        source: "/damage-caused-by-florida-storms",
        destination: "/services/storm-damage-repair",
        permanent: true,
      },
      {
        source: "/florida-hurricane-response-guide",
        destination: "/services/storm-damage-repair",
        permanent: true,
      },
      {
        source: "/storm-damage-repair",
        destination: "/services/storm-damage-repair",
        permanent: true,
      },
      {
        source: "/storm-restoration-contractors",
        destination: "/services/storm-damage-repair",
        permanent: true,
      },
      {
        source: "/hurricane-preparedness",
        destination: "/services/storm-preparedness",
        permanent: true,
      },
      {
        source: "/prepare-for-hurricane-season",
        destination: "/services/storm-preparedness",
        permanent: true,
      },
      {
        source: "/protecting-your-florida-business",
        destination: "/services/storm-preparedness",
        permanent: true,
      },
      {
        source: "/storm-board-up-services",
        destination: "/services/emergency-response",
        permanent: true,
      },
      {
        source: "/essential-gutter-cost-guide",
        destination: "/services/gutters-fascia-soffits",
        permanent: true,
      },
      {
        source: "/gutter-and-downspout-services",
        destination: "/services/gutters-fascia-soffits",
        permanent: true,
      },
      {
        source: "/roof-certification-inspection",
        destination: "/services/roof-certification-inspection",
        permanent: true,
      },
      {
        source: "/spotting-roof-damage-early",
        destination: "/services/roof-certification-inspection",
        permanent: true,
      },
      {
        source: "/why-get-a-roof-certification",
        destination: "/services/roof-certification-inspection",
        permanent: true,
      },
      {
        source: "/pool-enclosures-and-lanais",
        destination: "/services/pool-enclosures-lanais",
        permanent: true,
      },
      {
        source: "/top-benefits-of-installing-pool-enclosures",
        destination: "/services/pool-enclosures-lanais",
        permanent: true,
      },
      {
        source: "/windows-and-doors",
        destination: "/services/windows-and-doors",
        permanent: true,
      },
      {
        source: "/siding-services",
        destination: "/services/siding",
        permanent: true,
      },
      {
        source: "/exterior-home-remodeling",
        destination: "/services/exterior-renovations",
        permanent: true,
      },
      {
        source: "/exterior-renovations",
        destination: "/services/exterior-renovations",
        permanent: true,
      },
      {
        source: "/seamless-renovations",
        destination: "/services/exterior-renovations",
        permanent: true,
      },
      {
        source: "/flooring-options-for-home",
        destination: "/services/exterior-renovations",
        permanent: true,
      },
      {
        source: "/innovative-storage-solutions",
        destination: "/containers/storage",
        permanent: true,
      },
      {
        source: "/most-searched-services-in-fl",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/top-home-renovation-projects",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/project-financing",
        destination: "/financing",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/faq-items/:path*",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/faq_category/:path*",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
