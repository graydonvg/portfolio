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
      backgroundImage: {
        spotlight:
          "conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, .3) 49%, rgba(124, 145, 182, .5) 50%, rgba(124, 145, 182, .3) 51%, transparent 55%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "80%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-in-down": {
          "0%": { opacity: "0%", transform: "translateY(-100%)" },
          "80%": { opacity: "0%", transform: "translateY(-100%)" },
          "100%": { opacity: "100%", transform: "translateY(0%)" },
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
        "navbar-fade-in-down": "fade-in-down 1.6s linear",
        "hero-light-beam-fade-in": "fade-in 1.6s linear",
        "hero-title-unblur": "fade-in-unblur 2s linear",
      },
    },
  },
  plugins: [],
};

export default config;
