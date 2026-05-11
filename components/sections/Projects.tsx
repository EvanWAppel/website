"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const go = (idx: number, direction: 1 | -1) => {
    setDir(direction);
    setCurrent(idx);
  };

  const prev = () => go((current - 1 + projects.length) % projects.length, -1);
  const next = () => go((current + 1) % projects.length, 1);

  return (
    <SectionWrapper id="projects" className="bg-surface dark:bg-neutral-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Projects</h2>
        <p className="text-muted max-w-xl mx-auto">
          A selection of things I&apos;ve built. All source code is on GitHub.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Arrow: prev */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-500 transition-all"
        >
          <ChevronLeft size={18} className="text-neutral-600 dark:text-neutral-300" />
        </button>

        {/* Arrow: next */}
        <button
          onClick={next}
          aria-label="Next project"
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-500 transition-all"
        >
          <ChevronRight size={18} className="text-neutral-600 dark:text-neutral-300" />
        </button>

        {/* Sliding card — key change triggers remount + fresh animation */}
        <div className="overflow-hidden rounded-xl min-h-[280px]">
          <div
            key={current}
            className={`h-full ${dir === 1 ? "proj-slide-right" : "proj-slide-left"}`}
          >
            <ProjectCard project={projects[current]} />
          </div>
        </div>

        {/* Pill dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 1 : -1)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 bg-accent"
                  : "w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-muted mt-3 tabular-nums">
          {current + 1} / {projects.length}
        </p>
      </div>

      <style>{`
        @keyframes projSlideRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes projSlideLeft {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .proj-slide-right { animation: projSlideRight 300ms cubic-bezier(0.4,0,0.2,1) both; }
        .proj-slide-left  { animation: projSlideLeft  300ms cubic-bezier(0.4,0,0.2,1) both; }
      `}</style>
    </SectionWrapper>
  );
}
