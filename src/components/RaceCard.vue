<template>
<RouterLink :to="`/races/${propId}`">
    <div class="race-carousel">
        <div class="photo-gallery">
            <Carousel :propId="`${propId}`" />
        </div>
        <div class="race-information">
            <div class="grand-prix d-flex justify-content-between">
                <div class="grand-prix-name">Baku Grand Prix</div>
                <div class="grand-prix-style">Circuito callejero</div>
            </div>
            <div class="country-date  d-flex justify-content-between">
                <div class="country">Azerbaiyan</div>
                <div class="date">12 de Junio</div>
            </div>
        </div>
    </div>
</RouterLink>
</template>

<script>
export default{
    name: 'RaceCard',
    props: ['propId']
}
</script>

<style>
.race-carousel{
    font-family: 'Lato';
    position: relative;
    padding: 2% 1% 0 1%;
}
.race-information{
    font-size: 20px;
    color: black;
}
</style>