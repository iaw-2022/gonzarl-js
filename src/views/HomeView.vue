<template>
    <RaceBar />
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-4 sm:py-8">
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-3xl">
          <div class="flex items-center justify-evenly">
            <h2 class="text-3xl text-gray-900 p-2 text-center">The Fastest Team</h2>
            <RouterLink to="/team/name">
              <div class="w-12 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">
                <span>
                  <svg class="h-6 w-6 text-white bi bi-pencil text-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </span>
              </div>
            </RouterLink>
          </div>
          <div class="text-2xl text-gray-900 p-2">75 puntos</div>
          <div class="divide-y divide-gray-300/50">
            <div class="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
              <DriverCard propId="1" class="p-2"/>
              <DriverCard propId="2" class="p-2"/>
            </div>
            <div class="pt-8 text-base font-semibold leading-7">
              <p class="text-gray-900">Dinero disponible: 0 USD</p>
              <RouterLink to='/team/drivers' class="flex items-center justify-center">
                <div class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700">Cambiar pilotos</div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
