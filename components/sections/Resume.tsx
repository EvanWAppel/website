import Link from "next/link";
import { resumeData, resumeVariants } from "@/data/resume";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TechTag from "@/components/ui/TechTag";
import { Download, FileText } from "lucide-react";


export default function Resume() {
  return (
    <SectionWrapper id="resume" className="bg-white dark:bg-neutral-900">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Resume</h2>
        <p className="text-muted">Experience, skills, and education</p>
      </div>

      {/* Resume variants */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Resumes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {resumeVariants.map((variant) => {
            const Icon = variant.icon;
            return (
              <div
                key={variant.slug}
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              >
                <Icon size={20} className="shrink-0 text-muted" />
                <span className="flex-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                  {variant.label}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/resume/${variant.slug}`}
                    target="_blank"
                    title="View as HTML"
                    className="p-1.5 rounded text-muted hover:text-accent hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <FileText size={15} />
                  </Link>
                  <a
                    href={variant.path}
                    download
                    title="Download PDF"
                    className="p-1.5 rounded text-muted hover:text-accent hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <Download size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill) => (
            <TechTag key={skill} label={skill} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Experience</h3>
        <div className="space-y-8">
          {resumeData.experience.map((job) => (
            <div key={`${job.company}-${job.start}`} className="relative pl-4 border-l-2 border-blue-100 dark:border-blue-900">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white">{job.role}</h4>
                  <p className="text-accent text-sm font-medium">{job.company}</p>
                </div>
                <p className="text-muted text-sm whitespace-nowrap">
                  {job.start} – {job.end}
                </p>
              </div>
              <ul className="space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-2">
                    <span className="text-muted mt-0.5 shrink-0">–</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Education</h3>
        <div className="space-y-3">
          {resumeData.education.map((edu) => (
            <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">{edu.degree}</p>
                <p className="text-sm text-accent">{edu.institution}</p>
              </div>
              <p className="text-muted text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
