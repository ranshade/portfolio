import { useEffect, useState } from "react";
import { Menu, X, Github, Facebook } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";
import useActiveSection from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";
import ScrollProgress from "./ScrollProgress.jsx";

const socialIcons = {
  github: Github,
  facebook: Facebook,
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// Every section on the page, in document order — including "services",
// which has no nav link. Tracking it means no link is falsely highlighted
// while the Services block is on screen.
// Declared at module scope so the hook's effect doesn't re-run each render.
const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "services",
  "contact",
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Object.entries(siteConfig.social).map(([key, url]) => {
        const Icon = socialIcons[key];
        if (!Icon) return null;
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={key}
            className="btn-icon text-mist-500 hover:text-signal-indigo"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}

/**
 * Two layouts sharing one active-section state:
 *  - `lg:` and up — a fixed left sidebar (identity, nav, socials, theme).
 *    `<main>` and `<Footer>` get matching left padding in App.jsx so
 *    content never sits under it.
 *  - below `lg:` — a fixed top bar with a hamburger drawer, since a fixed
 *    sidebar doesn't work on a narrow screen.
 *
 * Both read the same `navLinks` / `sectionIds` so the active-link logic
 * never drifts between the two. If you add a section, add its id to
 * `sectionIds` here (used by both layouts).
 */
export default function Sidebar() {
  const activeId = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────────────────── */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col overflow-y-auto border-r border-ink-700 bg-ink-950 px-7 py-9 lg:flex xl:w-80 xl:px-9">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-mist-100 focus-visible:outline-none"
        >
          {siteConfig.initials}
          <span className="text-signal-indigo">.</span>
        </a>

        <div className="mt-4">
          <p className="font-display text-base font-medium text-mist-100">{siteConfig.name}</p>
          <p className="mt-0.5 text-sm text-mist-600">{siteConfig.role}</p>
        </div>

        <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-ink-700 bg-ink-900 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
          <span className="text-xs text-mist-500">{siteConfig.availability}</span>
        </div>

        <nav className="mt-10 flex-1" aria-label="Primary">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link-mobile"
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary btn-md w-full">
          Let&rsquo;s work together
        </a>

        <div className="mt-6 flex items-center justify-between">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </aside>

      {/* ── Mobile top bar ──────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 lg:hidden ${
          scrolled || menuOpen
            ? "border-b border-ink-700 bg-ink-950/85 backdrop-blur-lg"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="section-shell flex items-center justify-between py-4">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-mist-100 focus-visible:outline-none"
          >
            {siteConfig.initials}
            <span className="text-signal-indigo">.</span>
          </a>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <button
              type="button"
              className="btn-icon"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {scrolled && <ScrollProgress />}

        {menuOpen && (
          <div>
            <ul className="section-shell flex flex-col gap-1 border-t border-ink-700 bg-ink-950/95 pb-6 pt-4 backdrop-blur-lg">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="nav-link-mobile"
                      aria-current={isActive ? "true" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="btn btn-primary btn-md w-full"
                >
                  Let&rsquo;s work together
                </a>
              </li>
              <li className="flex justify-center pt-3">
                <SocialLinks />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
