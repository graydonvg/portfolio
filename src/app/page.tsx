import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies";
import Navbar from "@/components/navbar";
import BackgroundElements from "@/components/background-elements/background-elements";

export default function Home() {
  return (
    <>
      <div className="relative z-10 bg-slate-950">
        <header className="flex min-h-dvh flex-col items-center justify-center px-4 py-[122px] text-slate-300">
          <Navbar />
          <Hero />
        </header>
        <main>
          <div className="bg-background">
            <AboutMe />
          </div>
          <Projects />
          <div className="bg-background">
            <Technologies />
          </div>
        </main>
        <BackgroundElements />
      </div>
      <footer className="!w-full !max-w-full bg-slate-950">
        <ContactMe />
      </footer>
    </>
  );
}
