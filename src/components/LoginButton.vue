<template>
  <div>
    <button @click="login" class="text-white hover:bg-red-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Log in</button>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        }
      };
    }
  };
</script>