"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-neutral-100 text-neutral-700 text-sm font-medium hover:bg-neutral-200 transition-colors"
    >
      Print
    </button>
  );
}
