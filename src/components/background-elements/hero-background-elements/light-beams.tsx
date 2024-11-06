"use client";

import { CSSProperties, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { LIGHT_BEAM_DELAY_IN_SEC } from "@/lib/constants";

export default function LightBeams() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60vh"]);

  useEffect(() => {
    const beams = document.querySelectorAll(".light-beam");

    // Get the computed style for the light beam transform animation duration
    const getAnimationDuration = (element: Element) => {
      const style = window.getComputedStyle(element);
      const transformDurationString =
        style.animationDuration.split(",")[1] || "5s";
      const transformDelayString = style.animationDelay.split(",")[1] || "0.7s";
      const transformDurationMillisecond =
        parseFloat(transformDurationString) * 1000;
      const transformDelayMillisecond = parseFloat(transformDelayString) * 1000;

      return transformDurationMillisecond + transformDelayMillisecond;
    };

    const transformDuration =
      beams.length > 0 ? getAnimationDuration(beams[0]) : 7000;

    const timer = setTimeout(() => {
      beams.forEach((beam) => {
        // Remove the transform animation and keep only the pulsate animation
        // This prevents the transform animation from repeating when viewport size changes and light beams 4 and 5 are removed/added
        beam.classList.add("hero-light-beam-pulsate");
        beam.classList.remove("hero-light-beam-intro");
      });
    }, transformDuration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function stopIntroOnResize() {
      const beams = document.querySelectorAll(".hero-light-beam-intro");

      if (beams.length === 0) return;

      // Remove the transform animation and keep only the pulsate animation
      // This prevents the beams from all pointing down if the viewport is resized before the intro animation completes
      beams.forEach((beam) => {
        beam.classList.add("hero-light-beam-pulsate");
        beam.classList.remove("hero-light-beam-intro");
      });
    }

    window.addEventListener("resize", stopIntroOnResize);

    return () => window.removeEventListener("resize", stopIntroOnResize);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={
        {
          y,
          "--light-beam-intro-delay": `${LIGHT_BEAM_DELAY_IN_SEC}s`,
        } as CSSProperties
      }
      className="pointer-events-none absolute inset-0 -z-40 h-screen w-full overflow-hidden"
    >
      {/* Light beams for larger screens */}
      <div className="hidden sm:flex">
        {Array.from(Array(5)).map((_, i) => (
          <div
            key={i}
            className={`light-beam hero-light-beam-intro light-beam-${i + 1} pointer-events-none absolute -top-20 left-1/2 h-[130vh] w-[800px] origin-[50%_0%] -translate-x-1/2 bg-light-beam-conic blur-[20px]`}
          ></div>
        ))}
      </div>

      {/* Light beams for smaller screens */}
      <div className="flex sm:hidden">
        {Array.from(Array(3)).map((_, i) => (
          <div
            key={i}
            className={`light-beam hero-light-beam-intro light-beam-${i + 1} pointer-events-none absolute -top-20 left-1/2 h-[130vh] w-[800px] origin-[50%_0%] -translate-x-1/2 bg-light-beam-conic blur-[20px]`}
          ></div>
        ))}
      </div>
    </motion.div>
  );
}
