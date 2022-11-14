import { createApp } from "vue";
import App from "./App.vue";
import SmartUI from "mock-ui-vite-plus";
import "mock-ui-vite-plus/dist/assets/entry.css";
import "./assets/main.css";

createApp(App).use(SmartUI).mount("#app");
