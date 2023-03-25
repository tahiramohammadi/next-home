import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
//import "roboto-fontface/css/roboto/roboto-fontface.css";
import '@mdi/font/css/materialdesignicons.css';
import Axios from 'axios'; 


Vue.config.productionTip = false;
Axios.defaults.baseURL = 'http://localhost:8089'; 

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');


