import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactLenis } from "lenis/react";
import Providers from "./providers";
import Preloader from "@/components/preloader/preloader";
import ogImage from "../../public/opengraph-image.png";
import type { Viewport } from "next";
import Head from "next/head";
import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKED_IN_URL,
  SITE_URL,
} from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark light",
};

const NAME = "Graydon von Gossler";
const TITLE = `${NAME} | Web Developer`;
const DESCRIPTION =
  "Portfolio showcasing projects and web development skills in JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL!),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: `${NAME} - Portfolio`,
  generator: "Next.js",
  authors: [{ name: NAME }],
  creator: NAME,
  publisher: NAME,
  keywords:
    "portfolio, front-end developer, frontend engineer, web development, web developer, frontend developer, creative, problem-solving, team player, UI/UX, user interface, javascript developer, typescript developer, react developer, nextjs developer, next.js app router, html, css, javascript, typescript, reactjs, react.js, redux, nextjs, next.js, tailwind, threejs, three.js, 3D graphics, 3D animations, framer motion, supabase, firebase, mui, shadcn, parallax, freelance, remote, startup-friendly, responsive design, high-performance websites, modern web design, english, german, afrikaans, south africa, international, graydon von gossler",
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
      url: "/favicon/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon/favicon.ico",
    },
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: NAME,
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: ogImage.src,
        alt: `${NAME} - Web Developer`,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImage.src],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  sameAs: [LINKED_IN_URL, GITHUB_URL],
  jobTitle: "Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "email",
    email: EMAIL_ADDRESS,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: `${NAME} - Portfolio`,
  description: DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
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
