import { Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] py-12">
      <div className="section-shell flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <a href="#home" className="font-display text-lg font-semibold text-mist-100">
            {siteConfig.initials}
            <span className="text-signal-violet">.</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-mist-600">
            {siteConfig.role} building fast, accessible, and thoughtfully designed web
            applications.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist-500">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-mist-100">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4">
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
                className="text-mist-600 transition-colors hover:text-mist-100"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="section-shell mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-mist-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
