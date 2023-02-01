export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id === 'error') {
      return abortNavigation()
    }
    console.log('Middleware test')
    
    if (Math.random() > 0.5) {
      console.log(`[來自 random-redirect 中間件] 重新導向至`)
      return navigateTo({ path: '/' })
    }
})