<template>
  <div>
    <v-app class="app">
      <AppHeader />
      <div class="pages">
        <NuxtPage></NuxtPage>
      </div>
      <AppFooter />
    </v-app>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
.app {
  font-family: Space Grotesk;
  background-color: rgb(32, 32, 32);
}
</style>
