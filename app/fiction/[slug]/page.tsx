import { notFound } from "next/navigation";
import Link from "next/link";
import { getFictionBySlug, getAllSlugs, markdownToHtml } from "@/lib/fiction";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const piece = getFictionBySlug(slug);
  if (!piece) return {};
  return { title: piece.title };
}

export default async function FictionPiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getFictionBySlug(slug);
  if (!piece) notFound();

  const html = markdownToHtml(piece.content);

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          <Link
            href="/fiction"
            className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block"
          >
            ← Fiction &amp; Poetry
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-muted capitalize">
              {piece.type}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-neutral-900 mb-10">{piece.title}</h1>

          <article
            className="prose-neutral text-neutral-800 text-base"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
