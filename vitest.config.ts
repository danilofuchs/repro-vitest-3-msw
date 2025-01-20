import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // sequence: {
    //   hooks: "list",
    // },
    include: ["./src/**/*.spec.ts"],
    mockReset: true,
  },
  plugins: [swc.vite()],
  resolve: {
    alias: {
      "~/": new URL("./src/", import.meta.url).pathname,
      "test/": new URL("./test/", import.meta.url).pathname,
    },
  },
});
