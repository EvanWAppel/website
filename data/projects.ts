import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "enki",
    description:
      "This site — a clean, data-driven portfolio built with Next.js App Router, Tailwind CSS v4, and TypeScript. Zero-config Vercel deployment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/EvanWAppel/website",
    featured: true,
  },
  {
    id: "elvis",
    title: "Elvis — dbt + Snowflake Portfolio",
    description:
      "Named after Las Vegas's most recognizable figure, this project explores free datasets about the Las Vegas Valley using dbt and Snowflake. Built to learn analytics engineering patterns: modular transformations, testing, and dimensional modeling.",
    tech: ["dbt", "Snowflake", "SQL", "Python"],
    github: "https://github.com/EvanWAppel/elvis",
    featured: true,
  },
  {
    id: "guzzolene",
    title: "Guzzolene — Gas Economics Tracker",
    description:
      "Tracks personal gas purchase history for a Mazda 3 Sport to see whether fuel economy has measurably changed — and to put price swings in the context of geopolitical events. Plots cost per mile overlaid with WTI crude oil prices.",
    tech: ["Python", "Jupyter", "pandas", "Matplotlib"],
    github: "https://github.com/EvanWAppel/guzzolene",
    featured: true,
  },
];
