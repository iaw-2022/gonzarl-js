<template>
    <div class="races-display">
        <div class="titulo text-center">Calendario de carreras</div>
        <div class="races-carousels row mx-auto">
            <RaceCard propId="1" class="race-element col-md-4"/>
            <RaceCard propId="2" class="race-element col-md-4"/>
            <RaceCard propId="3" class="race-element col-md-4"/>
            <RaceCard propId="4" class="race-element col-md-4"/>
            <RaceCard propId="5" class="race-element col-md-4"/>
            <RaceCard propId="6" class="race-element col-md-4"/>
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