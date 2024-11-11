import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactLenis } from "lenis/react";
import Providers from "./providers";
import Preloader from "@/components/preloader/preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const description =
  "Graydon von Gossler's portfolio showcasing front-end development skills including but not limited to JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS.";

export const metadata: Metadata = {
  title: "Graydon von Gossler",
  description,
  keywords:
    "portfolio, front-end developer, frontend engineer, web development, web developer, frontend developer, creative, problem-solving, team player, UI/UX, user interface, javascript developer, typescript developer, react developer, nextjs developer, next.js app router, html, css, javascript, typescript, reactjs, react.js, redux, nextjs, next.js, tailwind, threejs, three.js, 3D graphics, 3D animations, framer motion, supabase, firebase, mui, shadcn, parallax, freelance, remote, startup-friendly, responsive design, high-performance websites, modern web design, english, german, afrikaans, south africa, international, graydon von gossler",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/public/favicon/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/public/favicon/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/public/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/public/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/public/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/ico",
      url: "/public/favicon/favicon.ico",
    },
  ],
  openGraph: {
    title: "Graydon von Gossler",
    description,
    type: "website",
    url: "https://portfolio-iota-ruby-51.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graydon von Gossler",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn("antialiased", inter.variable)}
      >
        <Providers>
          <Preloader />
          <ReactLenis root>{children}</ReactLenis>
        </Providers>
      </body>
    </html>
  );
}
