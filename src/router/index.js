
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/@pages/signupForm.vue';
import login from '@/@pages/loginForm.vue'
import MediaForm from '@/components/MediaForm.vue'
import listPropertyType from '@/@pages/propertyType/listPropertyType.vue'
import FormStepper from '@/components/FormStepper.vue'
const routes = [

  {
    path: '/insertOffer',
    name: 'InsertOffer',
    component: () =>
      import(
'../components/InsertOffer.vue'
      ),
     
    children: [
      {
        path: 'rubric',
        name: 'rubricForm',
        component: () =>
          import(
       '../components/RubricAndAddressForm.vue'
          ),
      },
      {
        path: 'keyFacts',
        name: 'keyFactsForm',
        component: () =>
          import(
         '../components/PropertyKeyFactsForm.vue'
          ),
      },
      {
        path: 'contactPerson',
        name: 'contactPersonForm',
        component: () =>
          import(
           '../components/ContactPersonForm.vue'
          ),
      },
      {
        path: 'media',
        name: 'mediaForm',
        component: MediaForm,
        
      },
    ],
  },
  {
     path:'/signup', 
     name:'signUp',
     component:SignUp
  },
  {
    path:'/signin',
    name:'signIn',
    component:login
  },
  
  

  {
    path:'/listProperty',
    name:'listProperty',
    component:listPropertyType
  },
  {
    path:'/propertyForm',
    name:'FormStepper',
    component:FormStepper
  }
];

const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
