import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriverView from '../views/DriverView.vue'
import RacesView from '../views/RacesView.vue'
import RaceView from '../views/RaceView.vue'
import TeamLineupView from '../views/TeamLineupView.vue'
import ChangeTeamNameView from '../views/ChangeTeamNameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/drivers/:id',
      name: 'driver',
      component: DriverView
    },{
      path: '/team/name',
      name: 'teamName',
      component: ChangeTeamNameView
    },{
      path: '/team/drivers',
      name: 'teamDrivers',
      component: TeamLineupView
    },{
      path: '/races',
      name: 'races',
      component: RacesView
    },{
      path: '/races/:id',
      name: 'race',
      component: RaceView
    }
  ]
})

export default router
