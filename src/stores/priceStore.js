import { defineStore } from 'pinia';
export const usepriceStore=defineStore('priceStore', {
 
  state:() => ({
    price: { amount: null, currency: null },
  }),
  
  actions:{
    updateAmount(value) {
      this.price.amount = value;
    },
    updateCurrency(value) {
      this.price.currency = value;
    }
  },
});