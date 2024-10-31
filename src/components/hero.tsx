"use client";

import TypographyH1 from "./ui/typography/h1";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  PAGE_TRANSITION_DELAY,
  PAGE_TRANSITION_DURATION,
  TOTAL_TYPEWRITER_DURATION,
} from "@/lib/constants";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, filter: "blur(50px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        delay:
          (TOTAL_TYPEWRITER_DURATION +
            PAGE_TRANSITION_DELAY +
            PAGE_TRANSITION_DURATION) /
          1000,
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
