"use client";

import { CSSProperties, useEffect, useState } from "react";

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
        <span
          key={star.id}
          style={
            {
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              "--star-duration": star.animationDuration,
            } as CSSProperties
          }
          className="animate-stars absolute rounded-full bg-star-radial"
        />
      ))}
    </>
  );
}
