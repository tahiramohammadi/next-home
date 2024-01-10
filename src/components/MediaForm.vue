<template>

    <v-container fluid>
      <v-row justify="start">
         <v-divider></v-divider>
            <h4>File Upload</h4>
            </v-row>
      <v-row justify="center">
        <v-col md="6" sm="6" xs="6">
        </v-col>
        <v-col md="1" sm="1" xs="1">
           
          <v-file-input
            prepend-icon="mdi-camera"
            success
            variant="plain"
          accept="image/*"
            @change="handleFileSelect"
            v-model="submitFile"
          
          >
              <template v-slot:selection="{ fileNames }">

        <v-chip :key="fileName" v-for="fileName in fileNames"
          size="small"
          label
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </v-chip>
    </template>

          
          </v-file-input>
             
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
                <v-img :src="pic" v-show="pic"  aspect-ratio="1" class="grey lighten-2">
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
    </v-container>
</template>

<script setup>
import { ref, computed} from 'vue';
import Axios from 'axios';
import { usephotosStore } from '../stores/photosStore';

    const transparent = 'rgba(255, 255, 255, 0)';
    const store = usephotosStore();
    const submitFile = ref(null);
    const photos = computed(() => store.images);

    //select photos....
    const handleFileSelect = e => {
      const submitFile = e.target.files[0];
      if (submitFile) {
        const reader = new FileReader();
        reader.onload = e => {
          const image = e.target.result;
          store.updateImage(image);
        };
        reader.readAsDataURL(submitFile);
      }

      console.log(submitFile);
    };

    const deletePhoto = i => {
      store.removeImage(i);
    };

  //  const props=defineProps({
  //    postPhotos: {
  //     type: Function,
  //   default:()=>{}
  //   },
  //  });

 

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
            let link = store.photoLinks;

            photos.value.forEach((handleFileSelect, i) => {
              let promise = Axios.put(link[i], handleFileSelect, {
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
