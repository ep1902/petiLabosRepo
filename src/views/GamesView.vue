<template>
  <AppHeader />
  <div>
    <h1>Video Games</h1>
    <div class="games-grid">
      <GamesCard
        v-for="game in games"
        :key="game.id"
        :game="game"
        @add="handleAdd"
      />
    </div>
  </div>
</template>

<script>
import GamesCard from "../components/GamesCard.vue";
import { useGameStore } from "../stores/gameStore";
import AppHeader from "../components/AppHeader";

export default {
  components: {
    GamesCard,
    AppHeader,
  },
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    fetch("/Games.json")
      .then((response) => response.json())
      .then((data) => {
        this.games = data;
      });
  },
  setup() {
    const cart = useGameStore();

    const handleAdd = (game) => {
      cart.addToCart(game);
    };

    return {
      handleAdd,
    };
  },
};
</script>

<style scoped>
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}
</style>
