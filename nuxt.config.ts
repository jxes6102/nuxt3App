// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   // origin config  
  runtimeConfig: {
      apiSecret: '怎麼可以讓你知道呢 :P',
      public: {
        apiBase: '/api',
        test:'is test public'
      }
    },
    // web style config
    appConfig: {
      theme: {
        primaryColor: '#0ea5e9'
      }
    },
    ssr: true,
    typescript: {
      typeCheck: true
    },
    app:{
        // 部署至githubpage需設定為專案名稱
        baseURL: '/nuxt3App/',
        // // 設定打包後資料夾名稱
        buildAssetsDir:'/dist/',
        // 設定讀取路徑
        cdnURL:'./',
      }, 
    modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
    // nitro: {
    //   prerender: {
    //     routes: ['/page1', '/page2','/page3']
    //   }
    // }
})
