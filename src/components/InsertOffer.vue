<template>
  <v-container>
    <keep-alive>
    <router-view> </router-view>
    </keep-alive>
    <v-divider> </v-divider>
    <FormNavigator> </FormNavigator>
  </v-container>
</template>
<script setup>
import FormNavigator from './FormNavigator';

</script>
