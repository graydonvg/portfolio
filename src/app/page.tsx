import AboutMe from "@/components/about-me";
import RoundedOverlayBottom from "@/components/rounded-overlay/rounded-overlay-bottom";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Navbar from "@/components/navbar";
import BackgroundElements from "@/components/background-elements";
import RoundedOverlayTop from "@/components/rounded-overlay/rounded-overlay-top";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <header className="flex min-h-dvh flex-col items-center justify-center px-20 py-[122px] text-slate-300">
          <Navbar />
          <Hero />
        </header>
        <RoundedOverlayTop />
        <div className="relative z-20 bg-background">
          <main className="z-20 mx-auto max-w-screen-2xl space-y-48 px-[7.5rem] py-24">
            <AboutMe />
            <Projects />
            <Technologies />
          </main>
        </div>
        <RoundedOverlayBottom />
        <footer className="z-0 pb-10 text-slate-300">
          <ContactMe />
        </footer>
      </div>
      <BackgroundElements />
    </>
  );
}
