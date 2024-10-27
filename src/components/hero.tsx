"use client";

import { MutableRefObject } from "react";
import TypographyH1 from "./ui/typography/h1";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "./ui/button";

type Props = {
  headerRef: MutableRefObject<HTMLElement | null>;
};

export default function Hero({ headerRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0dvh", "-40dvh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <motion.div
      style={{ y, scale }}
      initial={{ opacity: 0, scale: 0, filter: "blur(50px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col items-center justify-center gap-14"
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
