<template>
  <v-container fluid class="footer">
    <v-container class="footer-body">
      <v-row class="footer-body-row justify-center">
        <v-col cols="12" md="6">
          <div class="footer-detail d-flex flex-column justify-space-between">
            <div class="fd-header d-flex align-center mb-3">
              <img src="../public/vector.svg" alt="" />
              <h2 id="abrv">HJC</h2>
            </div>
            <div class="mb-3">
              We'd LOVE to hear from you! Feel free to reach out to us at
              Lakutic@yourproject.id if you have any questions, need advice, or
              want to discuss a project.
            </div>
            <div class="mb-3">
              <img src="../assets/images/Address.svg" alt="" />
              Address: 123 Main Street, Suite 200
            </div>
            <div class="mb-3">
              <img src="../assets/images/Email.svg" alt="" />
              Email:&nbsp;<a href="mailto:email@example.com">
                email@example.com
              </a>
            </div>
            <div class="mb-3">
              <img src="../assets/images/Phone.svg" alt="" />
              Phone:&nbsp;<a href="tel:123-456-789"> 123-456-789 </a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="quick-links">
            <div class="sub-header">
              QUICK LINKS
              <hr />
            </div>
            <ul class="d-flex flex-column">
              <li class="links" v-for="link in quickLinks" :key="link">
                <NuxtLink to="">{{ link }}</NuxtLink>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="categories">
            <div class="sub-header">
              CATEGORIES
              <hr />
            </div>
            <ul class="d-flex flex-column">
              <li class="links" v-for="link in categories" :key="link">
                <NuxtLink to="">{{ link }}</NuxtLink>
              </li>
            </ul>
          </div></v-col
        >
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const quickLinks = ref([
  "FAQ",
  "Terms",
  "Payment Info",
  "Privacy Notice",
  "Billing",
  "Size Chart",
]);
const categories = ref([
  "Cosmatic",
  "Services",
  "Payment Info",
  "Size Chart",
  "Billing",
]);
</script>

<style scoped>
.footer-body-row {
  height: 100%;
}

.footer-detail {
  height: 75%;
  color: #fff;
  font-family: "Space Grotesk";
  font-size: 15px;
}

.footer-detail div {
  display: flex;
}

div img {
  padding-right: 1rem;
}

a {
  color: inherit;
}

.social-media {
  font-size: 19px;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  padding-right: 2.5rem;
}

.fd-header img {
  height: 75px;
  width: 51px;
}

#abrv {
  color: #fff;
  font-weight: bold;
  font-family: "Calistoga";
  font-size: 20px;
}

.sub-header {
  color: #fff;
  font-family: Space Grotesk;
  font-size: 20px;
  font-weight: bolder;
  padding-bottom: 2rem;
}
.links {
  list-style-type: none;
  color: #e6eedd;
  font-family: Space Grotesk;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #2b2b2b;
}

.links:last-child {
  border: 0;
}
.links a {
  text-decoration: none;
}

.links a:hover {
  color: #6d55e9;
  cursor: pointer;
}
</style>
