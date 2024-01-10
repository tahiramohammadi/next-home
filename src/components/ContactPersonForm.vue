<template>
  <v-container>
    
    <v-row justify="start">
        <v-divider></v-divider>
         <h4 class="d-flex flex-row">Contact</h4>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="3">
        <v-text-field variant="outlined" dense flat v-model="name" label="Name" color="#1DE9B6">
        </v-text-field>
    </v-col>
      <v-col cols="12" md="3">
        <v-text-field variant="outlined" dense flat v-model="email" label="Email address"  color="#1DE9B6">
        </v-text-field>
    </v-col>
      <v-col cols="12" md="3">
        <v-text-field variant="outlined" dense flat v-model="phoneNumber" label="Phone number"  color="#1DE9B6">
        </v-text-field>
    </v-col>
    </v-row>
        <v-row justify="center">
    <v-col cols="12" md="9">
        <v-textarea auto-grow variant="outlined" rows="3" v-model="moreInfo" label="More information"  color="#1DE9B6">
        </v-textarea>
    </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { computed } from 'vue';
import { usecontactPersonStore } from '../stores/contactPersonStore.js';
export default {
  setup(){
    const store = usecontactPersonStore();
  const name = computed({
  get:() => store.name,
  set:(val) =>store.updateName(val),
});
const email = computed({
  get:()=>store.email,
  set:(val) =>store.updateEmail(val) 
});
const phoneNumber = computed({
  get:()=> store.phoneNumber,
 
  set:(val)=>store.updatePhoneNumber(val),
});
const moreInfo = computed({
  get:()=>store.moreInformation,
  set:(val)=>store.updateMoreInformation(val),
});


  return{
    name,
    email,
    phoneNumber,
 moreInfo,
  }
  }
}
</script>

