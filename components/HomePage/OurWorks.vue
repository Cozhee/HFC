<template>
  <v-container class="our-works-wrapper">
    <v-container class="our-works d-flex">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" md="10" lg="8">
          <v-icon icon="mdi-network-pos purple-pink-gradient"></v-icon>
          <h4 class="d-inline purple-pink-gradient ms-2">Our Works</h4>
          <p class="global-header">
            Custom Design for <br class="brnodisplay" />Your Digital Products.
          </p>
          <p class="home-page-mission-text">
            HJC is a digital agency passionate about storytelling, visual
            design, and technology. We collaborate with companies...
          </p>
          <v-btn size="large" rounded="xl" class="mission-btn">
            What We Offer
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup></script>

<style scoped>
.our-works {
  height: calc(100vh - 100px);
}
.home-page-mission-text {
  color: #e1e1e1;
  font-family: Space Grotesk;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-top: 35px;
}

.mission-btn {
  margin-top: 35px;
  background: linear-gradient(90deg, #5956f0 0%, #ff50b8 100%);
  color: white;
}

.container {
  width: 100%;
  height: 100%;
  max-height: 500px;
}

.hacker-girl {
  width: 100%;
  height: 100% !important;
  object-fit: cover !important;
}

.desk-people {
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

@media screen and (width < 960px) {
  .home-page-mission-text {
    margin-top: 10px !important;
  }

  .our-works {
    padding: 50px 20px !important;
    height: calc(100vh - 79px);
  }
}

@media screen and (width < 505px) {
  .brnodisplay {
    display: none;
  }
}
</style>
