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

## Font (matches react.dev)

Every heading and body element now uses **Inter** — react.dev uses Inter
across its whole site, so this matches it exactly. Space Grotesk was
dropped; `font-display` and `font-body` in `tailwind.config.js` both point
at Inter now (kept as two token names so components didn't need renaming —
`font-display` just leans on the heavier 600–800 weights). JetBrains Mono
is unchanged for the hero's code snippet and the tech marquee labels.

## Contact form (now functional)

The form used to only update local state — nothing was actually sent. It
now works two ways:

**Right now, zero setup:** submitting opens the visitor's own email app
(Gmail, Outlook, Mail, whatever they have set as default) with the To,
subject, and message already filled in, addressed to `siteConfig.email`.
They just hit send in their own client. No account, no key, no backend.

**Silent in-page send (optional upgrade):** to submit without leaving the
page, get a free key at [web3forms.com](https://web3forms.com) — enter the
email you want messages delivered to, no signup, they email you the key
instantly. Then:

1. Copy `.env.example` to `.env.local` and paste the key into
   `VITE_WEB3FORMS_KEY=`.
2. Add the same variable in your host's dashboard for production (Vercel →
   Project → Settings → Environment Variables), then redeploy.

With the key set, `Contact.jsx` POSTs straight to Web3Forms and shows a
"message sent" status instead of opening an email app. No backend or
server code needed either way — everything happens from the browser.

## Project card polish

- Real project images now darken slightly on hover (`bg-gradient-to-t
  from-black/15`) so the card still reads clearly if you add overlaid text
  later.
- The "source code unavailable" note is a small badge with a lock icon
  now, instead of italic grey text — reads as an intentional status rather
  than an apology.

## Layout: sidebar navigation

The top navbar is gone. Navigation is now:

- **`lg:` and up** — a fixed left sidebar (`Sidebar.jsx`, the `<aside>`):
  logo, name/role, availability badge, vertical nav with a left-bar active
  indicator, a "Let's work together" button, socials, and the theme toggle.
  It's `fixed`, so it's out of normal document flow — `App.jsx` adds
  matching `lg:pl-72 xl:pl-80` to the content wrapper so nothing sits
  underneath it. If you resize the sidebar (`w-72 xl:w-80`), update that
  padding to match, or content will overlap it.
- **Below `lg:`** — the same component renders a fixed top bar with a
  hamburger drawer instead (a sidebar doesn't work on a narrow screen).

Both layouts share one `useActiveSection` call and the same `navLinks` /
`sectionIds` arrays, so add a new section's id to `sectionIds` in
`Sidebar.jsx` (not two separate files) to keep the active-link state
correct on both.

The old `.nav-link` (underline, horizontal-navbar) CSS was removed — it's
no longer used by anything. `.nav-link-mobile` (left-bar indicator) is now
the one nav-link style, used by both the sidebar and the drawer.

Also fixed while in here: both `Contact.jsx` and `Footer.jsx` had a
`socialIcons` map for `github`/`linkedin`/`twitter`, but `siteConfig.social`
only has `github`/`facebook` — the Facebook link was silently rendering
nothing. Both now map `facebook` correctly.

## Layout: back to a fixed top navbar

Reverted from the sidebar back to a fixed top navbar — same `Navbar.jsx`
from before the sidebar experiment, `position: fixed` (not `sticky`), so it
stays on screen through the whole page regardless of scroll position or
container structure. `Sidebar.jsx` and the `lg:pl-72 xl:pl-80` content
offset in `App.jsx` are removed since nothing needs to clear a fixed
sidebar anymore.

Two things reverted alongside it, since they only made sense for the
sidebar:
- Hero's top padding is back to a flat `pt-28` (no more reduced `lg:pt-20`)
  — the fixed navbar now covers the top on every breakpoint again.
  desktop needs to clear it now, same as mobile.
- `scroll-padding-top` in `index.css` is back to `5.5rem` on all screen
  sizes (dropped the `1.5rem` desktop override).

The underline `.nav-link` CSS (desktop top-navbar style) is restored too —
it had been removed when the sidebar made it unused. `.nav-link-mobile`
(left-bar style) is unchanged and still used by the mobile drawer menu.

Your own edit to add a **Services** link — present in the sidebar version
you sent back — carried over into the restored navbar's `navLinks`.
