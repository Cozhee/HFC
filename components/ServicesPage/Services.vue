<template>
  <v-container fluid class="services-wrapper">
    <v-container>
      <v-row>
        <v-col>
          <div class="services-container">
            <div class="services-header justify-center">
              <div>
                <v-icon icon="mdi-network-pos purple-pink-gradient"></v-icon>
                <h4 class="d-inline purple-pink-gradient ms-2">
                  WEBSITE DESIGN & DEVELOPMENT
                </h4>
              </div>
              <div class="focus-text global-header">
                We Empower <br /> Clients
                To Be<br /> Awesome
              </div>
              <p class="mission-text w-25">
                Welcome to our web development agency, where we specialize in creating custom-designed websites from scratch using HTML and CSS. Our services include SEO to boost your online visibility, hassle-free hosting solutions, ongoing maintenance for optimal performance, and dedicated customer support for a seamless experience. Trust us to bring innovation and excellence to your digital presence.  
              </p>
            </div>
            <div class="services-content">
              <div
                class="content-row"
                v-for="data in contentData"
                :key="data.headerText"
              >
                <div class="content-left">
                  <img src="../../assets/images/Services/Icon.svg" alt="" />
                  <div class="left-text">
                    <p class="left-header">{{ data.headerText }}</p>
                    <p class="left-subhead">{{ data.subText }}</p>
                  </div>
                </div>
                <div class="content-right d-none d-sm-flex">
                  <p class="pill">{{ data.pill1 }}</p>
                  <p class="pill">{{ data.pill2 }}</p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const contentData = ref([
  {
    headerText: "Development",
    subText: "Guaranteed quality and Functionality",
    pill1: "Powerful",
    pill2: "Reliable",
  },
  {
    headerText: "Marketing",
    subText: "Grow your sales",
    pill1: "effective",
    pill2: "Performant",
  },
  {
    headerText: "Branding & SEO",
    subText: "have your market find you",
    pill1: "Unique",
    pill2: "outstanding",
  },
  {
    headerText: "UI/UX Design",
    subText: "Unique, inspiring designs",
    pill1: "Creative",
    pill2: "User Friendly",
  },
]);
</script>
<style scoped>
.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services-content {
  width: 100%;
}

.services-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
}

.focus-text {
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  line-height: 82.3px;
}

.mission-text {
  color: #e1e1e1;
  font-family: Space Grotesk;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-top: 35px;
}

.content-row {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 2rem 0;
}

.content-row::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px; /* Adjust the height of the border as needed */
  background: linear-gradient(90deg, #5956f0 0%, #ff50b8 100%);
  z-index: 1; /* Ensure the border is above the content */
}

.content-left {
  display: flex;
}

.left-text {
  padding: 1.5rem;
}

.left-header {
  color: #fff;
  font-size: 2em;
  font-weight: 700;
}

.left-subhead {
  color: #fff;
  font-size: 1em;
  font-weight: 300;
  text-transform: uppercase;
}

.content-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pill {
  color: #fff;
  font-size: 17px;
  font-weight: 300;
  text-transform: uppercase;
  padding: 11px 28.17px 11px 21px;
  border-radius: 30px;
  border: 1px solid #fff;
}
</style>
