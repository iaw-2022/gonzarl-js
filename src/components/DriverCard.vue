<template>
    <div class="driver-card">
        <div class="imagen">
            <img id="card-img" src="https://res.cloudinary.com/drbdzaro6/image/upload/v1652986503/Drivers/tkuye8uqu8ajka0fiwco.png" alt="driver">
        </div>
        <div class="nombre">
            Pierre Gasly
        </div>
    </div>
</template>

<script>
export default {
    name: 'DriverCard'
}
</script>

<style>
.driver-card{
    position:relative;
    margin-right:2%;
    margin-left:2%;
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
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.70); /* Black see-through */
    width: 100%;
    opacity:1;
    padding: 20px;
}
</style>