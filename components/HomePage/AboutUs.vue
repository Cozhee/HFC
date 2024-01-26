<template>
  <v-container fluid class="about-page-wrapper">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col sm="12" md="10" lg="8">
          <div class="about-content">
            <div class="heading">
              <v-icon icon="mdi-network-pos purple-pink-gradient"></v-icon>
              <h4 class="d-inline purple-pink-gradient ms-2">ABOUT US</h4>
              <div class="heading-text">
                <p>Creative</p>
                <p>Problem Solving</p>
                <p>Innovations</p>
              </div>
            </div>
            <div class="about-text mt-8 mb-12">
              <p>
                Discover the essence of HJC, where happiness, creativity, and
                geeky expertise converge to shape seamless, User-Friendly UI
                experiences. Our team of three brings dynamic skills to every
                project, weaving visually stunning and impactful digital
                narratives. Join us as we redefine web development with a blend
                of passion and innovation, creating memorable online journeys.
              </p>
            </div>
            <v-container class="excess d-flex pa-0">
              <v-row>
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                  <div class="d-flex">
                    <div class="d-flex align-center">
                      <v-img
                        height="40"
                        width="40"
                        src="../../assets/images/About/Idea.svg"
                        class="me-3"
                      ></v-img>
                      <p>UX/UI Design & Website/App Design</p>
                    </div>
                  </div>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                  <div class="d-flex">
                    <div class="d-flex align-center">
                      <v-img
                        height="40"
                        width="40"
                        src="../../assets/images/About/Creative.svg"
                        class="me-3"
                      ></v-img>
                      <p>Creative Idea & Problem Solving</p>
                    </div>
                  </div>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                  <div class="d-flex">
                    <div class="d-flex align-center">
                      <v-img
                        height="40"
                        width="40"
                        src="../../assets/images/About/Strategy.svg"
                        class="me-3"
                      ></v-img>
                      <p>Brand Strategy & Art Direction</p>
                    </div>
                  </div>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                  <div class="d-flex">
                    <div class="d-flex align-center">
                      <v-img
                        height="40"
                        width="40"
                        src="../../assets/images/About/Design.svg"
                        class="me-3"
                      ></v-img>
                      <p>Trending Designing Experience</p>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const excessData = ref([
  {
    text: "UX/UI Design & Website/App Design",
    img: "../../assets/images/About/Idea.svg",
    height: "40",
    width: "40",
  },
  {
    text: "Creative Idea & Problem Solving",
    img: "../../assets/images/About/Creative.svg",
    height: "40",
    width: "40",
  },
  {
    text: "Brand Strategy & Art Direction",
    img: "../../assets/images/About/Strategy.svg",
    height: "40",
    width: "40",
  },
  {
    text: "Trending Designing Experience",
    img: "../../assets/images/About/Design.svg",
    height: "40",
    width: "40",
  },
]);
</script>

<style scoped>
.about-page-wrapper {
  background: #fff;
  margin: 0;
  padding: 100px 0;
}
.heading-text p {
  color: #000;
  font-size: 48px;
  line-height: 64px;
}
.about-btn {
  margin-top: 35px;
  background: linear-gradient(90deg, #5956f0 0%, #ff50b8 100%);
  color: white;
}

</style>
