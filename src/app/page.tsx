import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import BackgroundElements from "@/components/BackgroundElements";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-screen-2xl flex-col items-center px-4">
        <HeroSection />
        <div className="flex flex-col items-center gap-8">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <BackgroundElements />
    </>
  );
}
