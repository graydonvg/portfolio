import AnimatedButton from "@/components/AnimatedButton";
import ThemeSwitch from "@/components/ThemeSwitch";
import { NavDrawer } from "@/components/navDrawer/NavDrawer";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-screen-2xl overflow-hidden">
      <header className="fixed left-0 top-0 z-50 flex h-[92px] w-full animate-fade-in-hero-lights-and-icons items-center justify-center">
        <NavDrawer />
        <ThemeSwitch />
      </header>

      <div className="pointer-events-none fixed inset-0 -z-40 flex animate-fade-in-hero-lights-and-icons">
        {/* <div className="hidden dark:block"> */}
        <div className="light-beam light-beam-1 moon-light"></div>
        <div className="light-beam light-beam-2 moon-light"></div>
        <div className="light-beam light-beam-3 moon-light"></div>
        <div className="light-beam light-beam-4 moon-light"></div>
        <div className="light-beam light-beam-5 moon-light"></div>
        {/* </div> */}

        {/* <div className="dark:hidden">
          <div className="light-beam light-beam-1 sun-light"></div>
          <div className="light-beam light-beam-2 sun-light"></div>
          <div className="light-beam light-beam-3 sun-light"></div>
          <div className="light-beam light-beam-4 sun-light"></div>
          <div className="light-beam light-beam-5 sun-light"></div>
        </div> */}
      </div>

      <main className="flex min-h-svh flex-col items-center px-4">
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
