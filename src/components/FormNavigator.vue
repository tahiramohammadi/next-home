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
  // import { userubricStore } from '../stores/rubricStore';
  // import propertyStore from '../models/propertyStore'
  // import Axios from 'axios';
  // import { useRoute, useRouter } from 'vue-router'
  // import {computed, ref} from 'vue'
  // import {useStore} from 'pinia'
  // export default{
  //   setup(props, { emit }){
  //     const uid = ref(null)
  //     const rubricStore=userubricStore()
  //     const store = useStore(propertyStore); 
  //     const route=useRoute()
  //     const router = useRouter()
  //     const propertyType=computed(() => rubricStore.propertyType)
  //     const uuid=computed(()=>rubricStore.uuid)

  //     const nextButtonText = computed(() => {
  //     if (route.value.name === 'contactPersonForm') {
  //       return 'submit'
  //     }
  //     return 'next'
  //   })
  //   const isFirst = computed(() => {
  //     return route.value.name === 'rubricForm'
  //   })
 
     
  //   const navigateNext = () => {
  //     if (route.value.name === 'contactPersonForm') {
  //       if (uid.value == null) {
  //         createProperty()
  //       }
  //       emit('postPhotos')
  //       linkPhotosAndProperty()
  //     } else if (route.value.name === 'mediaForm') {
  //       router.push('/insertOffer/contactPerson')
  //     } else if (route.value.name === 'keyFactsForm') {
  //       router.push('/insertOffer/media')
  //     } else if (route.value.name === 'rubricForm') {
  //       router.push('/insertOffer/keyFacts')
  //     }
  //   }
  //   const navigatePrevious = () => {
  //     if (route.name === 'contactPersonForm') {
  //       router.push('/insertOffer/media')
  //     } else if (route.name === 'mediaForm') {
  //       router.push('/insertOffer/keyFacts')
  //     } else if (route.name === 'keyFactsForm') {
  //       router.push('/insertOffer/rubric')
  //     }
  //   }

  //   const createProperty = () => {
  //     console.log('submit called')
  //     let path = '/' + propertyType.value.toLowerCase() + 's'
  //     console.log(path)
  //     let property =  propertyStore (store.state)
  //     console.log(JSON.stringify(property))
  //     Axios.post(path, property)
  //       .then((r) => {
  //         const propertyHref = r.data._links.self.href
  //         console.log(propertyHref)
  //         store.updatePropertyHref( propertyHref)
  //       })
  //       .catch((er) => {
  //         console.log(er)
  //       })
  //   }
    

  //   const linkPhotosAndProperty = () => {
  //     // Your linkPhotosAndProperty logic goes here
  //   }
  //     return {
  //          propertyType,
  //          uuid,
  //          nextButtonText,
  //          isFirst,
  //          navigateNext,
  //          navigatePrevious

  //     }
  //   }
  // }


 
import createPropertyObj from '../models/propertyObjBuilder';


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
    },

    updateProperty() {},
    linkPhotosAndProperty() {},
  },
};
</script>
