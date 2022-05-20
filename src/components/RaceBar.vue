<template>
    <div class="race-bar d-flex justify-content-between">
        <div class="race-name">
            Proxima carrera: 12 de Junio
        </div>
        <div class="race-preview">
            <img id="race-bar-img" src="https://res.cloudinary.com/drbdzaro6/image/upload/v1652995865/Baku_dmnghg.png" alt="circuit">
            Baku Grand Prix - Circuito callejero
        </div>
    </div>
</template>

<script>
export default{
    name: 'RaceBar'
}
</script>

<style>
.race-bar{
    font-family: 'Lato';
    align-items: center;
    padding: 0 5% 0 5%;
    border-bottom: black solid 1px;
}
#race-bar-img{
    max-width: 100px;
    padding-right: 10%;
}
</style>