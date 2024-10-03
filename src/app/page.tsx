import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto mt-24 max-w-screen-2xl space-y-48 px-[7.5rem]">
          <AboutMe />
          <Projects />
          <Technologies />
          <ContactMe />
        </div>
      </main>
    </div>
  );
}
