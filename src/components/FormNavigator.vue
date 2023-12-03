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
import {userubricStore} from '../stores/rubricStore'
export default {
  data() {
    return {
      payload: {
        title: '',
        target: '',
        usages: [],
        size: '',
        plotSize: '',
        price: 0,
        floorNumber: 0,
        numberOfFloors: 0,
        numberOfRooms: 0,
        furnished: false,
        availableFrom: '',
        availableTo: '',
        description: '',
        address: '',
        photos: [],
        contactPerson: '',
      },
      
   store:userubricStore(),
    };
  },

  computed: {
    propertyType() {
      return this.store.propertyType;
    },
    uuid() {
      return this.store.uuid;
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
    
      console.log(JSON.stringify(this.payload)); 
      Axios.post(path, this.payload)
        .then((r) => {
          const propertyHref = r.data._links.self.href;
          console.log(propertyHref);
          this.$store.updatePropertyHref( propertyHref);
        })
        .catch((er) => {
          console.log(er);
        });
    },

    updateProperty() {},
    linkPhotosAndProperty() {},
  },
};
//   import { userubricStore } from '../stores/rubricStore';
//   import Axios from 'axios';
//   import { useRoute, useRouter } from 'vue-router'
//   // import  usePropertyStore from '../models/propertyObjBuilder.js'
//   import {computed, ref} from 'vue'
//   export default {
//     setup( { emit }){
//       const uid = ref(null)
//       const rubricStore=userubricStore()
//       const Route=useRoute()
//       const router=useRouter()
//       const payload=ref({title: '',
//     target:'',
//     usages:[],
//     size: '',
//     plotSize: '',
//     price: 0,
//     floorNumber: 0,
//     numberOfFloors: 0,
//     numberOfRooms: 0,
//     furnished: false,
//     availableFrom: '',
//     availableTo: '',
//     description: '',
//     address: '',
//     photos: [],
//     contactPerson: '',})
    
//       // const route=useRoute()
//       // const router = useRouter()
//       const propertyType=computed(() => rubricStore.propertyType)
//       const uuid=computed(()=>rubricStore.uuid)



//       const nextButtonText =computed(() => {
//       if (Route.name === 'contactPersonForm') {
//         return 'submit'
//       }
//       return 'next'
//     });

//     const isFirst =computed(() => {
//       if(Route && Route.name==='rubricForm'){
//         return Route.value.name === 'rubricForm'
//       }else{
//         return 'page not found'
//       }
//     });
 
     
//     const navigateNext = () => {
//       if ( Route.name === 'contactPersonForm') {
//         if (uid.value == null) {
//           createProperty()
//         }
//         emit('postPhotos')
//         linkPhotosAndProperty()
//       } else if ( Route.value.name === 'mediaForm') {
//         router.push('/insertOffer/contactPerson')
//       } else if ( Route.value.name === 'keyFactsForm') {
//         router.push('/insertOffer/media')
//       } else if ( Route.vlue.name === 'rubricForm') {
//         router.push('/insertOffer/keyFacts')
//       }
//     }
//     const navigatePrevious = () => {
//       if ( Route.value.name === 'contactPersonForm') {
//         router.push('/insertOffer/media')
//       } else if ( Route.value.name === 'mediaForm') {
//         router.push('/insertOffer/keyFacts')
//       } else if ( Route.value.name === 'keyFactsForm') {
//         router.push('/insertOffer/rubric')
//       }
//     }

//     const createProperty = () => {
//       console.log('submit called')
//       let path = '/' + propertyType.value.toLowerCase() + 's'
//       console.log(path);

   
//       console.log(JSON.stringify(payload))
//       Axios.post(path, payload)
//         .then((r) => {
//           const propertyHref = r.data._links.self.href
//           console.log(propertyHref)
//           rubricStore.updatePropertyHref( propertyHref)
//         })
//         .catch((er) => {
//           console.log(er)
//         })
//     }
    

//     const updateProperty = () => {};
// const linkPhotosAndProperty = () => {};
//       return {
//         isFirst,
//            propertyType,
//            uuid,
//            nextButtonText,
//            navigateNext,
//            navigatePrevious

//       }
//     }
//   }


 




</script>
