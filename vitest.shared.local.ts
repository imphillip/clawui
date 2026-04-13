/** Standalone Vitest helpers for clawui (no OpenClaw monorepo `test/` tree). */
export const jsdomOptimizedDeps = {
  optimizer: {
    web: {
      enabled: true,
      include: ["lit", "lit-html", "@lit/reactive-element", "marked"] as string[],
    },
  },
};

export function resolveDefaultVitestPool(): "forks" | "threads" {
  return "threads";
}
