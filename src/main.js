import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);

const pinia = createPinia();
app.use(pinia);

app.mount("#app");
