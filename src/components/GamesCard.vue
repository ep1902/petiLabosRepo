<template>
  <div class="game-card">
    <h2>{{ game.name }}</h2>
    <p>Price: ${{ game.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit("add", this.game);
    },
  },
};
</script>

<style scoped>
.game-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
