"use client";

import { useEffect } from "react";

export default function LightBeams() {
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
      beams.length > 0 ? getAnimationDuration(beams[0]) : 5700;

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

  return (
    <div className="hero-elements-fade-in pointer-events-none absolute inset-0 -z-40 h-full w-full overflow-hidden">
      {/* Light beams for larger screens */}
      <div className="hidden sm:flex">
        {Array.from(Array(5)).map((_, i) => (
          <div
            key={i}
            className={`light-beam hero-light-beam-intro light-beam-${i + 1} pointer-events-none absolute left-1/2 top-12 h-[calc(100svh+5%)] w-[800px] origin-[50%_0%] -translate-x-1/2 bg-moon-light-conic blur-[20px]`}
          ></div>
        ))}
      </div>

      {/* Light beams for mobile screens */}
      <div className="flex sm:hidden">
        {Array.from(Array(3)).map((_, i) => (
          <div
            key={i}
            className={`light-beam hero-light-beam-intro light-beam-${i + 1} pointer-events-none absolute left-1/2 top-5 h-[calc(100svh+1%)] w-[800px] origin-[50%_0%] -translate-x-1/2 bg-moon-light-conic blur-[20px]`}
          ></div>
        ))}
      </div>
    </div>
  );
}
