/*
 * @Author: Sunly
 * @Date: 2021-05-12 15:06:47
 * @LastEditTime: 2021-05-13 15:57:43
 * @LastEditors: Sunly
 * @Description: vuex
 * @FilePath: \vue3-jsx-template\src\store\index.js
 */
import { createStore } from "vuex";

import user from "./modules/user";

export default createStore({
  modules: {
    user: user,
  },
});
