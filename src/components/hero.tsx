"use client";

import TypographyH1 from "./ui/typography/h1";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { TOTAL_LOADING_SCREEN_TRANSITION_DURATION_IN_MS } from "@/lib/constants";
import { useRef } from "react";
import LightBeams from "./background-elements/hero-background-elements/light-beams";
import dynamic from "next/dynamic";
import { useEarthLoading } from "@/context/earth-loading-context";

const Earth = dynamic(
  () =>
    import("@/components/background-elements/hero-background-elements/earth"),
  {
    ssr: false,
  },
);

export default function Hero() {
  const { isEarthLoading } = useEarthLoading();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-33vh"]);

  return (
    <section
      // The footer references this to calculate the overlap
      id="hero"
      ref={heroRef}
      // If h-screen changes, change how the footer calculates the overlap
      className="flex h-screen flex-col items-center justify-center overflow-hidden px-4 py-[122px]"
    >
      {!isEarthLoading && (
        <>
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0, filter: "blur(50px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: TOTAL_LOADING_SCREEN_TRANSITION_DURATION_IN_MS / 1000,
            }}
            className="flex flex-col items-center justify-center gap-14"
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
            <Button>View my resume</Button>
          </motion.div>
          <LightBeams />
        </>
      )}
      <Earth />
    </section>
  );
}
