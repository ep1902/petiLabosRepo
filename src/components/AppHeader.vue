<template>
  <header>
    <nav>
      <router-link to="/Games">Store</router-link>

      <router-link to="/Cart">Cart</router-link>

      <router-link to="/Convert">Currency Converter</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  background: #637797;
  color: #ffffff;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  color: #ffffff;
  justify-content: center;
  text-color: #ffffff;
  gap: 2rem;
  align-items: center;
}

router-link {
  color: #ffffff;
}
</style>
