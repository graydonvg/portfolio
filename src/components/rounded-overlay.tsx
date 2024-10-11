"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function RoundedOverlay() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start 0.42"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={container}
      style={{ height, willChange: "height" }}
      className="relative z-10"
    >
      <div className="absolute -left-[10%] h-[750%] w-[120%] -translate-y-[64%] rounded-[0%_0%_50%_50%] bg-background shadow-[0_60px_50px_rgba(0,0,0,0.75)]"></div>
    </motion.div>
  );
}
