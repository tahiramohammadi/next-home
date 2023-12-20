import { defineStore } from 'pinia';
export const usephotosStore=defineStore('photosStore',{

  state: () => ({
    photoLinks: [],
  }),
   actions:{
 
    updatePhotoLinks(value) {
   this.photoLinks.push(value);
    },


    deletePhotoLink(i){
      this.photoLinks.splice(i, 1);
    }
  },
  getters:{
    getPhoto(){
      return
      photoLinks:this.photoLinks
     
    } 
    
   },
});