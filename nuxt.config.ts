// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        // 部署至githubpage需設定為專案名稱
        baseURL: '/nuxt3App/',
        // // 設定打包後資料夾名稱
        buildAssetsDir:'/dist/',
        // 設定讀取路徑
        cdnURL:'./',
      }, 
})
