<template>
  <div>
    <button @click="logout" class="text-white hover:bg-red-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Log out</button>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { logout } = useAuth0();

      return {
        logout: () => {
          logout({ returnTo: window.location.origin });
        }
      };
    }
  };
</script>