import { projects } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-surface">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-3">Projects</h2>
        <p className="text-muted max-w-xl mx-auto">
          A selection of things I&apos;ve built. All source code is on GitHub.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
