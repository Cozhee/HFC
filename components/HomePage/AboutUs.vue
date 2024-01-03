<template>
    <v-container fluid class="about-page pa-16">
      <v-row class="d-flex">
        <v-col cols="5" class="">
          <div class="image-area">
            <div class="d-flex justify-center">
              <img class="about-image pr-12" src="../../assets/images/About/aboutus_people.png" />
            </div>
            <div class="experience-box">
              <p><span>69+</span>Years Experiences</p>
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
              <p>HJC is the sum of 3 happy, wild, spirited, shy, geeky, artsy and faggot team members. Our agency strives to User-Friendly UI, with multiple fortnite balls to offer, which in turn become fantastic kekw moments.</p>
            </div>
            <v-container class="excess d-flex pa-0">
              <v-row>
                <v-col cols="6" v-for="data in excessData" :key="data.text">
                  <div class="d-flex">
                      <v-row>
                        <v-col cols="3" class="pr-0"><v-img :height="data.height" :width="data.width" :src="getImageUrl(data.img)"></v-img></v-col>
                        <v-col cols="9" class="pl-0"><p>{{data.text}}</p></v-col>
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
  
  const thing = ref("dog");
  
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
    background: #FFF;
    margin: 0
  }
  .about-image {
    width: 75%;
    height: 450px;
    flex-shrink: 0;
    border-radius: 300px 300px 0px 0px;
    object-fit: none;
    background: url(../../assets/images/About/aboutus_people.png), lightgray 50% / cover no-repeat, #D9D9D9;
  }

  .heading-text p{
    color: #000;
    font-size: 48px;
  }
  .about-btn {
    margin-top: 35px;
    background: linear-gradient(90deg, #5956f0 0%, #ff50b8 100%);
  }

  .experience-box {
    background: linear-gradient(139deg, #6A55EA 6.37%, #EF50BD 100.26%);
    width: 160px;
height: 125px;
flex-shrink: 0;
border-radius: 25px;
  }
  </style>
  