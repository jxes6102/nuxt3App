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
    ssr: false,
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
    modules: ['@nuxtjs/tailwindcss','@pinia/nuxt','@nuxtjs/i18n'],
    i18n: {
      defaultLocale: 'zh',
      langDir: 'locales',
      locales: [
        { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
        { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' }
      ],
      strategy: 'no_prefix',
      vueI18n: {
        legacy: false
      }
    },
    // nitro: {
    //   prerender: {
    //     ignore: [],
    //     routes: ['/page1','/page2','/page3','/page4','/page5','/page6','/page7',],
    //     crawlLinks: true
    //   }
    // },
})
