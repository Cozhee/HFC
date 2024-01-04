<template>
  <div class="contact-main h-screen">
    <v-container class="contact-container">
      <v-row>
        <v-col col="6">
          <v-sheet color="rgba(0, 0, 0, 0)">
            <v-form @submit.prevent>
              <div class="d-flex">
                <v-text-field
                  class="me-4 w-20"
                  v-model="name"
                  :rules="rules"
                  variant="solo"
                  label="Name"
                ></v-text-field>

                <v-text-field
                  class="w-20"
                  v-model="email"
                  :rules="rules"
                  variant="solo"
                  label="Email"
                  placeholder="example@domain.com"
                ></v-text-field>
              </div>

              <v-combobox
                variant="solo"
                label="Topic"
                :items="[
                  'Web Design',
                  'Hosting Solutions',
                  'Application Development',
                  'Web App Development',
                  'Mobile App Developemnt',
                ]"
              ></v-combobox>

              <v-textarea
                class=""
                v-model="content"
                variant="solo"
                label="Tell us what you need"
              ></v-textarea>

              <v-btn type="submit" block class="mt-2" @click="woof"
                >Submit</v-btn
              >
            </v-form>
          </v-sheet>
        </v-col>
        <v-col col="6" class="d-flex flex-column">
          <p class="purple-pink-gradient text-body-2">
            <v-icon
              icon="mdi-network-pos purple-pink-gradient text-body-2"
            ></v-icon>
            REQUEST A FREE QUOTE
          </p>
          <h2 class="mt-3 text-h3">Make Brand As Briliant One!</h2>
          <p class="mt-4">
            Get in touch to chat about how we can help you build a better B2B
            brand. Don’t be shy. We’re great listeners, and even better
            problem-solvers.
          </p>

          <div class="mt-6">
            <v-btn icon="mdi-twitter" class="social-button me-4"> </v-btn>
            <v-btn icon="mdi-instagram" class="social-button me-4"> </v-btn>
            <v-btn icon="mdi-facebook" class="social-button me-4"> </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const content = ref("");
function woof() {
  for (let i = 0; i < 100; i++) {
    console.log("fortniteballsamungus" + i);
  }
}
const rules = ref([
  (value) => {
    if (value) return true;
    return "You must enter a name.";
  },
]);
</script>

<style scoped>
.contact-main {
  width: 100%;
  height: 100%;
}
.contact-container {
  margin-top: 240px;
  margin-bottom: 240px;
  width: 75%;
}
v-sheet {
  padding: 100rem;
}
.social-button {
  border-radius: 48px;
  background: linear-gradient(180deg, #7255e7 0%, #e050c2 100%);
}

p {
  color: white;
}
h2 {
  color: white;
}
</style>
