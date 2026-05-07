import type { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Git",
    "REST APIs",
    "GraphQL",
    "Tailwind CSS",
    "CI/CD",
  ],
  experience: [
    {
      company: "Acme Corp",
      role: "Software Engineer",
      start: "Jan 2023",
      end: "Present",
      bullets: [
        "Led development of a customer-facing dashboard serving 50k+ monthly active users",
        "Reduced API response times by 40% through query optimization and caching strategies",
        "Mentored two junior engineers and conducted code reviews across the team",
      ],
    },
    {
      company: "Startup Inc",
      role: "Full Stack Engineer",
      start: "Jun 2021",
      end: "Dec 2022",
      bullets: [
        "Built core product features end-to-end from design to deployment",
        "Migrated legacy monolith to microservices architecture, improving deploy frequency 3x",
        "Implemented automated test suite achieving 85% code coverage",
      ],
    },
    {
      company: "Dev Agency",
      role: "Junior Developer",
      start: "Aug 2020",
      end: "May 2021",
      bullets: [
        "Delivered 6 client websites on time and within budget",
        "Introduced component library that cut front-end development time by 30%",
      ],
    },
  ],
  education: [
    {
      institution: "State University",
      degree: "B.S. Computer Science",
      year: "2020",
    },
  ],
};
