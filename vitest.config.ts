// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      reporter: ["text", "html"], // Use 'text' for terminal and 'html' for a detailed report
      include: ["app/**/*.{ts,tsx}"], // Include your source files
      exclude: ["app/*.client.tsx", "app/*.server.tsx"], // Exclude entry client and server
    },
  },
});
