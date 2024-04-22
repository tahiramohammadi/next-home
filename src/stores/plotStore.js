import { defineStore } from 'pinia';

export const useplotStore=defineStore('plotStore',{

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
      getplot(){
        return{
           value:this.size.value,
           unit: this.size.unit
        }
      }
     },
     persist:true,
  });