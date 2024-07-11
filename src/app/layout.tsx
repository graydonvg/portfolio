import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Graydon von Gossler",
  description:
    "Graydon von Gossler's portfolio showcasing front-end development skills including but not limited to JavaScript, TypeScript, React, Next.js, and Tailwind CSS.",
  keywords:
    "portfolio, front-end developer, web development, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, web design, Graydon von Gossler",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png",
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
    description:
      "Graydon von Gossler's portfolio showcasing front-end development skills including but not limited to JavaScript, TypeScript, React, Next.js, and Tailwind CSS.",
    type: "website",
    url: "https://portfolio-pink-kappa-14.vercel.app/",
    images: [
      {
        url: "/portfolio-screenshot.png",
        alt: "Graydon von Gossler Portfolio Open Graph Image",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graydon von Gossler",
    description:
      "Graydon von Gossler's portfolio showcasing front-end development skills including but not limited to JavaScript, TypeScript, React, Next.js, and Tailwind CSS.",
    images: ["/portfolio-screenshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-svh bg-slate-950 text-slate-300",
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
