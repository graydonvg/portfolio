/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useRef } from "react";
import AboutItem from "./AboutItem";
import emitter from "@/lib/eventEmitter";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on("scrollToAboutMeSection", handleScroll);

    return () => {
      emitter.off("scrollToAboutMeSection", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-6xl">
      <div className="xs:gap-6 grid w-full grid-cols-12 gap-4 md:gap-8">
        <AboutItem className="col-span-full row-span-2 flex flex-col items-start">
          <h2 className="w-full text-center text-xl font-semibold md:text-2xl">
            About me
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sint
            tempore laborum doloribus corrupti labore, repellendus possimus
            error facere doloremque.
          </p>
          <p className="text-xs font-light sm:text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sint
            tempore laborum doloribus corrupti labore, repellendus possimus
            error facere doloremque.
          </p>
          <p className="text-xs font-light sm:text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sint
            tempore laborum doloribus corrupti labore, repellendus possimus
            error facere doloremque.
          </p>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex flex-1 justify-center">
              <img
                className="h-auto"
                src="https://github-readme-stats.vercel.app/api?username=graydonvg&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=&text_bold=false"
                alt="GitHub Stats"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 justify-center">
              <img
                className="h-auto"
                src="https://github-readme-streak-stats.herokuapp.com?user=graydonvg&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
                alt="GitHub Streak"
                loading="lazy"
              />
            </div>
          </div>
        </AboutItem>
      </div>
    </section>
  );
}
