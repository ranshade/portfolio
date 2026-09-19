// Proficiency is on a 1–5 scale and renders as filled segments, not a percentage.
// Levels below are a starting point — tune them to how you'd actually rate
// yourself in an interview, since this is the section people scan hardest.
export const skillGroups = [
  {
    group: "Frontend",
    skills: [
      { name: "Vite", description: "Dev server, build config, plugin setup", level: 5 },
      { name: "shadcn/ui", description: "Accessible component primitives, theming, composition", level: 5},
      { name: "GSAP", description: "Timelines, scroll-triggered animation, easing", level: 3 },
      { name: "React", description: "Component architecture, hooks, state patterns", level: 5 },
      { name: "Tailwind CSS", description: "Utility-first styling, responsive layouts", level: 5 },
      { name: "JavaScript", description: "ES2023, async patterns, DOM APIs", level: 5 },
      { name: "Next.js", description: "App Router, SSR, API routes, deployment", level: 3 },

    ],
  },
  {
    group: "Backend & Data",
    skills: [
      { name: "PHP", description: "Server-side logic, sessions, form handling", level: 4 },
      { name: "Laravel", description: "Eloquent, Blade, routing, migrations, auth", level: 4 },
      { name: "MySQL", description: "Schema design, joins, queries via XAMPP", level: 3 },
      { name: "REST APIs", description: "Endpoint design, auth, JSON contracts", level: 3 },
    ],
  },
  {
    group: "Mobile",
    skills: [
      { name: "Flutter", description: "Widget composition, state management, builds", level: 4 },
      { name: "Dart", description: "Async/await, null safety, OOP patterns", level: 3 },
      { name: "React Native", description: "Cross-platform screens, navigation, native modules", level: 5 },
    ],
  },
  {
    group: "Design & Workflow",
    skills: [
      { name: "Figma", description: "Wireframes, prototypes, design-to-code handoff", level: 5 },
      { name: "Git & GitHub", description: "Branching, pull requests, version control", level: 4 },
      { name: "XAMPP", description: "Local Apache/MySQL environment setup", level: 5 },
    ],
  },
];
