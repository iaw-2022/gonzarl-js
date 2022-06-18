<template>
<RouterLink :to="`/drivers/${propId}`">
    <div class="w-52 rounded-full hover:scale-105 duration-500 mx-auto">
        <a
        href=""
        class="relative block overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl"
        style="background-image: url(https://res.cloudinary.com/drbdzaro6/image/upload/v1652986503/Drivers/tkuye8uqu8ajka0fiwco.png)"
        >

            <div class="relative p-8 pt-40 text-white bg-black bg-opacity-50">
            <h5 class="text-2xl font-bold">Pierre Gasly</h5>
            <p class="text-sm">AlphaTauri</p>
            </div>
        </a>
    </div>
</RouterLink>
</template>

<script>
export default {
    name: 'DriverCard',
    props: ['propId']
}
</script>