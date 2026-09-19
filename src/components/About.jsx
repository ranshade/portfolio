import { MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";
import Reveal from "./Reveal.jsx";

const techStack = [
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Vite",
  "Firebase",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-semibold">
            I care about the details most people scroll past.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal delay={80}>
            <div className="max-w-prose space-y-5 text-base leading-relaxed text-mist-500">
              <p>
                I&rsquo;m a {siteConfig.role.toLowerCase()} who enjoys the whole arc of building
                something — sketching the data model, wiring up the interface, and tuning the
                last few pixels until it feels right. I&rsquo;m most at home in React codebases,
                but I&rsquo;m comfortable moving down the stack when a project needs it.
              </p>
              <p>
                Recently I&rsquo;ve been focused on performance and accessibility: making sites
                that load quickly, hold up under real traffic, and work for people using a
                keyboard, a screen reader, or a five-year-old phone.
              </p>
              <div className="flex items-center gap-2 pt-2 text-sm text-mist-500">
                <MapPin size={16} className="text-signal-violet" />
                {siteConfig.location}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <p className="font-display text-3xl font-semibold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-mist-600">{stat.label}</p>
                </div>
              ))}
              <div className="col-span-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <p className="mb-3 text-xs font-medium text-mist-600">Technologies I work with</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-mist-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
