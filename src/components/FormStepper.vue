<template>
  <Vue3MultiStepper
    v-model:step="step"
    :tabs="tabs"
    primaryColor1="#1DE9B6"
    primaryColor2="#c1ebe1"
    backText="Go Back"
    nextText="Next"
    doneText="Finish"
    :loading="loading"
    :finalize="handleFormSubmission
    ">
  <template #1><RubricAndAddressForm/></template>
    <template #2><PropertyKeyFactsForm/></template>
    <template #3><MediaForm/></template>
    <template #4><ContactPersonForm/></template>
  </Vue3MultiStepper>
</template>

<script setup>
import { userubricStore } from '../stores/rubricStore';
import { useaddressStore } from '../stores/addressStore';
import { usetitleAndDescriptionStore } from '../stores/titleAndDescriptionStore';
import { usesizeStore } from '../stores/sizeStore.js';
import { usepriceStore } from '../stores/priceStore';
import { useusageStore } from '../stores/usageStore';
import { useplotStore } from '../stores/plotstore';
import { usebuildingFactsStore } from '../stores/buildingFactsStore';
import { usecontactPersonStore } from '../stores/contactPersonStore';
import { computed, ref } from 'vue';
import Axios from 'axios';
import Vue3MultiStepper from './common/Vue3MultiStepper.vue';
import RubricAndAddressForm from './RubricAndAddressForm.vue';
import PropertyKeyFactsForm from './PropertyKeyFactsForm.vue';
import MediaForm from './MediaForm.vue';
import ContactPersonForm from './ContactPersonForm.vue';

const step = ref(1);
const loading = ref(false);
 //define our stores....
const addressStore = useaddressStore();
const rubricStore = userubricStore();
const titleStore = usetitleAndDescriptionStore();
const sizeStore = usesizeStore();
const priceStore = usepriceStore();
const usageStore = useusageStore();
const buildingStore = usebuildingFactsStore();
const contactStore = usecontactPersonStore();
const plotStore = useplotStore();

  //  getData from stores.....
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
 
    //get data with payload to submit...

const payload = ref({
  address: address,
  contactPerson: contactPerson,
  price: price,
  title,
  plotSize: plotSize,
  description,
  size: size,
  usage,
  target,
  furnished,
  numberOfFloors,
  floorNumber,
  numberOfRooms,
  availableFrom: availableFrom,
  availableTo
});


   //customize our title and icon...
const tabs = computed(() => [
  {
    title: 'RubricAndAddress',
    iconSuccess: null,
    isValid: true
  },
  {
    title: 'KeyFacts',
    iconSuccess: null,
    isValid: true
  },
  {
    title: 'Media',
    iconSuccess: null,
    isValid: true
  },
  {
    title: 'Contact',
    iconSuccess: null,
    isValid: true
  }
]);

//get propertytipe and uuid
 const propertyType = computed(() => rubricStore.propertyType);
const uuid = computed(() => rubricStore.uuid);

 //submit our data
const handleFormSubmission = async () => {
  loading.value = true;
  try {
    console.log('submit called');
    let path = '/' + rubricStore.propertyType.toLowerCase() + 's';
    console.log(path);
    console.log(JSON.stringify(payload.value));
    const r = await Axios.post(path, payload.value);
    const propertyHref = r.data._links.self.href;
    console.log(propertyHref);
    rubricStore.updatePropertyHref(propertyHref);
  } catch (error) {
    console.log(error);
  }
  setTimeout(() => {
    location.reload();
  }, 2000);
};
</script>

<style scoped>
.br {
  margin-top: 1rem;
  border-radius: 10px;
}
</style>