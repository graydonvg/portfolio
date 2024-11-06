import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: {
          DEFAULT: "hsl(var(--input))",
          foreground: "hsl(var(--input-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "star-radial":
          "radial-gradient(50% 50% at 50% 50%, hsl(var(--star-light) / 0.5), transparent)",
        "shooting-star-tail":
          "linear-gradient(90deg, hsl(var(--star-light) / 0.5), transparent)",
        "light-beam-conic":
          "conic-gradient(from 0deg at 50% 40px, transparent 47%, hsl(var(--primary) / 0.2) 49%, hsl(var(--primary) / 0.3) 50%, hsl(var(--primary) / 0.2) 51%, transparent 53%)",
      },
      screens: {
        // xs: "420px",

        "can-hover": { raw: "(hover: hover)" },
      },
      transitionDuration: {
        "400": "400ms",
      },
      transitionTimingFunction: {
        "gentle-ease-in-out": "cubic-bezier(0.1,0,0.3,1)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
