<template>
  <v-row justify="start">
    <v-col cols="8" md="5">
      <v-text-field
        outlined
        color="success"
        dense
        flat
        v-model="value"
        label="Plot size"
      >
      </v-text-field>
    </v-col>
    <v-col cols="4" md="3">
      <v-select
      outlined
        v-model="unit"
        :items="sizeUnits"
        label="Unit"
        dense
        color="success"
        item-color="success"
       
        offset-y
      >
      </v-select>
    </v-col>
  </v-row>
</template>
<script>
//import sizeModule from '../store/modules/forms/size';
export default {
  /*
  created: function () {
    if (!this.$store.state.plotSizeModule) {
      this.$store.registerModule('plotSizeModule', sizeModule);
    }
  },
  */
  data() {
    return {
      sizeUnits: ['\u33A1', '\u33A2', 'Biswa', 'Biswasa', 'Girib'],
    };
  },
  computed: {
    value: {
      get() {
        return this.$store.state.plotSizeModule.size.value;
      },
      set(val) {
        this.$store.commit('plotSizeModule/updateValue', val);
      },
    },

    unit: {
      get() {
        return this.$store.state.plotSizeModule.size.unit;
      },
      set(val) {
        this.$store.commit('plotSizeModule/updateUnit', val);
      },
    },
  },
};
</script>
