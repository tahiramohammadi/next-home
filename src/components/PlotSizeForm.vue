<template>
  <v-row justify="center">
    <v-col cols="8" md="6">
      <v-text-field variant="outlined" color="#1DE9B6" dense flat v-model="value" label="Plot size">
      </v-text-field>
    </v-col>
    <v-col cols="4" md="4">
      <v-select variant="outlined" v-model="unit" :items="sizeUnits" label="Unit" dense color="#1DE9B6" item-color="success"
        offset-y>
      </v-select>
    </v-col>
  </v-row>
</template>
<script setup>
import {  useplotStore } from '../stores/plotStore.js';
const store =useplotStore()
import { computed, ref } from 'vue'
const sizeUnits = ref(['\u33A1', '\u33A2', 'Biswa', 'Biswasa', 'Girib'])

const value = computed({
  get:()=>
   store.size.value,
  
  set:(value)=>
    store.updateValue( value)

})
const unit = computed({
  get:()=>  store.size.unit,
  
  set:(value)=> store.updateUnit( value)
  
})

</script>

