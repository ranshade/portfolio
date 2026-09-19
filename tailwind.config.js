/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070B",
          900: "#0B0B12",
          850: "#111119",
          800: "#15151F",
          700: "#1D1D29",
          600: "#2A2A38",
        },
        mist: {
          100: "#F5F5F8",
          300: "#C7C7D3",
          500: "#9191A3",
          600: "#6E6E80",
        },
        signal: {
          indigo: "#6D6AFF",
          violet: "#9B6BFF",
          cyan: "#4FD1D9",
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
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "signal-gradient": "linear-gradient(115deg, #6D6AFF 0%, #9B6BFF 45%, #4FD1D9 100%)",
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
