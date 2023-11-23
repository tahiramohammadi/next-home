import { defineStore } from 'pinia';
export const useUserStore=defineStore({
  id:'user',
  state: () => ({
    name: null,
    email: null,
    password:null,
    phoneNumber: null,
   
  }),
  actions: {
    updateName( name) {
      this.name = name;
    },
    updateEmail( email) {
      this.email = email;
    },
    updatePassword(password) {
      this.password = password;
    },
    updatePhoneN(nr) {
      this.phone=nr ;
    },
  }

});