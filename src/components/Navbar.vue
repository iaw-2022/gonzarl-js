<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="https://i.ibb.co/6Dh6J11/copia.png" alt="fantasy-logo" id="fantasy-logo-navbar"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="toggleMobileMenu">
            <ul class="navbar-nav text-center">
                <li class="nav-item">
                    <RouterLink class="nav-link active" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link active" to="/races">Races</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>


<script>
export default {
    name: 'Navbar',
}
</script>


<style>
.nav{
  font-family: 'Lato'
}
#fantasy-logo-navbar{
  max-width:200px;
}
.nav-item{
    font-size: 24px;
    font-weight: lighter; 
}
</style>
