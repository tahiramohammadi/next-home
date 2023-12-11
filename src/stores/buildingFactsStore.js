import { defineStore } from 'pinia';
export const usebuildingFactsStore=defineStore('buildingFactsStore', {

   state: () => ({   
    furnished: '',
    numberOfRooms: '',
    numberOfFloors: '',
    floorNumber: '',
    availableFrom: '',
    availableTo: '',
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
  getters:{
    getBuilding(state){
      return{
        furnished:state.furnished,
        numberOfRooms:state.numberOfRooms,
        numberOfFloors: state.numberOfFloors,
        floorNumber: state.floorNumber,
        availableFrom: state.availableFrom,
        availableTo: state.availableTo,
      }
    }
   },
});
