<template>
  <v-container fluid>
    <v-row justify="center" dense="">
      <v-col cols="12" md="5">
        <v-text-field dense outlined v-model="streetInput" label="Street"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field dense v-model="houseNrInput" label="House number" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row dense justify="center">
      <v-col cols="12" md="3">
        <v-text-field dense v-model="zipCodeInput" label="Zip code" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="5">
        <v-text-field dense v-model="cityInput" label="City" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row dense justify="center">
      <v-col cols="12" md="8">
        <v-textarea v-model="moreInformationInput" label="More Information" aria-multiline="2" auto-grow outlined dense
          rows="3"></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const streetInput = computed({
  get() {
    return store.state.addressModule.address.street
  },
  set(value) {
    store.commit('addressModule/updateStreet', value)
  },

});
const houseNrInput = computed({
  get() {
    return store.state.addressModule.address.houseNr;
  },
  set(value) {
    store.commit('addressModule/updateHouseNr', value);
  }
})


const zipCodeInput = computed({
  get() {
    return store.state.addressModule.address.zipCode;
  },
  set(value) {
    store.commit('addressModule/updateZipCode', value);
  }
})
const cityInput = computed({
  get() {
    return store.state.addressModule.address.city;
  },
  set(value) {
    store.commit('addressModule/updateCity', value);
  }
});
const moreInformationInput = computed({
  get() {
    return store.state.addressModule.address.moreInformation;
  },
  set(value) {
    store.commit('addressModule/updateMoreInformation', value);
  }
});

</script>
