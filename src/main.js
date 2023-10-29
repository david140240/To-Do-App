import { createApp } from 'vue'
import App from './App.vue'
import store from './store/mainStore'
import router from './router'

const app = createApp(App)

app.use(store).use(router).mount('#app')
