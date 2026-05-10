// All available fiction images (from public/fiction-images/)
export const ALL_IMAGES = [
  "20190816-173122.jpg",
  "20190914-191311.jpg",
  "20190920-170821.jpg",
  "20190920-171709.jpg",
  "20190920-174350.jpg",
  "20190921-184741.jpg",
  "20191210-195110.jpg",
  "20200124-195802.jpg",
  "20200124-195859.jpg",
  "20200124-200950.jpg",
  "20200124-201007.jpg",
  "20200124-201413.jpg",
  "20200124-201501.jpg",
  "0d288userd861.jpg",
  "0k5zg1dwp3g41.jpg",
  "16122yhzp9c51.jpg",
  "1889-ohalloran-sisters.jpg",
  "20190616-114139.jpg",
  "20190720-143409.jpg",
  "20190720-144452.jpg",
  "2308d4r4ubv41.jpg",
  "5lhphmkdmv551.jpg",
  "8c7glpahzsg51.jpg",
  "919h4w82wkx41.jpg",
  "9x0pslx7akh51.jpg",
  "beiruit-2020-08-05.jpg",
  "cafe-scene-by-nick-alm-2018.jpg",
  "dml-ircw5easugwe3ytuxwmqocc77hkhuacizumis8k.jpg",
  "fusion-jason-anderson-2021.jpg",
  "fergus-fransisco-flores.jpg",
  "i4mg0lxf2r8uas-ei-b1qipbyoot4r1oi2fzhnfuapw.jpg",
  "karabakh-defence-army-nov-2020.jpg",
  "nadezhda-krupskaya-lenin.jpg",
  "tennessee-family-1933.jpg",
  "venus-viking-lander.jpg",
  "ylr0wpnbkju-1-sgbbouiwbxyxg-hsddvlsoxob0hoy.jpg",
  "a3ftw76ghjx41.jpg",
  "a6llloff2db71.jpg",
  "cl3505qz2pa61.jpg",
  "d919bh4jndu71.png",
  "merlin-174878049-cf3a4ab8-7234-4bc4-8cf0-6300b0b2837c-superjumbo.jpg",
  "merlin-174904488-2116af3d-24c6-4a08-b64a-79d243338543-superjumbo.jpg",
  "mlo6qxgn5xg61.jpg",
  "nov2017cindyordgettyimagesforundp.jpg",
  "nyt-petrosyan-aragats-laboratory.jpg",
  "ommmbxzfjfy51.jpg",
  "p012qiq88ck51.jpg",
  "qoot5v5kp5a61.jpg",
  "reddit-user-cyberspit-illumination-may-28-2020.png",
  "smashthecurve-mar26-2020.jpg",
  "tdu54nfmjzv61.jpg",
  "uncleplaguedoctor.jpg",
  "vc7mrgn4lin51.jpg",
  "weria24xbnu41.jpg",
  "ype9hnej1ku41.jpg",
  "yye7uw5mkma51.jpg",
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Deterministic Fisher-Yates shuffle with a fixed seed. */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) | 0;
    const j = Math.abs(s) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const SHUFFLED = seededShuffle(ALL_IMAGES, 42);

/**
 * Assigns a unique cover image to each slug.
 * Pass all slugs together so uniqueness can be guaranteed.
 * Slugs are sorted deterministically before assignment.
 */
export function assignCoverImages(slugs: string[]): Record<string, string> {
  const sorted = [...slugs].sort((a, b) => hash(a) - hash(b));
  const map: Record<string, string> = {};
  sorted.forEach((slug, i) => {
    map[slug] = `/fiction-images/${SHUFFLED[i % SHUFFLED.length]}`;
  });
  return map;
}

/**
 * Returns an array of inline image paths for a piece.
 * Uses images from the tail of the shuffled list so they don't
 * overlap with cover images (which use the head).
 */
export function getInlineImages(slug: string, count: number): string[] {
  const offset = hash(slug + "inline") % SHUFFLED.length;
  return Array.from(
    { length: count },
    (_, i) => `/fiction-images/${SHUFFLED[(offset + i) % SHUFFLED.length]}`
  );
}

/** Words per image interval for inline images */
export const WORDS_PER_IMAGE = 500;
