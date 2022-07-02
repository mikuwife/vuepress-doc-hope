import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  pure: true,
  hostname: "https://doc.mikucat.cn",

  author: {
    name: "MikuCat",
    url: "https://mikucat.cn",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "mikuwife/vuepress-doc-hope",

  // docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  // footer: '<a href="https://beian.miit.gov.cn/">赣 ICP 备 2021007302 号</a> </br> Copyright © 2022-present BY MikuCat </br> Power by <a href="https://v2.vuepress.vuejs.org/">vuepress</a> & Theme by <a href="https://github.com/vuepress-theme-hope">hope</a>',

  displayFooter: true,

  pageInfo: ["Author", "Date","ReadingTime"],

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    blog: false,

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: false,
    copyCode: {
      pure: false
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
