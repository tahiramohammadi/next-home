<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6" md="3">
        <v-text-field dense flat v-model="title" label="Title" color="#1DE9B6" variant="outlined">
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <UsageForm > </UsageForm>
        </v-col>
    </v-row>
    <v-row class="d-flex flex-row">
   
     <h4 > Key facts</h4>
      <v-divider></v-divider>
 </v-row>
   
    <SizeForm v-if="propertyType === 'Apartment' ||
      propertyType === 'Shop' ||
      propertyType === 'House'
      ">
    </SizeForm>
    <plotSizeForm v-if="propertyType === 'Plot' || propertyType === 'House'">
    </plotSizeForm>
    <PriceForm></PriceForm>
    <buildingFactsForm v-if="propertyType != 'Plot'"> </buildingFactsForm>
   <v-row class="d-flex flex-row">
   
     <h4 >Description</h4>
      <v-divider></v-divider>
 </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-textarea dense flat v-model="description" label="Description" color="#1DE9B6" aria-multiline="8" variant="outlined"
          placeholder="Describe the propertty. provide more detail about property, its location and etc... ">
        </v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script setup>
import SizeForm from '../components/SizeForm.vue';
import plotSizeForm from '../components/PlotSizeForm.vue';
import PriceForm from '../components/PriceForm.vue';
import UsageForm from '../components/UsageForm.vue';
import buildingFactsForm from '../components/BuildingFactsForm.vue';
import { userubricStore } from '../stores/rubricStore.js';
import { usetitleAndDescriptionStore } from '../stores/titleAndDescriptionStore.js';
import { computed } from 'vue'
const titleAndDescriptionStore = usetitleAndDescriptionStore()
const rubricStore = userubricStore()
const propertyType = computed(() => rubricStore.propertyType);

const title = computed({
  get: () =>
    titleAndDescriptionStore.title,

  set: (value) =>
    titleAndDescriptionStore.updateTitle(value),

})
const description = computed({

  get: () => titleAndDescriptionStore.description,

  set: (value) =>
    titleAndDescriptionStore.updateDescription(value)

})


</script>    
<style scoped>
.subHeader {
  align-content: center;
}
</style>
