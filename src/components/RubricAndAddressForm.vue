<template>
  <v-container fluid>
     <h4 class="d-flex flex-row">Rubric</h4>
    <v-divider></v-divider>

   
    <RubricForm />
    
   
    <v-divider></v-divider>
 <h4  class="d-flex flex-row"> Address</h4>
    <AddressForm/>
   
  </v-container>
</template>
<script setup>
import RubricForm from './RubricForm.vue';
import AddressForm from './AddressForm.vue';


</script>
