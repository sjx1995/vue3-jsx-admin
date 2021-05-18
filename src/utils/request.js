/*
 * @Author: Sunly
 * @Date: 2021-05-13 11:42:20
 * @LastEditTime: 2021-05-18 19:33:08
 * @LastEditors: Sunly
 * @Description: 封装axios
 * @FilePath: \vue3-jsx-template\src\utils\request.js
 */
import axios from "axios";
import { createVNode } from "vue";
import store from "@/store";
import { getToken } from "./auth";
import { message as Message, Modal } from "ant-design-vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";

let baseURL = null;

baseURL = {
  development: "",
  production: "/",
}[process.env.NODE_ENV];

const service = axios.create({
  baseURL,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    if (store.state.user?.token) {
      config.headers["key"] = getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 3000,
      });
      if (res.code === 403) {
        Modal.confirm({
          title: "warning",
          icon: createVNode(ExclamationCircleOutlined),
          content: "quit",
          onOk() {
            return new Promise((resolve) => {
              setTimeout(() => {
                store.dispatch("user/logout");
                resolve();
                location.reload();
              }, 1000);
            });
          },
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: "error",
      duration: 3000,
    });
    return Promise.reject(error);
  }
);

export function postData(url, data) {
  return service.post(url, { data });
}

export function getData(url, params) {
  return service.get(url, { params });
}
