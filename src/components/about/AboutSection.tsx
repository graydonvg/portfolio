"use client";

import { useEffect, useRef } from "react";
import AboutItem from "./AboutItem";
import emitter from "@/lib/eventEmitter";
import { CONSTANTS } from "@/constants";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

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
    <section ref={sectionRef} className="w-full">
      <div className="xs:gap-6 grid w-full grid-cols-12 gap-4 md:gap-8">
        <AboutItem className="col-span-full row-span-2 flex flex-col items-start">
          <h2 className="w-full text-center text-2xl font-bold capitalize md:text-4xl">
            about me
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base">
            Hello! My name is Graydon, and my path to front-end web development
            is a unique and exciting one. I began my career in the hospitality
            industry, working as a restaurant manager and administrator. While I
            enjoyed my time in hospitality, I constantly yearned for more
            intellectual challenges and missed the thrill of problem-solving.
          </p>
          <p className="text-xs font-light sm:text-sm md:text-base">
            My love for solving problems dates back to high school, where I
            found great joy in tackling calculus problems. This passion led me
            to delve into the world of applied mathematics and statistics in my
            spare time. Eventually, I started working with programming languages
            like C++, Octave/Matlab, and R. Despite my enthusiasm for math,
            coding began to captivate me even more.
          </p>
          <p className="text-xs font-light sm:text-sm md:text-base">
            My interest in web development sparked through conversations with
            friends who were already in the field. Curious and eager to learn, I
            decided to give it a try. The more I explored, the more I fell in
            love with it. Discovering the power of React was a game-changer for
            me, and my excitement only grew when I encountered Next.js. I knew I
            had found exactly what I was looking for: a blend of problem-solving
            and creativity with instant feedback.
          </p>
          <p className="text-xs font-light sm:text-sm md:text-base">
            There is nothing quite like the satisfaction of overcoming a
            challenging coding problem. This feeling drives me to code every
            chance I get. My goal is to become an expert in front-end
            development and eventually expand my skills to become a full-stack
            developer.
          </p>
          <p className="text-xs font-light sm:text-sm md:text-base">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="list-inside list-disc">
            <li>html</li>
            <li>css</li>
            <li>tailwind</li>
            <li>javascript</li>
            <li>typescript</li>
            <li>react</li>
            <li>next.js</li>
            <li>supabase</li>
            <li>firebase</li>
            <li>mui</li>
          </ul>
        </AboutItem>
      </div>
    </section>
  );
}
