<template>
    <v-sheet>
    <v-form @submit.prevent>
      <v-text-field
        v-model="Name"
        :rules="rules"
        label="Name"
      ></v-text-field>

      <v-text-field 
      v-model="Name"
      :rules="rules"
      label="Email"
      placeholder="example@domain.com"
      ></v-text-field>

      <v-text-field 
      label="Tell us what you need"
      ></v-text-field>

      <v-btn
      type="submit" 
      block class="mt-2"
      >Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
  
<script setup>
    import { ref } from "vue";
    
    const rules = ref(
        [
            value => {
              if (value) return true    
              return 'You must enter a name.'
            },
        ]
    );
</script>

<style>
    v-sheet{
        padding: 100rem;
    }
    p {
        color: black;
    };
</style>
  