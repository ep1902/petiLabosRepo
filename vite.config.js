import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default {
  plugins: [vue()],
  server: {
    port: 3000, // Možeš promeniti port ako želiš
  },
};
