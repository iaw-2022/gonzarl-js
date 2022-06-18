<template>
  <div class="flex flex-col justify-between">
    <Navbar />
    <RouterView />
    <Footer/>
  </div>
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
