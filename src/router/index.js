
import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  {
    path: '/insertOffer',
    name: 'InsertOffer',
    component: () =>
      import(
        /*webpackChunkName: "insertOffer" */ '../components/InsertOffer.vue'
      ),

    children: [
      {
        path: 'rubric',
        name: 'rubricForm',
        component: () =>
          import(
            /*webpackChunkName: "insertOfferRubric" */ '../components/RubricAndAddressForm.vue'
          ),
      },
      {
        path: 'keyFacts',
        name: 'keyFactsForm',
        component: () =>
          import(
            /*webpackChunkName: "insertOfferKeyFacts" */ '../components/PropertyKeyFactsForm.vue'
          ),
      },
      {
        path: 'contactPerson',
        name: 'contactPersonForm',
        component: () =>
          import(
            /*webpackChunkName: "insertContactPerson" */ '../components/ContactPersonForm.vue'
          ),
      },
      {
        path: 'media',
        name: 'mediaForm',
        component: () =>
          import(
            /*webpackChunkName: "insertMedia" */ '../components/MediaForm.vue'
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
