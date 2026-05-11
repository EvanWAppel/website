import { describe, it, expect } from "vitest";
import { assignCoverImages, getInlineImages, ALL_IMAGES } from "@/lib/fictionImages";

const STORY_SLUGS = [
  "a-late-night-visitor",
  "gnome-de-guerre",
  "naivete",
  "and-the-silence-makes-me-lonely",
  "pain-management",
  "the-scanner",
];

const POEM_SLUGS = [
  "she-was-a-stranger-to-me-then",
  "clubbed-to-death",
  "reflection-on-a-na-ve-time",
  "i-m-growing-old-patti-smith",
  "madness",
  "a-poem-to-who-we-think-we-are",
  "ode-to-surf-wax-america-unfinished",
  "the-lemongrass-cafe",
  "the-wetlands",
  "29",
  "november",
  "be-content",
  "hugnin-and-munin",
  "haiku-of-the-american-salaryman",
  "rosewater",
  "lounge-singer-standard",
  "ed-murrow-can-suck-it",
  "blockbuster-reform",
  "saturday-reflections-on-poetry-while-listening-to-charles-bukowski-recordings",
  "hymn-of-the-crust-punk",
  "santa-monica",
  "pi-day-song-unfinished",
  "poem-for-take-your-child-to-work-day-2017",
  "elegy-for-five-hundred-in-paradise",
  "elegy-for-kelsey-stumpf",
];

const ALL_SLUGS = [...STORY_SLUGS, ...POEM_SLUGS];

describe("assignCoverImages", () => {
  it("returns an entry for every slug", () => {
    const covers = assignCoverImages(ALL_SLUGS);
    for (const slug of ALL_SLUGS) {
      expect(covers[slug]).toBeDefined();
    }
  });

  it("assigns no duplicate images across all pieces", () => {
    const covers = assignCoverImages(ALL_SLUGS);
    const values = Object.values(covers);
    const unique = new Set(values);
    expect(unique.size).toBe(values.length);
  });

  it("all assigned paths start with /fiction-images/", () => {
    const covers = assignCoverImages(ALL_SLUGS);
    for (const path of Object.values(covers)) {
      expect(path).toMatch(/^\/fiction-images\/.+/);
    }
  });

  it("is deterministic — same input always produces same output", () => {
    const first = assignCoverImages(ALL_SLUGS);
    const second = assignCoverImages(ALL_SLUGS);
    expect(first).toEqual(second);
  });

  it("does not assign more images than are available", () => {
    expect(ALL_SLUGS.length).toBeLessThanOrEqual(ALL_IMAGES.length);
  });

  it("handles a single slug", () => {
    const covers = assignCoverImages(["lone-slug"]);
    expect(Object.keys(covers)).toHaveLength(1);
    expect(covers["lone-slug"]).toMatch(/^\/fiction-images\//);
  });

  it("handles an empty slug list", () => {
    const covers = assignCoverImages([]);
    expect(covers).toEqual({});
  });
});

describe("getInlineImages", () => {
  it("returns the requested number of images", () => {
    const images = getInlineImages("some-slug", 5);
    expect(images).toHaveLength(5);
  });

  it("returns at least one image when count is 1", () => {
    const images = getInlineImages("some-slug", 1);
    expect(images).toHaveLength(1);
  });

  it("is deterministic for the same slug", () => {
    const a = getInlineImages("madness", 4);
    const b = getInlineImages("madness", 4);
    expect(a).toEqual(b);
  });

  it("returns different images for different slugs", () => {
    const a = getInlineImages("the-scanner", 3);
    const b = getInlineImages("naivete", 3);
    expect(a).not.toEqual(b);
  });

  it("all paths start with /fiction-images/", () => {
    const images = getInlineImages("november", 6);
    for (const path of images) {
      expect(path).toMatch(/^\/fiction-images\/.+/);
    }
  });
});
