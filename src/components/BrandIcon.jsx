import { brandIcons } from "../data/brandIcons.js";

/**
 * Renders one inlined brand mark (Simple Icons path data, no external
 * dependency). `size` sets the square box in px; the path fills with
 * `currentColor`, so wrap this in an element with the text colour you want.
 */
export default function BrandIcon({ name, size = 20, className = "", style }) {
  const icon = brandIcons[name];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      role="img"
      aria-label={icon.label}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
