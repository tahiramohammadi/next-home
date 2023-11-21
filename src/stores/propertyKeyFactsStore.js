import { defineStore } from 'pinia';
export const usepropertyKeyFactsStore=defineStore('propertyKeyFactsStore',{
 
  getters:{
    getTarget(state, getters, rootState) {
      return rootState.rubricStore.state.target;
    },
  
    getPropertyType(state, getters, rootState) {
      console.log(rootState);
      return rootState.rubricStore.state.propertyType;
    },
  },
});
