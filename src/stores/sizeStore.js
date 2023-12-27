import { defineStore } from 'pinia';
export const usesizeStore=defineStore('sizeStore',{

  state:() => ({
    size: {
       value: '',
       unit: null
       },
  }),
  
   actions:{
    updateValue(value) {
      this.size.value = value;
    },
  
    updateUnit( unit) {
      this.size.unit = unit;
    },
  }, 
  getters:{
    getSize(){
      return{
         value:this.size.value,
         unit: this.size.unit
      }
    }
   }, 
   persist: true,
});