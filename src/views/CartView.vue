<template>
  <AppHeader />
  <div>
    <h1>Shopping Cart</h1>
    <ul v-if="cart.items.length">
      <li v-for="item in cart.items" :key="item.id">
        <h3>{{ item.name }}</h3>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p v-else>Your cart is empty.</p>
    <h2>Total Price: ${{ cart.total.toFixed(2) }}</h2>
  </div>
</template>

<script>
import { useGameStore } from "../stores/gameStore.js";
import AppHeader from "../components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  setup() {
    const cart = useGameStore();

    const removeFromCart = (gameId) => {
      cart.removeFromCart(gameId);
    };

    return { cart, removeFromCart };
  },
};
</script>
