import Axios from 'axios';

const path = '/houses';
export function createHouse(house) {
  Axios.post(path, house)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}
