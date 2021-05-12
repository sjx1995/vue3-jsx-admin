/*
 * @Author: Sunly
 * @Date: 2021-05-12 14:52:52
 * @LastEditTime: 2021-05-12 14:56:13
 * @LastEditors: Sunly
 * @Description: prettier 配置文件
 * @FilePath: \vue3-jsx-template\prettier.config.js
 */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  bracketSpacing: true,
  trailingComma: "es5",
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: "always",
  insertPragma: false,
  requirePragma: false,
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict",
  endOfLine: "lf",
  rangeStart: 0,
  overrides: [
    {
      files: "*.md",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
