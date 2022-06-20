<template>
  <RaceBar 
    :propId="`${race.id}`"
    :propCity="`${race.city}`"
    :propDate="`${race.date}`"
  />
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-4 sm:py-8">
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div v-if="hasTeam === true" class="mx-auto max-w-3xl">
        <div class="flex items-center justify-evenly">
          <h2 class="text-3xl text-gray-900 p-2 text-center">{{team.name}}</h2>
            <div class="w-12 flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">
              <button type="button" data-modal-toggle="updateModal" data-bs-toggle="modal" data-bs-target="#updateModal">
                <span>
                  <svg class="h-6 w-6 text-white bi bi-pencil text-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </span>
              </button>
            </div>
          <div class="w-12 flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 cursor-pointer hover:bg-red-700">
            <button type="button" data-modal-toggle="deleteModal" data-bs-toggle="modal" data-bs-target="#deleteModal">
              <span>
              <svg class="h-6 w-6 text-white bi bi-trash text-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
              </span>
            </button>
          </div>
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
            <RouterLink :to="`/team/drivers/${userId}`" class="flex items-center justify-center">
              <div class="px-4 py-2 my-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">Asignar pilotos</div>
            </RouterLink>
          </div>
          <div class="pt-8 text-base font-semibold leading-7">
            <p class="text-gray-900">Dinero disponible: {{team.budget}} USD</p>
            <RouterLink :to="`/team/drivers/${userId}`" class="flex items-center justify-center">
              <div class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">Cambiar pilotos</div>
            </RouterLink>
          </div>
        </div>
      </div>
      <div v-else class="mx-auto max-w-3xl">
        <div class="text-lg">
          <p>Bienvenido a F1 Fantasy Game!</p>
          <p>Crea tu equipo para comenzar a jugar</p>
        </div>
        <div class="flex items-center justify-center mt-12">
          <button class="px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-red-500 hover:bg-red-700"
          data-modal-toggle="createModal" data-bs-toggle="modal" data-bs-target="#createModal">Crear equipo</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Create Modal -->
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 class="text-xl font-medium leading-normal text-gray-800" id="createModalLabel">Nombre del equipo</h5>
                  <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body relative p-4">
                  <div>
                    <label class="sr-only" for="createName">Nombre</label>
                    <input type="text" id="createName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase
                    rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" 
                    data-bs-dismiss="modal">Cancelar
                  </button>
                  <button @click="createTeam()" type="button" class="px-6 py-2.5 bg-green-600
                    text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                    hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                    Guardar
                  </button>
                </div>
            </div>
        </div>
    </div>
  
  <!-- Change Name Modal -->
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 class="text-xl font-medium leading-normal text-gray-800" id="updateModalLabel">Nombre del equipo</h5>
                  <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body relative p-4">
                  <div>
                    <label class="sr-only" for="updateName">Nombre</label>
                    <input type="text" id="updateName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :value="`${team.name}`">
                  </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase
                    rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" 
                    data-bs-dismiss="modal">Cancelar
                  </button>
                  <button @click="changeName(team.id)" type="button" class="px-6 py-2.5 bg-green-600
                    text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                    hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                    Guardar
                  </button>
                </div>
            </div>
        </div>
    </div>

  <!-- Delete Modal -->
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 class="text-xl font-medium leading-normal text-gray-800" id="deleteModalLabel">Eliminar equipo</h5>
                  <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body relative p-4">
                  <div>
                    <svg class="mx-auto mb-4 w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="text-lg font-normal text-gray-500">Estas seguro que deseas eliminar el equipo?</h3>
                    <h3 class="text-lg font-normal text-gray-500">Se perderan todos los puntos acumulados hasta el momento.</h3>
                  </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase
                    rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" 
                    data-bs-dismiss="modal">Cancelar
                  </button>
                  <button @click="deleteTeam(team.id)" type="button" class="px-6 py-2.5 bg-green-600
                    text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                    hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                    Guardar
                  </button>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";
let race;
let team;
let userId = 1;

export default {
  data(){
    team = this.getTeam(userId)
      .then(() => this.getDrivers(this.team.id))
    race = this.getNextRace();
    return {
      team,
      race,
      drivers: [],
      userId,
      hasTeam: false
    }
  },
  methods:{
    async getTeam(id){
      const response = await fetch(`${f1API}teams/${id}`);
      this.team = await response.json();
      if (response.status === 200){
        this.hasTeam = true;
      }
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
    },
    async createTeam(){
      const name = document.getElementById("createName");
      const response = await fetch(`${f1API}teams/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlNSndoNl9pNWppOXBCUDRtbG9VZiJ9.eyJpc3MiOiJodHRwczovL2Rldi12MDl3cjdzZy51cy5hdXRoMC5jb20vIiwic3ViIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ05AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZjEtZmFudGFzeS9hcGkiLCJpYXQiOjE2NTM4NjQ4MjQsImV4cCI6MTY1NjQ1NjgyNCwiYXpwIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ04iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TmdGKJRvaN4L_fK9ExE0qko2gBmWdISvCyA6SF0d3qB-X1QEDgLReb3AzEPiNKECrfWkHNv9HoA3sjWHcNhplNFXgYuOVAd_zpvtTJX8hD2at1NBsQ3ZudKlJs5bVJDE21iw4lnyj1U1o-yHHBv6OQRJIBW20JiT7yygYDpLwFcZDLgrJAmgkbkn6sSirhcEoRQlX2UxVQuK2CYPfGDnryvIwDMIP03dVfEXpJQzMN8CSheIZ7UjyGcqabkQMTt2o5c6rRpm_2Ppxa0DPW3rbtk669yp8ABqG01HRo5uB0DTKjIRYgCwQxsRjw7p40cfKj_TPlP6A2yJftoaOXD8BQ'
        },
        body: JSON.stringify({name: name.value, user_id: "1"})
      });
      document.location.reload(true);
    },
    async changeName(id){
      const name = document.getElementById("updateName");
      console.log(name);
      const response = await fetch(`${f1API}teams/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlNSndoNl9pNWppOXBCUDRtbG9VZiJ9.eyJpc3MiOiJodHRwczovL2Rldi12MDl3cjdzZy51cy5hdXRoMC5jb20vIiwic3ViIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ05AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZjEtZmFudGFzeS9hcGkiLCJpYXQiOjE2NTM4NjQ4MjQsImV4cCI6MTY1NjQ1NjgyNCwiYXpwIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ04iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TmdGKJRvaN4L_fK9ExE0qko2gBmWdISvCyA6SF0d3qB-X1QEDgLReb3AzEPiNKECrfWkHNv9HoA3sjWHcNhplNFXgYuOVAd_zpvtTJX8hD2at1NBsQ3ZudKlJs5bVJDE21iw4lnyj1U1o-yHHBv6OQRJIBW20JiT7yygYDpLwFcZDLgrJAmgkbkn6sSirhcEoRQlX2UxVQuK2CYPfGDnryvIwDMIP03dVfEXpJQzMN8CSheIZ7UjyGcqabkQMTt2o5c6rRpm_2Ppxa0DPW3rbtk669yp8ABqG01HRo5uB0DTKjIRYgCwQxsRjw7p40cfKj_TPlP6A2yJftoaOXD8BQ'
        },
        body: JSON.stringify({name: name.value})
      });
      document.location.reload(true);
    },
    async deleteTeam(id){
      const response = await fetch(`${f1API}teams/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlNSndoNl9pNWppOXBCUDRtbG9VZiJ9.eyJpc3MiOiJodHRwczovL2Rldi12MDl3cjdzZy51cy5hdXRoMC5jb20vIiwic3ViIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ05AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZjEtZmFudGFzeS9hcGkiLCJpYXQiOjE2NTM4NjQ4MjQsImV4cCI6MTY1NjQ1NjgyNCwiYXpwIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ04iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TmdGKJRvaN4L_fK9ExE0qko2gBmWdISvCyA6SF0d3qB-X1QEDgLReb3AzEPiNKECrfWkHNv9HoA3sjWHcNhplNFXgYuOVAd_zpvtTJX8hD2at1NBsQ3ZudKlJs5bVJDE21iw4lnyj1U1o-yHHBv6OQRJIBW20JiT7yygYDpLwFcZDLgrJAmgkbkn6sSirhcEoRQlX2UxVQuK2CYPfGDnryvIwDMIP03dVfEXpJQzMN8CSheIZ7UjyGcqabkQMTt2o5c6rRpm_2Ppxa0DPW3rbtk669yp8ABqG01HRo5uB0DTKjIRYgCwQxsRjw7p40cfKj_TPlP6A2yJftoaOXD8BQ'
        }
      });
      document.location.reload(true);
    }
  }
}
</script>