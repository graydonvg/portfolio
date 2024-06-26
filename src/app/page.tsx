import AnimatedButton from "@/components/AnimatedButton";
import { Menu, Moon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none inset-0 -z-10 animate-hero-light-beam-fade-in">
        {/* <div className="light-beam light-beam-d"></div> */}
        <div className="light-beam light-beam-a"></div>
        <div className="light-beam light-beam-b"></div>
        <div className="light-beam light-beam-c"></div>
        {/* <div className="light-beam light-beam-e"></div> */}
      </div>

      <header className="relative left-0 top-0 z-50 flex min-h-[88px] animate-navbar-fade-in-down items-center justify-center px-4 py-7">
        <div className="flex flex-1 items-center justify-start">
          <Menu className="text-slate-400 sm:hidden" size={32} />
        </div>
        <Moon className="absolute text-slate-400" size={36} />
        <nav className="hidden flex-1 justify-end sm:flex">
          <ul className="flex items-center gap-4">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="flex min-h-screen flex-col items-center px-4">
        <section className="flex min-h-[calc(100svh-88px)] -translate-y-[88px] flex-col items-center justify-center space-y-4 text-center text-slate-300">
          <p className="animate-translate-hero-greeting bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            Hello, I'm Graydon
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
