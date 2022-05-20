<template>
    <div class="races-display">
        <div class="titulo text-center">Carreras</div>
        <div class="races-carousels row mx-auto">
            <RaceCarousel class="col-md-4"/>
            <RaceCarousel class="col-md-4"/>
            <RaceCarousel class="col-md-4"/>
            <RaceCarousel class="col-md-4"/>
            <RaceCarousel class="col-md-4"/>
            <RaceCarousel class="col-md-4"/>
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
</style>