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
