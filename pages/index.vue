<template>
  <div class="home-page">
    <v-container>
      <v-row class="d-flex">
        <v-col cols="6">
          <v-icon icon="mdi-network-pos purple-pink-gradient"></v-icon>
          <h4 class="d-inline purple-pink-gradient ms-2">Our Works</h4>
          <p class="home-page-banner">
            Custom Design For Your Digital Products.
          </p>
          <p class="home-page-mission-text">
            HJC is a digital agency passionate about storytelling, visual
            design, and technology. We collaborate with companies...
          </p>
        </v-col>
        <v-col cols="6"
          ><v-icon icon="mdi-network-pos purple-pink-gradient"></v-icon>
          <h4 class="d-inline purple-pink-gradient ms-2">Our Works</h4>
          <p class="home-page-banner">
            Custom Design For Your Digital Products.
          </p></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style scoped>
.home-page {
  background-color: rgb(32, 32, 32);
  height: 70vh;
  padding-top: 246px;
}

.purple-pink-gradient {
  background: linear-gradient(90deg, #5956f0 0%, #ff50b8 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
}

.home-page-banner {
  color: #fff;
  /* html.themexriver.com/Space Grotesk/Bold 72 title */
  font-family: Space Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 82.3px; /* 114.306% */
  text-transform: capitalize;
}

.home-page-mission-text {
  color: #e1e1e1;
  font-family: Space Grotesk;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 157.895% */
  margin-top: 35px;
}
</style>
