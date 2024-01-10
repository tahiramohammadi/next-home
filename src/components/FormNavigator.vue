<template>     
  <v-row>
    <v-col>
     
      
      <v-btn v-show="!isFirst()" text color="#1DE9B6" class="text-white" @click="navigatePrevious">
        Previous
      </v-btn>
    </v-col>
    <v-col> </v-col>
    <v-col> </v-col>
    <v-col> </v-col>
    <v-col>
      <v-btn text color="#1DE9B6" @click="navigateNext" class="text-white">
        {{ nextButtonText() }}</v-btn
      >
        
     
    </v-col>
           
  </v-row>

</template>

<script>

import Axios from 'axios';
import { useaddressStore } from '../stores/addressStore';
import { usetitleAndDescriptionStore } from '../stores/titleAndDescriptionStore';
import { usesizeStore } from '../stores/sizeStore.js';
import { usepriceStore } from '../stores/priceStore';
import { useusageStore } from '../stores/usageStore';
import {useplotStore} from '../stores/plotstore';
import { usebuildingFactsStore } from '../stores/buildingFactsStore';
import { usecontactPersonStore } from '../stores/contactPersonStore';
import { userubricStore } from '../stores/rubricStore';
import { computed, ref} from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  setup() {
    ///routes
    const route = useRoute();
    const router = useRouter();
    //stores...
    const addressStore = useaddressStore();
    const rubricStore = userubricStore();
    const titleStore = usetitleAndDescriptionStore();
    const sizeStore = usesizeStore();
    const priceStore = usepriceStore();
    const usageStore = useusageStore();
    const buildingStore = usebuildingFactsStore();
    const contactStore = usecontactPersonStore();
    const plotStore= useplotStore()
    //getting data stores....
    const address = addressStore.getAddress;
    const contactPerson = contactStore.getContactPerson;
    const price = priceStore.getPrice;
    const usage = usageStore.getUsage;
    const title = titleStore.getTitleAndDesc;
    const description = titleStore.getTitleAndDesc;
    const size = sizeStore.getSize;
    const plotSize = plotStore.getplot;
    const target = rubricStore.getTarget;
    const numberOfFloors = buildingStore.getFloor;
    const floorNumber = buildingStore.getfloorNum;
    const furnished = buildingStore.getfurnished;
    const availableFrom = buildingStore.getAvailbleFrom;
    const availableTo = buildingStore.getAvailbleTo;
    const numberOfRooms = buildingStore.getNum;
    
    const payload = ref({
      address:address,
      contactPerson:contactPerson,
      price:price,
      title,
      plotSize:plotSize,
      description,
      size:size,
      usage,
      target,
      furnished,
      numberOfFloors,
      floorNumber,
      numberOfRooms,
      availableFrom:availableFrom,
      availableTo,

    });

    //computed ...
    const propertyType = computed(() => rubricStore.propertyType);
    const uuid = computed(() => rubricStore.uuid);

    //methods...
    const nextButtonText = () => {
      if (route.name === 'contactPersonForm') {
        return 'submit';
      }
      return 'next';
    };

    const isFirst = () => {
      return route.name === 'rubricForm';
    };

    const navigateNext = () => {
      if (route.name === 'contactPersonForm') {
        if (rubricStore.uuid == null) {
          createProperty();
        }

        linkPhotosAndProperty();
      } else if (route.name === 'mediaForm') {
        router.push('/insertOffer/contactPerson');
      } else if (route.name === 'keyFactsForm') {
        router.push('/insertOffer/media');
      } else if (route.name === 'rubricForm') {
        router.push('/insertOffer/keyFacts');
      }
    };

    const navigatePrevious = () => {
      if (route.name === 'contactPersonForm') {
        router.push('/insertOffer/media');
      } else if (route.name === 'mediaForm') {
        router.push('/insertOffer/keyFacts');
      } else if (route.name === 'keyFactsForm') {
        router.push('/insertOffer/rubric');
      }
    };
 const createProperty =  async() => {
      try {
    
        console.log('submit called');
        let path = '/' + rubricStore.propertyType.toLowerCase() + 's';
        console.log(path);
        console.log(JSON.stringify(payload.value));
       await Axios.post(path, payload.value).then(r => {
          const propertyHref = r.data._links.self.href;
          console.log(propertyHref);
          rubricStore.updatePropertyHref(propertyHref);
        });
       
   
      } catch (er) {
        console.log(er);
      }
    };

 
    const linkPhotosAndProperty = () => {
      if (postPhotos) {
        postPhotos(); // Call the postPhotos function
      } else {
        console.error("Injection 'postPhotos' not found.");
      }
    };


     
    return {
      propertyType,
      uuid,
      createProperty,
      linkPhotosAndProperty,
      isFirst,
      nextButtonText,
      navigateNext,
      navigatePrevious,

     
    };
  }
};
</script>
