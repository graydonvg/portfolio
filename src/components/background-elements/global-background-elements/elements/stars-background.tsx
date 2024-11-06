"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { STARS_DELAY_IN_SEC } from "@/lib/constants";

const BASE_STARS = 35;
const MAX_STARS = 250;
const MAX_WIDTH = 5120;

type Star = {
  id: number;
  top: string;
  left: string;
  size: string;
  animationDuration: string;
};

function createStar(): Star {
  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 6}px`,
    animationDuration: `${15 + Math.random() * 15}s`,
  };
}

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    function updateStars() {
      // Adjust the number of stars relative to the viewport width
      const viewportWidth = window.innerWidth;
      const targetStarCount = Math.floor(
        BASE_STARS + ((MAX_STARS - BASE_STARS) * viewportWidth) / MAX_WIDTH,
      );

      setStars((prevStars) => {
        if (prevStars.length < targetStarCount) {
          return [
            ...prevStars,
            ...Array.from(
              { length: targetStarCount - prevStars.length },
              createStar,
            ),
          ];
        }

        if (prevStars.length > targetStarCount) {
          return prevStars.slice(0, targetStarCount);
        }

        return prevStars;
      });
    }

    updateStars();

    window.addEventListener("resize", updateStars);

    return () => {
      window.removeEventListener("resize", updateStars);
    };
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.span
          key={star.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: STARS_DELAY_IN_SEC,
            duration: 1,
          }}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `star-pulse ${star.animationDuration} linear infinite alternate`,
          }}
          className="absolute rounded-full bg-star-radial"
        />
      ))}
    </>
  );
}
