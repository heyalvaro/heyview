# Site Architecture — heyview.studio

> How the site is organized so the horizontal brand and the health vertical coexist
> without looking confused. Built from the live site (Astro) as of 2026-06-05.
> Pair with `Brand Core.md` (home + services) and `Vertical — Health.md` (/health).
> Last updated: 2026-06-12

---

## The core principle

**One neutral home. Vertical landing pages underneath. Cases tagged so each surface pulls
the right work.** The home never commits to an industry; the vertical pages do. This is
what lets the studio take a watch brand, a J&J factory, and a dental clinic without the
home page contradicting itself.

```
heyview.studio/                 → HOME (neutral: design + AI systems studio)
├── /services                   → the 4 horizontal capabilities (neutral) ✅ LIVE
├── /work                       → all cases, filterable by category
│   └── /work/[case]            → individual case study
├── /health                     → VERTICAL landing (sharp clinic message) [TODO]
│   └── (future verticals: /finance-ops, etc.)
├── /about                      → founders + 22-year pedigree [TODO]
└── /contact                    → book a call [TODO]
```

---

## HOME — neutral (`Brand Core.md`)

- **Hero**: ✅ DONE — live hero is the neutral version ("Design & AI systems for
  businesses that run on complex operations" + the "sharper, faster, easier to scale" sub).
- **Services preview**: ✅ DONE — updated to revised 4-service lineup (Document & process
  automation · Customer communication & AI assistants · Operations dashboards · Custom
  systems & integrations). Cards have "See all services →" link to `/services`. Nav
  "Services" link changed from `#services` to `/services`.
- **Process**: ✅ DONE — rewritten as "Four stages. No surprises." Removed Week 01–04
  labels and replaced body copy with copy from Services doc. "Average delivery: 4wk" stat
  replaced with "4 · Stages. Fixed quote."
- **About preview**: ✅ DONE — "22 years" standardized; both founders shown.
- **Selected work**: live mix = CoolBrand CR (luxury watch/jewelry, `web-brand`) ·
  Finance automation (`finance-ops`) · Capacity planning system (`manufacturing`).
  ⚠️ TODO: Screenshot audit — verify dashboards/wireframes in the capacity planning case
  show no real product names, volumes, site names, or logos. Blur or rebuild with
  synthetic data if they do. (Image paths at `/work/jnj/` still reference old name;
  rename when screenshot audit is complete.)
- **Vertical signposts**: ⚠️ EXISTS but all "Who we work with" cards point to `#contact`.
  When `/health` ships, point the Specialty practices card there.
- **Testimonial**: CoolBrand quote is live (Spanish, Sebastián Soto) — works; consider an
  EN translation toggle or English pull-quote for US visitors later.

---

## SERVICES — `/services` ✅ LIVE

Built 2026-06-12. Sections:
1. Hero — "Systems that work on a Tuesday morning."
2. Four service sections (Process automation · Customer communication · Dashboards · Integrations)
3. "Designed, not just built" — placeholder for work samples
4. "Four stages. No surprises." — inline process timeline
5. "Fixed scope. Fixed quote. Senior hands." — the model
6. "A good fit, honestly." — fit/no-fit two columns
7. "Where this lands hardest." — Health card (links to `/health`) + 2 placeholder slots
8. "Thirty minutes on your operation." — cal.com CTA

---

## /HEALTH — flagship vertical (`Vertical — Health.md`) [TODO]

This page is allowed to be as sharp and clinical as it wants — that's its job.

- **Hero**: *Stop losing revenue to no-shows and manual admin.*
- The Practice Operations System components (booking, no-show recovery, dashboard).
- Clinic-specific proof + (when available) clinic cases pulled by the `health` tag.
- Clinic pricing context (or "book a call" — your choice on showing numbers).
- Same visual system, sharper copy. The medical pedigree (MERGE, hospitals) lives here.

---

## /WORK — cases with categories

| Category | Case (status 2026-06-12) |
|---|---|
| `finance-ops` | Enterprise finance automation — ✅ live, correctly anonymized ("Confidential — multinational manufacturer") |
| `manufacturing` | Capacity planning system — ✅ anonymized (client now "Confidential — global medical device manufacturer"). Slug changed to `/work/capacity-planning-system`, 301 redirect from `/work/jnj-capacity-model`. ⚠️ Screenshot audit still needed. |
| `web-brand` | CoolBrand CR — ✅ live, with testimonial |
| `health` | Healthcare AI intake — 🗑️ DELETED (was a fabricated test case with fake metrics) |

### Capacity planning case — remaining items

1. ⚠️ **Screenshot audit**: verify dashboard/wireframe images show no real product names,
   volumes, site names, or logos. Files at `public/work/jnj/`. Blur or rebuild with
   synthetic data if they do.
2. ⚠️ **Image path rename** (optional, after screenshot audit): rename `public/work/jnj/`
   to remove J&J reference from asset URLs. Update image paths in
   `src/content/work/capacity-planning-system.md` gallery frontmatter.

---

## Adding a second vertical later

When finance/ops earns its own page (the J&J + FCTG pedigree supports it), copy the
`Vertical — Health.md` pattern into `Vertical — Finance-Ops.md`, add a `/finance-ops`
page, tag the cases, add a signpost on the home. The architecture already supports it —
no rebrand, just a new page. That is the payoff of the layered model.

---

*Site Architecture · HeyView · home neutral, verticals sharp, cases tagged.*
