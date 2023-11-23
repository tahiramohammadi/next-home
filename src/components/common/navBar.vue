 <template>
   <div>
    <v-app-bar dense color="#000000" app>
      <img
        contain
        :src="images"
        max-hight="120"
        max-width="120"
      />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="SignUp">mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>

 </template>
<script setup>
 import images from '@/assets/logo.png'
 import {useRouter}  from 'vue-router'
   const router=useRouter()

 const SignUp=()=>{
      router.push("/signUp")
 }
</script>