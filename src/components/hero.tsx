"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import TypographyH1 from "./ui/typography/h1";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end 0.63", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20dvh"]);

  useMotionValueEvent(scrollYProgress, "change", (e) => console.log(e));

  return (
    <motion.div
      ref={container}
      style={{ y }}
      initial={{ opacity: 0, scale: 0, filter: "blur(50px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col items-center justify-center gap-14 pb-[40px]"
    >
      <div className="flex flex-col items-center justify-center gap-3 whitespace-nowrap text-center sm:gap-4">
        <p className="text-[clamp(1.125rem,5vw,1.5rem)]/[clamp(1.75rem,5vw+1rem,2rem)]">
          Hello, I&apos;m Graydon!
        </p>
        <TypographyH1>
          <span className="text-white">Front-end web developer </span>
          <span className="text-white">specializing in ReactJS</span>
        </TypographyH1>
      </div>
      <Button>View my resume</Button>
    </motion.div>
  );
}
