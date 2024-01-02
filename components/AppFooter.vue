<template>
  <v-container-fluid class="footer">
    <div class="image-row d-flex">
      <v-img
        :height="275"
        cover
        class="w-20"
        src="../assets/images/footer_cat.png"
      ></v-img>
      <v-img
        :height="275"
        cover
        class="w-20"
        src="../assets/images/footer_spaceman.png"
      ></v-img>
      <v-img
        :height="275"
        cover
        class="w-20"
        src="../assets/images/footer_triangles.png"
      ></v-img>
      <v-img
        :height="275"
        cover
        class="w-20"
        src="../assets/images/footer_circle.png"
      ></v-img>
      <v-img
        :height="275"
        cover
        class="w-20"
        src="../assets/images/footer_gril.png"
      ></v-img>
    </div>
    <v-container class="footer-body">
      <v-row class="footer-body-row justify-center">
        <v-col :cols="6">
          <div class="footer-detail d-flex flex-column justify-space-between">
            <div class="fd-header d-flex align-center">
              <!-- <v-col :cols="4"><v-img :cols="2" class="logo" :width="51" :height="75" src="../public/vector.svg"> </v-img></v-col> -->
              <!-- <v-col id="abrv"><h2>HJC</h2></v-col> -->
              <img src="../public/vector.svg" alt="" />
              <h2 id="abrv">HJC</h2>
            </div>
            <p>
              We'd LOVE to hear from you! Feel free to reach out to us at
              Lakutic@yourproject.id if you have any questions, need advice, or
              want to discuss a project.We'd LOVE to hear from you! Feel free to
              reach out to us at Lakutic@yourproject.id if you have any
              questions, need advice, or want to discuss a project.
            </p>
            <p>
              <img src="../assets//images/Address.svg" alt="" />
              Address: 123 Main Street, Suite 200
            </p>
            <p>
              <img src="../assets//images/Email.svg" alt="" />
              Email: <a href="mailto:email@example.com"> email@example.com</a>
            </p>
            <p>
              <img src="../assets//images/Phone.svg" alt="" />
              Phone: <a href="tel:123-456-789">123-456-789</a>
            </p>
            <!-- <div class="social-media">
                            <span>FACEBOOK</span>
                            <span>INSTAGRAM</span>
                        </div> -->
          </div>
        </v-col>
        <v-col :cols="3">
          <div class="quick-links">
            <div class="sub-header">
              QUICK LINKS
              <hr />
            </div>
            <ul class="d-flex flex-column">
              <li class="links" v-for="link in quickLinks">
                <a href="">{{ link }}</a>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col :cols="3">
          <div class="categories">
            <div class="sub-header">
              CATEGORIES
              <hr />
            </div>
            <ul class="d-flex flex-column">
              <li class="links" v-for="link in categories">
                <a href="">{{ link }}</a>
              </li>
            </ul>
          </div></v-col
        >
      </v-row>
    </v-container>
  </v-container-fluid>
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
.footer-body {
  padding: 5rem 5rem 0 5rem;
  height: 572px;
}

.footer-body-row {
  height: 100%;
}

.footer-detail {
  height: 75%;
  color: #fff;
  font-family: "Space Grotesk";
  font-size: 15px;
}

.footer-detail p {
  display: flex;
}

p img {
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
  margin-right: 1.5rem;
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
  padding-bottom: 4rem;
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
</style>
