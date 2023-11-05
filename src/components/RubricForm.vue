<template>
  <v-container fluid>
    <v-spacer> </v-spacer>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card flat outlined shaped="">
          <v-card-title>
            Type of the property
          </v-card-title>
          <v-card-actions>
            <v-radio-group v-model="propertyTypeVuex">
              <v-radio v-for="propertyType in propertyTypes" :key="propertyType" :label="propertyType"
                :value="propertyType" dense color="success">
              </v-radio>
            </v-radio-group>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card flat outlined shaped>
          <v-card-title>
            Your target
          </v-card-title>
          <v-card-actions>
            <v-radio-group v-model="targetVuex">
              <v-radio v-for="target in targets" :key="target" :label="target" :value="target" dense color="success">
              </v-radio>
            </v-radio-group>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
const store = useStore()
const propertyTypes = ref(['Apartment', 'House', 'Shop', 'Plot']);
const targets = ref(['Sell', 'Rent', 'Gage'])


const propertyTypeVuex = computed({
  get() {
    return store.state.rubricModule.propertyType
  },
  set(val) {
    store.commit('rubricModule/updatePropertyType', val)
  }
})
const targetVuex = computed({
  get() {
    return store.state.rubricModule.target;
  },
  set(val) {
    store.commit('rubricModule/updateTarget', val)
  }
})

</script>
