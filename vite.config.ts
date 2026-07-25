import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const basePath = env.VITE_BASE_PATH || "/";

  return {
    // Use a configurable base path so the app works both on GitHub Pages
    // (with a subpath such as /Forro-Sevilla/) and on a regular hosting root.
    base: basePath,
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});
