const state = () => ({
  title: null,
  description: null,
});

const mutations = {
  updateTitle(state, value) {
    state.title = value;
  },
  updateDescription(state, value) {
    state.description = value;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
