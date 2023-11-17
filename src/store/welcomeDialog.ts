import { ref } from "vue";
import { defineStore } from "pinia";

export const useWelcomeDialogStore = defineStore("welcomeDialog", {
  state: () => ({
    done: ref(false),
    show: ref(false),
  }),
  actions: {
    openDialog() {
      if (this.done) return;
      // this.show = true;
    },
    closeDialog() {
      this.show = false;
      this.done = true;
    },
  },
  persist: true,
});
