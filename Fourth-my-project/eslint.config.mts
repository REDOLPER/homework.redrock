import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  { 
    // 针对 webpack.config.js 的特殊配置
    files: ['webpack.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,  // 允许 Node.js 全局变量
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',  // 允许使用 require 导入模块
      'no-undef': 'off',  // 关闭未定义变量检查，因为 webpack.config.js 中可能会使用一些特殊的全局变量
    }
  },
]);
