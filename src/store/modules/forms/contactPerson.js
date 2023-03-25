const state = () => ({
  name: null,
  email: null,
  phoneNumber: null,
  moreInformaion: null,
});

const mutations = {
  updateName(state, name) {
    state.name = name;
  },
  updateEmail(state, email) {
    state.email = email;
  },
  updatePhoneNumber(state, nr) {
    state.phoneNumber = nr;
  },
  updateMoreInformation(state, info) {
    state.moreInformaion = info;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
