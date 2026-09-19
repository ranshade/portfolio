import { ArrowUpRight, Github, Facebook } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";

const socialIcons = {
  github: Github,
  facebook: Facebook,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background layer: grid + glow + floating shapes, kept subtle */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-signal-indigo/[0.13] blur-[140px]" />
        <div className="absolute top-40 right-[8%] h-56 w-56 animate-float rounded-full bg-signal-cyan/[0.12] blur-3xl" />
      </div>

      <div className="section-shell relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-fade-in">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
            <span className="eyebrow">{siteConfig.availability}</span>
          </div>

          <h1 className="text-display-xl font-display font-semibold text-mist-100">
            Hi, I&rsquo;m {siteConfig.name.split(" ")[0]}.
            <br />
            <span className="text-gradient">{siteConfig.tagline}</span>
          </h1>

          <p className="mt-7 max-w-prose text-lg leading-relaxed text-mist-500">
            I&rsquo;m a {siteConfig.role.toLowerCase()} focused on building modern, scalable,
            and user-friendly web applications — from the first component to the last deploy.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn btn-primary btn-lg"
            >
              View my work
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              className="btn btn-outline btn-lg"
            >
              Contact me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
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
                  className="text-mist-600 transition-colors hover:text-signal-indigo"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Profile panel + floating code card */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-in [animation-delay:150ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-ink-700 bg-ink-850">
            <div className="absolute inset-0 bg-signal-gradient opacity-[0.16]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-8xl font-semibold text-mist-100/90">
                {siteConfig.initials}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t border-ink-700 bg-ink-950/70 p-5 backdrop-blur-sm">
              <p className="font-display text-base font-medium text-mist-100">{siteConfig.name}</p>
              <p className="text-sm text-mist-500">{siteConfig.role}</p>
            </div>
          </div>

          <div className="surface-card absolute -left-8 -bottom-8 hidden w-56 p-4 font-mono text-xs text-mist-500 backdrop-blur-md sm:block">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <p><span className="text-signal-indigo">const</span> dev = {"{"}</p>
            <p className="pl-3">stack: <span className="text-signal-cyan">&apos;React + Laravel&apos;</span>,</p>
            <p className="pl-3">mobile: <span className="text-signal-cyan">&apos;React Native&apos;</span>,</p>
            <p className="pl-3">status: <span className="text-signal-cyan">&apos;shipping&apos;</span>,</p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}