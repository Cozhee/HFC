<template>
  <v-container>
    <div class="app-header d-flex justify-space-between align-center">
      <div class="app-logo d-flex">
        <div>
          <v-img class="logo" :width="40" src="../public/vector.svg"> </v-img>
        </div>
        <div class="text-h4 d-flex align-center">HJC</div>
      </div>
      <div class="app-navs">
        <ul class="d-flex">
          <li class="nav-link me-5" v-for="link in navbarLinks">
            <a href="">{{ link }}</a>
          </li>
        </ul>
      </div>
      <div class="app-icons">
        <v-img class="glass" :width="18" src="../public/magnifyingglass.svg">
        </v-img>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const navbarLinks = ref([
  "Home",
  "About",
  "Services",
  "Pricing",
  "Portfolio",
  "News",
]);
const drawer = ref(false);
const hi = ref("hi");

function thing() {
  console.log(hi.value);
}
</script>

<style scoped>
.about,
.services,
.contact {
  text-transform: none;
  text-decoration: none;
}

.logo {
  margin-right: 17px;
}

.app-header {
  background-color: white;
  margin-top: 74px;
  padding: 25px 130px 25px 130px;
  border-radius: 100px;
}

ul {
  list-style-type: none;
}
.nav-link a {
  text-decoration: none;
  text-transform: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.42px;
  color: #000;
}

.glass:hover {
  cursor: pointer;
}

.nav-link a:hover {
  color: #6d55e9;
}
</style>
