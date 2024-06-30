import AnimatedButton from "./AnimatedButton";

export default function HeroSection() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center space-y-4 text-center">
      <p className="animate-translate-hero-greeting bg-gradient-to-b from-yellow-200 to-yellow-50 bg-clip-text text-xl font-semibold text-transparent dark:from-slate-300 dark:via-slate-400 dark:to-slate-500 sm:text-2xl">
        <span>Hello</span>
        <span>, I&apos;m Graydon</span>
      </p>
      <h1 className="flex animate-unblur-hero-title flex-col items-center text-2xl/9 font-extrabold text-white dark:text-slate-300 sm:text-6xl/[5.625rem]">
        <span>Frontend web developer </span>
        <span>specializing in </span>
        <span className="bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent dark:from-indigo-200 dark:via-indigo-300 dark:to-indigo-600">
          ReactJs
        </span>
      </h1>
      <AnimatedButton />
    </section>
  );
}
