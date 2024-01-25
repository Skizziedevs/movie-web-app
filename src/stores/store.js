// store.js
import { defineStore } from 'pinia';

export const useSharedStore = defineStore({
  id: 'shared',
  state: () => ({
    inputText: '',
  }),
  actions: {
    setInputText(text) {
      this.inputText = text;
    },
  },
});
