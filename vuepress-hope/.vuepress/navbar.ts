import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "代码笔记",
    icon: "light",
    children: [
      { text: "前端之路", icon: "strong", link: "/web/html/基础" },
    ]
  },
  // { text: 'blog', link: "blog"} 
]);
