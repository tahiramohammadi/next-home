const getters = {
  getTarget(state, getters, rootState) {
    return rootState.rubricModule.state.target;
  },

  getPropertyType(state, getters, rootState) {
    console.log(rootState);
    return rootState.rubricModule.state.propertyType;
  },
};

export default {
  nameSpaced: true,
  getters,
};
