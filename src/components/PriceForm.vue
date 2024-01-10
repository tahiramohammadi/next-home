<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-text-field variant="outlined" dense flat v-model="amount" label="Price" color="#1DE9B6">
      </v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-Select color="#1DE9B6" item-color="success" v-model="currency" 
      :items="currencies" label="Currency" dense 
       variant="outlined">
    </v-Select>
    </v-col>
  </v-row>
</template>

<script setup>
import { usepriceStore } from '../stores/priceStore.js';
import {ref, computed } from 'vue'

const store = usepriceStore()
const currencies= ref(['AFN', 'USD', 'EUR']);
const amount = computed({
  get:() =>
  store.price.amount,

  set:(value)=>store.updateAmount(value),
});

const currency = computed({
  get:()=>
    store.price.currency,
  set:(value)=>store.updateCurrency(value),
});


</script>

