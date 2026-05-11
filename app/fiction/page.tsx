import { getAllFiction } from "@/lib/fiction";
import { assignCoverImages } from "@/lib/fictionImages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FictionGrid from "@/components/fiction/FictionGrid";

export default function FictionPage() {
  const { stories, poems } = getAllFiction();
  const pieces = [...stories, ...poems];
  const covers = assignCoverImages(pieces.map((p) => p.slug));

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Fiction &amp; Poetry
          </h1>
          <p className="text-muted mb-10">Short stories and poems by Evan Appel.</p>
          <FictionGrid pieces={pieces} covers={covers} />
        </div>
      </main>
      <Footer />
    </>
  );
}
