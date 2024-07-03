import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";

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
    </>
  );
}
