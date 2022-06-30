<template>
<RouterLink :to="`/races/${propId}`">
    <a class="relative overflow-hidden h-40 block bg-black shadow-xl hover:scale-105 duration-500 group" href="">
    <img
        class="absolute inset-0 transition-opacity opacity-50  group-hover:opacity-50"
        :src="`https://countryflagsapi.com/svg/${race.country_code}`"
        alt=""
    />
    <div class="relative p-8 flex flex-col justify-center items-center">
        <p class="text-2xl font-bold text-white text-center">{{race.city}}</p>
        <p class="text-sm font-bold tracking-widest text-white uppercase">
            Fecha:{{race.date}}
        </p>
    </div>
    </a>
</RouterLink>
</template>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";

let race;

export default{
    name: 'RaceCard',
    props: ['propId'],
    data(){
        race = this.getRace(this.propId);
        return{
            race,
        }
    },
    methods:{
        async getRace(id){
            const response = await fetch(`${f1API}races/${id}`);
            this.race = await response.json();
        }
    }
}
</script>

<style>
    
</style>