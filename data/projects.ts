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
  {
    id: "prometheus",
    title: "Prometheus — Campaign Data Aggregator",
    description:
      "Consolidates advertising performance data from Meta, Google Ads, TikTok, LinkedIn, and more into a unified dataset. Standardizes currencies and time zones, deduplicates cross-platform reach, and calculates CTR, spend, and ROI across all channels.",
    tech: ["Python", "pandas", "BigQuery", "Power BI"],
    github: "https://github.com/EvanWAppel/prometheus",
    featured: true,
  },
  {
    id: "feynman",
    title: "Feynman — Query Abstraction Library",
    description:
      "A unified SQL query library for analysts working across Oracle, MSSQL, and Snowflake. Exposes a consistent dot-notation API for ad-hoc queries, schema exploration, and preset database calls — with Polars and SQLAlchemy under the hood.",
    tech: ["Python", "Jupyter", "SQL", "Polars", "SQLAlchemy"],
    github: "https://github.com/EvanWAppel/feynman",
    featured: true,
  },
  {
    id: "skunkworks",
    title: "Skunkworks — Disclosure Form Automation",
    description:
      "Automates the disclosure form update process when changing prime rates. Reads Word documents, cycles through rate specs, replaces old values with new ones, saves updated files to a destination folder, and generates an Excel validation report.",
    tech: ["Python", "python-docx", "openpyxl", "PyScript"],
    github: "https://github.com/EvanWAppel/skunkworks",
    featured: true,
  },
];
