import TypographyH2 from "../ui/typography/h2";
import { projects } from "@/lib/constants";
import WaveSeparatorTop from "../wave-separator-top";
import WaveSeparatorBottom from "../wave-separator-bottom";
import SectionWrapper from "../section-wrapper";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="relative bg-slate-900">
      <WaveSeparatorTop />
      <SectionWrapper>
        <div className="flex flex-col items-center justify-center gap-16">
          <TypographyH2>
            <span className="text-white">Projects</span>
          </TypographyH2>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ProjectCard key={index} project={project} isEven={isEven} />
            );
          })}
        </div>
      </SectionWrapper>
      <WaveSeparatorBottom />
    </div>
  );
}
