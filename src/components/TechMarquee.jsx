import { Sparkles } from "lucide-react";
import BrandIcon from "./BrandIcon.jsx";

const technologies = [
  { key: "php", label: "PHP", color: "#787CB5" },
  { key: "laravel", label: "Laravel", color: "#FF2D20" },
  { key: "mysql", label: "MySQL", color: "#4479A1" },
  { key: "nextjs", label: "Next.js", color: "#6D6AFF" },
  { key: "react", label: "React", color: "#149ECA" },
  { key: "flutter", label: "Flutter", color: "#02569B" },
  { key: "dart", label: "Dart", color: "#0175C2" },
  { key: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
  { key: "figma", label: "Figma", color: "#F24E1E" },
  { key: "git", label: "Git", color: "#F05033" },
];

function TechChip({ item }) {
  return (
    <div className="surface-card flex shrink-0 items-center gap-3 rounded-full py-2 pl-2.5 pr-5">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${item.color}22` }}
      >
        <BrandIcon
          name={item.key}
          size={17}
          style={{ color: item.color }}
        />
      </span>

      <span className="font-mono text-sm font-medium text-mist-300">
        {item.label}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-700 bg-[#F5F4FF] py-9 dark:bg-[#12131C]">
      {/* Soft center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-indigo/[0.08] blur-[100px]"
        aria-hidden="true"
      />

      {/* Heading */}
      <p className="relative mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wide text-mist-600">
        <Sparkles size={13} className="text-signal-indigo" />
        Tech I use to build things
        <Sparkles size={13} className="text-signal-indigo" />
      </p>
   
      {/* Marquee */}
      <div className="group relative overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F5F4FF] to-transparent dark:from-[#12131C] sm:w-32"
          aria-hidden="true"
        />

        {/* Right fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F5F4FF] to-transparent dark:from-[#12131C] sm:w-32"
          aria-hidden="true"
        />

        {/* Moving track */}
        <div className="flex w-max animate-tech-marquee group-hover:[animation-play-state:paused]">
          {/* First copy */}
          <div className="flex shrink-0 items-center gap-5 pr-5">
            {technologies.map((item) => (
              <TechChip key={`first-${item.key}`} item={item} />
            ))}
          </div>

          {/* Second identical copy for seamless looping */}
          <div
            className="flex shrink-0 items-center gap-5 pr-5"
            aria-hidden="true"
          >
            {technologies.map((item) => (
              <TechChip key={`second-${item.key}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}