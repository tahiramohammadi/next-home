<template>
  <div>
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-select
          v-model="furnished"
          :items="furnishments"
          label="Furnishment"
          dense
          color="success"
          item-color="success"
          :menu-props="{ offsetY: true }"
          outlined
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row v-if="propertyType != 'Shop'" justify="start">
      <v-col cols="12" md="5">
        <v-text-field
          outlined
          dense
          flat
          v-model="numberOfRooms"
          label="Number of Rooms "
          color="success"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="start" v-if="propertyType === 'House'" >
      <v-col  cols="12" md="5">
        <v-text-field
          outlined
          dense
          flat
          v-model="numberofFloors"
          label="Number of floors"
          color="success"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="start"  v-if="propertyType != 'House'" >
      <v-col cols="12" md="5">
        <v-text-field
         
          outlined
          dense
          flat
          v-model="floorNumber"
          label="Floor Number"
          color="success"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center"> 
      <v-subheader> Avilable dates </v-subheader>
    </v-row>
    <v-divider> </v-divider>
    
    
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-menu
          v-model="availableFromMenu"
          :close-on-content-click="false"
          :offset-y="true"
          max-width="280px"
          min-width="280px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              label="Avilable from"
              readonly
              :value="availableFromDisp"
              v-on="on"
              color="green lighten-1"
            >
            </v-text-field>
          </template>
          <v-date-picker no-title v-model="availableFrom" color="success">
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-menu
          :offset-y="true"
          v-model="availableToMenu"
          :close-on-content-click="false"
          max-width="280px"
          min-width="280px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              label="Avilable to"
              readonly
              :value="availableToDisp"
              v-on="on"
              color="success"
            >
            </v-text-field>
          </template>
          <v-date-picker no-title v-model="availableTo" color="green lighten-1">
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      furnishments: ['Fully furnished', 'Partly furnished', 'Not furnished'],
      availableFromMenu: false,
      availableToMenu: false,
    };
  },
  computed: {
    ...mapState({
      propertyType: (state) => {
        return state.rubricModule.propertyType;
      },
      availableFromDisp: (state) => {
        return state.buildingFactsModule.availableFrom;
      },
      availableToDisp: (state) => {
        return state.buildingFactsModule.availableTo;
      },
    }),
    furnished: {
      get() {
        return this.$store.state.buildingFactsModule.furnished;
      },
      set(val) {
        this.$store.commit('buildingFactsModule/updateFurnished', val);
      },
    },
    numberOfRooms: {
      get() {
        return this.$store.state.buildingFactsModule.numberOfRooms;
      },
      set(val) {
        this.$store.commit('buildingFactsModule/updateNumberOfRooms', val);
      },
    },
    numberofFloors: {
      get() {
        return this.$store.state.buildingFactsModule.numberofFloors;
      },
      set(val) {
        this.$store.commit('buildingFactsModule/updateNumberOfFloors', val);
      },
    },
    floorNumber: {
      get() {
        return this.$store.state.buildingFactsModule.floorNumber;
      },
      set(val) {
        this.$store.commit('buildingFactsModule/updateFloorNumber', val);
      },
    },
    availableFrom: {
      get() {
        return this.$store.state.buildingFactsModule.availableFrom;
      },
      set(val) {
        this.$store.commit('buildingFactsModule/updateAvailableFrom', val);
      },
    },
    availableTo: {
      get() {
        return this.$store.state.buildingFactsModule.availableTo;
      },
      set(val) {
        this.$store.commit('buildingFactsModule/updateAvailableTo', val);
      },
    },
  },
};
</script>
