<template>
  <div class="contact-main">
    <v-container>
      <v-row>
        <v-col col="6">
          <v-sheet>
            <v-form @submit.prevent>
              <v-text-field
                v-model="name"
                :rules="rules"
                variant="solo"
                label="Name"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="rules"
                variant="solo"
                label="Email"
                placeholder="example@domain.com"
              ></v-text-field>

              <v-text-field
                v-model="content"
                variant="solo"
                label="Tell us what you need"
              ></v-text-field>

              <v-btn type="submit" block class="mt-2" @click="woof"
                >Submit</v-btn
              >
            </v-form>
          </v-sheet>
        </v-col>
        <v-col col="6">
          <p class="purple-pink-gradient">
            <v-icon icon="mdi-network-pos purple-pink-gradient"></v-icon>
            Request a free quot'e
          </p>
          <h2>Make Brand As Briliant One!</h2>
          <p>
            Get in touch to chat about how we can help you build a better B2B
            brand. Don’t be shy. We’re great listeners, and even better
            problem-solvers.
          </p>

          <v-container>
            <v-row>
              <v-col col="1"
                ><v-btn icon="mdi-twitter" class="social-button"> </v-btn
              ></v-col>
              <v-col col="1"
                ><v-btn icon="mdi-instagram" class="social-button"> </v-btn
              ></v-col>
              <v-col col="1"
                ><v-btn icon="mdi-facebook" class="social-button"> </v-btn
              ></v-col>
              <v-col col="13"></v-col>
            </v-row>
          </v-container>
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
v-sheet {
  padding: 100rem;
}
.social-button {
  padding: 10px;
}

p {
  color: white;
}
h2 {
  color: white;
}
</style>
