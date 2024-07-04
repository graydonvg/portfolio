import ScrollToAboutMeButton from "../ScrollToAboutMeButton";
import HeroButtons from "./HeroButtons";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center gap-4 text-center">
      <p className="hero-greeting-slide bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
        <span>Hello</span>
        <span>, I&apos;m Graydon</span>
      </p>
      <h1 className="hero-elements-grow-unblur flex flex-col items-center text-2xl/9 font-extrabold text-slate-300 sm:text-6xl/[5.625rem]">
        <span>Front-end web developer </span>
        <span>specializing in </span>
        <span className="bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">
          ReactJs
        </span>
      </h1>
      <HeroButtons />
      <ScrollToAboutMeButton />
    </section>
  );
}
