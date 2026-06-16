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
        navy: "#0021A5",           // brand bright blue
        "navy-deep": "#001B85",    // deeper band for alternating dark sections
        "navy-900": "#00115C",     // deepest blue: body background / footers
        "navy-surface": "#0A2A8A", // slightly lifted blue for dark card/panel surfaces
        orange: "#FA4616",         // brand orange — use as text/icon/border on DARK navy (4.8:1 on body bg) and for large text
        "orange-deep": "#B83410",  // accessible deep orange — fills carrying white text (5.9:1) and orange text on LIGHT surfaces (>=4.9:1)
        copper: "#12307A",         // blue-tint; used for hover states, complements orange+bright blue
        "copper-light": "#AFC1F4", // light blue accent, readable on dark blue
        "warm-white": "#F8F6F2",
        "cool-gray": "#E8EAF0",
        charcoal: "#1C1C1E",
        "text-secondary": "#5A5E6B",
        "storm": "#7A2E2E",
        "container-steel": "#3D4654",
        "success": "#2E7D5B",
      },
      boxShadow: {
        soft: "0 4px 24px 0 rgba(0,33,165,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
