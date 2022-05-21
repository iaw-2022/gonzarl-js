<template>
    <RaceBar />
    <div class="container team-content">
        <div class="data d-flex justify-content-between mx-auto">
          <div class="team-name">
            The Fastest Team  
          </div>
          <div class="team-points">
            75 puntos
          </div>
        </div>
        <div class="drivers d-flex justify-content-evenly">
          <DriverCard propId="1" class="driver-card"/>
          <DriverCard propId="1" class="driver-card"/>
        </div>
        <div class="actions d-flex justify-content-between mx-auto">
          <div class="team-budget">
            Dinero disponible: 0 USD
          </div>
          <div class="change-team">
            <a href="#" class="btn btn-lg btn-outline-success">CAMBIAR PILOTOS</a>
          </div>
        </div>
    </div>
</template>

<style>
.team-content{
  padding-top: 1%;
  padding-bottom: 1%;
  height: 70vh;
  font-size: 30px;
}
.data{
  font-size: 50px;
  width: 80%;
}
.drivers{
  padding-top: 1%;
}
.driver-card{
  text-align: center;
  width: 25vw;
}
.actions{
  width: 80%;
  padding-top: 2%;
}
</style>