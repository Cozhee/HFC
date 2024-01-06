<template>
  <div>
    <v-app class="app">
      <AppHeader />
      <div class="pages" :class="{ contactPage: contactPage }">
        <NuxtPage></NuxtPage>
      </div>
      <AppFooter />
    </v-app>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const contactPage = computed(() => {
  return route.path === "/contact";
});
</script>

<style scoped>
.app {
  font-family: Space Grotesk;
  background-color: rgb(32, 32, 32);
}

.pages {
  padding-top: 240px;
}

.contactPage {
  background: url("./assets/images/contactus-bg.png") no-repeat 50% 50%;
}

@media screen and (width < 960px) {
  .pages {
    padding-top: 150px;
  }
}
</style>
