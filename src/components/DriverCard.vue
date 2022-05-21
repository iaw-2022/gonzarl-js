<template>
<RouterLink :to="`/drivers/${propId}`">
    <div class="driver-card">
        <div class="imagen">
            <img id="card-img" src="https://res.cloudinary.com/drbdzaro6/image/upload/v1652986503/Drivers/tkuye8uqu8ajka0fiwco.png" alt="driver">
        </div>
        <div class="nombre">
            Pierre Gasly
        </div>
    </div>
</RouterLink>
</template>

<script>
export default {
    name: 'DriverCard',
    props: ['propId']
}
</script>

<style>
.driver-card{
    position:relative;
    background-color:#ff726f;
}
.imagen{
    display: block;
}
#card-img{
    max-width: 60%;
}
.nombre{
    font-size: 20px;
    color:white;
    position: absolute; 
    bottom: 0; 
    background: rgba(52, 5, 7, 0.8); /* Black see-through */
    width: 100%;
    opacity:1;
    padding: 5%;
}
</style>