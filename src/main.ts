import { createApp } from 'vue'
import App from './App.vue'
import SmartUI from 'mock-ui-vite-plus'
import './assets/main.css'
import 'mock-ui-vite-plus/dist/assets/entry.css'

createApp(App).use(SmartUI).mount('#app')
