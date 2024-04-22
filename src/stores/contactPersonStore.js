import { defineStore } from 'pinia';
export const usecontactPersonStore=defineStore({
  id:'contactPerson',
  state: () => ({
    name:'',
    email: '',
    phoneNumber: '',
    moreInformation: '',
  }),
  actions: {
    updateName( name) {
      this.name = name;
    },
    updateEmail( email) {
      this.email = email;
    },
    updatePhoneNumber(phoneNumber) {
      this.phoneNumber =phoneNumber;
    },
    updateMoreInformation( info) {
      this.moreInformation = info;
    },
  },
  getters:{
    getContactPerson(){
      return{
       name: this.name,
     email: this.email,
     phoneNumber: this.phoneNumber,
     moreInformation: this.moreInformation
      }
  
    
    }
   },
   persist:true,
});