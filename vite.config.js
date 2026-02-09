import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/wdd131-final-project/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        conditions: resolve(__dirname, "conditions.html"),
        visitor_center: resolve(__dirname, "visitor-center.html")
      }
    }
  }
});