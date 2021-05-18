/*
 * @Author: Sunly
 * @Date: 2021-05-12 14:15:38
 * @LastEditTime: 2021-05-18 19:32:45
 * @LastEditors: Sunly
 * @Description: vite 配置文件
 * @FilePath: \vue3-jsx-template\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: "/",
  ssr: false,
  server: {
    port: 8888,
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
  },
});
