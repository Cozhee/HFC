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
          <v-btn size="large" rounded="xl" class="mission-btn">
            Explore Our Mission
          </v-btn>
        </v-col>
        <v-col cols="6" class="d-flex">
          <div>
            <v-img
              class="hacker-girl"
              cover
              height="452"
              src="../assets/images/girl_hacker.png"
            ></v-img>
          </div>
          <div>
            <v-img
              class="desk-people"
              cover
              height="452"
              :aspect-ratio="1"
              src="../assets/images/people_at_desk.png"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style scoped>
.home-page {
  height: 70vh;
  padding-top: 246px;
}

.home-page-banner {
  color: #fff;
  font-family: Space Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 82.3px;
  text-transform: capitalize;
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

.hacker-girl,
.desk-people {
  width: 307px;
  height: 515.851px;
  flex-shrink: 0;
}

.hacker-girl {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.desk-people {
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}
</style>
