<template>
  <v-container fluid>
    <v-spacer> </v-spacer>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card flat variant="outlined" shaped="">
          <v-card-title>
            Type of the property
          </v-card-title>
          <v-card-actions>
            <v-radio-group v-model="propertyType">
              <v-radio v-for="propertyType in propertyTypes" :key="propertyType" :label="propertyType"
                :value="propertyType" dense color="success">
              </v-radio>
            </v-radio-group>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card flat variant="outlined" shaped>
          <v-card-title>
            Your target
          </v-card-title>
          <v-card-actions>
            <v-radio-group v-model="target">
              <v-radio v-for="target in targets" :key="target" :label="target" :value="target" dense color="success">
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
    const propertyType = computed({
      get: () => store.propertyType,
      set: (val) => store.updatePropertyType(val),

    });
    const target = computed({
      get: () => store.target,
      set: (val) => store.updateTarget(val),
    });

    return {
      propertyTypes,
      targets,
      propertyType,
      target
    }
  }
}



</script>
