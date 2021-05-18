/*
 * @Author: Sunly
 * @Date: 2021-05-12 15:42:53
 * @LastEditTime: 2021-05-18 18:18:35
 * @LastEditors: Sunly
 * @Description: babel 配置文件
 * @FilePath: \vue3-jsx-template\babel.config.js
 */
module.exports = {
  plugins: [
    "@vue/babel-plugin-jsx",
    "@babel/transform-runtime",
    ["import", { libraryName: "ant-design-vue", style: true }],
  ],
};
