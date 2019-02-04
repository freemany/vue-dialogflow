<template>
  <div class="home">
    <h2>My First Name Is {{ firstName }}</h2>
    <h2>My Last Name Is {{ lastName }}</h2>
    <h2>My Full Name Is {{ fullName }}</h2>
    <button @click="onClick">Fetch Name</button>

    <button @click="addCar">Add Car</button>
    <button @click="addBicycle">Add Bicycle</button>
    <div class="container">
      <div class="list-containers"> 
        <h3>state.vehicles</h3>
        <ul>
          <li v-for="(vehicle, index) in vehicles" :key="index">
            {{vehicle.name}}
          </li>
        </ul>
      </div>
      <div class="list-containers"> 
        <h3>getters.cars</h3>
        <ul>
          <li v-for="(car, index) in cars" :key="index">
            {{car.name}}
          </li>
        </ul>
      </div>
      <div class="list-containers"> 
      <h3>getters.bicycles</h3>
        <ul>
          <li v-for="(bicycle, index) in bicycles" :key="index">
            {{bicycle.name}}
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {},
  methods: {
    onClick() {
      this.fetchName();
    },
    addBicycle() {
      this.addVehicle({ vehicle: {
        name: 'new bicycle',
        type: 'Bicycle'
      }});
    },
    addCar() {
      this.addVehicle({ vehicle: {
        name: 'new car',
        type: 'Car'
      }});
    },
    ...mapActions('vehicle', ['addVehicle','fetchName'])
  },
  computed: {
    ...mapState('vehicle', ['firstName','lastName', 'vehicles']),
    ...mapGetters('vehicle', ['fullName','cars','bicycles'])
  }
}
</script>
<style>
  .container {
    margin: 40px auto;
    width: 500px;
    display: flex;
    justify-content: space-between;
  }
  ul { list-style: none; padding: 0; } 
</style>