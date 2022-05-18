<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>


<script>
import('@/assets/bootstrap.css');
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>


<style>
.container{
  font-family: 'Lato';
}
</style>
