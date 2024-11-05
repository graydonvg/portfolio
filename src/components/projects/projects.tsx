import TypographyH2 from "../ui/typography/h2";
import { projects } from "@/lib/constants";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:gap-16">
      <TypographyH2>
        <span>Projects</span>
      </TypographyH2>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return <ProjectCard key={index} project={project} isEven={isEven} />;
      })}
    </div>
  );
}
