/*
 * @Author: Sunly
 * @Date: 2021-05-13 11:11:47
 * @LastEditTime: 2021-05-13 11:30:37
 * @LastEditors: Sunly
 * @Description: 认证
 * @FilePath: \vue3-jsx-template\src\utils\auth.js
 */
import jsCookie from "js-cookie";

const TokenKey = "userToken";

export function getToken() {
  return jsCookie.get(TokenKey);
}

export function setToken(token) {
  return jsCookie.set(TokenKey, token);
}

export function removeToken() {
  return jsCookie.remove(TokenKey);
}
