<template>
  <v-container fluid>
    <v-divider></v-divider>

    <v-subheader>Rubric</v-subheader>
    <RubricForm> </RubricForm>
    <v-divider></v-divider>

    <v-subheader>Address</v-subheader>
    <AddressForm> </AddressForm>
   
  </v-container>
</template>
<script setup>
import RubricForm from './RubricForm.vue';
import AddressForm from './AddressForm';


</script>
