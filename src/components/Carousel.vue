<template>
<div :id="`carousel${propId}`" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://res.cloudinary.com/drbdzaro6/image/upload/v1653081145/Races-gallery/baku-1_jnzqyq.jpg" class="d-block w-100" alt="race-pic-1">
        </div>
        <div class="carousel-item">
            <img src="https://res.cloudinary.com/drbdzaro6/image/upload/v1653081145/Races-gallery/baku-2_dri5rm.jpg" class="d-block w-100" alt="race-pic-2">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="`#carousel${propId}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#carousel${propId}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</template>

<script>
export default {
    name: 'Carousel',
    props: ['propId'],
}
</script>