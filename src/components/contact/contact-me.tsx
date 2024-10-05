"use client";

import { useEffect, useRef } from "react";
import ContactForm from "./contact-form";
import emitter from "@/lib/event-emitter";
import TypographyP from "../ui/typography/p";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ContactMe() {
  const element = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.54], [-500, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (element.current) {
        element.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on("contactForm", handleScroll);

    return () => {
      emitter.off("contactForm", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={element}
      style={{ y }}
      className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-20 px-[13.5rem] pt-24 text-secondary"
    >
      <div>
        <h2 className="text-pretty text-[2.5rem] font-semibold leading-[2.75rem] tracking-tight">
          I&apos;m seeking a full-time front-end developer role.
        </h2>
        <div className="mt-8">
          <TypographyP>
            Whether you&apos;d like to collaborate on a project, have a job
            offer, or just want to chat about code, send me a message, and
            I&apos;ll get back to you as soon as I can.
          </TypographyP>
          <TypographyP>graydonvg@gmail.com - Github - LinkedIn</TypographyP>
        </div>
      </div>
      <ContactForm />
    </motion.div>
  );
}
