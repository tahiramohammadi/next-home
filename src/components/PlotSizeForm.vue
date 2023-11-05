<template>
  <v-row justify="start">
    <v-col cols="8" md="5">
      <v-text-field outlined color="success" dense flat v-model="value" label="Plot size">
      </v-text-field>
    </v-col>
    <v-col cols="4" md="3">
      <v-select outlined v-model="unit" :items="sizeUnits" label="Unit" dense color="success" item-color="success"
        offset-y>
      </v-select>
    </v-col>
  </v-row>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore()
import { computed, ref } from 'vue'
const sizeUnits = ref(['\u33A1', '\u33A2', 'Biswa', 'Biswasa', 'Girib'])

const value = computed({
  get() {
    return store.state.plotSizeModule.size.value;
  },
  set(val) {
    store.commit('plotSizeModule/updateValue', val)
  }
})
const unit = computed({
  get() {
    return store.state.plotSizeModule.size.unit
  },
  set(val) {
    store.commit('plotSizeModule/updateUnit', val)
  }
})

</script>

