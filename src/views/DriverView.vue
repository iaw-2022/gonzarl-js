<template>
    <div class="container">
        <div class="titulo d-flex justify-content-around">
            <div class="nombre">Pierre Gasly</div>
            <div class="numero">10</div>
        </div>
        <div class="informacion">
            <div class="imagen text-center">
                <img id="img" src="https://res.cloudinary.com/drbdzaro6/image/upload/v1652827553/Drivers/Gasly_s5ivaw.jpg" alt="driver">
            </div>
            <div class="datos row mx-auto">
                <div class="col-md-6">
                    <div>Scuderia: AlphaTauri</div>
                    <div>Edad: 25 años</div>
                    <div>Nacionalidad: Frances</div>
                </div>
                <div class="col-md-6 text-end mt-4">
                    <div>Puntos: 6</div>
                    <div>Salario: 400.000 USD</div>
                </div>
            </div>
        </div>
</div>
</template>

<script>

</script>

<style>
.titulo{
    font-size: 50px;
    font-weight: 600;
}
#img{
    max-width: 70%;
}
.datos{
    max-width: 70%;
    font-size: 24px;
    background-color: rgb(150, 150, 150);
    color:white;
}
</style>