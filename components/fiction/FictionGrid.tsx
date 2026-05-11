"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { FictionPiece } from "@/lib/fiction";

type Filter = "all" | "story" | "poem";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Stories", value: "story" },
  { label: "Poetry", value: "poem" },
];

function FictionCard({ piece, cover }: { piece: FictionPiece; cover: string }) {
  return (
    <Link
      href={`/fiction/${piece.slug}`}
      className="group block rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden hover:border-accent hover:shadow-sm transition-all"
    >
      <div className="w-full bg-neutral-100 dark:bg-neutral-700">
        <Image
          src={cover}
          alt={piece.title}
          width={0}
          height={0}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-auto"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-accent transition-colors leading-snug">
            {piece.title}
          </h3>
          <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-muted capitalize">
            {piece.type === "story" ? "Story" : "Poem"}
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed">{piece.excerpt}</p>
      </div>
    </Link>
  );
}

export default function FictionGrid({
  pieces,
  covers,
}: {
  pieces: FictionPiece[];
  covers: Record<string, string>;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? pieces : pieces.filter((p) => p.type === filter);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex gap-2 mb-8">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === value
                ? "bg-accent text-white"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((piece) => (
          <FictionCard key={piece.slug} piece={piece} cover={covers[piece.slug]} />
        ))}
      </div>
    </div>
  );
}
