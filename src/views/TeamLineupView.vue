<template>
    <div class="relative flex flex-row items-center justify-center overflow-hidden bg-gray-50 py-4 sm:py-8">
        <div class="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div class="max-w-xl">
                <GoBackButton/>    
                <div class="text-3xl text-center text-gray-900 p-2">The Fastest Team</div>
                <div class="text-2xl text-gray-900 p-2">75 puntos</div>
                    <div class="divide-y divide-gray-300/50">
                        <div class="py-4 text-base leading-7 text-gray-600 ">
                            <p class="text-xl">Pilotos seleccionados:</p>
                            <div class="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
                                <DriverFormCard propId="1" class="p-2"/>
                                <DriverFormCard propId="2" class="p-2"/>
                            </div>
                        </div>
                        <div class="pt-4 text-base font-semibold leading-7">
                            <p class="text-gray-900">Dinero disponible: 0 USD</p>
                            <div class="flex items-center justify-center ">
                                <button type="button" data-modal-toggle="popup-modal" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="list" class="xl:w-96 sm:w-12">
                <h3>Seleccione:</h3>
                <DriverList />
            </div>
        </div>
    
    <!-- Modal -->
    <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow">
                <button type="button" class="absolute top-3 right-2.5 text-red-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="popup-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="p-6 text-center">
                    <svg class="mx-auto mb-4 w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500">Deseas confirmar estos pilotos?</h3>
                    <div class="flex flex-row items-center justify-center">
                        <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 mx-2 text-center">
                            Si, confirmar.
                        </button>
                        <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-3 py-2.5 mx-2 hover:text-gray-900 hover:bg-gray-100">No, cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    methods: {
        openDriverList(){
            list = document.getElementById("list")
            list.hidden = false
        }
    }
}
</script>