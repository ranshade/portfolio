import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies,
    github,
    demo,
    image,
    note,
  } = project;

  return (
    <article className="surface-card-interactive group flex h-full flex-col overflow-hidden">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden border-b border-ink-700 bg-ink-850">
        {image ? (
          <img
            src={image}
            alt={`${title} project preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-signal-gradient opacity-[0.1] transition-opacity duration-300 group-hover:opacity-[0.18]" />
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

            <span className="absolute bottom-3 right-4 font-display text-sm text-mist-600">
              {title}
            </span>
          </>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-medium text-mist-100">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Code unavailable note */}
        {note && (
          <p className="mt-4 text-xs italic text-mist-600">
            {note}
          </p>
        )}

        {/* Links */}
        {(github || demo) && (
          <div className="mt-6 flex items-center gap-5 border-t border-ink-700 pt-5 text-sm">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-mist-500 transition-colors hover:text-signal-indigo"
                aria-label={`View ${title} source code on GitHub`}
              >
                <Github size={15} />
                Code
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-mist-500 transition-colors hover:text-signal-indigo"
                aria-label={`View live demo of ${title}`}
              >
                <ExternalLink size={15} />
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}