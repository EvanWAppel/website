import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "This site — a clean, data-driven portfolio built with Next.js App Router, Tailwind CSS v4, and TypeScript. Zero-config Vercel deployment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/evanappel/evan-site",
    live: "https://evanappel.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Project Two",
    description:
      "A full-stack web application featuring real-time collaboration, authentication, and a RESTful API. Built for scale and reliability.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/evanappel/project-two",
    featured: true,
  },
  {
    id: "project-3",
    title: "Project Three",
    description:
      "A developer tool that automates repetitive workflows, saving hours of manual work each week. Includes a CLI and web dashboard.",
    tech: ["Python", "FastAPI", "Docker", "TypeScript"],
    github: "https://github.com/evanappel/project-three",
    live: "https://project-three.example.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "Project Four",
    description:
      "An open-source library for simplifying complex data transformations with a type-safe, composable API.",
    tech: ["TypeScript", "Jest", "GitHub Actions"],
    github: "https://github.com/evanappel/project-four",
  },
];
