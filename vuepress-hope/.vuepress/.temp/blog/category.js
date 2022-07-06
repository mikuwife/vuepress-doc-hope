export const categoryMap = {"category":{"/":{"path":"/category/","map":{"vuepress":{"path":"/category/vuepress/","keys":["v-1a932c19"]},"学习":{"path":"/category/%E5%AD%A6%E4%B9%A0/","keys":["v-c6755c5a"]}}}},"tag":{"/":{"path":"/tag/","map":{"vuepress":{"path":"/tag/vuepress/","keys":["v-1a932c19"]},"学习":{"path":"/tag/%E5%AD%A6%E4%B9%A0/","keys":["v-c6755c5a"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
