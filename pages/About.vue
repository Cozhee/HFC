<template>
  <p>{{ thing }}</p>
  <p>{{ thing }}</p>
  <p>{{ thing }}</p>
  <p>{{ thing }}</p>
  <p>{{ thing }}</p>
  <p>{{ thing }}</p>
  <p>{{ thing }}</p>
</template>

<script setup>
import { ref } from "vue";

const thing = ref("dog");
console.log(thing);
</script>

<style></style>
