import { defineStore } from 'pinia';
export const useusageStore=defineStore('usageStore',{

  state:() => ({ usage: [] }),
  actions: {
   updateUsages( value) {
    this.usage = value;
   },
 },
 getters:{
  getUsage() {
    return this.usage;
  },
},
persist: true,
});