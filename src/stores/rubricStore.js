 import { defineStore } from 'pinia';
export const userubricStore=defineStore('rubricStore',{
  state: () => ({
     target: '', 
     propertyType:null, 
     propertyHref: null}),
  
  actions:{
   updateTarget( value) {
     this.target = value;
   },
   updatePropertyType( value) {
     this.propertyType = value;
   },
   updatePropertyHref( value) {
     this.propertyHref = value;
   },
 },
 getters:{
  getTarget(){
    return this.target
    
  },
  getRubric(){
    return{
      propertyType:this.propertyType,
      propertyHref:this.propertyHref
    }
  }
 },
});