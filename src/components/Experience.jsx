import { experience } from "../data/experience.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-semibold">Where I&rsquo;ve worked.</h2>
        </Reveal>

        <Reveal delay={100}>
          <ol className="relative mt-14 space-y-10 border-l border-white/[0.09] pl-8 sm:pl-10">
            {experience.map((item) => (
              <li key={`${item.role}-${item.company}`} className="relative">
                <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-ink-950 bg-signal-violet sm:-left-[49px]" />

                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-medium text-mist-100">
                    {item.role} <span className="text-mist-600">· {item.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-mist-600">{item.date}</span>
                </div>

                <p className="mt-2.5 max-w-prose text-sm leading-relaxed text-mist-500">
                  {item.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] px-2.5 py-1 text-xs text-mist-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
