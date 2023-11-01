<template>
  <v-container fluid>
   
    <v-row justify="center">
      <v-col cols="12" md="3">
        <v-text-field dense flat v-model="title" label="Title" color="success">
        </v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-textarea
          dense
          flat
          v-model="description"
          label="Description"
          color="success"
          aria-multiline="8"
          outlined
        >
        </v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- <script setup>
import { useStore } from 'vuex';
const store=useStore()
       const title=computed({
        get(){
          return store.state.titleAndDescriptionModule.title
        },
        set(val){
              store.commit('titleAndDescriptionModule/updateTitle', value)
        }
       })

       const description=computed({
        get(){
          return store.state.titleAndDescriptionModule.description
        },
        set(val){
              store.commit( 'titleAndDescriptionModule/updateDescription', value)
        }
       })
       


</script> -->
<script>
export default {
  data() {
    return {};
  },
  computed: {
    title: {
      get() {
        return this.$store.state.titleAndDescriptionModule.title;
      },
      set(value) {
        this.$store.commit('titleAndDescriptionModule/updateTitle', value);
      },
    },
    description: {
      get() {
        return this.$store.state.titleAndDescriptionModule.description;
      },
      set(value) {
        this.$store.commit(
          'titleAndDescriptionModule/updateDescription',
          value
        );
      },
    },
  },
};
</script>