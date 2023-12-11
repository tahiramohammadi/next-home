import { defineStore } from 'pinia';
export const usepriceStore=defineStore('priceStore', {
 
  state:() => ({
    price: { amount: '', currency: '' },
  }),
  
  actions:{
    updateAmount(value) {
      this.price.amount = value;
    },
    updateCurrency(value) {
      this.price.currency = value;
    }
  },
  getters:{
    getPrice(state){
      return{
        amount:state.price.amount,
        currency:state.price.currency,
      }
    }
   },
});