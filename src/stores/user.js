import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true,
  }),
  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })
    },
    login(userData) {
      this.$patch({
        ...userData,
      })
    }
  },
})
