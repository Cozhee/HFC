<template>
  <v-container fluid class="v-container-wrapper">
    <v-container>
      <v-row class="mb-16">
        <v-col>
          <div class="d-flex flex-column">
            <div class="d-flex flex-column">
              <div class="text-center">
                <v-icon
                  icon="mdi-network-pos purple-pink-gradient text-center"
                ></v-icon>
                <h4 class="d-inline purple-pink-gradient ms-2">
                  Affordable Pricing For All
                </h4>
              </div>
              <div class="global-header text-center">Chose Your Plan</div>
            </div>
            <div class="w-100">
              <p class="mission-text">
                Contact HJC for a free quote with no credit card required.<br />
                You can upgrade anytime and whatever progress we made<br />(including
                any Edits we made for your site) will still be there!
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row
        class="d-flex flex-rows align-center justify-center mb-16 pricing-card-container"
      >
        <v-col cols="auto">
          <v-card
            class="text-center pricing-cards"
            width="300"
            varient="elevated tonal"
            title="Fixed"
          >
            <v-card-text>
              Pick from a variety of designs all for one up front cost.
            </v-card-text>
            <h2>Starting at $1000</h2>
            <p>Whats Included?</p>
            <p class="">&#x2713; Tailored exactly to your needs</p>
            <p class="">&#x2713; Tailored exactly to your needs</p>
            <p class="pb-3">&#x2713; Tailored exactly to your needs</p>
          </v-card>
        </v-col>
        <v-col cols="auto" class="pricing-big-boi">
          <v-card
            class="text-center pricing-cards pricing-middle-card"
            width="300"
            varient="elevated"
            title="Monthly"
            ><v-card-text>
              Affordable monthly pricing with added benefits.
            </v-card-text>
            <h2>$150/month</h2>
            <p>Whats Included?</p>
            <p class="">&#x2713; Tailored exactly to your needs</p>
            <p class="">&#x2713; Tailored exactly to your needs</p>
            <p class="pb-3">&#x2713; Tailored exactly to your needs</p>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="text-center pricing-cards"
            width="300"
            varient="elevated"
            title="Custom"
          >
            <v-card-text>
              Custom built from the ground up for all your business needs.
            </v-card-text>
            <h2>Flexible Pricing</h2>
            <p>Whats Included?</p>
            <p class="">&#x2713; Tailored exactly to your needs</p>
            <p class="">&#x2713; Tailored exactly to your needs</p>
            <p class="pb-3">&#x2713; Tailored exactly to your needs</p>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-column pricing-ready-container">
        <v-col cols="auto">
          <div class="d-flex flex-column">
            <p class="global-header text-center">Ready to get started?</p>
          </div>
          <div
            class="d-flex flex-column justify-center align-center pricing-contact-us-container"
          >
            <p class="mission-text text-center">Get your free quote now!</p>
            <NuxtLink to="/contact">
              <v-btn class="mt-2 pricing-button" @click="">Contact Us</v-btn>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup></script>
<style scoped>
.v-container-wrapper {
  margin-top: 100px;
  margin-bottom: 100px;
}
.pricing-card-container .v-col {
  display: flex;
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
  text-align: center;
}

.v-card {
  background: gray;
  color: white;
}

.pricing-cards {
  background-color: #8854e0;
  padding: 1.15rem;
}

.pricing-button {
  background: linear-gradient(180deg, #7255e7 0%, #e050c2 100%);
  color: white;
  text-transform: up;
}
.pricing-middle-card {
  scale: 1.1;
}

@media screen and (width < 1280px) {
  .pricing-middle-card {
    scale: 1;
  }
  .pricing-contact-us-container {
    position: relative;
    top: -30px;
  }
  .v-container-wrapper {
    padding-bottom: 0px;
  }
}
</style>
