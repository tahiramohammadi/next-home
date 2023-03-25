import Axios from 'axios';

const path = '/shops';
export function createShop(shop) {
  Axios.post(path, shop)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  }