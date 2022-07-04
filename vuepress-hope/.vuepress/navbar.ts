import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "代码笔记",
    icon: "light",
    children: [
      { text: "前端之路", icon: "light", link: "/web/html" },
    ]
  },
  // { text: 'blog', link: "blog"} 
]);
