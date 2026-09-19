import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";
import useActiveSection from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";
import ScrollProgress from "./ScrollProgress.jsx";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-ink-700 bg-ink-950/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-4" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-mist-100 focus-visible:outline-none"
        >
          {siteConfig.initials}
          <span className="text-signal-indigo">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  // aria-current="true" drives both the styling and the
                  // announcement to assistive tech — single source of truth.
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href="#contact" className="btn btn-soft btn-sm hidden md:inline-flex">
            Let&rsquo;s work together
          </a>
          <button
            type="button"
            className="btn-icon md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {scrolled && <ScrollProgress />}

      {menuOpen && (
        <div className="md:hidden">
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
          </ul>
        </div>
      )}
    </header>
  );
}
