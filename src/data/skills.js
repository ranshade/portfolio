// Proficiency is on a 1–5 scale and renders as filled segments, not a percentage.
export const skillGroups = [
  {
    group: "Interface",
    skills: [
      { name: "React", description: "Component architecture, hooks, state patterns", level: 5 },
      { name: "JavaScript", description: "ES2023, async patterns, DOM APIs", level: 5 },
      { name: "Tailwind CSS", description: "Design systems, responsive layouts", level: 5 },
      { name: "HTML & CSS", description: "Semantic markup, accessible layouts", level: 5 },
    ],
  },
  {
    group: "Platform",
    skills: [
      { name: "Node.js", description: "REST APIs, middleware, server tooling", level: 4 },
      { name: "REST APIs", description: "Design, auth, versioning, docs", level: 4 },
      { name: "Firebase", description: "Auth, Firestore, hosting, functions", level: 4 },
      { name: "Vite", description: "Build tooling, plugin config, optimization", level: 4 },
    ],
  },
  {
    group: "Workflow",
    skills: [
      { name: "Git", description: "Branching strategy, code review, rebasing", level: 5 },
      { name: "GitHub", description: "Actions, PR workflows, project boards", level: 5 },
      { name: "Vercel", description: "CI/CD, preview deployments, edge config", level: 4 },
    ],
  },
];
