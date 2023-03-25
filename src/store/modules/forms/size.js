const state = () => ({
  size: { value: null, unit: null },
});

const mutations = {
  updateValue(state, value) {
    state.size.value = value;
  },

  updateUnit(state, unit) {
    state.size.unit = unit;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
