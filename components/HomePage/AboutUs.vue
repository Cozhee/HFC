<template>
    <v-container fluid class="about-page pa-16">
      <v-row class="d-flex">
        <v-col cols="5" class="pb-0 pt-10">
          <div class="image-area d-flex justify-end">
            <img class="about-image pr-12" src="../../assets/images/About/aboutus_people.png" />
            <div class="experience-box">
              <p class="experience-numbers">5+</p>
              <p>Years</p>
              <p>Experience</p>
            </div>
            <div class="outer-border"></div>
            <div class="shape-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="400" viewBox="0 0 299 462" fill="none">
                <path d="M142.095 461.128L113.266 369.849L33.3259 422.936L70.4196 333.186L-26.4346 339.082L43.8696 271.769L-49.4068 243.981L38.5697 202.354L-41.1389 146.496L55.4877 137.618L5.19827 54.5401L92.2709 94.8755L106.909 0.278211L135.739 91.5567L215.678 38.4696L178.585 128.219L275.439 122.324L205.135 189.637L298.411 217.425L210.435 259.051L290.143 314.91L193.517 323.788L243.806 406.866L156.733 366.53L142.095 461.128Z" fill="#7054E7"/>
              </svg>
            </div>
            <div class="line-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="115" height="45" viewBox="0 0 150 73" fill="none">
                <path d="M3.58844 28.7497L35.6877 64.3697L56.718 17.6267L91.0379 55.722L112.068 8.97897L145.824 47.1591" stroke="#7954E4" stroke-width="9" stroke-miterlimit="10"/>
              </svg>
            </div>
          </div>
        </v-col>
        <v-col cols="7">
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
              <p>Discover the essence of HJC, where happiness, creativity, and geeky expertise converge to shape seamless, User-Friendly UI experiences. Our team of three brings dynamic skills to every project, weaving visually stunning and impactful digital narratives. Join us as we redefine web development with a blend of passion and innovation, creating memorable online journeys.</p>
            </div>
            <v-container class="excess d-flex pa-0">
              <v-row>
                <v-col cols="6" v-for="data in excessData" :key="data.text">
                  <div class="d-flex">
                      <v-row class="d-flex align-center">
                        <v-col cols="2" class="pr-0"><v-img :height="data.height" :width="data.width" :src="getImageUrl(data.img)"></v-img></v-col>
                        <v-col cols="10" class="pl-0"><p>{{data.text}}</p></v-col>
                      </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <v-btn rounded="xl" class="about-btn">
              <NuxtLink class ="link-btn" to="/about">
                ABOUT US
              </NuxtLink> &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                <path d="M9.0835 0.303605C9.31963 0.101224 9.54265 0.101224 9.75255 0.303605L17.9779 8.27234C18.2141 8.47472 18.2141 8.6771 17.9779 8.87948L9.75255 16.8482C9.54265 17.0506 9.31963 17.0506 9.0835 16.8482L8.29638 16.0893C8.21767 16.0134 8.17831 15.9122 8.17831 15.7857C8.17831 15.6592 8.21767 15.5454 8.29638 15.4442L14.3965 9.56251H0.976177C0.66133 9.56251 0.503906 9.41073 0.503906 9.10716V8.04466C0.503906 7.74109 0.66133 7.5893 0.976177 7.5893H14.3965L8.29638 1.70762C8.08648 1.47994 8.08648 1.26491 8.29638 1.06253L9.0835 0.303605Z" fill="white"/>
              </svg>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";

  const excessData = ref([
    {
      text: "UX/UI Design & Website/App Design",
      img: "../../assets/images/About/Idea.svg",
      height: "40",
      width: "40"
    },
    {
      text: "Creative Idea & Problem Solving",
      img: "../../assets/images/About/Creative.svg",
      height: "40",
      width: "40"
    },
    {
      text: "Brand Strategy & Art Direction",
      img: "../../assets/images/About/Strategy.svg",
      height: "40",
      width: "40"
    },
    {
      text: "Trending Designing Experience",
      img: "../../assets/images/About/Design.svg",
      height: "40",
      width: "40"
    }
  ])

  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
};
  </script>
  
  <style scoped>

  .about-page {
    width: 100%;
    height: 711px;
    background: #FFF;
    margin: 0;
    overflow: hidden;
  }
  .about-image {
    width: 52%;
    height: 450px;
    flex-shrink: 0;
    border-radius: 300px 300px 0px 0px;
    object-fit: none;
    background: url(../../assets/images/About/aboutus_people.png), lightgray 50% / cover no-repeat, #D9D9D9;
    z-index: 1;
  }

  .image-area {
    position: relative;
    height: 100%;
  }

  .outer-border {
    width: 45%;
    height: 425px;
    flex-shrink: 0;
    border-radius: 300px 300px 0px 0px;
    border: 5px solid #6855EA;
    position: absolute;
    bottom: 105px;
    right: 30px;
    z-index: 1;
  }

  .shape-svg {
    position: absolute;
    bottom: 110px;
    right: 275px;
    transform: rotate(180deg);
  }

  .line-svg {
    position: absolute;
    bottom: 425px;
    right: 20px;
    z-index: 1;
  }

  .heading-text p{
    color: #000;
    font-size: 48px;
    line-height: 64px;
  }
  .about-btn {
    margin-top: 35px;
    background: linear-gradient(90deg, #5956f0 0%, #ff50b8 100%);
  }

  .experience-box {
    background: linear-gradient(139deg, #6A55EA 6.37%, #EF50BD 100.26%);
    width: 143px;
    flex-shrink: 0;
    border-radius: 25px;
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    padding: 25px 30px;
    position: absolute;
    bottom: 25px;
    right: 25px;
    z-index: 2;
  }

  .experience-numbers {
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 60% */
    padding-bottom: 0.5rem;
  }
  </style>
  