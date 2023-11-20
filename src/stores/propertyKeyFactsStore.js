import { defineStore } from 'pinia';
export const usepropertyKeyFactsStore=defineStore('propertyKeyFactsStore',{
 
  getters:{
    getTarget(state, getters, rootState) {
      return rootState.rubricModule.state.target;
    },
  
    getPropertyType(state, getters, rootState) {
      console.log(rootState);
      return rootState.rubricModule.state.propertyType;
    },
  },
});
