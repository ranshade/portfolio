import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
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
        scrolled ? "bg-ink-950/75 backdrop-blur-lg border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-4" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-mist-100 focus-visible:outline-none"
        >
          {siteConfig.initials}
          <span className="text-signal-violet">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-mist-500 transition-colors hover:text-mist-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-mist-100 transition-colors hover:border-white/20 hover:bg-white/[0.08] md:inline-block"
        >
          Let&rsquo;s work together
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden">
          <ul className="section-shell flex flex-col gap-1 border-t border-white/[0.06] bg-ink-950/95 pb-6 pt-4 backdrop-blur-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-3 py-3 text-base text-mist-300 transition-colors hover:bg-white/[0.04] hover:text-mist-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block rounded-full bg-signal-gradient px-4 py-3 text-center text-sm font-medium text-ink-950"
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
