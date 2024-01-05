<template>
    <v-container class="our-works">
    <v-row class="d-flex">
        <v-col sm="12" md="10" lg="6">
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
        <div class="container">
            <v-img
            class="rounded-xl d-none d-lg-block"
            min-width="300"
            cover
            :aspect-ratio="1"
            src="../../assets/images/girl_hacker.png"
            ></v-img>
        </div>
        </v-col>
    </v-row>
    </v-container>
  </template>
  
  <script setup></script>
  
  <style scoped>
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
  </style>
  