<template>
  <v-row class="justify-center align-center">
    <v-col cols="12">
      <v-card width="800" class="mx-auto mt-8" rounded elevation="6">
      
        <v-row>
           <v-col cols="12" sm="5" class="bg-teal-accent-3">
            <h1 class="  mt-16 text-center text-white">WelCome Back!</h1>
            <div class="justify-center d-flex">
              <span class="text-white text-center mt-6">You Already have an Account?</span>
            </div>
            <div class="justify-center d-flex">
              <v-btn class="text-white mt-3" variant="outlined" to="/loginForm" rounded>Sign In </v-btn>
            </div>
           </v-col>
          <v-col cols="12" sm="7">
            <h1 class="ma-14 justify-center d-flex text-teal-accent-3 " >Create Account</h1>
            <v-form ref="form" @submit.prevent="() => {}">
          <v-text-field v-model="payload.username" color="teal-accent-3" 
                  prepend-inner-icon="mdi-account" 
                 variant="underlined" 
                 type="text"
                :rules="[requiredValidator]" label="Username"
                  required></v-text-field>

          <v-text-field v-model="payload.email"
             prepend-inner-icon="mdi-email" 
             type="email"
             :rules="[emailValidator,requiredValidator]" 
             label="Email" color="teal-accent-3"   variant="underlined" 
            required></v-text-field>
      
          <v-text-field v-model="payload.password"  

        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="
          isPasswordVisible
            ? 'mdi-eye-off-outline'
            : 'mdi-eye-outline'
        "
        @click:append-inner="isPasswordVisible = !isPasswordVisible" 
         prepend-inner-icon="mdi-lock" color="teal-accent-3"
          :rules="[ requiredValidator, passwordValidator ]"
           label="Password"   variant="underlined" 
            required></v-text-field>


          <v-text-field v-model="payload.confirmpwd"   
           @click:append-inner="visible = !visible" 
            :append-inner-icon="visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
            :type="visible ? 'text' : 'password'" 
               prepend-inner-icon="mdi-lock"
             :rules="[ requiredValidator, passwordValidator ]" 
                label="Confirm Password" color="teal-accent-3"   variant="underlined" 
            required></v-text-field>
              <!-- <vue-tel-input v-model="phone"  mode="international" :rules="[v => !!v || 'phone is required']" label="Phone Number"  classs="ma-8" required  color="success" variant="outlined"></vue-tel-input> -->
              <v-text-field v-model="payload.phone" 
                  prepend-inner-icon="mdi-phone" 
                  type="number"
                  :rules="[ requiredValidator ]" 
                  label="Phone Number" required  color="teal-accent-3"
                  variant="underlined" ></v-text-field>
              
    
               <div  class="ma-4 justify-center d-flex">
                <v-btn :loading="loading" class="bg-teal-accent-3  text-white"
             size="large" type="submit" variant="elevated"
            right @click="submit" rounded>
              Sign Up
            </v-btn>
               </div>
          

            <!-- <v-btn class="bg-grey-lighten-1" size="large"
             @click="reset" type="reset" variant="elevated" >
              Reset
            </v-btn> -->
        

        </v-form>
          </v-col>
        </v-row>

       
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import {ref } from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
import { emailValidator, requiredValidator,  passwordValidator } from "@/utils/validators.js";
import {toast} from 'vue3-toastify'
const router=useRouter()
const visible=ref(false)
const isPasswordVisible = ref(false);
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
    await axios.post("/users", payload.value);
         router.push("/loginForm")
 
    toast.success("You are successfully registered!!")
       reset();
  } catch (error) {
    toast.error("you are not registered", error);
  }
  loading.value = false;
};

</script>
