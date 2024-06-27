import AnimatedButton from "@/components/AnimatedButton";
import { NavDrawer } from "@/components/navDrawer/NavDrawer";
import { Moon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative mx-auto my-0 max-w-screen-2xl overflow-hidden">
      <header className="animate-fade-in-hero-lights-and-icons fixed z-50 flex w-full items-center justify-center py-7">
        <NavDrawer />
        <Moon
          className="hover-hover:hover:drop-shadow-illuminate active:drop-shadow-illuminate cursor-pointer text-slate-400"
          size={36}
        />
      </header>

      <div className="animate-fade-in-hero-lights-and-icons pointer-events-none fixed inset-0 -z-40 flex">
        {/* <div className="light-beam light-beam-d"></div> */}
        <div className="light-beam light-beam-1"></div>
        <div className="light-beam light-beam-2"></div>
        <div className="light-beam light-beam-3"></div>
        {/* <div className="light-beam light-beam-e"></div> */}
      </div>

      <main className="flex min-h-svh flex-col items-center px-4">
        <section className="flex min-h-svh flex-col items-center justify-center space-y-4 text-center">
          <p className="animate-translate-hero-greeting bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            <span>Hello</span>
            <span>, I&apos;m Graydon</span>
          </p>
          <h1 className="animate-unblur-hero-title flex flex-col items-center text-2xl/9 font-extrabold sm:text-6xl/[5.625rem]">
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
