import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import vue from "@vitejs/plugin-vue"
import { dirname } from "node:path"
import { resolve } from "path"
import AutoImport from "unplugin-auto-import/vite"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import VueDevTools from "vite-plugin-vue-devtools"

import pkg from "./package.json"

process.env.VITE_APP_VERSION = pkg.version
if (process.env.NODE_ENV === "production") {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/localization/*/**",
      ),
    }),
    AutoImport({
      imports: ["vue", "vue-router",  "vue-i18n"],
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
