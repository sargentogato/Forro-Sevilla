import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    // When deploying to GitHub Pages, set base to the repository name so
    // generated asset links use '/Forro-Sevilla/'. Adjust if you use a
    // different repo name or a custom domain.
    base: mode === "production" ? "/Forro-Sevilla/" : "/",
    plugins: [vue(), vueDevTools()],
    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
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
