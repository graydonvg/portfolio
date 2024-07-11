"use client";

import { useEffect, useRef } from "react";
import emitter from "@/lib/eventEmitter";
import { CONSTANTS } from "@/constants";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const recentTechnologies = [
    "HTML",
    "CSS",
    "tailwind",
    "javascript",
    "typescript",
    "react",
    "next.js",
    "supabase",
    "firebase",
    "MUI",
  ];
  const listMiddleIndex = Math.ceil(recentTechnologies.length / 2);
  const firstHalfOfList = recentTechnologies.slice(0, listMiddleIndex);
  const secondHalfOfList = recentTechnologies.slice(listMiddleIndex);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on(CONSTANTS.SCROLL_TO.ABOUT_SECTION, handleScroll);

    return () => {
      emitter.off(CONSTANTS.SCROLL_TO.ABOUT_SECTION, handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="card w-full space-y-4 rounded-md p-4 sm:p-6"
    >
      <h2 className="w-full text-center text-2xl font-bold capitalize md:text-4xl">
        about me
      </h2>
      <p className="text-xs sm:text-sm md:text-base">
        Hello! My name is Graydon. I began my career in the hospitality
        industry, working as a restaurant manager and administrator. While I
        enjoyed my time in hospitality, I constantly yearned for more
        intellectual challenges and missed the thrill of problem-solving.
      </p>
      <p className="text-xs sm:text-sm md:text-base">
        My love for solving problems dates back to high school, where I found
        great joy in tackling calculus problems. This passion led me to delve
        into the world of applied mathematics and statistics in my spare time.
        Eventually, I started working with programming languages like C++,
        Octave, MATLAB, and R. Despite my enthusiasm for math, coding began to
        captivate me even more.
      </p>
      <p className="text-xs sm:text-sm md:text-base">
        My interest in web development sparked through conversations with
        friends who were already in the field. Curious and eager to learn, I
        decided to give it a try. I started off with HTML, CSS and Javascript.
        The more I explored, the more I fell in love with it. I knew I had found
        exactly what I was looking for: a blend of problem-solving and
        creativity with instant feedback. Discovering the power of React was a
        game-changer for me, and my excitement only grew when I encountered
        Next.js.
      </p>
      <p className="text-xs sm:text-sm md:text-base">
        There is nothing quite like the satisfaction of overcoming a challenging
        coding problem. This feeling drives me to code every chance I get. My
        goal is to become an expert in front-end development and eventually
        expand my skills to become a full-stack developer.
      </p>
      <p className="text-xs sm:text-sm md:text-base">
        I am currently looking for a position as a full-time front-end
        developer.
      </p>
      <p className="text-xs sm:text-sm md:text-base">
        Here are a few technologies I&apos;ve been working with recently:
      </p>
      <div className="flex w-full gap-1 text-xs sm:text-sm md:w-1/3">
        <ul className="flex-1 list-inside list-disc capitalize">
          {firstHalfOfList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="flex-1 list-inside list-disc capitalize">
          {secondHalfOfList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
