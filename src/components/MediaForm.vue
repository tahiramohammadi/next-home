<template>
    <v-container fluid>
      <v-row justify="center">
        <v-col md="6" sm="6" xs="6"> </v-col>
        <v-col md="1" sm="1" xs="1">
          <v-file-input
            prepend-icon="mdi-camera"
            
            success
            v-model="submitFile"
          ></v-file-input>
        </v-col>
        <v-col md="5" sm="5" xs="5"> </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-row  justify="center">
      <template v-for="(pic, i) in photos">
          <v-col  v-if="photos.length > 0"  :key="i"  cols="12" md="5">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="pic" aspect-ratio="1" class="grey lighten-2">
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
                          outlined
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
      <v-btn @click="getPhoto"> get Photo</v-btn>

      <v-img
        v-if="imsrc != null"
        v-bind:src="'data:image/jpeg;base64,' + imsrc"
        alt=""
        aspect-ratio="1"
        class="grey lighten-2"
      >
        >
      </v-img>

      <button v-on:click="postPhotos()">Submit</button>
    </v-container>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      transparent: 'rgba(255, 255, 255, 0)',
      nodisplay: { display: 'none' },
      imsrc: null,
      photo: null,
      photos: [],
      formDatas: [],
    };
  },

  computed: {
    
    submitFile: { 
      set(photo) {
        let imsrc = URL.createObjectURL(new Blob(photo));
        this.photos.unshift(imsrc);
        let formData = new FormData();
        formData.append('file', photo);
        this.formDatas.unshift(formData);
      
      },
    
    },
    
  },

  methods: {
    getPhoto() {
      Axios.get('photos/1', {
        responseType: 'arraybuffer',
        headers: { accept: 'image/*' },
      }).then((r) => {
      
        this.imsrc = Buffer.from(r.data, 'binary').toString('base64');
      
        console.log(this.imsrc);
      });
    },

    deletePhoto(i) {
      this.photos.splice(i, 1);
      this.formDatas.splice(i, 1);
    },

    

    postPhotos() {
      const path = '/photos';
      let store = this.$store;
      let formDatas = this.formDatas;
      let contentPromises = [];
      let photoLinks = this.$store.state.photosModule.photoLinks;
      let promises = [];
      formDatas.forEach(function () {
        promises.push(Axios.post(path, { summary: '' }));
      });

      Promise.all(promises)
        .then(
          Axios.spread((...responses) => {
            responses.forEach(function (r) {
              let uri = r.data._links.self.href;
              store.commit('photosModule/updatePhotoLinks', uri);
            
            });
            formDatas.forEach(function (fData, i) {
              let promise = Axios.put(photoLinks[i], fData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              contentPromises.push(promise);
              
            });
            Promise.all(contentPromises);
          })
        )

        .catch((err) => {
          if (err.response) {
            console.log(err.response);
          } else if (err.request) {
            console.log(err.message);
          } else {
            console.log(err);
          }
        });
     
    },
  },
  components: {},
};
</script>
<style scoped>
  #fileInput {
  display: none;
}
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
