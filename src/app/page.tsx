import AboutMe from "@/components/about-me";
import RoundedOverlay from "@/components/rounded-overlay";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <header className="flex min-h-[856px] flex-col items-center justify-center bg-zinc-200 px-20 py-[122px]">
        <Navbar />
        <Hero />
      </header>
      <main className="relative z-20 mx-auto max-w-screen-2xl space-y-48 bg-background px-[7.5rem] py-24">
        <AboutMe />
        <Projects />
        <Technologies />
      </main>
      <RoundedOverlay />
      <footer className="z-0 bg-zinc-800">
        <ContactMe />
      </footer>
    </div>
  );
}
