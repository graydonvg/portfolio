import { technologies } from "@/lib/constants";
import TypographyH2 from "./ui/typography/h2";
import Image from "next/image";
import SectionWrapper from "./section-wrapper";

export default function Technologies() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-16 md:px-14 lg:grid-cols-2 xl:px-0">
        <div className="flex flex-col items-start justify-center text-center lg:text-start">
          <TypographyH2>Some of my favourite technologies</TypographyH2>
        </div>
        <div className="grid grid-cols-3 gap-12 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex aspect-square flex-col items-center justify-center gap-4"
            >
              <div className="relative aspect-square w-full">
                <Image src={technology.iconPath} alt={technology.name} fill />
              </div>
              <span className="text-center text-sm font-semibold md:text-base lg:text-lg">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
