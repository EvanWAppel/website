import { notFound } from "next/navigation";
import Link from "next/link";
import { resumeVariants, resumeData } from "@/data/resume";
import { siteConfig } from "@/data/site";
import PrintButton from "./PrintButton";

export function generateStaticParams() {
  return resumeVariants.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const variant = resumeVariants.find((v) => v.slug === slug);
  if (!variant) return {};
  return { title: `${siteConfig.name} — ${variant.label}` };
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const variant = resumeVariants.find((v) => v.slug === slug);
  if (!variant) notFound();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Print/back bar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-neutral-100 px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/#resume" className="text-sm text-neutral-500 hover:text-accent transition-colors">
          ← Back
        </Link>
        <div className="flex items-center gap-3">
          <a
            href={variant.path}
            download
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-white transition-colors"
          >
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      {/* Resume body */}
      <div className="max-w-3xl mx-auto px-8 py-12 print:py-0 print:px-0">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-neutral-200">
          <h1 className="text-3xl font-bold text-neutral-900 mb-1">{siteConfig.name}</h1>
          <p className="text-lg text-blue-600 font-medium mb-3">{variant.label}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-600">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a>
            <a href={siteConfig.github} className="hover:text-accent">github.com/EvanWAppel</a>
            <a href={siteConfig.linkedin} className="hover:text-accent">linkedin.com/in/evan-appel</a>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Summary</h2>
          <p className="text-sm leading-relaxed text-neutral-700">{siteConfig.bio}</p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Experience</h2>
          <div className="space-y-7">
            {resumeData.experience.map((job) => (
              <div key={`${job.company}-${job.start}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <span className="font-semibold text-neutral-900">{job.role}</span>
                    <span className="text-neutral-400 mx-2">·</span>
                    <span className="text-blue-600 text-sm font-medium">{job.company}</span>
                  </div>
                  <span className="text-sm text-neutral-400 whitespace-nowrap">{job.start} – {job.end}</span>
                </div>
                <ul className="space-y-1.5 pl-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-neutral-600 flex gap-2.5">
                      <span className="text-neutral-300 mt-0.5 shrink-0">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Skills</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {resumeData.skills.join(" · ")}
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Education</h2>
          <div className="space-y-3">
            {resumeData.education.map((edu) => (
              <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="font-semibold text-neutral-900">{edu.degree}</span>
                  <span className="text-neutral-400 mx-2">·</span>
                  <span className="text-blue-600 text-sm">{edu.institution}</span>
                </div>
                <span className="text-sm text-neutral-400">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
