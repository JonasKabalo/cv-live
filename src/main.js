import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import 'tailwindcss/tailwind.css'

import openaiPlugin from './plugins/openai'

const app = createApp(App)

app.use(openaiPlugin)
app.use(router)

app.mount('#app')
