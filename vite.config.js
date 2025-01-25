import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default {
  plugins: [vue()],
  server: {
    port: PORT, // Možeš promeniti port ako želiš
  },
};
