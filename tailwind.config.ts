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
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      backgroundImage: {
        "star-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(148, 163, 184, 0.5) 0%, rgba(148, 163, 184, 0) 100%)",
        "moon-light-conic":
          "conic-gradient(from 0deg at 50% 40px, transparent 47%, rgba(124, 145, 182, 0.2) 49%, rgba(124, 145, 182, 0.3) 50%, rgba(124, 145, 182, 0.2) 51%, transparent 53%)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254, 254, 91, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254, 254, 91, 0.3)",
      },
      dropShadow: {
        "illuminate-moon": "0 0 30px rgba(148, 163, 184, 0.8)",
        "illuminate-sun": "0 0 3px rgba(254, 240, 138, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
