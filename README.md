# Developer Portfolio

A modern, dark-themed personal portfolio built with **Vite + React (JavaScript, no TypeScript) + Tailwind CSS**, ready to deploy on Vercel.

## Tech stack

- **Vite** — build tool and dev server
- **React 18** — UI (plain `.jsx`, no TypeScript)
- **Tailwind CSS** — styling
- **lucide-react** — icons

## Project structure

```
src/
├── components/       # One component per section, plus reusable pieces
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Experience.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Reveal.jsx    # Scroll-reveal wrapper (fade/slide-in)
├── data/              # Edit these to change site content
│   ├── siteConfig.js  # Name, role, email, location, social links
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── services.js
├── App.jsx
├── main.jsx
└── index.css
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

This starts Vite's dev server (default: `http://localhost:5173`) with hot module reload.

### 3. Build for production

```bash
npm run build
```

Outputs a static, production-ready build to the `dist/` folder.

### 4. Preview the production build locally

```bash
npm run preview
```

## Customizing your content

Everything personal lives in `src/data/`, so you don't need to touch component code to update the site:

- **`siteConfig.js`** — your name, role, tagline, location, email, resume link, and social URLs. This one file drives the navbar, hero, contact section, and footer.
- **`projects.js`** — your project cards. Add, remove, or edit entries in the array; the grid updates automatically.
- **`skills.js`** — skills grouped by category, each with a short description and a 1–5 proficiency indicator.
- **`experience.js`** — your work history timeline.
- **`services.js`** — the services grid (icon names reference [lucide-react](https://lucide.dev/icons/) icon components).

Replace the placeholder values (`your@email.com`, `yourusername`, etc.) with your real information before deploying.

## Deploying to Vercel

### Option A — Vercel dashboard (recommended)

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite framework preset. Confirm these build settings (already set in `vercel.json`):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Vercel will install dependencies, build, and give you a live URL.
5. Every future push to your main branch will trigger a new deployment automatically; pushes to other branches create preview deployments.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel        # deploys a preview
vercel --prod # deploys to production
```

### Environment variables

This project doesn't require any environment variables out of the box — the contact form is frontend-only (see below). If you connect a backend or email service later, add variables under **Project Settings → Environment Variables** in the Vercel dashboard, and access them in code via `import.meta.env.VITE_YOUR_VAR_NAME` (Vite only exposes variables prefixed with `VITE_` to the client).

## Connecting the contact form to a backend

The contact form in `src/components/Contact.jsx` currently validates input client-side and shows a success message, but doesn't send data anywhere. To wire it up:

1. Pick a service (e.g. [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or your own API route).
2. In the `handleSubmit` function, replace the `setStatus("success")` block with a `fetch()` call to your endpoint, sending the `form` state as the payload.
3. Handle the response to show success or error states accordingly.

## Notes

- No TypeScript, no unnecessary dependencies, no server-side configuration required.
- The site is a fully static single-page app — no client-side routing is used, so no extra SPA rewrite rules are needed beyond what's already in `vercel.json`.
- Animations respect `prefers-reduced-motion`.

## Theming (light / dark)

The site ships **light (white) as the default**. A visitor's choice is saved to
`localStorage` under the `theme` key; the OS `prefers-color-scheme` setting is
deliberately ignored so a first-time visitor always lands on white.

**How it works**

- `src/index.css` defines every colour as a CSS custom property on `:root`
  (light) and `.dark` (dark). Values are space-separated RGB channels so
  Tailwind's `<alpha-value>` syntax still works (`border-ink-700/50`).
- `tailwind.config.js` maps its colour scale onto those variables, so a class
  like `bg-ink-950` is white in light mode and near-black in dark mode. No
  `dark:` variants are needed for ordinary surfaces and text.
- `src/hooks/useTheme.jsx` holds the state, toggles the `dark` class on
  `<html>`, persists the choice, and syncs across open tabs.
- An inline script in `index.html` applies the saved theme *before first paint*
  so returning dark-mode visitors don't get a white flash. Keep it in `<head>`.

**Token reference**

| Purpose            | Variable                        | Tailwind class      |
| ------------------ | ------------------------------- | ------------------- |
| Page background    | `--bg`                          | `bg-ink-950`        |
| Card surface       | `--surface` / `--surface-2`     | `bg-ink-900` / `850`|
| Border             | `--border` / `--border-strong`  | `border-ink-700`/`600` |
| Text               | `--text` → `--text-subtle`      | `text-mist-100` → `600` |
| Accent             | `--accent`, `--accent-hover`    | `text-signal-indigo`|

To re-brand, change the variables in `src/index.css` — nothing else needs editing.

## Buttons

Buttons use flat, solid fills (no gradients) that swap with the active theme.
Compose one size class with one variant class:

```jsx
<a className="btn btn-primary btn-lg">View my work</a>
```

- Sizes: `btn-sm`, `btn-md`, `btn-lg`
- Variants: `btn-primary` (solid accent), `btn-neutral` (solid near-black on
  light / near-white on dark), `btn-outline` (solid surface + border),
  `btn-soft` (tinted accent, fills solid on hover), `btn-icon` (round 40px)

## Navbar active state

`src/hooks/useActiveSection.js` is a rAF-throttled scroll spy that returns the
id of the section currently in view. The matching link gets `aria-current="true"`,
which drives **both** the styling and the screen-reader announcement — desktop
links get an accent underline, mobile links an accent pill with a left bar.

The spy tracks `services` too, even though it has no nav link, so no link is
falsely highlighted while that section is on screen. If you add a section, add
its id to `sectionIds` in `src/components/Navbar.jsx`.

## Page rhythm & scroll interest

Sections used to be six identically-padded blocks on one flat background,
which read as a single empty page while scrolling. Four things fix that:

- **`Section.jsx`** — wraps every top-level section and alternates `tone`
  between the page background (`base`) and a raised surface (`raised`) with
  hairline borders. Current order: About → Skills → Projects → Experience →
  Services → Contact alternates base/raised/base/raised/base/raised. If you
  add or reorder a section, keep the alternation or the rhythm breaks.
  Pass `pattern` to overlay the faint grid texture (used on Projects).
- **`SectionHeader.jsx`** — numbered eyebrow (`01`, `02`, …) with an accent
  rule running to the edge, so a heading reads as the start of something.
- **`TechMarquee.jsx`** — slow ticker between the hero and About. The list is
  rendered twice and the track shifts by exactly `-50%`, so the loop is
  seamless; both copies must stay identical in width or a seam appears.
- **`ScrollProgress.jsx`** — 2px accent bar along the bottom of the header,
  visible once you've scrolled past the top.

Cards also stagger in individually (`Reveal delay={index * 70}`) rather than a
whole grid appearing at once, and lift 3px on hover.

**Note on `Section`:** the `id` stays on the `<section>` element because the
navbar scroll spy resolves sections by id. Don't move it to an inner wrapper.

## Tech marquee icons

`src/data/brandIcons.js` holds inlined SVG path data (extracted from Simple
Icons) for PHP, Laravel, MySQL, Next.js, React, Flutter, Dart, Tailwind CSS,
Figma, and Git — no `react-icons` or other icon-library dependency needed.
`BrandIcon.jsx` renders one by name at a given size/colour.

The marquee (`TechMarquee.jsx`) is two rows scrolling in opposite directions
at different speeds, each item a card with its brand icon and a tinted
colour. Both rows pause on hover so the list is readable if someone wants to
stop and look. To add a tech: append its path to `brandIcons.js` (grab a
24×24 `d` path from simple-icons.org) and add an entry to `row1`/`row2` in
`TechMarquee.jsx`.

## Marquee revision (visible motion + brand icons)

The first pass moved correctly but read as flat/static in a screenshot and
sat on a background tone too close to white to look like a distinct band.
This revision:

- Uses a clearly tinted "belt" background (`#F5F4FF` light / `#12131C`
  dark) instead of the neutral surface tone, which in this palette is only
  ~6–12 RGB units off white/black — real in a browser, invisible in a still
  image or on an uncalibrated screen.
- Gives each chip a colour-tinted circular icon badge (brand colour at
  ~13% opacity) instead of a bare icon, and switches chips to full pills.
- Adds a small "The stack behind this site" label above the rows for
  context, and a soft indigo glow behind the whole band.

The scrolling itself (`animate-marquee` / `animate-marquee-reverse`,
duplicated track shifted by exactly `-50%`, paused independently per row on
hover) was verified by compiling the actual Tailwind config and confirming
the keyframes, utility classes, and the `group-hover/row:[animation-play-
state:paused]` rule all generate correctly — a screenshot just can't show
motion either way.
