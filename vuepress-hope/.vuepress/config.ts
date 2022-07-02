import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "岁寒松柏",
  description: "前端笔记, html, css, javascript",

  base: "/",

  theme,
});
