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
        "字体.md",
        "背景.md",
        "动画.md",
        {
          icon: 'speed',
          text: "布局",
          prefix: "/web/css/",
          collapsable: true,
          children: ["布局.md", "浮动.md", "定位.md", "flex.md", "手机端.md", "响应式.md"],
        },
      ],
    },
    {
      text: "JavaScript基础",
      prefix: "/web/js/",
      collapsable: true,
      children: []
    },
  ],
});
