import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import Axios from 'axios'; 

loadFonts()


Axios.defaults.baseURL = 'http://localhost:8089'; 

  createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
