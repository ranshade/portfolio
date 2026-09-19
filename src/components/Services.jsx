import * as Icons from "lucide-react";
import { services } from "../data/services.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="services" className="py-28 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-semibold">How I can help.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Code2;
            return (
              <Reveal key={service.title} delay={index * 60}>
                <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14]">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-signal-cyan">
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
    </section>
  );
}
