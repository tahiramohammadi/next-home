import Axios from 'axios';
import {usephotosStore} from '../stores/photosStore';
const imageStore=usephotosStore()

const path = '/photos';
export function createPhoto(photo) {
  Axios.post(
    path,
    { summary: 'haha' }
    /*{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }*/
  ).then((response) => {
    const uri = response.data._links.self.href;
    photos.imageStore.updatePhotoLinks(uri); 
    console.log(uri);
    console.log(photo);
    return Axios.put(uri, photo, {
      headers: {
        //   'Content-Type': 'image/png',
        'Content-Type': 'multipart/form-data',
        
      },
    }).then((r) => {
      
      console.log('response: ' + r.data);
    });
  });
}
