import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';

import './index.css'
import App from './App.vue'
import router from './router'
import DriverCard from './components/DriverCard.vue'
import DriverFormCard from './components/DriverFormCard.vue'
import RaceBar from './components/RaceBar.vue'
import RaceCard from './components/RaceCard.vue'
import GoBackButton from './components/GoBackButton.vue'
import DriverList from './components/DriverList.vue'
import LoginButton from './components/LoginButton.vue'
import LogoutButton from './components/LogoutButton.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(
    createAuth0({
      domain: "dev-v09wr7sg.us.auth0.com",
      client_id: "paFXQyGCcwqUnaC1XinwRwt1aOI2un41",
      redirect_uri: window.location.origin,
      audience: "https://f1-fantasy/api",
      cacheLocation: "localstorage"
    })
  );

app.component('DriverCard', DriverCard)
app.component('DriverFormCard', DriverFormCard)
app.component('RaceBar', RaceBar)
app.component('RaceCard', RaceCard)
app.component('GoBackButton', GoBackButton)
app.component('DriverList', DriverList)
app.component('LoginButton', LoginButton)
app.component('LogoutButton', LogoutButton)

app.mount('#app')
