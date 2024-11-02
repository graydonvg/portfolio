"use client";

import TypographyH1 from "./ui/typography/h1";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { TOTAL_LOADING_SCREEN_TRANSITION_DURATION_IN_MS } from "@/lib/constants";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20vh"]);

  return (
    <motion.div
      style={{ y }}
      ref={containerRef}
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
          <span className="text-spaceForeground">Front-end web developer </span>
          <span className="text-spaceForeground">specializing in ReactJS</span>
        </TypographyH1>
      </div>
      <Button>View my resume</Button>
    </motion.div>
  );
}
