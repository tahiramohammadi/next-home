import Axios from 'axios';
import store from '../store/index';
const path = '/apartments';
export function createApartment(apartment) {
  Axios.post(path, apartment)
    .then((response) => {
      const uuid = response.data.uuid;
      console.log('uuid ' + uuid);
      store.commit('rubricModule/updateUUID', uuid);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}
