import Axios from 'axios';

const path = '/plots';
export function createPlot(plot) {
  Axios.post(path, plot)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}
