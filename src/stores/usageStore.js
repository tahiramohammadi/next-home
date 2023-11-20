import { defineStore } from 'pinia';
export const useusageStore=defineStore('usageStore',{

  state:() => ({ usages: [] }),
  actions: {
   updateUsages( value) {
    this.usages = value;
   },
 },
});