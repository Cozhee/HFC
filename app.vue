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

<script setup></script>

<style scoped>
.app {
  font-family: Space Grotesk;
  background-color: rgb(32, 32, 32);
}

.pages {
  padding-top: 240px;
}
</style>
