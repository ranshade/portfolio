import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, description, technologies, github, demo, featured } = project;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/[0.16] ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden border-b border-white/[0.08] bg-ink-850">
        <div className="absolute inset-0 bg-signal-gradient opacity-[0.1] transition-opacity duration-300 group-hover:opacity-[0.18]" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <span className="absolute bottom-3 right-4 font-display text-sm text-mist-600">
          {title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-medium text-mist-100">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] px-2.5 py-1 text-xs text-mist-500"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t border-white/[0.06] pt-5 text-sm">
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-mist-500 transition-colors hover:text-mist-100"
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github size={15} />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-mist-500 transition-colors hover:text-mist-100"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink size={15} />
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}
