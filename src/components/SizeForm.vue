<template>
  <v-row justify="start">
    <v-col cols="8" md="5">
      <v-text-field
      variant="outlined"
        dense
        flat
        v-model="value"
        label="Size"
        color="#1DE9B6"
      >
      </v-text-field>
    </v-col>

    <v-col cols="4" md="3">
      <h3>{{ squareMeter }}</h3>
    </v-col>
  </v-row>
</template>

 <script>
import {usesizeStore} from '../stores/sizeStore.js'
import {computed,  ref,  onMounted} from 'vue'
export default {
  setup(){
    const store=usesizeStore()
    const squareMeter = ref('\u33A1');

     const value =computed({
        get:()=> store.size.value,
      
        set:(val)=>
            store.updateValue( val)
    
      })
      
     onMounted(()=> {
      store.updateUnit( squareMeter)
     });
     
      return{
      squareMeter,
      value
    }

  },
}

</script>
