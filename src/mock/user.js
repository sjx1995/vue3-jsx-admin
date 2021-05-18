/*
 * @Author: Sunly
 * @Date: 2021-05-13 16:21:39
 * @LastEditTime: 2021-05-18 17:43:32
 * @LastEditors: Sunly
 * @Description: 用户登录相关mock
 * @FilePath: \vue3-jsx-template\src\mock\user.js
 */
import mockJs from "mockjs";

mockJs.mock("user/login", "post", () => {
  return {
    code: 200,
    message: "success",
    data: `token_${new Date().getTime()}`,
  };
});

mockJs.mock("user/info", "post", () => {
  return {
    code: 200,
    message: "success",
    data: {
      username: "admin",
      password: "111111",
      name: "Admin",
      menu: [],
    },
  };
});

mockJs.mock("user/logout", "post", () => {
  return {
    code: 200,
    message: "success",
    data: {},
  };
});
