import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DriverCard from './components/DriverCard.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('DriverCard', DriverCard)

app.mount('#app')
