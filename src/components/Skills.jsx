import { skillGroups } from "../data/skills.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

function ProficiencyDots({ level }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < level ? "bg-signal-indigo" : "bg-ink-800"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" tone="raised">
      <div className="section-shell">
        <SectionHeader index="02" eyebrow="Skills" title="Tools I reach for, and why." />

        <div className="mt-12 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.group}>
              <Reveal>
                <h3 className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-mist-600">
                  {group.group}
                  <span className="h-px flex-1 bg-ink-700" aria-hidden="true" />
                </h3>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.skills.map((skill, index) => (
                  <Reveal key={skill.name} delay={index * 70}>
                    <div className="surface-card-interactive group h-full p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display text-base font-medium text-mist-100">
                          {skill.name}
                        </h4>
                        <ProficiencyDots level={skill.level} />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-mist-600">
                        {skill.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
