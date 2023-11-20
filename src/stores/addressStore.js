import { defineStore } from 'pinia';
export const useaddressStore=defineStore({
id:'address',
   state:() => ({
    address: {
      street: "mytreet",
      houseNr: 7,
      zipCode: "my zip",
      city: null,
      moreInformation: null,
      hello: ""
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
  updateMoreInformation( moreInformation) {
    this.address.moreInformation = moreInformation;
  },
}
});