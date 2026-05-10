import Link from "next/link";
import Image from "next/image";
import { getAllFiction, FictionPiece } from "@/lib/fiction";
import { assignCoverImages } from "@/lib/fictionImages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function FictionCard({ piece, cover }: { piece: FictionPiece; cover: string }) {
  return (
    <Link
      href={`/fiction/${piece.slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white overflow-hidden hover:border-accent hover:shadow-sm transition-all"
    >
      <div className="relative w-full h-44 bg-neutral-100">
        <Image
          src={cover}
          alt={piece.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-semibold text-neutral-900 group-hover:text-accent transition-colors leading-snug">
            {piece.title}
          </h3>
          <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-muted capitalize">
            {piece.type}
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed">{piece.excerpt}</p>
      </div>
    </Link>
  );
}

export default function FictionPage() {
  const { stories, poems } = getAllFiction();
  const allSlugs = [...stories, ...poems].map((p) => p.slug);
  const covers = assignCoverImages(allSlugs);

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
                <FictionCard key={piece.slug} piece={piece} cover={covers[piece.slug]} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">
              Poetry
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {poems.map((piece) => (
                <FictionCard key={piece.slug} piece={piece} cover={covers[piece.slug]} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
