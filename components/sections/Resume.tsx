import { resumeData, resumeVariants } from "@/data/resume";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TechTag from "@/components/ui/TechTag";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="bg-white">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">Resume</h2>
        <p className="text-muted">Experience, skills, and education</p>
      </div>

      {/* Resume Downloads */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Download</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {resumeVariants.map((variant) => (
            <a
              key={variant.path}
              href={variant.path}
              download
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-neutral-200 hover:border-accent hover:bg-surface transition-colors text-center group"
            >
              <Download size={18} className="text-muted group-hover:text-accent transition-colors" />
              <span className="text-sm font-medium text-neutral-700 group-hover:text-accent transition-colors leading-tight">
                {variant.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill) => (
            <TechTag key={skill} label={skill} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Experience</h3>
        <div className="space-y-8">
          {resumeData.experience.map((job) => (
            <div key={`${job.company}-${job.start}`} className="relative pl-4 border-l-2 border-blue-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h4 className="font-semibold text-neutral-900">{job.role}</h4>
                  <p className="text-accent text-sm font-medium">{job.company}</p>
                </div>
                <p className="text-muted text-sm whitespace-nowrap">
                  {job.start} – {job.end}
                </p>
              </div>
              <ul className="space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-neutral-600 flex gap-2">
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
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Education</h3>
        <div className="space-y-3">
          {resumeData.education.map((edu) => (
            <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <p className="font-semibold text-neutral-900">{edu.degree}</p>
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
