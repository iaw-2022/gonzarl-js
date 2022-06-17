<template>
    <div class="w-auto py-4 px-8 mx-auto my-20 bg-gray-100 rounded-lg border shadow-md md:max-w-xl">
      <GoBackButton />
      <div class="pt-4 flex flex-col items-center md:flex-row">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="`${driver.path}`" alt="driver-pic">
        <div class="flex flex-col justify-between leading-normal">
          <h5 class="p-2 text-2xl text-center font-bold tracking-tight text-gray-900">{{driver.name}}</h5>
          <div class="flex flex-row mb-3 font-normal text-gray-700">
            <div class="p-2">
              <p>Numero: {{driver.number}}</p>
              <p>Edad: {{driver.age}}</p>
              <p>Puntos: {{driver.points}}</p>
            </div>
            <div class="p-2">
              <p>Scuderia: {{driver.scuderia}}</p>
              <p>Nacionalidad: {{driver.nationality}}</p>
              <p>Costo: {{driver.value}} USD</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
const f1API = "https://f1fantasy-api.herokuapp.com/";
let id;
let driver;

export default{
  name: 'DriverView',
  data(){
    id = this.$route.params.id
    driver = this.getDriver(id);
    return{
      id,
      driver
    }
  },
  methods:{
    async getDriver(id){
        const response = await fetch(`${f1API}drivers/${id}`);
        this.driver = await response.json();
    }
  }
}
</script>

<style>

</style>