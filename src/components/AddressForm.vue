<template>
  <v-container fluid>
    <v-row justify="center" dense="">
      <v-col cols="12" md="5">
        <v-text-field dense  variant="outlined" v-model="streetInput" label="Street"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field dense v-model="houseNrInput" label="House number" variant="outlined"></v-text-field>
      </v-col>
    </v-row>
    <v-row dense justify="center">
      <v-col cols="12" md="3">
        <v-text-field dense v-model="zipCodeInput" label="Zip code" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="12" md="5">
        <v-text-field dense v-model="cityInput" label="City" variant="outlined"></v-text-field>
      </v-col>
    </v-row>
    <v-row dense justify="center">
      <v-col cols="12" md="8">
        <v-textarea v-model="moreInformationInput" label="More Information" aria-multiline="2" auto-grow variant="outlined" dense
          rows="3"></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import {useaddressStore} from '../stores/addressStore.js'
 const store=useaddressStore()
const streetInput = computed({
  get:()=>store.address.street,
  set:(value)=>store.updateStreet(value), 
});
const houseNrInput = computed({
  get:()=>store.address.houseNr,
  set:(value)=>store.  updateHouseNr(value)
})
const zipCodeInput = computed({
  get:()=>store.address.zipCode,
  
  set:(value)=> store.updateZipCode(value),
  
})
const cityInput = computed({
  get:() => store.address.city,

  set:(value)=>
    store.updateCity( value),

});
const moreInformationInput = computed({
  get:() => store.address.moreInformation,

  set:(value) =>store.updateMoreInformation(value),

});
</script>
