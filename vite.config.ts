import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcsstoviewport from "postcss-mobile-forever";

import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        tailwindcss(),
        postcsstoviewport({
          appSelector: "#h5_page",
          landscapeWidth: 750,
          viewportWidth: 750,
          disableDesktop: true,
          unitPrecision: 2,
          enableMediaQuery: true,
          selectorBlackList: ["PhotoView"],
        }),
      ],
    },
  },
  base: "./",
});
