//import { Money } from "../../../models/Price";

const state = () => ({
  price: { amount: null, currency: null },
});

const mutations = {
  updateAmount(state, value) {
    state.price.amount = value;
  },
  updateCurrency(state, value) {
    state.price.currency = value;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
};
