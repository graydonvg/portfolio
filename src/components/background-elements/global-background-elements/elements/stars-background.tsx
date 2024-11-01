"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

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
    <>
      {stars.map((star) => {
        return (
          <span
            key={star.id}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animation: `star-pulse-fade ${star.animationDuration} ease-in-out forwards`,
            }}
            className="absolute rounded-full bg-star-radial"
            onAnimationEnd={() => handleAnimationEnd(star.id)}
          />
        );
      })}
    </>
  );
}
