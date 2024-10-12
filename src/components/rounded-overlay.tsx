"use client";

import { useScroll, useTransform, motion, ScrollOffset } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

export default function RoundedOverlay() {
  const footer =
    typeof window !== "undefined" ? document.querySelector("footer") : null;
  const container = useRef(null);
  const [offset, setOffset] = useState<ScrollOffset | undefined>([
    "start end",
    "start start",
  ]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset,
  });
  const height = useTransform(scrollYProgress, [0, 1], ["10vh", "0vh"]);

  useLayoutEffect(() => {
    function updateOffset() {
      if (footer?.offsetHeight && footer?.offsetHeight < window.innerHeight) {
        const footerHeight = footer.offsetHeight;
        const offsetRatio = 1 - footerHeight / window.innerHeight;

        setOffset(["start end", `start ${offsetRatio}`]);
      } else {
        setOffset(["start end", "start start"]);
      }
    }

    updateOffset();

    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, [footer]);

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
