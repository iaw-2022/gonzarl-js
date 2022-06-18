<template>
    <div class="races-display">
        <div class="titulo text-center">Calendario</div>
        <div class="races row mx-auto">
            <RaceCard propId="1" class="race-element col-md-3"/>
            <RaceCard propId="2" class="race-element col-md-3"/>
            <RaceCard propId="3" class="race-element col-md-3"/>
            <RaceCard propId="4" class="race-element col-md-3"/>
            <RaceCard propId="5" class="race-element col-md-3"/>
            <RaceCard propId="6" class="race-element col-md-3"/>
            <RaceCard propId="7" class="race-element col-md-3"/>
        </div>
    </div>
</template>

<style>
.titulo{
    font-size: 50px;
}
.races{
    width: 90vw;
}
.race-element{
    padding-top: 1em;
    padding-bottom: 1em;
}
</style>