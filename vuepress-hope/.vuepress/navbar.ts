import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "代码笔记",
    icon: "read",
    children: [
      { text: "前端", link: "/web/html/基础" },
    ]
  },
  { text: "关于", icon: "profile" ,link: "/about/" }
]);
