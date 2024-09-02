import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "adjust-asset-paths",
      enforce: "post",
      transform(code, id) {
        // Example: Replace '/assets/' with './assets/' in all JS files
        if (id.endsWith(".js")) {
          return code.replace(/\/assets\//g, "./assets/");
        }
        return code;
      },
    },
    react(),
  ],
});
