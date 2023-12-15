import {
  defineStore
} from 'pinia';
export const usebuildingFactsStore = defineStore('buildingFactsStore', {

  state: () => ({

    furnished: '',
    numberOfRooms: '',
    numberOfFloors: '',
    floorNumber: '',
    availableFrom: '',
    availableTo: '',
  }),


  actions: {
    updateFurnished(val) {
      this.furnished = val;
    },
    updateNumberOfRooms(val) {
      this.numberOfRooms = val;
    },
    updateNumberOfFloors(val) {
      this.numberOfFloors = val;
    },
    updateFloorNumber(val) {
      this.floorNumber = val;
    },
    updateAvailableFrom(val) {
      this.availableFrom = val;
    },
    updateAvailableTo(val) {
      this.availableTo = val;
    },
  },
  getters: {
  getfurnished() {
    return this.furnished


  },
  getNum() {
    return this.numberOfRooms



  },
  getFloor() {
    return this.numberOfFloors


  },
  getfloorNum() {
    return this.floorNumber



  },
  getAvailbleFrom() {
    return this.availableFrom


    
  },
  getAvailbleTo() {
    return  this.availableTo


  }
  },
});