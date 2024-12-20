"use client";

import ContactForm from "./contact-form";
import TypographyP from "../ui/typography/p";
import Link from "next/link";
import { EMAIL_ADDRESS, navOptions } from "@/lib/constants";
import { scrollToContactForm } from "@/lib/utils";

export default function ContactMe() {
  const navOptionsWithLinks = navOptions.filter((option) => option.link);

  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-16 text-secondary sm:gap-12 sm:py-24 md:px-8 md:py-36 lg:grid-cols-2 lg:gap-20 lg:px-12 xl:px-[13.5rem]">
      <div>
        <h2 className="text-pretty text-[2.5rem] font-semibold leading-[2.75rem] tracking-tight">
          I&apos;m seeking a full-time front-end developer role.
        </h2>
        <div className="mt-6 sm:mt-8">
          <TypographyP>
            Whether you&apos;d like to collaborate on a project, have a job
            offer, or just want to chat about code, send me a message, and
            I&apos;ll get back to you as soon as I can.
          </TypographyP>
          <div className="mt-4 text-lg sm:mt-6">
            <Link
              href={`mailto:${EMAIL_ADDRESS}`}
              className="text-blue-400 hover:text-blue-500 hover:underline"
              onFocus={scrollToContactForm}
            >
              {EMAIL_ADDRESS}
            </Link>{" "}
            -{" "}
            {navOptionsWithLinks.map((option, index) => {
              const isLastOption = index === navOptionsWithLinks.length - 1;

              return (
                <span key={index}>
                  <Link
                    href={option?.link ?? ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 hover:underline"
                    onFocus={scrollToContactForm}
                  >
                    {option?.label}
                  </Link>
                  {!isLastOption ? <span> - </span> : null}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
