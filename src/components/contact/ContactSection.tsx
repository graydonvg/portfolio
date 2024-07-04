"use client";

import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import emitter from "@/lib/eventEmitter";
import { CONSTANTS } from "@/constants";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on(CONSTANTS.SCROLL_TO.CONTACT_SECTION, handleScroll);

    return () => {
      emitter.off(CONSTANTS.SCROLL_TO.CONTACT_SECTION, handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-8"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-6 sm:w-3/4">
        <h2 className="w-full text-center text-xl font-semibold md:text-2xl">
          Contact me
        </h2>
        <p className="text-center text-sm font-light sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          repellat, voluptas cupiditate nemo, modi dolores adipisci illum
          temporibus rem sapiente atque? Unde delectus quisquam magnam
          accusantium similique nostrum aliquid nulla.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
