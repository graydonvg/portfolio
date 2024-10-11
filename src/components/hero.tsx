"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import TypographyH1 from "./ui/typography/h1";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end 0.62", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <motion.div
      ref={container}
      style={{ y }}
      initial={{ opacity: 0, scale: 0, filter: "blur(50px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col items-center justify-center gap-14"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-nowrap text-center sm:gap-4">
        <p className="text-[clamp(1.125rem,5vw,1.5rem)]/[clamp(1.75rem,5vw+1rem,2rem)]">
          Hello, I&apos;m Graydon!
        </p>
        <TypographyH1>
          <span>Front-end web developer </span>
          <span>specializing in ReactJS</span>
        </TypographyH1>
      </div>
      <Button>View my resume</Button>
    </motion.div>
  );
}

// text-[clamp(1.5rem,5vw+0.5rem,4.75rem)]/[clamp(2.25rem,5vw+1rem,5.25rem)]

// text-lg sm:text-2xl

// text-xl/[1.875rem]
