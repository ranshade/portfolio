/** @type {import('tailwindcss').Config} */

// Every colour below resolves to a CSS custom property defined in
// src/index.css. That means the same utility class (e.g. `bg-ink-950`)
// renders white in light mode and near-black in dark mode — the theme
// switch only has to toggle the `dark` class on <html>.
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces, from page background outward to borders.
        ink: {
          950: token("--bg"),
          900: token("--surface"),
          850: token("--surface-2"),
          800: token("--surface-3"),
          700: token("--border"),
          600: token("--border-strong"),
        },
        // Text, from strongest to faintest.
        mist: {
          100: token("--text"),
          300: token("--text-2"),
          500: token("--text-muted"),
          600: token("--text-subtle"),
        },
        signal: {
          indigo: token("--accent"),
          "indigo-hover": token("--accent-hover"),
          "indigo-soft": token("--accent-soft"),
          violet: token("--violet"),
          cyan: token("--cyan"),
        },
        // Foreground colour to use on top of a solid accent fill.
        onaccent: token("--accent-contrast"),
        // Solid neutral fill: near-black on light, near-white on dark.
        // Named `solid` so it doesn't shadow Tailwind's built-in `neutral`.
        solid: {
          DEFAULT: token("--btn-neutral"),
          hover: token("--btn-neutral-hover"),
          fg: token("--btn-neutral-contrast"),
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        content: "72rem",
        prose: "38rem",
      },
      backgroundImage: {
        // --grid-line is a full rgba() value so each theme can tune opacity.
        "grid-pattern":
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
        "signal-gradient":
          "linear-gradient(115deg, rgb(var(--accent)) 0%, rgb(var(--violet)) 45%, rgb(var(--cyan)) 100%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
