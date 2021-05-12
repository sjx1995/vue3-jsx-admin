/*
 * @Author: Sunly
 * @Date: 2021-05-12 14:50:24
 * @LastEditTime: 2021-05-12 16:11:55
 * @LastEditors: Sunly
 * @Description: eslint 配置文件
 * @FilePath: \vue3-jsx-template\.eslintrc.js
 */
module.exports = {
  extends: ["plugin:vue/vue3-essential"],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["vue"],
  rules: {
    //自己写一些想配置的规则
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {},
    },
  ],
};
