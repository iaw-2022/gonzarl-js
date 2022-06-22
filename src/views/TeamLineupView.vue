<template>
    <div class="relative flex flex-row items-center justify-center overflow-hidden bg-gray-50 py-4 sm:py-8">
        <div class="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div class="max-w-xl">
                <GoBackButton/>
                <div v-if="isAuthenticated">    
                    <div class="text-3xl text-center text-gray-900 p-2">{{team.name}}</div>
                    <div class="text-2xl text-gray-900 p-2 text-center">{{team.points}} puntos</div>
                    <div class="divide-y divide-gray-300/50">
                        <div v-if="state===0">
                            <div class="pt-4 text-base leading-7 text-gray-600 ">
                                <p class="text-xl text-gray-900 text-center">Dinero total disponible: 1000000 USD</p>
                                <p class="text-xl font-bold text-center">Pilotos seleccionados:</p>
                                <div class="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
                                    <DriverFormCard 
                                        @click="changeFirstDriver()"
                                        :propId="`${drivers[0].id}`"
                                        :propName="`${drivers[0].name}`"
                                        :propValue="`${drivers[0].value}`"
                                        :propImage="`${drivers[0].path}`"
                                    class="p-2"/>
                                    <DriverFormCard 
                                        @click="changeSecondDriver()"
                                        :propId="`${drivers[1].id}`"
                                        :propName="`${drivers[1].name}`"
                                        :propValue="`${drivers[1].value}`"
                                        :propImage="`${drivers[1].path}`"
                                    class="p-2"/>
                                </div>
                            </div>
                            <div class="text-base font-semibold leading-7">
                                <div v-if="cumplenBudget===true" class="flex flex-col justify-center">
                                    <button type="button" data-modal-toggle="changeDriversModal" data-bs-toggle="modal" data-bs-target="#changeDriversModal"
                                    class="px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-red-500 hover:bg-red-700">Guardar cambios</button>
                                </div>
                                <div v-else>
                                    <p class="text-lg font-bold text-center">Te pasaste del dinero que tenias disponible</p>
                                    <p class="text-lg font-bold text-center">Volve a clickear un piloto para cambiarlo</p>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="state===1">
                            <div class="py-4 text-base leading-7 text-gray-600 ">
                                <p class="text-xl font-bold">Selecciona al nuevo piloto:</p>
                                <div class="flex justify-center">
                                    <DriverList :propDrivers="driverList" :propSelected="drivers[1]" @listenNewDriver="listenDriver1"/>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="py-4 text-base leading-7 text-gray-600 ">
                                <p class="text-xl font-bold">Selecciona al nuevo piloto:</p>
                                <div class="flex justify-center">
                                    <DriverList :propDrivers="driverList" :propSelected="drivers[0]" @listenNewDriver="listenDriver2"/>
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
    </div>

    <!-- Change Drivers Modal -->
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="changeDriversModal" tabindex="-1" aria-labelledby="changeDriversModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 class="text-xl font-medium leading-normal text-gray-800" id="changeDriversModalLabel">Eliminar equipo</h5>
                  <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body relative p-4">
                  <div>
                    <svg class="mx-auto mb-4 w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="text-lg font-normal text-gray-500">Estas seguro que deseas confirmar estos pilotos?</h3>
                  </div>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase
                    rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" 
                    data-bs-dismiss="modal">Cancelar
                  </button>
                  <button @click="sendDrivers()" type="button" class="px-6 py-2.5 bg-green-600
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
import { useAuth0 } from '@auth0/auth0-vue';

const f1API = "https://f1fantasy-api.herokuapp.com/";
let team;
let state = 0;
let cumplenBudget = true;

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
        team = this.getTeam(this.$route.params.id).then(() => this.getDrivers(this.team.id))
        this.getDriverList()
        return{
            team,
            drivers: [],
            driverList: [],
            state,
            cumplenBudget
        }
    },
    methods: {
        async getTeam(id){
            const response = await fetch(`${f1API}teams/${id}`);
            this.team = await response.json();
            //console.log(this.team)
        },
        async getDrivers(id){
            const response = await fetch(`${f1API}drivers_in_teams/${id}`);
            this.drivers = await response.json();
            //console.log(this.drivers)
        },
        async getDriverList(id){
            const response = await fetch(`${f1API}drivers/points`);
            this.driverList = await response.json();
            //console.log(this.driverList)
        },
        async sendDrivers(){
            const response = await fetch(`${f1API}drivers_in_teams/${this.team.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlNSndoNl9pNWppOXBCUDRtbG9VZiJ9.eyJpc3MiOiJodHRwczovL2Rldi12MDl3cjdzZy51cy5hdXRoMC5jb20vIiwic3ViIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ05AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZjEtZmFudGFzeS9hcGkiLCJpYXQiOjE2NTM4NjQ4MjQsImV4cCI6MTY1NjQ1NjgyNCwiYXpwIjoiUmFIYjlDa0lPNFVjam5uUXIxcTM4RERWTWVxbGxtQ04iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TmdGKJRvaN4L_fK9ExE0qko2gBmWdISvCyA6SF0d3qB-X1QEDgLReb3AzEPiNKECrfWkHNv9HoA3sjWHcNhplNFXgYuOVAd_zpvtTJX8hD2at1NBsQ3ZudKlJs5bVJDE21iw4lnyj1U1o-yHHBv6OQRJIBW20JiT7yygYDpLwFcZDLgrJAmgkbkn6sSirhcEoRQlX2UxVQuK2CYPfGDnryvIwDMIP03dVfEXpJQzMN8CSheIZ7UjyGcqabkQMTt2o5c6rRpm_2Ppxa0DPW3rbtk669yp8ABqG01HRo5uB0DTKjIRYgCwQxsRjw7p40cfKj_TPlP6A2yJftoaOXD8BQ'
            },
            body: JSON.stringify({driver_1_id: this.drivers[0].id, driver_2_id: this.drivers[1].id})
            });
            document.location.reload(true);
        },
        changeFirstDriver(){
            this.state = 1;
        },
        changeSecondDriver(){
            this.state = 2;
        },
        listenDriver1(value){
            this.drivers[0] = value;
            const value1 = parseInt(this.drivers[0].value,10);
            const value2 = parseInt(this.drivers[1].value,10);
            if (value1+value2 > 1000000){
                this.cumplenBudget = false;
            }else{
                this.cumplenBudget = true;
            }
            this.state = 0;
        },
        listenDriver2(value){
            this.drivers[1] = value;
            const value1 = parseInt(this.drivers[0].value,10);
            const value2 = parseInt(this.drivers[1].value,10);
            if (value1+value2 > 1000000){
                this.cumplenBudget = false;
            }else{
                this.cumplenBudget = true;
            }
            this.state = 0;
        },
    }
}
</script>