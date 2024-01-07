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
          <li
            class="nav-link me-5 d-none d-md-block"
            v-for="link in links"
            :key="link"
          >
            <NuxtLink :to="link.route">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="app-icons">
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn
          @click.stop="drawerOpenAndCloseMenu"
          class="d-none hamburger-menu"
          variant="text"
        >
          <v-icon
            size="x-large"
            :icon="closed === true ? 'mdi-menu-open' : 'mdi-menu-close'"
          ></v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list class="mt-5" density="compact" nav>
      <v-list-item
        class="nav-link"
        v-for="link in links"
        :prepend-icon="link.sideNavIcon"
        ><NuxtLink :to="link.route">
          {{ link.name }}
        </NuxtLink></v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from "vue";

const links = ref([
  { name: "Home", route: "/", sideNavIcon: "mdi-home-circle" },
  { name: "About", route: "/about", sideNavIcon: "mdi-account" },
  { name: "Services", route: "/services", sideNavIcon: "mdi-room-service" },
  { name: "Pricing", route: "/pricing", sideNavIcon: "mdi-currency-usd" },
  { name: "Contact", route: "/contact", sideNavIcon: "mdi-email-box" },
]);

const drawer = ref(null);
const closed = ref(false);

watch(drawer, () => {
  closed.value = !closed.value;
});

function drawerOpenAndCloseMenu() {
  drawer.value = !drawer.value;
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
  margin-top: 5px;
  border-radius: 15px;
  padding: 10px;
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

.nav-link a:hover {
  color: #6d55e9;
}

.nav-link {
  color: black;
}

.glass:hover {
  cursor: pointer;
}

.app-header-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

@media screen and (width < 960px) {
  .app-header-wrapper {
    padding: 0;
  }

  .app-header {
    border-radius: 0;
    margin-top: 0;
  }

  .hamburger-menu {
    display: inline-block !important;
  }
}
</style>
