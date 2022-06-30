<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-4 sm:py-8">
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div v-if="isAuthenticated">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-3xl text-gray-900 p-2 text-center">{{team.name}}</h2>    
          <div class="text-2xl text-gray-900 p-2 text-center">{{team.points}} puntos</div>
          <div class="divide-y divide-gray-300/50">
            <div class="pt-4 pb-2 text-lg font-semibold leading-7 text-center">
                <p class="text-gray-900">Dinero disponible: {{team.budget}} USD</p>
            </div>
            <div v-if="state===0" class="py-4">
                <p class="text-xl font-bold">Selecciona el primer piloto</p>
                <div class="flex justify-center">
                    <DriverList :propDrivers="driverList" @listenNewDriver="listenDriver1"/>
                </div>
            </div>
            <div v-else-if="state===1" class="py-4">
                <p class="text-xl font-bold">Selecciona el segundo piloto</p>
                <div class="flex justify-center">
                    <DriverList :propDrivers="driverList" :propSelected="driver1" @listenNewDriver="listenDriver2"/>
                </div>
            </div>
            <div v-else class="mx-auto"> 
              <div class="grid xl:grid-cols-2 sm:grid-cols-1 justify-center gap-4 py-4">
                <DriverFormCard 
                  :propId="`${driver1.id}`"
                  :propName="`${driver1.name}`"
                  :propValue="`${driver1.value}`"
                  :propImage="`${driver1.path}`"
                class="p-2"/>
                <DriverFormCard 
                  :propId="`${driver2.id}`"
                  :propName="`${driver2.name}`"
                  :propValue="`${driver2.value}`"
                  :propImage="`${driver2.path}`"
                class="p-2"/>
              </div> 
              <div v-if="cumplenBudget === true" class="flex flex-col justify-center">
                <RouterLink :to="`/`" @click="sendDrivers()" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl text-center font-medium text-white bg-red-500 hover:bg-red-700">
                  Cargar pilotos
                </RouterLink>
              </div>
              <div v-else class="flex flex-col justify-center">
                <p class="text-lg font-bold text-center">Te pasaste del dinero que tenias disponible</p>
                <button @click="resetState" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-red-500 hover:bg-red-700">
                  Seleccionar de nuevo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="mx-auto max-w-3xl">
        <div class="text-lg">
            <p>Bienvenido a F1 Fantasy Game!</p>
            <p>Necesitas iniciar sesion para crear tu equipo</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

const f1API = "https://f1fantasy-api.herokuapp.com/";

let team;
let driver1;
let driver2;
let state = 0;
let cumplenBudget = true;
let token;

export default {
  setup(){
      const {isAuthenticated } = useAuth0();
      const { getAccessTokenSilently } = useAuth0();
      return {
        isAuthenticated,
        getToken: async () => {
          this.token = await getAccessTokenSilently();
        }
      };
  },
  data(){
    team = this.getTeam()
    this.getDriverList()
    return {
      team,
      driverList: [],
      driver1,
      driver2,
      state,
      cumplenBudget
    }
  },
  methods:{
    async getTeam(){
      this.token = await this.$auth0.getAccessTokenSilently();
      const response = await fetch(`${f1API}teams/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
      this.team = await response.json();
    },
    async getDriverList(){
        const response = await fetch(`${f1API}drivers/points`);
        this.driverList = await response.json();
    },
    async sendDrivers(){
        const response = await fetch(`${f1API}drivers_in_teams/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          },
          body: JSON.stringify({team_id: this.team.id, driver_1_id: this.driver1.id, driver_2_id: this.driver2.id})
        });
        this.$router.push('/');
    },
    listenDriver1(value){
      this.driver1 = value;
      this.state = 1;
    },
    listenDriver2(value){
      this.driver2 = value;
      this.state = 2;
      const value1 = parseInt(this.driver1.value,10);
      const value2 = parseInt(this.driver2.value,10);
      if (value1+value2 > 1000000){
        this.cumplenBudget = false;
      }
    },
    resetState(){
      this.state = 0;
      this.cumplenBudget = true;
    }
  }
}
</script>