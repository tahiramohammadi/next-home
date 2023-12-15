import { defineStore } from 'pinia';
export const useaddressStore=defineStore({
id:'address',
   state:() => ({
    address: {
      street:null,
      houseNr:0,
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
  getAddress(){
    return{
      street:this.address.street,
      houseNr:this.address.houseNr,
      zipCode:this.address.zipCode,
      city:this.address.city,
      moreInformation: this.address.moreInformation,
    }
  }
 },
});