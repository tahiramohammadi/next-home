const state = () => ({ target: '', propertyType: '', propertyHref: null});
const mutations = {
  updateTarget(state, value) {
    state.target = value;
  },
  updatePropertyType(state, value) {
    state.propertyType = value;
  },
  updatePropertyHref(state, value) {
    state.propertyHref = value;
  },
};
export default {
  namespaced: true,
  root: true,
  state,
  mutations,
};
