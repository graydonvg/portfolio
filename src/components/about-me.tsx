"use client";

import { useRef } from "react";
import TypographyH2 from "./ui/typography/h2";
import TypographyP from "./ui/typography/p";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="grid grid-cols-2 gap-16">
      <div className="aspect-square w-full rounded-2xl bg-slate-200"></div>
      <div className="flex flex-col justify-center gap-4">
        <AnimatedWords type="h2" string="About me" />
        <div>
          <AnimatedWords
            type="p"
            string="I started my career in hospitality as a restaurant manager, but I
            soon craved more intellectual challenges. My love for
            problem-solving, sparked by high school calculus, led me to explore
            applied mathematics and programming languages such as C++, MATLAB,
            and R."
          />
          <AnimatedWords
            type="p"
            string="Curiosity then brought me to web development, where I began with
            HTML, CSS, and JavaScript, eventually falling in love with React and
            Next.js. I thrive on the creative problem-solving that coding
            offers, and I'm always excited to tackle new challenges."
          />
          <AnimatedWords
            type="p"
            string="My goal is to master front-end development and grow into full-stack
            development."
          />
        </div>
      </div>
    </section>
  );
}

const slideUp = {
  initial: {
    y: "100%",
  },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  hide: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const TYPOGRAPHY_COMPONENTS = {
  p: TypographyP,
  h2: TypographyH2,
};

function AnimatedWords({ string, type }: { string: string; type: "p" | "h2" }) {
  const container = useRef(null);
  const isInView = useInView(container);
  const words = string.split(" ");
  const paragraphLength = words.length;
  const Component = TYPOGRAPHY_COMPONENTS[type];

  return (
    <div ref={container} className="[&:not(:first-child)]:mt-6">
      <Component>
        {words.map((word, index) => {
          return (
            <span key={index} className="inline-flex overflow-hidden">
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "show" : "hide"}
                key={index}
              >
                {word}
                {index !== paragraphLength ? <span>&nbsp;</span> : ""}
              </motion.span>
            </span>
          );
        })}
      </Component>
    </div>
  );
}
