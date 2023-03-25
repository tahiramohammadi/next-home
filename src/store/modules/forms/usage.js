const state = () => ({ usages: [] });
const mutations = {
  updateUsages(state, value) {
    state.usages = value;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
