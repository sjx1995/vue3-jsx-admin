/*
 * @Author: Sunly
 * @Date: 2021-05-13 11:39:27
 * @LastEditTime: 2021-05-18 18:18:19
 * @LastEditors: Sunly
 * @Description: app
 * @FilePath: \vue3-jsx-template\src\api\index.js
 */
import { postData } from "@/utils/request";

export function Login(data) {
  return postData("user/login", data);
}

export function GetUserInfo() {
  return postData("user/info");
}

export function Logout() {
  return postData("user/logout");
}
