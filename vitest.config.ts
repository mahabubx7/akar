import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      reporter: ["text", "json", "html"],
      provider: "v8",
      reportsDirectory: "coverage",
      all: true,
      exclude: [
        "node_modules",
        "test",
        "coverage",
        "dist",
        ".git",
        "**/*/index.ts"
      ],
      include: ["lib"]
    }
  }
})
