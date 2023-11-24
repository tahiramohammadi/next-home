<template>
  <v-row class="justify-center align-center">
    <v-col cols="12">
      <v-card width="700" class="mx-auto mt-8 green-lighten-4" rounded elevation="6">
        <h2 class="ma-6 justify-center d-flex">User Registration</h2>
        <v-form ref="form" @submit.prevent="() => {}">

          <v-text-field v-model="payload.username" color="success" 
                  prepend-inner-icon="mdi-account" 
                 variant="outlined" 
                 type="text"
                :rules="[requiredValidator]" label="Username"
                  required></v-text-field>

          <v-text-field v-model="payload.email"
             prepend-inner-icon="mdi-email" 
             type="email"
             :rules="[emailValidator,requiredValidator]" 
             label="Email" color="success" variant="outlined"
            required></v-text-field>
      
          <v-text-field v-model="payload.password"  
           @click:append-inner="visible = !visible"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'" 
         prepend-inner-icon="mdi-lock" color="success"
          :rules="[ requiredValidator, passwordValidator ]"
           label="Password" variant="outlined"
            required></v-text-field>


          <v-text-field v-model="payload.confirmpwd"   
           @click:append-inner="visible = !visible" 
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'" 
               prepend-inner-icon="mdi-lock"
             :rules="[ requiredValidator, confirmedValidator ]" 
                label="Confirm Password" color="success" variant="outlined"
            required></v-text-field>
              <!-- <vue-tel-input v-model="phone"  mode="international" :rules="[v => !!v || 'phone is required']" label="Phone Number"  classs="ma-8" required  color="success" variant="outlined"></vue-tel-input> -->
              <v-text-field v-model="payload.phone" 
                  prepend-inner-icon="mdi-phone" 
                  type="number"
                  :rules="[ requiredValidator ]" 
                  label="Phone Number" required  color="success"
                   variant="outlined"></v-text-field>

              <v-card-action class="mt-12">
                <VSpacer />
            <v-btn :loading="loading" color="success"
             size="large" type="submit" variant="elevated"
              class="me-4" @click="submit">
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
import {ref } from 'vue'
import axios from 'axios'
import { emailValidator, requiredValidator,  passwordValidator,confirmedValidator } from "@/utils/validators.js";
import {toast} from 'vue3-toastify'
const visible=ref(false)
const loading = ref(false);
const form = ref();
const payload = ref({
  username: null,
  email: null,
  password: null,
  confirmpwd: null,
  phone:null,
});

const reset= () => {
  payload.value = {
    username: null,
  email: null,
  password: null,
  confirmpwd: null,
  phone:null,
  };

};
// methods


const submit = async () => {
  try {
    const validate = await form.value.validate();
    if (!validate.valid) {
      console.log("error validation");
      return;
    }
    loading.value = true;
   const res = await axios.post("/users", payload.value);
   console.log(res.value)
    reset();
    toast.success("You are successfully registered!!")
  } catch (error) {
    toast.error("you are not registered", error);
  }
  loading.value = false;
};

</script>
