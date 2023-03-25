const state = () => ({
  photoLinks: [],
});

const mutations = {
  updatePhotoLinks(state, value) {
    state.photoLinks.push(value);
  },
  deletePhotoLink(state, i){
    state.photoLinks.splice(i, 1);
  }
};

export default {
  namespaced: true,
  mutations,
  state,
};
