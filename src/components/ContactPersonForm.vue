<template>
  <v-container>
    <v-card row wrap justify-space-around>

        <v-text-field outlined dense flat v-model="name" label="Name">
        </v-text-field>

    </v-card>
    <v-card row wrap justify-space-around>

        <v-text-field outlined dense flat v-model="email" label="Email address">
        </v-text-field>
    
    </v-card>
    <v-card row wrap justify-space-around>
  
        <v-text-field outlined dense flat v-model="phoneNumber" label="Phone number">
        </v-text-field>
  
    </v-card>
    <v-card row wrap justify-space-around>
 
        <v-textarea auto-grow outlined rows="3" v-model="moreInformation" label="More information">
        </v-textarea>
  
    </v-card>
  </v-container>
</template>

<script>
import { computed } from 'vue';
import { usecontactPersonStore } from '../stores/contactPersonStore.js';
export default{
  setup(){
    const store = usecontactPersonStore()
 const name = computed({
  get:() => store.name,
  set:(val) =>store.updateName(val),
});
const email = computed({
  get:()=>store.email,
  set:(val) =>store.updateEmail(val) 
})
const phoneNumber = computed({
  get:()=> store.phoneNumber,
 
  set:(val)=>store.updatePhoneNumber(val),
});
const moreInformation = computed({
  get:()=>store.moreInformaion,
  set:(val)=>store.updateMoreInformation(val),
});


  return{
    name,
    email,
    phoneNumber,
    moreInformation,
  }
  }
}
</script>

