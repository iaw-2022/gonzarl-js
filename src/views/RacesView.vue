<template>
    <div class="races-display">
        <div class="titulo text-center">Calendario de carreras</div>
        <div class="races-carousels row mx-auto">
            <RaceCarousel class="race-element col-md-4"/>
            <RaceCarousel class="race-element col-md-4"/>
            <RaceCarousel class="race-element col-md-4"/>
            <RaceCarousel class="race-element col-md-4"/>
            <RaceCarousel class="race-element col-md-4"/>
            <RaceCarousel class="race-element col-md-4"/>
        </div>
    </div>
</template>

<style>
.titulo{
    font-size: 50px;
}
.races-carousels{
    width: 90vw;
}
.race-element{
    width: 25vw;
}
</style>