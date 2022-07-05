import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/web/": [
    {
      text: "HTML",
      prefix: "/web/html/",
      collapsable: true,
      children: ["基础.md"],
    },
    {
      text: "CSS",
      prefix: "/web/css/",
      collapsable: true,
      children: [
        "基础.md",
        {
          icon: 'speed',
          text: "布局",
          prefix: "/web/css/",
          collapsable: true,
          children: ["布局.md", "浮动.md", "定位.md"],
        },
        "字体.md",
        "背景.md",
      ],
    },
  ],
});
