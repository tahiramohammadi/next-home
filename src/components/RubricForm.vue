<template>
  <v-container fluid>
    <v-spacer> </v-spacer>
    <v-row class="justify-center">
      <v-col cols="5">
        <v-card flat>
          <v-card-title class="d-flex flex-row">
            Type of the property
          </v-card-title>
          <v-card-actions>
            <v-radio-group v-model="propertyType" inline>
              <v-radio v-for="(propertyType, i) in propertyTypes" :key="i" :label="propertyType"
                :value="propertyType" dense color="#1DE9B6">
              </v-radio>
            </v-radio-group>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card flat>
          <v-card-title class="d-flex flex-row">
            Your target
          </v-card-title>
          <v-card-actions>
            <v-radio-group v-model="target" inline>
              <v-radio v-for="(target, index) in targets" :key="index" :label="target" :value="target" dense color="#1DE9B6">
              </v-radio>
            </v-radio-group>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { userubricStore } from '../stores/rubricStore.js';
import { computed, ref } from 'vue';
export default {
  setup() {
    const store = userubricStore()
    const propertyTypes = ref(['Apartment', 'House', 'Shop', 'Plot']);
    const targets = ref(['Sell', 'Rent', 'Gage'])
       const target = computed({
      get: () => store.target,
      set: (value) => store.updateTarget(value),
    });
    const propertyType = computed({
      get: () => store.propertyType,
      set: ( value) => store.updatePropertyType( value),

    });
 

    return {
      propertyTypes,
         targets,
      target,
      propertyType,
   
    }
  }
}



</script>
