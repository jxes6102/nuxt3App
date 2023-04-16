import * as ElementPlus from 'element-plus/dist/index.full'
import zhTW from 'element-plus/es/locale/lang/zh-tw'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(ElementPlus,{locale:zhTW})
})