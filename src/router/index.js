
import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/@pages/signupForm.vue';
import login from '@/@pages/loginForm.vue'
import listPropertyType from '@/@pages/propertyType/listPropertyType.vue'
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
        component: () =>
          import(
       '../components/MediaForm.vue'
          ),
      },
    ],
  },
  {
     path:'/signUp', 
     name:'signUp',
     component:SignUp
    
  },
  {
    path:'/loginForm',
    name:'signIn',
    component:login
  },
  
  

  {
    path:'/listProperty',
    name:'listProperty',
    component:listPropertyType
  }


];

const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
