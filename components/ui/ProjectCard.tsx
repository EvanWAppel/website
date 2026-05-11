import Image from "next/image";
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
    <div className="flex h-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      {/* Left: text content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
        <div className="flex gap-2">
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

      {/* Right: logo panel */}
      {project.logo && (
        <div className="shrink-0 w-36 flex items-center justify-center bg-neutral-50 dark:bg-neutral-700 border-l border-neutral-100 dark:border-neutral-600">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={120}
            height={120}
            className="max-w-[80%] max-h-[70%] w-auto h-auto object-contain"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
