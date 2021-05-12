/*
 * @Author: Sunly
 * @Date: 2021-05-12 15:03:08
 * @LastEditTime: 2021-05-12 15:52:49
 * @LastEditors: Sunly
 * @Description: 路由
 * @FilePath: \vue3-jsx-template\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",
    meta: { title: "主页" },
    component: () => import("../views/Home/Home"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
