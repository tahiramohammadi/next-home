import { defineStore } from 'pinia';
export const useaddressStore=defineStore({
id:'address',
   state:() => ({
    address: {
      street:null,
      houseNr:null,
      zipCode: null,
      city: null,
      moreInformation: null,
  
    },
  }),
  
actions:{
  updateStreet(street) {
    this.address.street = street;
  },
  updateHouseNr(houseNr) {
    this.address.houseNr = houseNr;
  },
  updateZipCode( zipCode) {
    this.address.zipCode = zipCode;
  },
  updateCity( city) {
    this.address.city = city;
  },
  updateMoreInformation( info) {
    this.address.moreInformation = info;
  },
},
getters:{
  getAddress(state){
    return{
      street:state.address.street,
      houseNr:state.address.houseNr,
      zipCode: state.address.zipCode,
      city: state.address.city,
      moreInformation: state.address.moreInformation,
    }
  }
 },
});