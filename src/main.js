import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DriverCard from './components/DriverCard.vue'
import RaceBar from './components/Racebar.vue'
import RaceCard from './components/RaceCard.vue'
import Carousel from './components/Carousel.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('DriverCard', DriverCard)
app.component('RaceBar', RaceBar)
app.component('RaceCard', RaceCard)
app.component('Carousel', Carousel)

app.mount('#app')
