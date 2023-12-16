import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWelcomeDialogStore = defineStore('welcomeDialog', {
  state: () => ({
    done: ref(false),
    show: ref(false),
  }),
  actions: {
    openDialog() {
      // TODO: 現状インフラ整備のため、常に表示する
      this.show = true
      // if (this.done) return
      // 計測の目処とかが立ったら、再度検討する
      // https://github.com/Kazuya-Sakamoto/lgtm-kinako/issues/25
      // this.show = true;
    },
    closeDialog() {
      this.show = false
      this.done = true
    },
  },
  persist: true,
})
