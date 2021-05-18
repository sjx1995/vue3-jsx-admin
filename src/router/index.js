/*
 * @Author: Sunly
 * @Date: 2021-05-12 15:03:08
 * @LastEditTime: 2021-05-18 17:58:50
 * @LastEditors: Sunly
 * @Description: 路由
 * @FilePath: \vue3-jsx-template\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "@/utils/auth";
import store from "@/store";

const routes = [
  {
    path: "/",
    redirect: "/login",
    hide: true,
  },
  {
    path: "/login",
    name: "login",
    hide: true,
    meta: { title: "登录" },
    component: () => import("@/views/Login/index"),
  },
  {
    path: "/main",
    name: "main",
    hide: false,
    meta: { title: "系统菜单" },
    redirect: "/dashboard",
    component: () => import("@/layout/index"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { title: "仪表盘" },
        component: () => import("@/views/dashboard/index"),
      },
      {
        path: "/table",
        name: "table",
        meta: { title: "表格" },
        component: () => import("@/views/table/index"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    hide: true,
    meta: { title: "404 NOT FOUND" },
    component: () => import("@/404/index"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = getToken();
  const userInfo = store.state.user.userInfo;
  document.title = to.meta.title;
  if (to.path === "/login") {
    if (token) {
      next("/main");
    } else {
      next();
    }
  } else {
    if (token) {
      // 权限判断
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
