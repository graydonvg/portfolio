"use client";

import { useEffect, useState } from "react";
import StarsBackground from "./elements/stars-background";
import ShootingStars from "./elements/shooting-stars/shooting-stars";

export default function GlobalBackgroundElements() {
  const techSection =
    typeof window !== "undefined"
      ? document.getElementById("tech-section")
      : null;
  const [distanceFromTop, setDistanceFromTop] = useState("100%");
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Use IntersectionObserver to check when the technologies section is visible to start clipping the background elements to hide them in the footer section.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0 },
    );

    if (techSection) {
      observer.observe(techSection);
    }

    return () => {
      if (techSection) {
        observer.unobserve(techSection);
      }
    };
  }, [techSection]);

  useEffect(() => {
    if (!isInView) return;

    const calculateDistanceFromTop = () => {
      if (!techSection) return;

      const rect = techSection.getBoundingClientRect();

      // Distance between the bottom of the element and the top of the viewport
      // The amount the backgroundElements need to be clipped starting from the bottom of the viewport
      const distance = 0 + rect.bottom;
      setDistanceFromTop(`${distance}px`);
    };

    window.addEventListener("scroll", calculateDistanceFromTop);
    window.addEventListener("resize", calculateDistanceFromTop);

    calculateDistanceFromTop();

    return () => {
      window.removeEventListener("scroll", calculateDistanceFromTop);
      window.removeEventListener("resize", calculateDistanceFromTop);
    };
  }, [techSection, isInView]);

  return (
    <div
      style={{
        clipPath: `inset(0 0 calc(100% - ${distanceFromTop}) 0)`,
      }}
      className="pointer-events-none fixed inset-0 -z-50 h-full w-full overflow-hidden"
    >
      <StarsBackground />
      <ShootingStars />
    </div>
  );
}
