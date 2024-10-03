import Navbar from "./navbar";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography/h1";
import { TypographyP } from "./ui/typography/p";

export default function Hero() {
  return (
    <header className="relative flex h-[856px] flex-col items-center justify-center bg-zinc-200 px-20 py-8">
      <Navbar />

      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <TypographyP>Hello, I’m Graydon!</TypographyP>
          <TypographyH1>
            <span>Front-end web developer </span>
            <span>specializing in ReactJs</span>
          </TypographyH1>
        </div>
        <Button className="w-fit rounded-full">Contact Me</Button>
      </div>
    </header>
  );
}
