import { defineStore } from 'pinia';
export const usesizeStore=defineStore('sizeStore',{

  state:() => ({
    size: { value: null, unit: null },
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
    getSize(state){
      return{
        value:state.size.value,
        unit:state.size.unit,
      }
    }
   }, 
});