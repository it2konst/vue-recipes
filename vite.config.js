import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split(".").pop();
          if (extType === "css") {
            return "assets/styles/[name].[hash][extname]";
          }
          if (["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(extType)) {
            return "assets/images/[name].[hash][extname]";
          }
          if (["woff", "woff2", "eot", "ttf", "otf"].includes(extType)) {
            return "assets/fonts/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
        chunkFileNames: "assets/js/[name].[hash].js",
        entryFileNames: "assets/js/[name].[hash].js",
      },
    },
  },
});
