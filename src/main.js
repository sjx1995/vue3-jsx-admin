/*
 * @Author: Sunly
 * @Date: 2021-05-12 14:15:38
 * @LastEditTime: 2021-05-14 15:38:32
 * @LastEditors: Sunly
 * @Description: main
 * @FilePath: \vue3-jsx-template\src\main.js
 */
import { createApp } from "vue";
import router from "./router/index";
import store from "./store/index";
import App from "./App";
import "ant-design-vue/dist/antd.css";
import "@/styles/tailwindBase.css";
import "@/styles/index.less";

// process.env.NODE_ENV === "development" && require("./mock/index");
import "./mock/index";

createApp(App).use(router).use(store).mount("#app");
