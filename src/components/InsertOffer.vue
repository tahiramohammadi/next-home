<template>
  <v-container>
    <keep-alive>
    <router-view> </router-view>
    </keep-alive>
    <v-divider> </v-divider>
    <FormNavigator> </FormNavigator>
  </v-container>
</template>
<script>
import FormNavigator from './FormNavigator';
export default {
  components: {
    FormNavigator,
  },
};
</script>
