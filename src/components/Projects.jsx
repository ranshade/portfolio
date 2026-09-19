import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-semibold">
            A few things I&rsquo;ve built recently.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
