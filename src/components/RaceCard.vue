<template>
<RouterLink :to="`/races/${propId}`">
    <div class="race-carousel">
        <div class="photo-gallery">
            <img id="flag" src="https://i.ibb.co/pLTsfhM/Azerbaiyan.png" alt="flag">
        </div>
        <div class="race-information">
            <div class="grand-prix-name">Baku Grand Prix</div>
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
#flag{
    width: 5vw;
}
.race-information{
    font-size: 20px;
    color: black;
}
</style>