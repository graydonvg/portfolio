import { technologies } from "@/lib/constants";
import TypographyH2 from "../ui/typography/h2";
import Technology from "./technology";
import Section from "../section";

export default function Technologies() {
  return (
    <Section className="bg-card text-card-foreground shadow-[0_60px_50px_rgba(0,0,0,0.75)]">
      <div
        id="tech-section"
        className="grid grid-cols-1 gap-8 px-4 md:px-14 lg:grid-cols-2 xl:px-0"
      >
        <div className="flex flex-col items-start justify-center text-center lg:text-start">
          <TypographyH2>Some of my favourite technologies</TypographyH2>
        </div>
        <div className="grid grid-cols-3 gap-12 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <Technology key={index} {...technology} />
          ))}
        </div>
      </div>
    </Section>
  );
}
