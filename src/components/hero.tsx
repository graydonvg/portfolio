"use client";

import TypographyH1 from "./ui/typography/h1";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { CSSProperties, ReactNode, useRef } from "react";
import LightBeams from "./background-elements/hero-background-elements/light-beams/light-beams";
import usePreloaderStatus from "@/hooks/use-preloader-status";
import { HERO_DELAY_IN_SEC } from "@/lib/constants";
import Link from "next/link";

type Props = {
  children?: ReactNode;
};

export default function Hero({ children }: Props) {
  const isLoading = usePreloaderStatus();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12.5vh"]);

  return (
    <section
      // The footer references this to calculate the overlap
      id="hero"
      ref={heroRef}
      // If h-screen changes, change how the footer calculates the overlap
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 py-[122px]"
    >
      {!isLoading && (
        <>
          <motion.div
            style={
              {
                y,
                "--hero-delay": `${HERO_DELAY_IN_SEC}s`,
              } as CSSProperties
            }
            className="hero-intro flex flex-col items-center justify-center gap-14"
          >
            <div className="flex flex-col items-center justify-center gap-3 whitespace-nowrap text-center sm:gap-4">
              <p className="text-[clamp(1.125rem,5vw,1.5rem)]/[clamp(1.75rem,5vw+1rem,2rem)] text-muted">
                Hello, I&apos;m Graydon!
              </p>
              <TypographyH1>
                <span>Front-end web developer </span>
                <span>specializing in ReactJS</span>
              </TypographyH1>
            </div>
            <Link
              tabIndex={-1}
              href="/docs/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View my resume</Button>
            </Link>
          </motion.div>
          <LightBeams />
        </>
      )}
      {children}
    </section>
  );
}
