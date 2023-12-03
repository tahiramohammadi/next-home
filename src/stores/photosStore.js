import { defineStore } from 'pinia';
export const usephotosStore=defineStore('photosStore',{

  state: () => ({
    photoLinks: [],
  }),
   actions:{
    // setImageUrl(photoLinks) {
    //   this.photoLinks = photoLinks;
    // },
    // getImageUrl() {
    //   return this.photoLinks;
    // },
    updatePhotoLinks(value) {
   this.photoLinks.push(value);
    },


    deletePhotoLink(i){
      this.photoLinks.splice(i, 1);
    }
  }
});