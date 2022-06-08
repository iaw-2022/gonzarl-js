import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'
import App from './App.vue'
import router from './router'
import DriverCard from './components/DriverCard.vue'
import DriverFormCard from './components/DriverFormCard.vue'
import RaceBar from './components/Racebar.vue'
import RaceCard from './components/RaceCard.vue'
import GoBackButton from './components/GoBackButton.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('DriverCard', DriverCard)
app.component('DriverFormCard', DriverFormCard)
app.component('RaceBar', RaceBar)
app.component('RaceCard', RaceCard)
app.component('GoBackButton', GoBackButton)

app.mount('#app')
