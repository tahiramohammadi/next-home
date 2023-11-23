<template>
  <div>
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-select v-model="furnished" :items="furnishments" label="Furnishment" dense color="success" item-color="success"
          :menu-props="{ offsetY: true }" variant="outlined">
        </v-select>
      </v-col>
    </v-row>
    <v-row v-if="propertyType != 'Shop'" justify="start">
      <v-col cols="12" md="5">
        <v-text-field variant="outlined" dense flat v-model="numberOfRooms" label="Number of Rooms " color="success">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="start" v-if="propertyType === 'House'">
      <v-col cols="12" md="5">
        <v-text-field variant="outlined" dense flat v-model="numberofFloors" label="Number of floors" color="success">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="start" v-if="propertyType != 'House'">
      <v-col cols="12" md="5">
        <v-text-field variant="outlined" dense flat v-model="floorNumber" label="Floor Number" color="success">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
   Avilable dates 
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
import { usebuildingFactsStore } from '../stores/buildingFactsStore.js';
import { userubricStore } from '../stores/rubricStore.js';
const store = usebuildingFactsStore()
const rubricStore=userubricStore()
const furnishments = ref(['fully furnished', 'partly furnished', 'Not furnished']);
const availableFromMenu = ref(false)
const availableToMenu = ref(false)

const propertyType = computed(() => rubricStore.propertyType);
const availableFromDisp = computed(() => store.availableFrom);
const availableToDisp = computed(() => store.availableTo);

const furnished = computed({
  get:() =>
     store.furnished,

  set:(val) =>
    store.updateFurnished(val),
  
});
const numberOfRooms = computed({
  get:()=>
       store.numberOfRooms,
  
  set:(val)=>
    store.updateNumberOfRooms(val)

});
const numberofFloors = computed({
  get:() =>
   store.numberOfFloors,

  set:(val) =>
    store.updateNumberOfFloors(val),

});
const floorNumber = computed({
  get:() =>store.floorNumber,

  set:(val) =>
    store.updateFloorNumber(val),

});
const availableFrom = computed({
  get:() =>
  store.availableFrom,

  set:(val)=>
    store.updateAvailableFrom(val),

});

const availableTo = computed({
  get:() =>
 store.availableTo,
  
  set:(val) =>
    store.updateAvailableTo( val),
  
});
</script>

