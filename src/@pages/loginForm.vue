<template>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <v-card width="700" class="mx-auto mt-8 green-lighten-4" rounded elevation="6">
          <h2 class="ma-6 justify-center d-flex">WelCome to Next Home</h2>
          <v-form ref="form" @submit.prevent="onSubmit">
  
            <v-text-field v-model="payload.email_or_phone"
               prepend-inner-icon="mdi-email" 
               type="email"
               :rules="[requiredValidator]" 
               label="Email_Or_Phone" color="success" variant="outlined"
              required></v-text-field>
        
            <v-text-field v-model="payload.password"  
             @click:append-inner="visible = !visible"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'" 
           prepend-inner-icon="mdi-lock" color="success"
            :rules="[ requiredValidator, passwordValidator ]"
             label="Password" variant="outlined"
              required></v-text-field>
              <div
              class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4"
                  >
                    <VCheckbox v-model="payload.remember" label="Remember me" />
                    <a class="text-primary ms-2 mb-1" href="javascript:void(0)">
                      Forgot Password?
                    </a>
                  </div>
                <v-card-action class="mt-12">
                  <VSpacer />
              <v-btn :loading="loading" color="success"
               size="large" type="submit" variant="elevated"
                class="me-4">
                Sign In
                </v-btn>
                <VCol cols="12" class="text-center text-base">
                  <span>New on our platform?</span>
                  <a class="text-primary ms-2" href="javascript:void(0)">
                    Create an account
                  </a>
                </VCol>
            </v-card-action>

  
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </template>
  <script setup>
  import {ref } from 'vue'
  import axios from 'axios'
  import { emailValidator, requiredValidator,  passwordValidator} from "@/utils/validators.js";
  import {toast} from 'vue3-toastify'
  const visible=ref(false)
  const loading = ref(false);
  const form = ref();
  const payload = ref({
    email_or_phone: null,
    password: null,
  });

  // methods
  
  
  const OnSubmit = async () => {
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
  