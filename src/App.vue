<template>
  <Navbar />
  <RouterView />
  <h1 class="mt-5" align="center">footer</h1>
</template>


<script>
import('@/assets/bootstrap.css');
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>


<style>
.container{
  font-family: 'Lato';
}
</style>
