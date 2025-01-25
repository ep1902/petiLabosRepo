import { defineStore } from "pinia";

export const useGameStore = defineStore("cart", {
  state: () => ({
    items: [],
    total: 0,
  }),

  getters: {
    itemCount: (state) =>
      state.items.reduce((count, item) => count + item.quantity, 0),
  },

  actions: {
    addToCart(game) {
      const existingItem = this.items.find((item) => item.id === game.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...game, quantity: 1 });
      }
      this.calculateTotal();
    },

    removeFromCart(gameId) {
      this.items = this.items.filter((item) => item.id !== gameId);
      this.calculateTotal();
    },

    calculateTotal() {
      this.total = this.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});
