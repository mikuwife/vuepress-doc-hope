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
      appId: "PAD5ON2MBN",
      apiKey: "a0d0774a5ef8ac1d9f6d33c21a59d5c7",
      indexName: "vuepress"
    })
  ]
});
