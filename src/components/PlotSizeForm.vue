<template>
  <v-row justify="start">
    <v-col cols="8" md="5">
      <v-text-field variant="outlined" color="success" dense flat v-model="value" label="Plot size">
      </v-text-field>
    </v-col>
    <v-col cols="4" md="3">
      <v-select variant="outlined" v-model="unit" :items="sizeUnits" label="Unit" dense color="success" item-color="success"
        offset-y>
      </v-select>
    </v-col>
  </v-row>
</template>
<script setup>
import { usesizeStore } from '../stores/sizeStore.js';
const store = usesizeStore()
import { computed, ref } from 'vue'
const sizeUnits = ref(['\u33A1', '\u33A2', 'Biswa', 'Biswasa', 'Girib'])

const value = computed({
  get:()=>
   store.size.value,
  
  set:(val)=>
    store.updateValue( val)

})
const unit = computed({
  get:()=>
  store.size.unit,
  
  set:(val)=>
    store.updateUnit( val)
  
})

</script>

