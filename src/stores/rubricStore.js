import { defineStore } from 'pinia';
export const userubricStore=defineStore('rubricStore',{
  state: () => ({ target: '', propertyType: '', propertyHref: null}),
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
});