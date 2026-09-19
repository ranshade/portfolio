import Reveal from "./Reveal.jsx";

/**
 * Consistent section heading: a numbered eyebrow with an accent rule,
 * the title, and an optional lead paragraph.
 *
 * The number and rule give each section a visual anchor, so a heading
 * reads as the start of something rather than as another paragraph.
 */
export default function SectionHeader({ index, eyebrow, title, lead }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3">
        {index && (
          <span className="font-mono text-xs font-medium text-signal-indigo">{index}</span>
        )}
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-ink-700" aria-hidden="true" />
      </div>

      <h2 className="mt-4 max-w-2xl text-display-md font-semibold">{title}</h2>

      {lead && (
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist-500">{lead}</p>
      )}
    </Reveal>
  );
}
