import { defineConfig, mergeConfig } from "vitest/config";
import viteBase from "./vite.config.ts";
import { resolveDefaultVitestPool } from "./vitest.shared.local.ts";

// Node-only tests for pure logic (no Playwright/browser dependency).
export default defineConfig(async () => {
  const base = typeof viteBase === "function" ? await viteBase() : viteBase;
  return mergeConfig(base, {
    test: {
      isolate: true,
      pool: resolveDefaultVitestPool(),
      testTimeout: 120_000,
      include: ["src/**/*.node.test.ts"],
      environment: "node",
    },
  });
});
