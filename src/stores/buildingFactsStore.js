import { defineStore } from 'pinia';
export const usebuildingFactsStore=defineStore('buildingFactsStore', {

   state: () => ({   
    furnished: null,
    numberOfRooms: null,
    numberOfFloors: null,
    floorNumber: null,
    availableFrom: null,
    availableTo: null,
  }),


  actions:{
    updateFurnished(val) {
      this.furnished = val;
    },
    updateNumberOfRooms( val) {
      this.numberOfRooms = val;
    },
    updateNumberOfFloors(val) {
      this.numberOfFloors = val;
    },
    updateFloorNumber( val) {
      this.floorNumber = val;
    },
    updateAvailableFrom(val) {
      this.availableFrom = val;
    },
    updateAvailableTo(val) {
      this.availableTo = val;
    },
  },
});
