<template>
  <v-row justify="start">
    <v-col cols="8" md="5">
      <v-text-field
        outlined
        dense
        flat
        v-model="value"
        label="Size"
        color="success"
      >
      </v-text-field>
    </v-col>

    <v-col cols="4" md="3">
      <h3>{{ squareMeter }}</h3>
    </v-col>
  </v-row>
</template>

 <script>
import {useStore} from 'vuex'
import {computed,  ref } from 'vue'
export default{
  setup(){
    const store=useStore()
     const squareMeter=ref('\u33A1')
     function created(){
      store.commit('sizeModule/updateUnit', squareMeter)
     }
     const value =computed({
        get(){
             return store.state.sizeModule.size.value
        },
        set(val){
            store.commit('sizeModule/updateValue', val)
        }
      })
      
      return{
      created
    }

  },
}
   
   
// export default {

//   created () {
//     this.$store.commit('sizeModule/updateUnit', this.squareMeter);
//   },
  
  // data() {
  //   return {
  //     squareMeter: '\u33A1',
  //   };
  // },
     
//   computed: {
//     value: {
//       get() {
//         return this.$store.state.sizeModule.size.value;
//       },
//       set(val) {
//         this.$store.commit('sizeModule/updateValue', val);
//       },
//     },
//   },
// };
</script>
