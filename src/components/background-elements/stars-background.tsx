"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const { scrollYProgress } = useScroll();
  const [stars, setStars] = useState<Star[]>([]);
  const [hideStars, setHideStars] = useState(false);

  useEffect(() => {
    scrollYProgress.on("change", (e) =>
      e > 0.5 ? setHideStars(true) : setHideStars(false),
    );
  }, [scrollYProgress]);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      className={cn("fixed left-0 top-0 -z-50 h-full w-full overflow-hidden", {
        absolute: hideStars,
      })}
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
    </motion.div>
  );
}
