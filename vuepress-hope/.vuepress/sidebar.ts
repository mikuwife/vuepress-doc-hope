import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/web/": [
    { text: "HTML", link: "/web/html/" },
    {
      text: "CSS",
      prefix: "/web/css/",
      collapsable: true,
      children: [
        "基础.md",
        "布局.md",
        "浮动.md",
        "定位.md",
        "字体.md",
        "背景.md",
      ],
    },
  ],
});
