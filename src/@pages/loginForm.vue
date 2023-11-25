<template>
     <!-- <div class="bg-green-lighten-4" max-height="100vh"> -->
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <v-card width="500" class="mx-auto mt-8 green-lighten-4 rounded-shaped" elevation="9">
          <h2 class="ma-6 justify-center d-flex">WelCome to Next Home</h2>
          <v-form ref="form" @submit.prevent="onSubmit">

            <v-text-field v-model="payload.email" prepend-inner-icon="mdi-email" type="email" :rules="[requiredValidator]"
              label="Email" color="success" variant="outlined" required></v-text-field>

            <v-text-field v-model="payload.password" @click:append-inner="visible = !visible"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock" color="success" :rules="[requiredValidator, passwordValidator]"
              label="Password" variant="outlined" required></v-text-field>
            <div class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4">
              <VCheckbox v-model="payload.remember" label="Remember me" />
              <a class="text-light-green-accent-3 ms-2 mb-1">
                Forgot Password?
              </a>
            </div>
              <v-btn :loading="loading" color="success" block size="large" type="submit" name="submit"
                class="me-4  rounded-pill" variant="outlined">
                Sign In
              </v-btn>
              <VCol cols="12" class="text-center text-base">
                <span>New on our platform?</span>
                <router-link to="/signUp" class="text-light-green-accent-3 ms-2">
                  Create an account
                </router-link>
              </VCol>
    


          </v-form>
        </v-card>
      </v-col>
    </v-row>
  <!-- </div> -->
</template>
<script setup >
import { ref } from 'vue'
import axios from 'axios'
import { requiredValidator, passwordValidator } from "@/utils/validators.js";
import { toast } from 'vue3-toastify'
import {useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore';
const authStore = useAuthStore()
const router = useRouter()
const visible = ref(false)
const loading = ref(false);
const form = ref();
const payload = ref({
  email: null,
  password: null,
});

// methods

const login = () => {
  axios
    .post("/loginForm", payload.value)
    .then((r) => {
      const token = r.data.token;
      console.log(token.data)
      authStore.login.token
      router.beforeEach((to, from, next) => {
        if (to.meta.requiresAuth && !authStore.isAuthenticated) {
          next('/loginForm')
        } else {
          next()
        }

      })
    })
    .catch((e) => {
      console.log(e);

    });
};


const onSubmit = () => {
  form.value?.validate().then(({ valid: isValid }) => {
    if (isValid) login();
    toast.success("You are  successfully Login to our Platform");
  });
  console.log(error)
};

</script>
  
  