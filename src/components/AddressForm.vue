<template>
  <v-container fluid>
    <v-row justify="center" dense="">
      <v-col cols="12" md="5">
        <v-text-field dense outlined v-model="streetInput" label="Street"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field dense v-model="houseNrInput" label="House number" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row dense justify="center">
      <v-col cols="12" md="3">
        <v-text-field dense v-model="zipCodeInput" label="Zip code" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="5">
        <v-text-field dense v-model="cityInput" label="City" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row dense justify="center">
      <v-col cols="12" md="8">
        <v-textarea v-model="moreInformationInput" label="More Information" aria-multiline="2" auto-grow outlined dense
          rows="3"></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {

  computed: {
    streetInput: {
      get() {
        return this.$store.state.addressModule.address.street;
      },
      set(value) {
        this.$store.commit('addressModule/updateStreet', value);
      },
    },

    houseNrInput: {
      get() {
        return this.$store.state.addressModule.address.houseNr;
      },
      set(value) {
        this.$store.commit('addressModule/updateHouseNr', value);
      },
    },

    zipCodeInput: {
      get() {
        return this.$store.state.addressModule.address.zipCode;
      },
      set(value) {
        this.$store.commit('addressModule/updateZipCode', value);
      },
    },
    cityInput: {
      get() {
        return this.$store.state.addressModule.address.city;
      },
      set(value) {
        this.$store.commit('addressModule/updateCity', value);
      },
    },
    moreInformationInput: {
      get() {
        return this.$store.state.addressModule.address.moreInformation;
      },
      set(value) {
        this.$store.commit('addressModule/updateMoreInformation', value);
      },
    },
  },
};
</script>
