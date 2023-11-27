<template>
  <v-container>
    <v-row class="justify-center align-center">
      <v-col cols="12" sm="10">
        <v-card class="evelation-6 mt-10">
          <v-window v-model="step">
            <v-wnidow-item :value="1">
              <v-row>
                <v-col cols="12" sm="6"  class="bg-teal-accent-3  rounded-bl-xl">
                       <div style="text-align:center;"  class="mt-14 pt-16" >
                         <v-card-text>
                          <h3 class="text-bold text-white">New on our platform?</h3>
                          <v-btn to="/signUp" class="ms-2 text-white" variant="" color="black">
                            Sign Up
                          </v-btn>
                         </v-card-text>
                      </div>
                    </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center text-teal-accent-3 text-bold fs-8">WELCOME TO THE NEXT HOME</h2>
                    <v-form ref="form" @submit.prevent="onSubmit">
                      <v-text-field v-model="payload.email" prepend-inner-icon="mdi-email" type="email"
                        :rules="[requiredValidator]" label="Email"   color="teal-accent-3" class="mt-12" variant="outlined"
                        required></v-text-field>

                      <v-text-field v-model="payload.password" @click:append-inner="visible = !visible"
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                        prepend-inner-icon="mdi-lock"  color="teal-accent-3" :rules="[requiredValidator, passwordValidator]"
                        label="Password" variant="outlined" required></v-text-field>
                      <div class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4">
                        <VCheckbox v-model="payload.remember" label="Remember me" />
                        <a class="text-teal-accent-3 ms-2 mb-1 text-white">
                          Forgot Password?
                        </a>
                      </div>
                      <v-btn :loading="loading" block size="large" type="submit" name="submit"
                        class="me-4 bg-teal-accent-3  text-white rounded-pill" variant="outlined">
                        Sign In
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-col>
            
              </v-row>
            </v-wnidow-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup >
import { ref } from 'vue'
import axios from 'axios'
import { requiredValidator, passwordValidator } from "@/utils/validators.js";
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
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
  
<style scoped>
 .rounded-bl-xl {
  border-bottom-right-radius: 300px !important;
}


</style>