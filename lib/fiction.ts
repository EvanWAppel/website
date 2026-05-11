import fs from "fs";
import path from "path";

export type FictionPiece = {
  slug: string;
  title: string;
  type: "story" | "poem";
  excerpt: string;
  content: string;
};

const FICTION_DIR = path.join(process.cwd(), "fiction");

function parseMd(raw: string): { title: string; body: string } {
  const lines = raw.split("\n");
  let title = "";
  let bodyStart = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("# ")) {
      title = lines[i].slice(2).trim();
      bodyStart = i + 1;
      break;
    }
  }
  const body = lines.slice(bodyStart).join("\n").trim();
  return { title, body };
}

function getExcerpt(body: string, length = 160): string {
  const plain = body
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*?([^*]+)\*\*?/g, "$1")
    .replace(/\\\\/g, "")
    .replace(/\n+/g, " ")
    .trim();
  return plain.length > length ? plain.slice(0, length).trimEnd() + "…" : plain;
}

function readDir(dir: string, type: "story" | "poem"): FictionPiece[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { title, body } = parseMd(raw);
      return { slug, title, type, excerpt: getExcerpt(body), content: body };
    });
}

export function getAllFiction(): { stories: FictionPiece[]; poems: FictionPiece[] } {
  const stories = readDir(path.join(FICTION_DIR, "stories"), "story");
  const poems = readDir(path.join(FICTION_DIR, "poetry"), "poem");
  return { stories, poems };
}

export function getFictionBySlug(slug: string): FictionPiece | null {
  const candidates: Array<[string, "story" | "poem"]> = [
    [path.join(FICTION_DIR, "stories", `${slug}.md`), "story"],
    [path.join(FICTION_DIR, "poetry", `${slug}.md`), "poem"],
  ];
  for (const [filePath, type] of candidates) {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { title, body } = parseMd(raw);
      return { slug, title, type, excerpt: getExcerpt(body), content: body };
    }
  }
  return null;
}

export function getAllSlugs(): string[] {
  const storiesDir = path.join(FICTION_DIR, "stories");
  const poetryDir = path.join(FICTION_DIR, "poetry");
  const slugs: string[] = [];
  if (fs.existsSync(storiesDir))
    slugs.push(...fs.readdirSync(storiesDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(".md", "")));
  if (fs.existsSync(poetryDir))
    slugs.push(...fs.readdirSync(poetryDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(".md", "")));
  return slugs;
}

export function markdownToHtml(md: string): string {
  const blocks = md.split(/\n\n+/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("# "))
        return `<h1 class="text-2xl font-semibold mt-8 mb-3">${inline(trimmed.slice(2))}</h1>`;
      if (trimmed.startsWith("## "))
        return `<h2 class="text-lg font-semibold mt-6 mb-2 text-muted">${inline(trimmed.slice(3))}</h2>`;
      if (trimmed.startsWith("### "))
        return `<h3 class="text-base font-semibold mt-4 mb-1">${inline(trimmed.slice(4))}</h3>`;
      const lines = trimmed.split("\n").map(inline).join("<br />");
      return `<p class="mb-4 leading-relaxed">${lines}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

function inline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(/\\([!?.,])/g, "$1");
}
