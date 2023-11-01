const state = () => ({
  address: {
    street: "mytreet",
    houseNr: 7,
    zipCode: "my zip",
    city: null,
    moreInformation: null,
    hello: ""
  },
});
const mutations = {
  updateStreet(state, street) {
    state.address.street = street;
  },
  updateHouseNr(state, houseNr) {
    state.address.houseNr = houseNr;
  },
  updateZipCode(state, zipCode) {
    state.address.zipCode = zipCode;
  },
  updateCity(state, city) {
    state.address.city = city;
  },
  updateMoreInformation(state, moreInformation) {
    state.address.moreInformation = moreInformation;
  },
};

export default {
  namespaced: true,
  mutations,
  state,
};