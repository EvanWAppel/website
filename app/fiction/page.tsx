import Link from "next/link";
import { getAllFiction, FictionPiece } from "@/lib/fiction";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function FictionCard({ piece }: { piece: FictionPiece }) {
  return (
    <Link
      href={`/fiction/${piece.slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white p-5 hover:border-accent hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-neutral-900 group-hover:text-accent transition-colors leading-snug">
          {piece.title}
        </h3>
        <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-muted capitalize">
          {piece.type}
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{piece.excerpt}</p>
    </Link>
  );
}

export default function FictionPage() {
  const { stories, poems } = getAllFiction();

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Fiction &amp; Poetry</h1>
          <p className="text-muted mb-12">Short stories and poems by Evan Appel.</p>

          <section className="mb-14">
            <h2 className="text-lg font-semibold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">
              Stories
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stories.map((piece) => (
                <FictionCard key={piece.slug} piece={piece} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">
              Poetry
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {poems.map((piece) => (
                <FictionCard key={piece.slug} piece={piece} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
