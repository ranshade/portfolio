import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <Section id="projects" pattern>
      <div className="section-shell">
        <SectionHeader
          index="03"
          eyebrow="Projects"
          title="A few things I've built recently."
        />

        {/* Each card reveals on its own short delay, so the grid fills in
            as you scroll instead of appearing all at once. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 2) * 90}
              className={project.featured ? "sm:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
