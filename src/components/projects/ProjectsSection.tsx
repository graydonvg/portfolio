import { CONSTANTS } from "@/constants";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="space-y-4">
      <h2 className="w-full text-center text-2xl font-bold capitalize md:text-4xl">
        my projects
      </h2>
      {CONSTANTS.PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
