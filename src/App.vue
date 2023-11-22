<template>
  <v-app>
    <div>
      <v-app-bar dense color="#000000" app>
        <img
          contain
          :src="images"
          max-hight="120"
          max-width="120"
        />
      </v-app-bar>
    </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
   import images from '@/assets/logo.png'
</script>
