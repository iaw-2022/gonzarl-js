<template>
    <div class="race-carousel">
        <div class="photo-gallery">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://res.cloudinary.com/drbdzaro6/image/upload/v1653081145/Races-gallery/baku-1_jnzqyq.jpg" class="d-block w-100" alt="race-pic-1">
                    </div>
                    <div class="carousel-item">
                        <img src="https://res.cloudinary.com/drbdzaro6/image/upload/v1653081145/Races-gallery/baku-2_dri5rm.jpg" class="d-block w-100" alt="race-pic-2">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
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
</template>

<script>
export default{
    name: 'RaceCarousel'
}
</script>

<style>
.race-carousel{
    width: 25vw;
    font-family: 'Lato';
    position: relative;
    padding: 2% 1% 0 1%;
}
.race-information{
    font-size: 20px;
}
</style>