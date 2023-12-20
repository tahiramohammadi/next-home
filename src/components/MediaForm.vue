<template>

    <v-container fluid>
      <v-row justify="center">
        <v-col md="6" sm="6" xs="6"></v-col>
        <v-col md="1" sm="1" xs="1">
          <v-file-input
            prepend-icon="mdi-camera"
            variant="plain"
            class="nodisplay"
            success
            name="file"
          accept="image/*"
            v-model="submitFile"
            @change="handleFileSelect"
          ></v-file-input>
        </v-col>
        <v-col md="5" sm="5" xs="5"> </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-row  justify="center">
      <template   v-if="photos.length > 0">
          <v-col  v-for="(pic, i) in photos"  :key="i" cols="12" md="5">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="pic" v-if="src" aspect-ratio="1" class="grey lighten-2">
                  <v-row
                    class="fill-height flex-column"
                    justify="end"
                    align="center"
                  >
                    <v-card-title class="title white--text">
                      <div class="align-self-center">
                        <v-btn
                          :class="{ 'show-btns': hover }"
                          color="transparent"
                          icon
                          variant="outlined"
                          @click="deletePhoto(i)"
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            color="red"
                          >
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-card-title>
                  </v-row>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
      <button @click="postPhotos()">Submit</button>

    </v-container>
</template>

<script>
import { ref } from 'vue';
import Axios from 'axios';
import { usephotosStore } from '../stores/photosStore';

export default {
  setup() {
    const transparent = 'rgba(255, 255, 255, 0)';
    const nodisplay = { display: 'none' };
    const photos = ref([]);
    const submitFile = ref(null);
    const formDatas = ref([]);
    const store = usephotosStore();
    const src = ref([]);


     //select photos....
    const handleFileSelect = e => {
      const submitFile = e.target.files[0];
      displayImage(submitFile);
      console.log(submitFile);
    };
     
      //display photos for preview....
    const displayImage = submitFile => {
      const reader = new FileReader();
      reader.onload = e => {
        photos.value.push(e.target.result);
      };
      if (submitFile) {
        reader.readAsDataURL(submitFile);
      }
    };

        
    const deletePhoto = i => {
      photos.value.splice(i, 1);
    };


    const postPhotos = () => {
      const path = '/photos';
      let promises = [];
      photos.value.forEach(() => {
        promises.push(Axios.post(path, { summary: '' }));
      });

      Promise.all(promises)
        .then(
          Axios.spread((...responses) => {
            responses.forEach(r => {
              let uri = r.data._links.self.href;
              store.updatePhotoLinks(uri);
              console.log('uri', uri);
            });

            let contentPromises = [];
            let photoLinks = store.photoLinks;
            photos.value.forEach((displayImage, i) => {
              let promise = Axios.put(photoLinks[i], displayImage, {
                headers: {
                  'Content-Type': 'image/jpeg'
                }
              });
              contentPromises.push(promise);
            });

            Promise.all(contentPromises)
              .then(results => {})
              .catch(error => {
                console.error('Error during PUT requests:', error);
              });
          })
        )
        .catch(error => {
          console.error('Error in Promise.all:', error);
        });
    };

    return {
      transparent,
      nodisplay,
      photos,
      formDatas,
      store,
      handleFileSelect,
      submitFile,
      deletePhoto,
      postPhotos,
      src
    };
  }
};
</script>
<style scoped>
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.upload-caption {
  margin-inline-start: 0rem;
}
.figureUpload {
  margin-inline-start: 1.3rem;
}
.show-btns {
  color: red !important;
}
</style>
