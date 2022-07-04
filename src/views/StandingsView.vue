<template>
    <div class="standings">
        <GoBackButton class="xl:ml-20 md:ml-16"/>
        <div class="text-center text-5xl mb-12">Clasificacion de equipos &#127937</div>
        <div class="container pb-10">
            <div class="overflow-x-auto shadow-md sm:rounded-lg md:w-2/3 sm:w-fit mx-auto">
            <table class="w-full mx-auto text-sm text-center text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="xl:px-6 py-3">
                            Posicion
                        </th>
                        <th scope="col" class="xl:px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="xl:px-6 py-3">
                            Puntos
                        </th>
                        <th scope="col" class="xl:px-6 py-3">
                            Dueño
                        </th>
                        <th scope="col" class="xl:px-6 py-3">
                            <span class="sr-only">Equipo</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(team,index) in teams" :key="team.id" class="border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{index+1}}
                        </th>
                        <td class="px-6 py-4">
                            {{team.team_name}}
                        </td>
                        <td class="px-6 py-4">
                            {{team.points}}
                        </td>
                        <td class="px-6 py-4">
                            {{team.team_owner}}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <RouterLink :to="`/team/${team.id}`">
                                <div class="font-medium text-blue-600 hover:underline">Ver equipo</div>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";

export default {
    data(){
        this.getTeams();
        return {
            teams: [],
        }
    },
    methods: {
      async getTeams(){
        const response = await fetch(`${f1API}teams/best`);
        this.teams = await response.json();
      }
    }
}
</script>