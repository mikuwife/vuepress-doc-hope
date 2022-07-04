export const data = JSON.parse("{\"key\":\"v-00ba2c54\",\"path\":\"/blog/hello-world.html\",\"title\":\"这是我的第一篇vuepress文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是我的第一篇vuepress文章\",\"category\":[\"vuepress\"],\"tag\":[\"vuepress\"],\"summary\":\"hello world\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://doc.mikucat.cn/blog/hello-world.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"岁寒松柏\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"这是我的第一篇vuepress文章\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vuepress\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"hello world\",\"slug\":\"hello-world\",\"children\":[]}],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"blog/hello-world.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
