/*
 * @Author: Sunly
 * @Date: 2021-05-14 15:31:19
 * @LastEditTime: 2021-05-14 16:14:48
 * @LastEditors: Sunly
 * @Description: tailwindcss 配置文件
 * @FilePath: \vue3-jsx-template\tailwind.config.js
 */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        "(screen-33)": "calc(100vh - 33rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
