import { skillGroups } from "../data/skills.js";
import Reveal from "./Reveal.jsx";

function ProficiencyDots({ level }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < level ? "bg-signal-violet" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-semibold">
            Tools I reach for, and why.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.group} delay={groupIndex * 90}>
              <h3 className="mb-5 text-sm font-medium uppercase tracking-wide text-mist-600">
                {group.group}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.14] hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-display text-base font-medium text-mist-100">
                        {skill.name}
                      </h4>
                      <ProficiencyDots level={skill.level} />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mist-600">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
