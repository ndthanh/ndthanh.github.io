export const useCounterStore = Pinia.defineStore('counter', {
  state() {
    return {
      value: 0
    }
  },
  actions: {
    increment(state) {
      this.value++
    }
  }
})