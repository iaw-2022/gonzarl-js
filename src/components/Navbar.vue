<template>
<nav class="bg-black px-2 sm:px-4">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="flex items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" class="mr-3 h-6 sm:h-9" alt="F1 Fantasy Logo">
    </div>
    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <RouterLink to="/">
          <div :class="{'bg-red-700': $route.path==='/'}" class="text-white hover:bg-red-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mi equipo</div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/races">
          <div :class="{'bg-red-700': $route.path==='/races'}" class="text-white hover:bg-red-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendario</div>
        </RouterLink> 
      </li>
      <li v-if="isAuthenticated">
        <LogoutButton />
      </li>
      <li v-else>
        <LoginButton />
      </li>
      </ul>
    </div>
  </div>
</nav>

</template>


<script>
import { useAuth0 } from '@auth0/auth0-vue';
export default {
    name: 'Navbar',
    setup(){
      const {isAuthenticated } = useAuth0();

      return {
        isAuthenticated
      };
    }
}
</script>