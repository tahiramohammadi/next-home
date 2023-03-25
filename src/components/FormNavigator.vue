<template>
  <v-row>
    <v-col>
      <v-btn v-show="!isFirst()" text color="success" @click="navigatePrevious">
        Previous
      </v-btn>
    </v-col>
    <v-col> </v-col>
    <v-col> </v-col>
    <v-col> </v-col>
    <v-col>
      <v-btn text color="success" @click="navigateNext">
        {{ nextButtonText() }}</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import createPropertyObj from '../models/propertyObjBuilder';
//import { createPlot } from '../api-services/plot';
//import { createApartment } from '../api-services/apartment';
//import { createHouse } from '../api-services/house';
//import { createShop } from '../api-services/shop';
import Axios from 'axios';

export default {
  computed: {
    propertyType() {
      return this.$store.state.rubricModule.propertyType;
    },
    uuid() {
      return this.$store.state.rubricModule.uuid;
    },
  },
  methods: {
    nextButtonText() {
      if (this.$route.name === 'contactPersonForm') {
        return 'submit';
      }
      return 'next';
    },
    isFirst() {
      return this.$route.name === 'rubricForm';
    },
    navigateNext() {
      if (this.$route.name === 'contactPersonForm') {
        if (this.uid == null) {
          this.createProperty();
        }
        this.$emit('postPhotos');

        this.linkPhotosAndProperty();
      } else if (this.$route.name === 'mediaForm') {
        this.$router.push('/insertOffer/contactPerson');
      } else if (this.$route.name === 'keyFactsForm') {
        this.$router.push('/insertOffer/media');
      } else if (this.$route.name === 'rubricForm') {
        this.$router.push('/insertOffer/keyFacts');
      }
    },
    navigatePrevious() {
      if (this.$route.name === 'contactPersonForm') {
        this.$router.push('/insertOffer/media');
      } else if (this.$route.name === 'mediaForm') {
        this.$router.push('/insertOffer/keyFacts');
      } else if (this.$route.name === 'keyFactsForm') {
        this.$router.push('/insertOffer/rubric');
      }
    },
    createProperty() {
      console.log('submit called');
      let path = '/' + this.propertyType.toLowerCase() + 's';
      console.log(path);
      let property = createPropertyObj(this.$store.state);
      console.log(JSON.stringify(property)); 
      Axios.post(path, property)
        .then((r) => {
          const propertyHref = r.data._links.self.href;
          console.log(propertyHref);
          this.$store.commit('rubricModule/updatePropertyHref', propertyHref);
        })
        .catch((er) => {
          console.log(er);
        });
      /*
      console.log(createPropertyObj(this.$store.state));

      console.log('type:' + this.propertyType);
      let property = createPropertyObj(this.$store.state);
      console.log(this.propertyType);
      if (this.propertyType === 'Apartment') {
        createApartment(property);
      } else if (this.propertyType === 'House') {
        createHouse(property);
      } else if (this.propertyType === 'Shope') {
        createShop(property);
      } else if (this.propertyType === 'Plot') {
        createPlot(property);
      }
      // modified 
    */
    },

    updateProperty() {},
    linkPhotosAndProperty() {},
  },
};
</script>
