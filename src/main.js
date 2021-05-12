/*
 * @Author: Sunly
 * @Date: 2021-05-12 14:15:38
 * @LastEditTime: 2021-05-12 15:32:12
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \vue3-jsx-template\src\main.js
 */
import { createApp } from "vue";
import router from "./router/index";
import store from "./store/index";
import App from "./App";

createApp(App).use(router).use(store).mount("#app");
