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
<script>
import RubricForm from './RubricForm.vue';
import AddressForm from './AddressForm';

export default {
  components: {
    RubricForm,
    AddressForm,
  },
};
</script>
