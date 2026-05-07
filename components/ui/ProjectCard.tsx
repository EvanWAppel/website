import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/types";
import TechTag from "./TechTag";
import Button from "./Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>
      <div className="flex gap-2 mt-auto">
        {project.github && (
          <Button
            href={project.github}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub`}
          >
            <GithubIcon size={14} />
            Code
          </Button>
        )}
        {project.live && (
          <Button
            href={project.live}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={14} />
            Live
          </Button>
        )}
      </div>
    </div>
  );
}
