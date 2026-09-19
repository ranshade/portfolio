/**
 * Shared wrapper for every top-level section.
 *
 * `tone` alternates the background between the page colour and a
 * slightly raised surface. That alternation is what gives the page a
 * scroll rhythm — without it, six identically-padded blocks on one flat
 * background read as a single empty page.
 *
 * The `id` stays on the <section> element because the navbar scroll spy
 * resolves sections by id.
 */
export default function Section({
  id,
  tone = "base",
  pattern = false,
  className = "",
  children,
}) {
  const raised = tone === "raised";

  return (
    <section
      id={id}
      className={`relative py-24 sm:py-28 ${
        raised ? "border-y border-ink-700 bg-ink-900" : "bg-ink-950"
      } ${className}`}
    >
      {pattern && (
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_10%,transparent_75%)]"
          aria-hidden="true"
        />
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
