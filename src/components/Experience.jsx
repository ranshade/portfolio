
import { experience } from "../data/experience.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <Section id="experience" tone="raised">
      <div className="section-shell">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title="Where I've worked."
        />

        <ol className="relative mt-12 space-y-10 border-l border-ink-700 pl-8 sm:pl-10">
          {experience.map((item, index) => (
            <Reveal
              as="li"
              key={`${item.role}-${item.company}`}
              delay={index * 90}
              className="relative"
            >
              {/* Timeline marker */}
              <span
                className="
                  absolute
                  -left-[41px]
                  top-1.5
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-ink-900
                  bg-signal-indigo
                  sm:-left-[49px]
                "
              />

              {/* Role + Company + Date */}
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-lg font-medium text-mist-100">
                  {item.role}

                  <span className="text-mist-600">
                    {" "}
                    · {item.company}
                  </span>
                </h3>

                <span className="font-mono text-xs text-mist-600">
                  {item.date}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2.5 max-w-prose text-sm leading-relaxed text-mist-500">
                {item.description}
              </p>

              {/* Technologies */}
              {item.technologies?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="chip text-mist-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Optional note */}
              {item.note && (
                <p className="mt-3 text-xs italic text-mist-600">
                  {item.note}
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
