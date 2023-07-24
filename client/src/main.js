//dependencies & libraries 👈👉
import './assets/css/main.css'
import '../node_modules/hover.css/css/hover-min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



const app = createApp(App)

app.use(router).use(store).mount('#app')
