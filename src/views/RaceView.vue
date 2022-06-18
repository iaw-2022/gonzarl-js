<template>
    <div class="race-view">
        <GoBackButton class="xl:ml-20 md:ml-16"/>
        <div class="titulo text-center mb-4">Baku Grand Prix</div>
            <div class="container">
                <div class="py-8 px-8 mx-auto flex flex-col items-center bg-gray-100 rounded-lg border shadow-md md:flex-row md:max-w-xl">
                    <img class="object-cover xl:w-72 xl:h-48 xl:rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://res.cloudinary.com/drbdzaro6/image/upload/v1653435122/Races/Baku_stma86.png" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                    <h5 class="p-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Gran Premio de Baku 2022</h5>
                    <div class="flex flex-row mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <div class="p-2">
                            <p>Fecha: 12-06-2022</p>
                            <p>Pais: Azerbaiyan</p>
                        </div>
                        <div class="p-2">
                            <p>Estilo: Callejero</p>
                            <p>Vueltas: 64</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex pb-4">
                <h2 class="pt-4 px-4">Resultado de la carrera &#127937</h2>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-center text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="xl:px-6 py-3">
                                Posicion
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                Piloto
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                Scuderia
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                Puntos
                            </th>
                            <th scope="col" class="xl:px-6 py-3">
                                <span class="sr-only">Ver piloto</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td class="px-6 py-4">
                                Carlos Sainz
                            </td>
                            <td class="px-6 py-4">
                                Ferrari
                            </td>
                            <td class="px-6 py-4">
                                +25
                            </td>
                            <td class="px-6 py-4 text-right">
                                <RouterLink :to="`/drivers/1`">
                                    <div class="font-medium text-blue-600 hover:underline">Ver piloto</div>
                                </RouterLink>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                2
                            </th>
                            <td class="px-6 py-4">
                                Charles Leclerc
                            </td>
                            <td class="px-6 py-4">
                                Ferrari
                            </td>
                            <td class="px-6 py-4">
                                +18
                            </td>
                            <td class="px-6 py-4 text-right">
                                <RouterLink :to="`/drivers/1`">
                                    <div class="font-medium text-blue-600 hover:underline">Ver piloto</div>
                                </RouterLink>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                3
                            </th>
                            <td class="px-6 py-4">
                                Max Verstappen
                            </td>
                            <td class="px-6 py-4">
                                Red Bull
                            </td>
                            <td class="px-6 py-4">
                                +15
                            </td>
                            <td class="px-6 py-4 text-right">
                                <RouterLink :to="`/drivers/1`">
                                    <div class="font-medium text-blue-600 hover:underline">Ver piloto</div>
                                </RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
.race-view{
    padding-bottom: 2%;
}
.titulo{
    font-size: 50px;
}
.race-photos{
    padding-top:2%;
    width: 60vw;
}
</style>