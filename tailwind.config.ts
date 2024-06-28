import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
      },
      dropShadow: {
        "illuminate-dark-mode": "0 0 3px rgba(148, 163, 184, 0.8)",
        "illuminate-light-mode": "0 0 3px rgba(254, 240, 138, 0.8)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "80%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-in-unblur": {
          "0%": {
            opacity: "0%",
            filter: "blur(50px)",
          },
          "80%": {
            opacity: "0%",
            filter: "blur(50px)",
          },
          "100%": {
            opacity: "100%",
            filter: "blur(0px)",
          },
        },
        "translate-greeting": {
          "0%": {
            opacity: "0%",
            transform: "translateY(83px) scale(0)",
          },
          "20%": {
            opacity: "100%",
            transform: "translateY(83px) scale(1.6)",
          },
          "80%": {
            opacity: "100%",
            transform: "translateY(83px) scale(1.6)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0px) scale(1)",
          },
        },
      },
      animation: {
        "translate-hero-greeting": "translate-greeting 1.5s linear",
        "fade-in-hero-lights-and-icons": "fade-in 1.6s linear",
        "unblur-hero-title": "fade-in-unblur 2s linear",
      },
    },
  },
  plugins: [],
};

export default config;
