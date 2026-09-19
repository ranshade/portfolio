import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view, so the navbar can
 * mark the matching link as active.
 *
 * `sectionIds` must be a stable reference (declare it at module scope)
 * or the effect will re-subscribe on every render.
 */
export default function useActiveSection(sectionIds, offset = 140) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const resolve = () => {
      const scrollY = window.scrollY;

      // At the very bottom the last section may be too short to ever
      // cross the offset line — force it active so the nav isn't stuck.
      const atBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + scrollY;
        if (top - offset <= scrollY) current = id;
      }
      setActiveId(current);
    };

    let frame = null;
    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        resolve();
      });
    };

    resolve();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
