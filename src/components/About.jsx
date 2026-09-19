import { MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

const techStack = [
  "PHP",
  "Laravel",
  "MySQL",
  "Next.js",
  "React",
  "React Native",
  "Flutter",
  "Dart",
  "Tailwind CSS",
  "Figma",
  "Git",
];

export default function About() {
  return (
    <Section id="about">
      <div className="section-shell">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="I care about the details most people scroll past."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal delay={80}>
            <div className="max-w-prose space-y-5 text-base leading-relaxed text-mist-500">
              <p> I&rsquo;m a {siteConfig.role.toLowerCase()} focused on building modern, responsive, and user-friendly digital experiences. I primarily work with React and Vite, turning ideas and designs into clean, functional interfaces while keeping the details polished and intentional. </p> <p> I also work across the stack with Laravel and MySQL, and build mobile applications using Flutter and React Native. For UI/UX projects, I use Figma to plan and refine the experience before bringing the design to life through code. </p>
              <div className="flex items-center gap-2 pt-2 text-sm text-mist-500">
                <MapPin size={16} className="text-signal-indigo" />
                {siteConfig.location}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 gap-4 sm:gap-5">
            {siteConfig.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={120 + index * 70}>
                <div className="surface-card-interactive h-full p-5">
                  <p className="font-display text-3xl font-semibold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-mist-600">{stat.label}</p>
                </div>
              </Reveal>
            ))}
            <Reveal className="col-span-3" delay={340}>
              <div className="surface-card p-5">
                <p className="mb-3 text-xs font-medium text-mist-600">Technologies I work with</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="chip px-3 py-1.5 text-mist-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
