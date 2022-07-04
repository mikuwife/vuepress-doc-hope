export const categoryMap = {"category":{"/":{"path":"/category/","map":{"vuepress":{"path":"/category/vuepress/","keys":["v-00ba2c54"]}}}},"tag":{"/":{"path":"/tag/","map":{"vuepress":{"path":"/tag/vuepress/","keys":["v-00ba2c54"]}}}}}

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
