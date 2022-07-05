import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // pure: true,
  hostname: "https://mikucat.cn",

  author: {
    name: "参谋次长",
    url: "https://mikucat.cn",
  },

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  iconAssets: "iconfont",

  logo: "/avatar.png",

  // docsRepo: "vuepress-doc-hope",
  repo: "mikuwife/vuepress-doc-hope",

  docsDir: "vuepress-hope",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '<a href="https://beian.miit.gov.cn/">赣 ICP 备 2021007302 号</a> </br>  Power by <a href="https://v2.vuepress.vuejs.org/">vuepress</a> & Theme by <a href="https://github.com/vuepress-theme-hope">hope</a>',

  displayFooter: true,

  pageInfo: ["Author", "Date","ReadingTime"],

  plugins: {
    blog: {
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: false,
    copyCode: {
      pure: false
    },

    mdEnhance: {
      codetabs: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
