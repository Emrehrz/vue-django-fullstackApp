import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"
import { apolloClient } from "@/apollo-config"
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(apolloClient)
app.mount('#app')
