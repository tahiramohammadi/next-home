<template>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="12" md="3">
        <v-text-field dense flat v-model="title" label="Title" color="success" outlined>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center"> <v-subheader > Key facts </v-subheader></v-row>
    <v-divider> </v-divider>
    

    <SizeForm
      v-if="
        propertyType === 'Apartment' ||
        propertyType === 'Shop' ||
        propertyType === 'House'
      "
    >
    </SizeForm>
    <plotSizeForm v-if="propertyType === 'Plot' || propertyType === 'House'">
    </plotSizeForm>
    <PriceForm> </PriceForm>
    <UsageForm> </UsageForm> 
    <buildingFactsForm v-if="propertyType != 'Plot'"> </buildingFactsForm>
    <v-row justify="center"> 
      <v-subheader > Object description </v-subheader>
    </v-row>
    <v-divider> </v-divider>
    
    <v-row justify="start">
      <v-col cols="12" md="10">
        <v-textarea
          dense
          flat
          v-model="description"
          label="Description"
          color="success"
          aria-multiline="8"
          outlined
          placeholder="Describe the propertty. provide more detail about property, its location and etc... "
        >
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

import { useStore } from 'vuex';
import {computed } from 'vue'
const store=useStore()
   
const propertyType = computed(() => store.state.rubricModule.propertyType);

    const title=computed({
     get(){
       return store.state.titleAndDescriptionModule.title
     },
     set(value){
        store.commit('titleAndDescriptionModule/updateTitle', value)
     } 
    })
  const description=computed({
 
   get(){
     return store.state.titleAndDescriptionModule.description
   },
   set(value){
     store.commit('titleAndDescriptionModule/updateDescription', value)
   }
  })
  
</script>    
<!-- <script>
import SizeForm from '../components/SizeForm.vue';
 import plotSizeForm from '../components/PlotSizeForm.vue';
import PriceForm from '../components/PriceForm.vue';
// import UsageForm from '../components/UsageForm.vue';
import buildingFactsForm from '../components/BuildingFactsForm.vue';

import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      propertyType: (state) => {
        return state.rubricModule.propertyType;
      },
    }),
    title: {
      get() {
        return this.$store.state.titleAndDescriptionModule.title;
      },
      set(value) {
        this.$store.commit('titleAndDescriptionModule/updateTitle', value);
      },
    },
    description: {
      get() {
        return this.$store.state.titleAndDescriptionModule.description;
      },
      set(value) {
        this.$store.commit(
          'titleAndDescriptionModule/updateDescription',
          value
        );
      },
    },
  },

  components: {
     SizeForm,
     plotSizeForm,
     PriceForm,
    // UsageForm,
    buildingFactsForm,
  },
};
</script>  -->

<style scoped>
.subHeader {
  align-content: center;
}
</style>
