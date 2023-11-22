<template>
  <v-row justify="start">
    <v-col cols="8" md="5">
      <v-text-field outlined dense flat v-model="amount" label="Price" color="success">
      </v-text-field>
    </v-col>

    <v-col cols="4" md="3">
      <v-Select color="success" item-color="success" v-model="currency" 
      :items="currencies" label="Currency" dense 
       varaint=" outlined">
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

