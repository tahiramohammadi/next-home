import { defineStore } from 'pinia';
export const usephotosStore=defineStore('photosStore',{

  state: () => ({
    photoLinks: [],
    images:[],

  }),
   actions:{
      
    updateImage(value) {
      this.images.push(value);
       },
    updatePhotoLinks(value) {
   this.photoLinks.push(value);
    },
  

    removeImage(i) {
      this.images.splice(i, 1);
    },

    
  }, 
});