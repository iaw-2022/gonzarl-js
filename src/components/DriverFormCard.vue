<template>
    <div class="block overflow-hidden rounded-lg w-52 h-68">
        <img class="object-cover w-full h-48" :src="`${propImage}`" alt="" />

        <div class="p-1 bg-red-900 text-center">
            <h5 class="text-xl text-white">{{propName}}</h5>
            <p class="text-md text-white uppercase">Valor: {{propValue}} USD</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DriverFormCard',
    props: ['propId', 'propName', 'propValue', 'propImage'],
    methods: {
        SendNewDriver(){
            alert(this.driverId)
            this.$$emit("listenNewDriver", this.driverId)
        }
    }
}
</script>