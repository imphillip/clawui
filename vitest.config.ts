import { playwright } from "@vitest/browser-playwright";
import { defineConfig, defineProject, mergeConfig } from "vitest/config";
import viteBase from "./vite.config.ts";
import {
  jsdomOptimizedDeps,
  resolveDefaultVitestPool,
} from "./vitest.shared.local.ts";

const sharedUiTestConfig = {
  isolate: true,
  pool: resolveDefaultVitestPool(),
} as const;

async function vitestViteConfig() {
  return typeof viteBase === "function" ? await viteBase() : viteBase;
}

export default defineConfig(async () =>
  mergeConfig(await vitestViteConfig(), {
    test: {
      ...sharedUiTestConfig,
      projects: [
        defineProject(async () =>
          mergeConfig(await vitestViteConfig(), {
            test: {
              ...sharedUiTestConfig,
              deps: jsdomOptimizedDeps,
              name: "unit",
              include: ["src/**/*.test.ts"],
              exclude: ["src/**/*.browser.test.ts", "src/**/*.node.test.ts"],
              environment: "jsdom",
              setupFiles: ["./src/test-helpers/lit-warnings.setup.ts"],
            },
          }),
        ),
        defineProject(async () =>
          mergeConfig(await vitestViteConfig(), {
            test: {
              ...sharedUiTestConfig,
              deps: jsdomOptimizedDeps,
              name: "unit-node",
              include: ["src/**/*.node.test.ts"],
              environment: "jsdom",
              setupFiles: ["./src/test-helpers/lit-warnings.setup.ts"],
            },
          }),
        ),
        defineProject(async () =>
          mergeConfig(await vitestViteConfig(), {
            test: {
              ...sharedUiTestConfig,
              name: "browser",
              include: ["src/**/*.browser.test.ts"],
              setupFiles: ["./src/test-helpers/lit-warnings.setup.ts"],
              browser: {
                enabled: true,
                provider: playwright(),
                instances: [{ browser: "chromium", name: "chromium" }],
                headless: true,
                ui: false,
              },
            },
          }),
        ),
      ],
    },
  }),
);
