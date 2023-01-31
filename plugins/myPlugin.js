export default defineNuxtPlugin(nuxtApp => {
    // console.log('nuxtApp',nuxtApp)
    return {
        provide: {
          hello: (msg) => {
            return 'hello ' + msg
          }
        }
      }
})