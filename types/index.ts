import type React from "react";

export interface SiteConfig {
  name: string;
  title: string;
  bio: string;
  photo: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Job {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  skills: string[];
  experience: Job[];
  education: Education[];
}

export interface ResumeVariant {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}
