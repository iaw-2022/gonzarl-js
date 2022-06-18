<template>
<RouterLink :to="`/races/${propId}`">
    <a
    href=""
    class="relative block overflow-hidden bg-center bg-cover rounded-xl"
    style="background-image: url(https://countryflagsapi.com/svg/it)">

        <div class="relative p-8 pt-20 text-white bg-black opacity-60 hover:opacity-80">
            <h5 class="text-3xl font-bold">Imola Grand Prix</h5>
            <p class="mb-0">Fecha: 24/4</p>
        </div>
    </a>
</RouterLink>
</template>

<script>
export default{
    name: 'RaceCard',
    props: ['propId']
}
</script>

<style>
    
</style>