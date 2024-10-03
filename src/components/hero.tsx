import { Button } from "./ui/button";
import TypographyH1 from "./ui/typography/h1";

export default function Hero() {
  return (
    <header className="flex min-h-[856px] flex-col items-center justify-center bg-zinc-200 px-20 py-[122px]">
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xl leading-[1.875rem]">Hello, I&apos;m Graydon!</p>
          <TypographyH1>
            <span>Front-end web developer </span>
            <span>specializing in ReactJS</span>
          </TypographyH1>
        </div>
        <Button className="w-fit rounded-full">View my resume</Button>
      </div>
    </header>
  );
}
