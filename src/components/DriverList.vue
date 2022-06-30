<template>
    <div class="text-xl font-medium text-center bg-white border border-gray-200 rounded-lg">
        <div v-for="driver in propDrivers" :key="driver.id">
           <button v-if="driver!==propSelected" @click="sendNewDriver(driver)" class="block w-full px-2 py-2 text-black border-b border-gray-200 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:text-red-700">
                {{driver.name}} - Valor: {{driver.value}} USD
            </button> 
            <button v-else disabled class="ring ring-green-200 disabled cursor-not-allowed block w-full px-2 py-2 text-black border-b border-gray-200 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:text-red-700">
                {{driver.name}} - Valor: {{driver.value}} USD
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DriverList',
    props: ['propDrivers', 'propSelected'],
    methods: {
        sendNewDriver(driver){
            this.$emit("listenNewDriver", driver)
        }
    }
}
</script>