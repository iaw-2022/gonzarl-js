<template>
    <div class="race-view">
        <GoBackButton class="xl:ml-20 md:ml-16"/>
        <div class="titulo text-center mb-4">{{race.city}}</div>
            <div class="container">
                <div class="py-8 px-8 mx-auto flex flex-col items-center bg-gray-100 rounded-lg border shadow-md md:flex-row md:max-w-xl xl:max-w-2xl">
                    <img class="object-scale-down xl:w-72 xl:h-48 xl:rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="`${race.path}`" alt="race-layout">
                    <div class="flex flex-col justify-between leading-normal">
                    <h5 class="p-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{{race.city}}</h5>
                    <div class="flex flex-row mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <div class="p-2">
                            <p>Fecha: {{race.date}}</p>
                            <p>Pais: {{race.country}}</p>
                        </div>
                        <div class="p-2">
                            <p>Estilo: {{race.style}}</p>
                            <p>Vueltas: {{race.laps}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex pb-4">
                <h2 class="pt-4 px-4">Resultado de la carrera &#127937</h2>
            </div>
            <div v-if="drivers.length" class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-center text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="xl:px-6 py-3">
                                Posicion
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                Piloto
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                Scuderia
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                Puntos
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                <span class="sr-only">Ver piloto</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(driver,index) in drivers" :key="driver.id" class="border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{index+1}}
                            </th>
                            <td class="px-6 py-4">
                                {{driver.name}}
                            </td>
                            <td class="px-6 py-4">
                                {{driver.scuderia}}
                            </td>
                            <td class="px-6 py-4">
                                {{points[index]}}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <RouterLink :to="`/drivers/${driver.id}`">
                                    <div class="font-medium text-blue-600 hover:underline">Ver piloto</div>
                                </RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h3 class="px-auto py-auto">No existen resultados para esta carrera aun.</h3>
            </div>
        </div>
    </div>
</template>

<style>
.race-view{
    padding-bottom: 2%;
}
.titulo{
    font-size: 50px;
}
.race-photos{
    padding-top:2%;
    width: 60vw;
}
</style>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";
const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

let id;
let race;
export default {
    name: 'RaceView',
    data(){
        id = this.$route.params.id
        race = this.getRace(id);
        this.getResult(id);
        return {
            id,
            race,
            drivers: [],
            points
        }
    },
    methods: {
      async getRace(id){
        const response = await fetch(`${f1API}races/${id}`);
        this.race = await response.json();
      },
      async getResult(id){
        const response = await fetch(`${f1API}finishes/${id}`);
        this.drivers = await response.json();
        console.log(drivers);
      }
    }
}
</script>