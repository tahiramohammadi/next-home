import { defineStore } from 'pinia';
export const useusageStore=defineStore('usageStore',{

  state:() => ({ usages: [] }),
  actions: {
   updateUsages( value) {
    this.usages = value;
   },
 },
 getters:{
  getUsage(state) {
    return state.usages;
  },
},
});