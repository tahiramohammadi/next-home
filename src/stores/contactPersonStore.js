import { defineStore } from 'pinia';
export const usecontactPersonStore=defineStore({
  id:'contactPerson',
  state: () => ({
    name: null,
    email: null,
    phoneNumber: null,
    moreInformaion: null,
  }),
  actions: {
    updateName( name) {
      this.name = name;
    },
    updateEmail( email) {
      this.email = email;
    },
    updatePhoneNumber( nr) {
      this.phoneNumber = nr;
    },
    updateMoreInformation( info) {
      this.moreInformaion = info;
    },
  }

});