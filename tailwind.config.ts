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
        inter: ["var(--font-inter)"],
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
      backgroundImage: {
        "star-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(148, 163, 184, 0.5) 0%, rgba(148, 163, 184, 0) 100%)",
        "moon-light-conic":
          "conic-gradient(from 0deg at 50% 40px, transparent 47%, rgba(124, 145, 182, 0.2) 49%, rgba(124, 145, 182, 0.3) 50%, rgba(124, 145, 182, 0.2) 51%, transparent 53%)",
      },
    },
  },
  plugins: [],
};

export default config;
