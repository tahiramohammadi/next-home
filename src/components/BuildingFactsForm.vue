<template>
  <div>
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-select v-model="furnished" :items="furnishments" label="Furnishment" dense color="success" item-color="success"
          :menu-props="{ offsetY: true }" outlined>
        </v-select>
      </v-col>
    </v-row>
    <v-row v-if="propertyType != 'Shop'" justify="start">
      <v-col cols="12" md="5">
        <v-text-field outlined dense flat v-model="numberOfRooms" label="Number of Rooms " color="success">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="start" v-if="propertyType === 'House'">
      <v-col cols="12" md="5">
        <v-text-field outlined dense flat v-model="numberofFloors" label="Number of floors" color="success">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="start" v-if="propertyType != 'House'">
      <v-col cols="12" md="5">
        <v-text-field outlined dense flat v-model="floorNumber" label="Floor Number" color="success">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-subheader> Avilable dates </v-subheader>
    </v-row>
    <v-divider> </v-divider>


    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-menu v-model="availableFromMenu" :close-on-content-click="false" :offset-y="true" max-width="280px"
          min-width="280px">
          <template v-slot:activator="{ on}">
            <v-text-field label="Avilable from" v-model="availableFrom" type="date" :value="availableFromDisp" v-on="on"  color="green lighten-1">
            </v-text-field>
          </template>
        </v-menu>
      </v-col>
    </v-row>

    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-menu :offset-y="true" v-model="availableToMenu" :close-on-content-click="false" max-width="280px"
          min-width="280px">
          <template v-slot:activator="{ on}">
            <v-text-field label="Avilable to" type="date" v-model="availableTo" :value="availableToDisp" v-on="on"  color="success">
            </v-text-field>
          </template>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const furnishments = ref(['fully furnished', 'partly furnished', 'Not furnished']);
const availableFromMenu = ref(false)
const availableToMenu = ref(false)

const propertyType = computed(() => store.state.rubricModule.propertyType);
const availableFromDisp = computed(() => store.state.buildingFactsModule.availableFrom);
const availableToDisp = computed(() => store.state.buildingFactsModule.availableTo);

const furnished = computed({
  get() {
    return store.state.buildingFactsModule.furnished;
  },
  set(val) {
    store.commit('buildingFactsModule/updateFurnished', val);
  }
});
const numberOfRooms = computed({
  get() {
    return store.state.buildingFactsModule.numberOfRooms;
  },
  set(val) {
    store.commit('buildingFactsModule/updateNumberOfRooms', val);
  }
});
const numberofFloors = computed({
  get() {
    return store.state.buildingFactsModule.numberofFloors;
  },
  set(val) {
    store.commit('buildingFactsModule/updateNumberOfFloors', val);
  }
});
const floorNumber = computed({
  get() {
    return store.state.buildingFactsModule.floorNumber;
  },
  set(val) {
    store.commit('buildingFactsModule/updateFloorNumber', val);
  }
});
const availableFrom = computed({
  get() {
    return store.state.buildingFactsModule.availableFrom;
  },
  set(val) {
    store.commit('buildingFactsModule/updateAvailableFrom', val);
  }
});

const availableTo = computed({
  get() {
    return store.state.buildingFactsModule.availableTo;
  },
  set(val) {
    store.commit('buildingFactsModule/updateAvailableTo', val);
  }
});


</script>

