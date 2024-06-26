import AnimatedButton from "@/components/AnimatedButton";
import { NavDrawer } from "@/components/navDrawer/NavDrawer";
import { Moon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <header className="left-0 top-0 z-20 flex w-full animate-navbar-fade-in-down items-center justify-center py-7">
        <NavDrawer />
        <Moon className="text-slate-400" size={36} />
      </header>

      <div className="pointer-events-none inset-0 -z-10 animate-hero-light-beam-fade-in">
        {/* <div className="light-beam light-beam-d"></div> */}
        <div className="light-beam light-beam-a"></div>
        <div className="light-beam light-beam-b"></div>
        <div className="light-beam light-beam-c"></div>
        {/* <div className="light-beam light-beam-e"></div> */}
      </div>

      <main className="flex min-h-screen flex-col items-center px-4">
        <section className="flex min-h-svh -translate-y-[88px] flex-col items-center justify-center space-y-4 text-center text-slate-300">
          <p className="animate-translate-hero-greeting bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            Hello, I&apos;m Graydon
          </p>
          <h1 className="flex animate-hero-title-unblur flex-col items-center text-2xl/9 font-extrabold sm:text-6xl/[5.625rem]">
            <span>Frontend web developer </span>
            <span>specializing in </span>
            <span className="bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">
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
