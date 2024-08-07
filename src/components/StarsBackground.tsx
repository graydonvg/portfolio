"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: string;
  left: string;
  size: string;
  animationDuration: number;
};

function createStar(): Star {
  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 6}px`,
    animationDuration: 15 + Math.random() * 15,
  };
}

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const initialStars = Array.from({ length: 75 }, createStar);
    setStars(initialStars);
  }, []);

  function addStar() {
    const newStar = createStar();
    setStars((prevStars) => [...prevStars, newStar]);
  }

  function removeStar(id: number) {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  }

  function handleAnimationEnd(id: number) {
    removeStar(id);
    addStar();
  }

  return (
    <div
      suppressHydrationWarning
      className="hero-elements-fade-in fixed left-0 top-0 -z-50 h-full w-full overflow-hidden"
    >
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-star-radial"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animation: `star-pulse-fade ${star.animationDuration}s ease-in-out forwards`,
            }}
            onAnimationEnd={() => handleAnimationEnd(star.id)}
          />
        );
      })}
    </div>
  );
}
