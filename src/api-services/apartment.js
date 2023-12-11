import Axios from 'axios';
import {userubricStore} from '../stores/rubricStore';
const store=userubricStore()
const path = '/apartments';
export function createApartment(apartment) {
  Axios.post(path, apartment)
    .then((response) => {
      const uuid = response.data.uuid;
      console.log('uuid ' + uuid);
      store.commit( uuid);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}
