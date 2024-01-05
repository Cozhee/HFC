<template>
    <div class="services-container">
        <div class="services-header">
            <div>
                <v-icon icon="mdi-network-pos purple-pink-gradient"></v-icon>
                <h4 class="d-inline purple-pink-gradient ms-2">
                    WEBSITE DESIGN & DEVELOPMENT
                </h4>
            </div>
            <div class="focus-text">
                We Empowered<br> Clients To Be<br> Awesome
            </div>
        </div>
        <div class="services-content">
            <div class="content-row" v-for="data in contentData" :key="data.headerText">
                <div class="content-left">
                    <img src="../assets/images/Services/Icon.svg" alt="" />
                    <div class="left-text">
                        <p class="left-header">{{ data.headerText }}</p>
                        <p class="left-subhead">{{ data.subText }}</p>
                    </div>
                </div>
                <div class="content-right">
                    <p class="pill">{{ data.pill1 }}</p>
                    <p class="pill">{{ data.pill2 }}</p>
                </div>
            </div>
        </div>
    </div>
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
  }
]);

</script>
<style scoped>
.services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.services-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.focus-text {
    color: #FFF;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    line-height: 82.3px;
}

.services-content {
    width: 75%;
}

.content-row {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 2rem 0;
}

.content-row::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px; /* Adjust the height of the border as needed */
  background: linear-gradient(90deg, #5956F0 0%, #FF50B8 100%);
  z-index: 1; /* Ensure the border is above the content */
}

.content-left {
    display: flex;
}

.left-text {
    padding: 1.5rem;
}

.left-header {
    color: #FFF;
    font-size: 55px;
    font-weight: 700;
    line-height: 62.87px;
}

.left-subhead {
    color: #FFF;
    font-size: 18px;
    font-weight: 300;
    line-height: 28.42px; 
    text-transform: uppercase;
}

.content-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
}

.pill {
    color: #FFF;
    font-size: 17px;
    font-weight: 300;
    line-height: 26.84px;
    text-transform: uppercase;
    padding: 11px 28.17px 11px 21px;
    border-radius: 30px;
    border: 1px solid #FFF;
}
</style>