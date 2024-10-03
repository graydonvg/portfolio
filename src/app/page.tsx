import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-screen-xl">
        <AboutMe />
        <Projects />
        <Technologies />
      </div>
    </main>
  );
}
