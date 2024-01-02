<template>
  <v-container class="app-header-wrapper">
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
            <NuxtLink :to="link == 'Home' ? '/' : link">{{ link }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="app-icons">
        <v-btn color="transparent" icon="mdi-magnify"></v-btn>
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
  margin-top: 5px;
  border-radius: 100px;
  padding: 20px;
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

.app-header-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}
</style>
