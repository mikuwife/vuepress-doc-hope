import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "岁寒松柏",
  description: "前端笔记, html, css, javascript",

  base: "/",

  theme,

  plugins: [
    docsearchPlugin({
      appId: "2YLUVZHK7V",
      apiKey: "0d221d278f8cc961c1af0cb4b84a8dc5",
      indexName: "mikucat"
    })
  ]
});
