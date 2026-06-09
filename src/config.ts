// ─── Central site configuration ──────────────────────────────────────────────

/**
 * Canonical site identity. Used for SEO meta, Open Graph, and JSON-LD.
 * The production URL itself lives in `astro.config.mjs` (`site`) and is read
 * via `Astro.site` — keep these two in sync.
 */
export const SITE = {
  name: 'HeyView',
  legalName: 'HeyView Studio',
  /** Used as <title> suffix and og:site_name. */
  shortName: 'HeyView',
  tagline: 'Clarity for complex systems.',
  description:
    'We design the systems and experiences that make your business sharper, faster, and easier to scale. Automation, design, and AI for businesses that run on complex operations.',
  /** Default social-share image, served from /public. 1200×630 recommended. */
  ogImage: '/og-image.jpg',
  founders: ['Alvaro Hernandez', 'Sinaí Alfaro'],
  /** Country of incorporation, for Organization schema. */
  country: 'Costa Rica',
} as const;

/** Social / external profiles — drive JSON-LD `sameAs` and footer links. */
export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/company/heyview', // TODO: confirm real handle
} as const;

/**
 * Cal.com booking link (namespace/event).
 * Every "Book a call" button across the site reads from here.
 */
export const CAL_LINK = 'heyview/discovery';

/** Cal.com embed namespace — must match Cal("init", namespace, ...) in Layout.astro. */
export const CAL_NAMESPACE = 'discovery';

/** Cal.com popup config, passed as the data-cal-config attribute. */
export const CAL_CONFIG = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}';
