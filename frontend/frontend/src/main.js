import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"
import { apolloClient } from "@/apollo-config"
const app = createApp(App)

app.use(router)
app.use(apolloClient)
app.mount('#app')
