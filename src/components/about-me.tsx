"use client";

import Image from "next/image";
import Section from "./section";
import TypographyH2 from "./ui/typography/h2";
import TypographyP from "./ui/typography/p";

export default function AboutMe() {
  function renderSilhouette(sizes: string) {
    return (
      <>
        <Image
          src="/silhouette.png"
          alt="silhouette"
          priority
          fill
          sizes={sizes}
          style={{ objectFit: "contain" }}
          className="blur-sm"
        />
        <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl bg-zinc-950/80 text-center text-2xl text-white">
          Photo coming soon
        </div>
      </>
    );
  }

  return (
    <Section className="bg-card text-card-foreground">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 xl:gap-16">
        <div className="relative hidden aspect-square w-full rounded-2xl md:block">
          {renderSilhouette(
            "(min-width: 1640px) 616px, (min-width: 1280px) 37.65vw, calc(50vw - 56px)",
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:items-start">
          <TypographyH2>About me</TypographyH2>
          <div className="relative block aspect-square w-full rounded-2xl bg-zinc-200 md:hidden">
            {renderSilhouette("calc(100vw - 64px)")}
          </div>
          <div>
            <TypographyP>
              I started my career in hospitality as a restaurant manager, but I
              soon craved more intellectual challenges. My love for
              problem-solving, sparked by high school calculus, led me to
              explore applied mathematics and programming languages such as C++,
              MATLAB, and R.
            </TypographyP>
            <TypographyP>
              Curiosity then brought me to web development, where I began with
              HTML, CSS, and JavaScript, eventually falling in love with React
              and Next.js. I thrive on the creative problem-solving that coding
              offers, and I&apos;m always excited to tackle new challenges.
            </TypographyP>
            <TypographyP>
              My goal is to master front-end development and grow into
              full-stack development.
            </TypographyP>
          </div>
        </div>
      </div>
    </Section>
  );
}
