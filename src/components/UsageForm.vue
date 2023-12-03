<template>
  <div>
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-select v-model="usagesToStore" :items="usages" multiple label="Recomended usage" dense  color="#1DE9B6"
         chips variant="outlined" :menu-props="{ offsetY: true }">
        </v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { userubricStore} from '../stores/rubricStore.js'
import { useusageStore } from '../stores/usageStore.js';
import { computed, ref } from 'vue';
const store = useusageStore()
const rubricStore=userubricStore()
const buildingUsages = ref(['For living', 'For business'])
const plotUsages = ref(['Construction of living buildings',
  'Construction of business buildings',
  'Agriculture',
  'Sport fields',
  'Other uses'])

const propertyType = computed(() => rubricStore.propertyType);

const usages = computed(() => {
  if (propertyType === 'plot') {
    return plotUsages.value;
  }
  return buildingUsages.value;

});
const usagesToStore = computed({
  get:() => store.usages,

  set:(val)=>
    store.updateUsages( val)
  
})
</script>
