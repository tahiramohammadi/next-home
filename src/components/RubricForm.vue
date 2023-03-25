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
              <v-radio
                v-for="propertyType in propertyTypes"
                :key="propertyType"
                :label="propertyType"
                :value="propertyType"
                dense
                color="success"
              >
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
              <v-radio
                v-for="target in targets"
                :key="target"
                :label="target"
                :value="target"
                dense
                color="success"
              >
              </v-radio>
            </v-radio-group>
          </v-card-actions>
        </v-card> 
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import rubricModule from '../store/modules/forms/rubric';
export default {
  /*
  created: function () {
    if (!this.$store.state.rubricModule) {
      this.$store.registerModule('rubricModule', rubricModule);
    }
  },
  */

  data() {
    return {
      propertyTypes: ['Apartment', 'House', 'Shop', 'Plot'],
      targets: ['Sell', 'Rent', 'Gage'],
    };
  },
  computed: {
    propertyTypeVuex: {
      get() {
        return this.$store.state.rubricModule.propertyType;
      },
      set(val) {
        this.$store.commit('rubricModule/updatePropertyType', val);
      },
    },
    targetVuex: {
      get() {
        return this.$store.state.rubricModule.target;
      },
      set(val) {
        this.$store.commit('rubricModule/updateTarget', val);
      },
    },
  },
};
</script>
