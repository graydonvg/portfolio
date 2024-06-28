import AnimatedButton from "@/components/AnimatedButton";
import ThemeSwitch from "@/components/ThemeSwitch";
import { NavDrawer } from "@/components/navDrawer/NavDrawer";

export default function Home() {
  return (
    <div className="relative mx-auto my-0 max-w-screen-2xl overflow-hidden">
      <header className="fixed z-50 flex w-full animate-fade-in-hero-lights-and-icons items-center justify-center py-7">
        <NavDrawer />
        <ThemeSwitch />
      </header>

      <div className="pointer-events-none fixed inset-0 -z-40 flex animate-fade-in-hero-lights-and-icons">
        <div className="dark:block">
          <div className="light-beam light-beam-1 moon-light"></div>
          <div className="light-beam light-beam-2 moon-light"></div>
          <div className="light-beam light-beam-3 moon-light"></div>
        </div>

        <div className="dark:hidden">
          <div className="light-beam light-beam-1 sun-light"></div>
          <div className="light-beam light-beam-2 sun-light"></div>
          <div className="light-beam light-beam-3 sun-light"></div>
        </div>
      </div>

      <main className="flex min-h-svh flex-col items-center px-4">
        <section className="flex min-h-svh flex-col items-center justify-center space-y-4 text-center">
          <p className="animate-translate-hero-greeting bg-gradient-to-b bg-clip-text text-xl font-semibold text-neutral-800 sm:text-2xl dark:from-slate-300 dark:via-slate-400 dark:to-slate-500 dark:text-transparent">
            <span>Hello</span>
            <span>, I&apos;m Graydon</span>
          </p>
          <h1 className="flex animate-unblur-hero-title flex-col items-center text-2xl/9 font-extrabold text-neutral-900 sm:text-6xl/[5.625rem] dark:text-slate-300">
            <span>Frontend web developer </span>
            <span>specializing in </span>
            <span className="bg-gradient-to-b bg-clip-text dark:from-slate-500 dark:via-indigo-300 dark:to-indigo-600 dark:text-transparent">
              ReactJs
            </span>
          </h1>
          <AnimatedButton />
        </section>
        <section>
          <h1>About section</h1>
        </section>
        <section>
          <h1>Projects section</h1>
        </section>
        <section>
          <h1>Contact section</h1>
        </section>
      </main>
    </div>
  );
}
