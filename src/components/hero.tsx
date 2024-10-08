import { Button } from "./ui/button";
import TypographyH1 from "./ui/typography/h1";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-xl/[1.875rem]">Hello, I&apos;m Graydon!</p>
        <TypographyH1>
          <span>Front-end web developer </span>
          <span>specializing in ReactJS</span>
        </TypographyH1>
      </div>
      <Button>View my resume</Button>
    </div>
  );
}
