import AboutMe from "@/components/about-me";
import RoundedOverlay from "@/components/rounded-overlay";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies";
import Navbar from "@/components/navbar";
import BackgroundElements from "@/components/background-elements/background-elements";
import WaveSeparatorBottom from "@/components/wave-separator-bottom";

export default function Home() {
  return (
    <div className="relative z-0 overflow-hidden bg-slate-950">
      <header className="relative z-10 flex min-h-[calc(100dvh+40px)] flex-col items-center justify-center px-4 py-[122px] text-slate-300">
        <Navbar />
        <Hero />
        <WaveSeparatorBottom />
      </header>
      <main className="bg-transparent">
        <section className="relative z-20 bg-background">
          <AboutMe />
        </section>
        <Projects />
        <section className="relative z-20 bg-background">
          <Technologies />
        </section>
        <RoundedOverlay />
      </main>
      <footer className="!w-full !max-w-full bg-slate-950 text-slate-300">
        <ContactMe />
      </footer>
      <BackgroundElements />
    </div>
  );
}
