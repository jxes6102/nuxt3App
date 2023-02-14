import { defineStore } from 'pinia'

export const useCounterStore = defineStore('pinia', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
    squared() {
        if(this.count > 1000000) return false
        this.count = Math.pow(this.count, 2)
    },
    clear() {
      console.log('clears')
        this.count = 0
    },
    // async getUserProfile() {
    //   try {
    //     const { data } = await useFetch('/api/profile')
    //     this.profile = data
    //   } catch (error) {
    //     return error
    //   }
    // },
  },
})