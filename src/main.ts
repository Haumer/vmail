import { createApp } from 'vue'
import App from './App.vue'
import "./assets/index.css"
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3000/'

createApp(App).mount('#app')