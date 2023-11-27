import { defineStore } from 'pinia';
export const usephotosStore=defineStore('photosStore',{

  state: () => ({
    photoLinks: [],
  }),
   actions:{
        selectImage(photo){
          this.photoLinks=photo
        },
    updatePhotoLinks(value) {
   this.photoLinks.push(value);
    },
    deletePhotoLink(i){
      this.photoLinks.splice(i, 1);
    }
  }
});