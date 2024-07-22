import { defineStore } from 'pinia';

const defaultState = {
  lines: [],
};

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    ...defaultState,
  }),
});