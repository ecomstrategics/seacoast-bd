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
        navy: "#1E3A7A",           // brand blue (toned down from electric #0021A5)
        "navy-deep": "#16306B",    // deeper band for alternating dark sections
        "navy-900": "#0E2150",     // deepest blue: body background / footers
        "navy-surface": "#24407F", // slightly lifted blue for dark card/panel surfaces
        orange: "#E15A2B",         // brand orange (toned down from vivid #FA4616) — borders, icons, tint fills (bg-orange/10), large text
        "orange-light": "#FF9468", // soft coral — small TEXT/eyebrows on dark blue bands (>=4.5:1 on the brightest band #24407F); applied as the text-orange/eyebrow default in globals.css
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
