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
        </AboutItem>
      </div>
    </section>
  );
}
