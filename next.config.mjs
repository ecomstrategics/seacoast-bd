/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
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
