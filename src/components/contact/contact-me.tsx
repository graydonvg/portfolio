"use client";

import { useEffect, useRef } from "react";
import ContactForm from "./contact-form";
import emitter from "@/lib/event-emitter";
import TypographyP from "../ui/typography/p";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { EMAIL_ADDRESS, LINKS } from "@/lib/constants";

export default function ContactMe() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start 0.42"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (container.current) {
        container.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on("contactForm", handleScroll);

    return () => {
      emitter.off("contactForm", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={container}
      style={{ y }}
      className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-4 pt-24 text-secondary md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 xl:px-[13.5rem]"
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
          <TypographyP>
            <Link
              href={`mailto:${EMAIL_ADDRESS}`}
              className="text-blue-400 hover:text-blue-500 hover:underline"
            >
              {EMAIL_ADDRESS}
            </Link>{" "}
            -{" "}
            <Link
              href={LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 visited:text-purple-400 hover:text-blue-500 hover:underline visited:hover:text-purple-500"
            >
              Github
            </Link>{" "}
            -{" "}
            <Link
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 visited:text-purple-400 hover:text-blue-500 hover:underline visited:hover:text-purple-500"
            >
              LinkedIn
            </Link>
          </TypographyP>
        </div>
      </div>
      <ContactForm />
    </motion.div>
  );
}
