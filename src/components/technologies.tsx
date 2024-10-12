import { technologies } from "@/lib/constants";
import TypographyH2 from "./ui/typography/h2";
import Image from "next/image";

export default function Technologies() {
  return (
    <section className="grid grid-cols-1 gap-16 md:px-14 lg:grid-cols-2 xl:px-0">
      <div className="flex flex-col items-start justify-center text-center lg:text-start">
        <TypographyH2>Some of my favourite technologies</TypographyH2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="relative h-12 w-12 md:h-[72px] md:w-[72px] lg:h-24 lg:w-24">
              <Image src={technology.iconPath} alt={technology.name} fill />
            </div>
            <span className="text-sm font-semibold md:text-base lg:text-lg">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
