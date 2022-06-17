<template>
    <RaceBar 
      :propId="`${race.id}`"
      :propCity="`${race.city}`"
      :propDate="`${race.date}`"
    />
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-4 sm:py-8">
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-3xl">
          <div class="flex items-center justify-evenly">
            <h2 class="text-3xl text-gray-900 p-2 text-center">{{team.name}}</h2>
            <RouterLink to="/team/name">
              <div class="w-12 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">
                <span>
                  <svg class="h-6 w-6 text-white bi bi-pencil text-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </span>
              </div>
            </RouterLink>
          </div>
          <div class="text-2xl text-gray-900 p-2">{{team.points}} puntos</div>
          <div class="divide-y divide-gray-300/50">
            <div v-if="drivers.length" class="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
              <DriverCard 
                v-for="driver in drivers" :key="driver.id"
                :propId="`${driver.id}`"
                :propName="`${driver.name}`"
                :propValue="`${driver.value}`"
                :propImage="`${driver.path}`"
              class="p-2"/>
            </div>
            <div v-else>
                <RouterLink to='/team/drivers' class="flex items-center justify-center">
                <div class="px-4 py-2 my-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">Asignar pilotos</div>
              </RouterLink>
            </div>
            <div class="pt-8 text-base font-semibold leading-7">
              <p class="text-gray-900">Dinero disponible: {{team.budget}} USD</p>
              <RouterLink to='/team/drivers' class="flex items-center justify-center">
                <div class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">Cambiar pilotos</div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";
let race;
let team;

export default {
  data(){
    team = this.getTeam(1)
      .then(() => this.getDrivers(this.team.id))
    race = this.getNextRace();
    return {
      team,
      race,
      drivers: [],
    }
  },
  methods:{
    async getTeam(id){
      const response = await fetch(`${f1API}teams/${id}`);
      this.team = await response.json();
      //console.log(this.team)
    },
    async getNextRace(){
      const response = await fetch(`${f1API}races/next`);
      this.race = await response.json();
      //console.log(this.race)
    },
    async getDrivers(id){
      const response = await fetch(`${f1API}drivers_in_teams/${id}`);
      this.drivers = await response.json();
      //console.log(this.drivers)
    }
  }
}
</script>