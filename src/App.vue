<template>
  <v-app>
         <navBar/>
    <v-main>
      <router-view>
      
      </router-view>
        
      

    </v-main>
  </v-app>
</template>

<script setup>
      import navBar from './components/common/navBar.vue';
</script>
