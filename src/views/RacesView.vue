<template>
    <div>
        <div>
            <h2 class="text-center text-3xl uppercase py-4">Calendario</h2>
        </div>
        <div class="grid grid-cols-4 gap-8 p-4">
            <RaceCard v-for="race in races" :key="race.id" :propId="`${race.id}`" />
        </div>
    </div>
</template>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";
export default {
    data(){
        this.getRaces();
        return{
            races: []
        }
    },
    methods:{
        async getRaces(){
            const response = await fetch(`${f1API}races`);
            this.races = await response.json();
            console.log(races)
        }
    }
}
</script>