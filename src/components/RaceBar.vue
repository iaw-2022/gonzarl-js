<template>

<div class="bg-red-700 px-2">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-white">
          <svg class="h-6 w-6 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </span>
        <p class="ml-3 mb-1 text-xl font-medium text-white truncate">
          <span class="md:hidden sm:inline">Proxima carrera:</span>
          <span class="hidden md:inline sm:hidden">Proxima carrera: Baku Grand Prix - 12 de Junio</span>
        </p>
      </div>
      <RouterLink to="/races/1">
        <div class="order-3 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <div class="hover:text-red-900 justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-700 bg-white">Ir a la carrera</div>
        </div>
      </RouterLink>
    </div>
  </div>
</div>
</template>

<script>
export default{
    name: 'RaceBar'
}
</script>