import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getFictionBySlug, getAllSlugs, markdownToHtml } from "@/lib/fiction";
import { assignCoverImages, getInlineImages, WORDS_PER_IMAGE } from "@/lib/fictionImages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getFictionBySlug(slug);
  if (!piece) return {};
  return { title: piece.title };
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

/** Split rendered HTML into paragraph-level chunks and interleave images. */
function buildSections(
  html: string,
  images: string[],
  wordsPerImage: number
): Array<{ type: "html"; content: string } | { type: "image"; src: string }> {
  // Split on paragraph/heading boundaries while keeping the tags
  const blocks = html.split(/(?<=<\/p>|<\/h[1-6]>)\n?/);
  const sections: Array<
    { type: "html"; content: string } | { type: "image"; src: string }
  > = [];

  let wordsSinceLastImage = 0;
  let imageIdx = 0;
  let htmlBuffer = "";

  for (const block of blocks) {
    const words = wordCount(block.replace(/<[^>]+>/g, " "));
    wordsSinceLastImage += words;
    htmlBuffer += block + "\n";

    if (wordsSinceLastImage >= wordsPerImage && imageIdx < images.length) {
      sections.push({ type: "html", content: htmlBuffer });
      sections.push({ type: "image", src: images[imageIdx] });
      htmlBuffer = "";
      wordsSinceLastImage = 0;
      imageIdx++;
    }
  }

  if (htmlBuffer.trim()) {
    sections.push({ type: "html", content: htmlBuffer });
  }

  // Always ensure at least one image — insert the first one after the opening block
  const hasImage = sections.some((s) => s.type === "image");
  if (!hasImage && images.length > 0 && sections.length > 0) {
    sections.splice(1, 0, { type: "image", src: images[0] });
  }

  return sections;
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
  const totalWords = wordCount(piece.content);
  const imageCount = Math.max(1, Math.ceil(totalWords / WORDS_PER_IMAGE));
  const inlineImages = getInlineImages(slug, imageCount);
  const sections = buildSections(html, inlineImages, WORDS_PER_IMAGE);
  const allSlugs = getAllSlugs();
  const covers = assignCoverImages(allSlugs);
  const cover = covers[slug];

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

          {/* Cover image */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8 bg-neutral-100">
            <Image
              src={cover}
              alt={piece.title}
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-muted capitalize">
              {piece.type}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-neutral-900 mb-10">
            {piece.title}
          </h1>

          <article className="text-neutral-800 text-base">
            {sections.map((section, i) =>
              section.type === "html" ? (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              ) : (
                <div key={i} className="my-8 relative w-full h-56 rounded-lg overflow-hidden bg-neutral-100">
                  <Image
                    src={section.src}
                    alt=""
                    fill
                    sizes="(max-width: 672px) 100vw, 672px"
                    className="object-cover"
                  />
                </div>
              )
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
