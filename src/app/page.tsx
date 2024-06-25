import AnimatedButton from "@/components/AnimatedButton";
import FireFliesBackground from "@/components/FireFliesBackground";
import { Menu, Moon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none inset-0 -z-10">
        {/* <div className="light-beam light-beam-four"></div> */}
        <div className="light-beam light-beam-one"></div>
        <div className="light-beam light-beam-two"></div>
        <div className="light-beam light-beam-three"></div>
        {/* <div className="light-beam light-beam-five"></div> */}
      </div>

      <header className="relative left-0 top-0 z-50 mb-28 flex items-center justify-center px-4 py-7">
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

      <main className="flex min-h-screen flex-col items-center justify-between px-4">
        <section className="space-y-4 text-center text-slate-300">
          <p className="bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            Hello, I'm Graydon
          </p>
          <h1 className="flex flex-col items-center text-2xl/9 font-extrabold sm:text-6xl/[5.625rem]">
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
