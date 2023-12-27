<template>
  <v-container>
        <router-view></router-view>
    <v-divider> </v-divider>
    <keep-alive>
  <FormNavigator></FormNavigator>
    </keep-alive>
  
  </v-container>
</template>
<script setup>
import FormNavigator from './FormNavigator.vue';

</script>
