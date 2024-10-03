import { technologies } from "@/constants";
import { TypographyH2 } from "./ui/typography/h2";
import Image from "next/image";

export default function Technologies() {
  return (
    <section className="grid grid-cols-2 gap-16">
      <div className="flex flex-col items-start justify-center">
        <TypographyH2>Some of my favourite technologies</TypographyH2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="relative h-24 w-24">
              <Image src={technology.iconPath} alt={technology.name} fill />
            </div>
            <span className="text-lg font-semibold">{technology.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
