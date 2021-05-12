/*
 * @Author: Sunly
 * @Date: 2021-05-12 15:06:47
 * @LastEditTime: 2021-05-12 15:08:36
 * @LastEditors: Sunly
 * @Description: vuex
 * @FilePath: \vue3-jsx-template\src\store\index.js
 */
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    ADD_COUNT(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("ADD_COUNT");
    },
  },
});
