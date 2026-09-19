import * as Icons from "lucide-react";
import { services } from "../data/services.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Services() {
  return (
    <Section id="services">
      <div className="section-shell">
        <SectionHeader index="05" eyebrow="Services" title="How I can help." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Code2;
            return (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <div className="surface-card-interactive group h-full p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-850 text-signal-cyan transition-colors group-hover:border-signal-indigo group-hover:text-signal-indigo">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-medium text-mist-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-500">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
