import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const port = process.env.PORT || 3000;
export default {
  plugins: [vue()],
  server: {
    port: port,
  },
};
