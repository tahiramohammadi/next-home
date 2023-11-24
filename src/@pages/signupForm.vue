<template>
  <v-row class="justify-center align-center">
    <v-col cols="12">
      <v-card width="700" class="mx-auto mt-8 green-lighten-4" rounded elevation="6">
        <h2 class="ma-6 justify-center d-flex">User Registration</h2>
        <v-form ref="form" @submit.prevent="onSubmit">

          <v-text-field v-model="name" color="success" 
                  prepend-inner-icon="mdi-account" 
                 variant="outlined" 
                :rules="[v => !!v || 'name is required']" label="Name"
                  required></v-text-field>

          <v-text-field v-model="email"
             prepend-inner-icon="mdi-email" 
             :rules="[v => !!v || 'email is required']" 
             label="Email" color="success" variant="outlined"
            required></v-text-field>
      
          <v-text-field v-model="password"  
           @click:append-inner="visible = !visible"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'" 
         prepend-inner-icon="mdi-lock" color="success"
          :rules="[v => !!v || 'password is required']"
           label="Password" variant="outlined"
            required></v-text-field>

          <v-text-field v-model="confirmpwd"   
           @click:append-inner="visible = !visible" 
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'" 
               prepend-inner-icon="mdi-lock"
             :rules="[v => !!v || 'confirm pwd is required']" 
                label="Confirm Password" color="success" variant="outlined"
            required></v-text-field>
              <!-- <vue-tel-input v-model="phone"  mode="international" :rules="[v => !!v || 'phone is required']" label="Phone Number"  classs="ma-8" required  color="success" variant="outlined"></vue-tel-input> -->
              <v-text-field v-model="phone" 
                  prepend-inner-icon="mdi-phone" 
                  :rules="[v => !!v || 'phone is required']" 
                  label="Phone Number" required  color="success"
                   variant="outlined"></v-text-field>

              <v-card-action class="mt-12">
            <v-btn :loading="loading" color="success"
             size="large" type="submit" variant="elevated"
              class="me-4">
              Sign Up
            </v-btn>
            <v-btn color="error" size="large"
             @click="reset" type="reset" variant="elevated" >
              Reset
            </v-btn>
          </v-card-action>

        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import {ref, computed } from 'vue'
const visible=ref(false)
import { usecontactPersonStore } from '../stores/contactPersonStore.js';
const store = usecontactPersonStore()
 const name = computed({
  get:() => store.name,
  set:(val) =>store.updateName(val),
});
const email = computed({
  get:()=>store.email,
  set:(val) =>store.updateEmail(val) 
})
const password= computed({
  get:()=> store.password,
 
  set:(val)=>store.updatePassword(val),
});
const phone= computed({
  get:()=>store.phone,
  set:(val)=>store.updatePhoneN(val),
});

</script>
