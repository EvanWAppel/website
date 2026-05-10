import type { ResumeData, ResumeVariant } from "@/types";

export const resumeVariants: ResumeVariant[] = [
  { label: "Senior Data Analyst", path: "/resumes/evan_appel_senior_data_analyst.pdf" },
  { label: "Analytics Engineer", path: "/resumes/evan_appel_analytics_engineer.pdf" },
  { label: "Data Engineer", path: "/resumes/evan_appel_data_engineer.pdf" },
  { label: "Python Developer", path: "/resumes/evan_appel_python_developer.pdf" },
  { label: "Data Scientist", path: "/resumes/evan_appel_data_scientist.pdf" },
];

export const resumeData: ResumeData = {
  skills: [
    "Python",
    "SQL",
    "Snowflake",
    "Polars",
    "pandas",
    "Git",
    "GitLab CI/CD",
    "SAS",
    "Tableau",
    "pytest",
    "dbt",
    "ETL Design",
    "Data Warehousing",
    "Data Visualization",
    "Marketing Analytics",
    "AWS / Redshift",
    "Bash",
    "Jupyter",
  ],
  experience: [
    {
      company: "Credit One Bank",
      role: "Marketing Analyst",
      start: "Feb 2023",
      end: "Present",
      bullets: [
        "Formal lead on a 30-project, ~25,000-line SAS-to-Python migration onto the bank's Snowflake-based Enterprise Data Platform, directing six team members of varying Python skill levels.",
        "Designed the standardized package structure, validation methodology, and two-phase workflow used across all translations — including the marketing team's first GitLab CI/CD pipeline.",
        "Wrote a 5,000-line internal translation manual (git workflow, validation testing, query optimization, secrets management) adopted bank-wide on his own initiative.",
        "Built and maintains the 'feynman' repository — reusable artifacts, documentation, and tooling for the analyst organization.",
        "Runs weekly Python workshops since August 2024 (4–20 attendees); recognized as the Python and Git authority for the bank's business analyst organization.",
      ],
    },
    {
      company: "Coin Cloud",
      role: "Data Analyst",
      start: "Jan 2021",
      end: "Dec 2022",
      bullets: [
        "Owned the weekly cash pickup schedule for the cryptocurrency ATM fleet — designed field agent routes based on per-ATM fullness data, balancing lost-transaction risk against agent time.",
        "Served as acting manager when the department head was out; departmental decisions escalated to Evan.",
        "Mentored junior analysts on the team.",
        "Briefly served as ERP Manager (NetSuite) in the final month of tenure.",
      ],
    },
    {
      company: "Precision Opinion",
      role: "Data Analyst",
      start: "Dec 2019",
      end: "Jan 2021",
      bullets: [
        "Owned project management and requirements gathering for a bespoke Kotlin-based timekeeping system for the call center — primary interface between business stakeholders and the engineering team.",
        "Wrote SQL queries for call center management throughout tenure.",
        "Mentored analysts on the team.",
      ],
    },
    {
      company: "Forms Direct",
      role: "Data Analyst / Data Scientist",
      start: "May 2012",
      end: "Oct 2019",
      bullets: [
        "Self-directed transition from marketing content writer to data analyst over seven years — learned SQL, Python, and Mode Analytics in role.",
        "Managed a small remote team of writers (4 reports) — first people-management experience.",
        "Joined the engineering team as in-house junior data analyst; formalized the analyst role at the company.",
        "Ended tenure as Data Scientist (title), performing analytics work across call center operations.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Nevada, Las Vegas",
      degree: "B.A. Journalism, Minor in Sociology",
      year: "2007 – 2012",
    },
  ],
};
