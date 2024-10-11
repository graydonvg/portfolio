import AboutMe from "@/components/about-me";
import RoundedOverlay from "@/components/rounded-overlay";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Navbar from "@/components/navbar";
import BackgroundElements from "@/components/background-elements";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <header className="relative z-10 flex min-h-dvh flex-col items-center justify-center bg-slate-950 px-20 py-[122px] text-slate-300">
          <Navbar />
          <Hero />
          <BackgroundElements />
        </header>
        <div className="relative z-20 bg-background">
          <main className="mx-auto max-w-screen-2xl space-y-48 px-[7.5rem] py-24">
            <AboutMe />
            <Projects />
            <Technologies />
          </main>
        </div>
        <RoundedOverlay />
        <footer className="relative z-0 h-[800px] bg-slate-950">
          <div className="relative -top-[100dvh] h-[calc(100dvh+800px)]">
            <div className="fixed top-[calc(100dvh-800px)] h-[800px] w-full">
              <ContactMe />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

{
  /* <footer className="relative z-0 h-[800px] bg-slate-950">
          <div className="relative -top-[100dvh] h-[calc(100dvh+800px)]">
            <div className="fixed top-[calc(100dvh-800px)] h-[800px]">
              <ContactMe />
            </div>
          </div>
        </footer> */
}
