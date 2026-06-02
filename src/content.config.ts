import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Portfolio / case studies. One Markdown file per project in src/content/work/.
// The filename (sans .md) becomes the URL slug at /work/<slug>.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** Two-part eyebrow label, e.g. "LUXURY RETAIL   WEB DESIGN". */
    tag: z.string(),
    /** 1–2 sentences. Used on cards AND as the page meta description. */
    summary: z.string(),
    /** Cover image: path under /public or a remote URL. Optional — cards and
     *  the detail hero fall back to a branded block when absent. */
    cover: z.string().optional(),
    /** Client name. Omit for confidential / anonymized work. */
    client: z.string().optional(),
    year: z.number().optional(),
    /** Shown in the detail-page meta row, e.g. "Medical Devices · Manufacturing". */
    industry: z.string().optional(),
    /** Engagement window, e.g. "May – Nov 2025". */
    period: z.string().optional(),
    /** Headline stats panel on the detail page. Keep to 3–6, all public-safe. */
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
    /** Screenshot gallery on the detail page. Images must be public-safe
     *  (blurred where they contain real data). */
    gallery: z
      .array(z.object({ src: z.string(), caption: z.string().optional() }))
      .optional(),
    /** Large 8-col card on the homepage teaser + /work index. */
    featured: z.boolean().default(false),
    /** Teaser card only — no public detail page is generated. */
    confidential: z.boolean().default(false),
    /** Lower numbers sort first. */
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
