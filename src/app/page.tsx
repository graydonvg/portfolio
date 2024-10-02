import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-screen-xl">
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}
