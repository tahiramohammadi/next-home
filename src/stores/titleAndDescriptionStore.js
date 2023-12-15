import { defineStore } from 'pinia';
export const usetitleAndDescriptionStore=defineStore('titleAndDescriptionStore',{

state:() => ({
  title: '',
  description: '',
}),

actions: {
  updateTitle( value) {
    this.title = value;
  },
  updateDescription( value) {
    this.description = value;
  },
},
getters:{
 getTitleAndDesc(){
   return this.title, this.description
},
},
});