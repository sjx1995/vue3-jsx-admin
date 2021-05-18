/*
 * @Author: Sunly
 * @Date: 2021-05-13 10:31:53
 * @LastEditTime: 2021-05-18 18:17:44
 * @LastEditors: Sunly
 * @Description: vuex/user
 * @FilePath: \vue3-jsx-template\src\store\modules\user.js
 */
import { getToken, setToken, removeToken } from "@/utils/auth";
import { Login, GetUserInfo, Logout } from "@/api/index";

const state = {
  token: getToken(),
  userInfo: {},
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
};

const actions = {
  async login({ commit }, userInfo) {
    console.log("触发login commit");
    console.log(commit, userInfo);
    try {
      const { data } = await Login(userInfo);
      commit("SET_TOKEN", data);
      setToken(data);
      return data;
    } catch (e) {
      return e;
    }
  },
  async getUserInfo({ commit }) {
    try {
      const { data } = await GetUserInfo();
      commit("SET_USER_INFO", data);
      return data;
    } catch (e) {
      return e;
    }
  },
  async logout({ commit }) {
    try {
      const { data } = await Logout();
      commit("SET_TOKEN", "");
      commit("SET_USER_INFO", {});
      removeToken();
      return data;
    } catch (e) {
      return e;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
