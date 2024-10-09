"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function RoundedOverlayTop() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={container}
      style={{ height, willChange: "height" }}
      className="relative z-10"
    >
      <div className="absolute -left-[10%] h-[750%] w-[120%] -translate-y-[23%] rounded-[50%_50%_0%_0%] bg-background"></div>
    </motion.div>
  );
}
