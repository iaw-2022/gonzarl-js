<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-4 sm:py-8">
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div>
        <GoBackButton />
        <div class="mx-auto max-w-3xl">
          <div class="flex items-center justify-evenly">
            <h2 class="text-3xl text-gray-900 p-2 text-center">{{team.name}}</h2>
          </div>
          <div class="text-2xl text-gray-900 p-2 text-center">{{team.points}} puntos</div>
          <div class="text-2xl text-gray-900 p-2 text-center">Dueño: {{team.owner}}</div>
          <div class="divide-y divide-gray-300/50">
            <div v-if="drivers.length" class="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
              <DriverCard 
                v-for="driver in drivers" :key="driver.id"
                :propId="`${driver.id}`"
                :propName="`${driver.name}`"
                :propValue="`${driver.value}`"
                :propImage="`${driver.path}`"
              class="p-2 mx-auto"/>
            </div>
            <div v-else class="mt-8">
                <p class="text-xl text-gray-900 p-2 text-center border border-4 rounded-xl border-red-500">Este equipo no tiene pilotos asignados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";

let id;
let team;
export default {
    data(){
        id = this.$route.params.id
        team = this.getTeam(id).then(() => this.getDrivers(this.team.id));
        return{
            team,
            drivers: []
        }
    },
    methods:{
        async getTeam(id){
            const response = await fetch(`${f1API}teams/${id}`);
            this.team = await response.json();
        },
        async getDrivers(id){
            const response = await fetch(`${f1API}drivers_in_teams/${id}`);
            this.drivers = await response.json();
        },
    }
}
</script>