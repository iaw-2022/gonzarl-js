<template>
    <div class="xl:w-56 text-xl font-medium text-center bg-white border border-gray-200 rounded-lg">
        <button v-for="driver in propDrivers" :key="driver.id" class="block w-full px-2 py-2 text-black border-b border-gray-200 cursor-pointer hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:text-red-700">
            {{driver.name}}
        </button>
    </div>
</template>

<script>
export default {
    name: 'DriverList',
    props: ['propDrivers']
}
</script>