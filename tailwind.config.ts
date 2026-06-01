import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-epilogue)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        navy: "#00387E",           // brand navy (pixel-extracted from real logo)
        "navy-deep": "#002A5C",    // deeper band for alternating dark sections
        "navy-900": "#001E45",     // deepest navy: body background / footers
        "navy-surface": "#0B2C5C", // slightly lifted navy for dark card/panel surfaces
        // NOTE: 'teal' is the legacy token name — now mapped to brand orange #EE6200.
        // All existing `text-teal`, `bg-teal`, `border-teal` classes become orange automatically.
        teal: "#EE6200",           // brand orange (legacy token, do not rename)
        orange: "#EE6200",         // brand orange alias for new code
        copper: "#1B3358",         // navy-tint; used for eyebrow/accent, complements orange+navy
        "copper-light": "#9DB4D8", // light steel-blue accent, readable on dark navy
        "warm-white": "#F8F6F2",
        "cool-gray": "#E8EAF0",
        charcoal: "#1C1C1E",
        "text-secondary": "#5A5E6B",
        "storm": "#7A2E2E",
        "container-steel": "#3D4654",
        "success": "#2E7D5B",
      },
      boxShadow: {
        soft: "0 4px 24px 0 rgba(11,29,58,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
