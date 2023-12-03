<template>
  <v-container fluid>

    <v-row justify="center">
      <v-col cols="12" md="3">
        <v-text-field dense flat v-model="title" label="Title" color="#1DE9B6" variant="outlined">
        </v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-textarea dense flat v-model="description" label="Description"  color="#1DE9B6" aria-multiline="8" variant="outlined">
        </v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { usetitleAndDescriptionStore } from '../stores/titleAndDescriptionStore.js'
const store = usetitleAndDescriptionStore()
const title = computed({
  get: () => store.title,

  set: (value) =>
    store.updateTitle(value)

})

const description = computed({
  get: () => store.description,

  set: (value) =>
    store.updateDescription(value)

})
</script>
