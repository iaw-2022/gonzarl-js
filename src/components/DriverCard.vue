<template>
<RouterLink :to="`/drivers/${propId}`">
    <a class="relative block bg-transparent group w-52 h-72 shadow-xl hover:scale-105 duration-500" href="">
        <img
            class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            :src="`${propImage}`"
            alt=""
        />
        <div class="relative p-8">
            <div class="mt-12">
            <div
                class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
                <p class="text-2xl pt-24 font-bold text-white">{{propName}}</p>
                <p class="text-sm font-bold tracking-widest text-white uppercase">
                    Valor: {{propValue}} USD
                </p>
            </div>
            </div>
        </div>
    </a>
</RouterLink>
</template>

<script>
export default {
    name: 'DriverCard',
    props: ['propId', 'propName', 'propValue', 'propImage']
}
</script>