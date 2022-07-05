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
      apiKey: "7e7a772fc1ec7af177c60a18bfac2fe3",
      indexName: "vuepress"
    })
  ]
});
