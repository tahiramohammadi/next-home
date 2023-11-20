import { defineStore } from 'pinia';
export const usetitleAndDescriptionStore=defineStore('titleAndDescriptionStore',{

state:() => ({
  title: null,
  description: null,
}),

actions: {
  updateTitle( value) {
    this.title = value;
  },
  updateDescription( value) {
    this.description = value;
  },
},

});