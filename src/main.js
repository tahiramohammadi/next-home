import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import 'vue3-toastify/dist/index.css';
import Vue3Toastify from 'vue3-toastify';
import Axios from 'axios';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia'

loadFonts()


Axios.defaults.baseURL = 'http://localhost:8089';
const pinia=createPinia();
pinia.use(piniaPluginPersistedState)
createApp(App).use(pinia)
.use(router).use(Vue3Toastify )

.use(vuetify)
.mount('#app')
