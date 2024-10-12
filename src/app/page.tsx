import AboutMe from "@/components/about-me";
import RoundedOverlay from "@/components/rounded-overlay";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
// import Navbar from "@/components/navbar";
import BackgroundElements from "@/components/background-elements/background-elements";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <header className="relative z-10 flex min-h-dvh flex-col items-center justify-center bg-slate-950 px-4 py-[122px] text-slate-300">
          {/* <Navbar /> */}
          <Hero />
          <BackgroundElements />
        </header>
        <div className="relative z-20 bg-background">
          <main className="mx-auto max-w-screen-2xl space-y-48 px-4 py-24 md:px-8 xl:px-[7.5rem]">
            <AboutMe />
            <Projects />
            <Technologies />
          </main>
        </div>
        <RoundedOverlay />
        <footer className="z-0 bg-slate-950 pb-10 text-slate-300">
          <ContactMe />
        </footer>
      </div>
    </>
  );
}
