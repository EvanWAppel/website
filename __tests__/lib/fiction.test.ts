import { describe, it, expect } from "vitest";
import { markdownToHtml } from "@/lib/fiction";

describe("markdownToHtml", () => {
  it("wraps plain text in a paragraph", () => {
    const result = markdownToHtml("Hello world");
    expect(result).toContain("<p");
    expect(result).toContain("Hello world");
    expect(result).toContain("</p>");
  });

  it("converts # headings to h1", () => {
    const result = markdownToHtml("# My Title");
    expect(result).toContain("<h1");
    expect(result).toContain("My Title");
  });

  it("converts ## headings to h2", () => {
    const result = markdownToHtml("## Subtitle");
    expect(result).toContain("<h2");
    expect(result).toContain("Subtitle");
  });

  it("converts *text* to <em>", () => {
    const result = markdownToHtml("This is *italic* text");
    expect(result).toContain("<em>italic</em>");
  });

  it("converts **text** to <strong>", () => {
    const result = markdownToHtml("This is **bold** text");
    expect(result).toContain("<strong>bold</strong>");
  });

  it("separates double newlines into separate paragraphs", () => {
    const result = markdownToHtml("First paragraph\n\nSecond paragraph");
    const pCount = (result.match(/<p/g) ?? []).length;
    expect(pCount).toBeGreaterThanOrEqual(2);
  });

  it("converts single newlines within a block to <br />", () => {
    const result = markdownToHtml("Line one\nLine two");
    expect(result).toContain("<br />");
  });

  it("strips backslash escapes before punctuation", () => {
    const result = markdownToHtml("Look\\! Over here\\!");
    expect(result).not.toContain("\\!");
    expect(result).toContain("Look! Over here!");
  });

  it("returns empty string for empty input", () => {
    const result = markdownToHtml("");
    expect(result.trim()).toBe("");
  });

  it("handles mixed headings and paragraphs", () => {
    const md = "# Title\n\nFirst paragraph.\n\n## Section\n\nSecond paragraph.";
    const result = markdownToHtml(md);
    expect(result).toContain("<h1");
    expect(result).toContain("<h2");
    expect(result).toContain("<p");
  });
});
