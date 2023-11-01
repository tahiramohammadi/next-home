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
import { useStore } from 'vuex';
import {ref, computed } from 'vue'
const store = useStore()
const currencies= ref(['AFN', 'USD', 'EUR']);

const amount = computed({
  get() {
    return store.state.priceModule.price.amount;
  },
  set(value) {
    store.commit('priceModule/updateAmount', value);
  }
})

const currency = computed({
  get() {
    return store.state.priceModule.currency;
  },
  set(value) {
    store.commit('priceModule/updateCurrency', value);
  }
})


</script>

<!-- <script>
export default {
  data() {
    return {
      currencies: ['AFN', 'USD', 'EUR'],
    };
  },

  computed: {
    amount: {
      get() {
        return this.$store.state.priceModule.price.amount;
      },
      set(value) {
        this.$store.commit('priceModule/updateAmount', value);
      },
    },
    currency: {
      get() {
        return this.$store.state.priceModule.price.currency;
      },
      set(value) {
        this.$store.commit('priceModule/updateCurrency', value);
      },
    },
  },
};
</script> -->
