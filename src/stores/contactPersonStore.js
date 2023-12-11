import { defineStore } from 'pinia';
export const usecontactPersonStore=defineStore({
  id:'contactPerson',
  state: () => ({
    name:'',
    email: '',
    phoneNumber: '',
    moreInformaion: '',
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
      this.moreInformaion = info;
    },
  },
  getters:{
    getContactPerson(state){
      return{
        name:state.name,
        email:state.email,
        phoneNumber:state.phoneNumber,
        moreInformaion:state.moreInformaion,
      }
    }
   },

});