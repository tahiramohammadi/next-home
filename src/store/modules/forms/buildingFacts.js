const state = () => ({   
  furnished: null,
  numberOfRooms: null,
  numberOfFloors: null,
  floorNumber: null,
  availableFrom: null,
  availableTo: null,
});

const mutations = {
  updateFurnished(state, val) {
    state.furnished = val;
  },
  updateNumberOfRooms(state, val) {
    state.numberOfRooms = val;
  },
  updateNumberOfFloors(state, val) {
    state.numberOfFloors = val;
  },
  updateFloorNumber(state, val) {
    state.floorNumber = val;
  },
  updateAvailableFrom(state, val) {
    state.availableFrom = val;
  },
  updateAvailableTo(state, val) {
    state.availableTo = val;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
