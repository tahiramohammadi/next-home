import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import vuetify from './plugins/vuetify';
import VueTelInput from 'vue-tel-input';
import './registerServiceWorker';
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import 'vue-tel-input/dist/vue-tel-input.css';
import Axios from 'axios';
import { createPinia } from 'pinia'

loadFonts()


Axios.defaults.baseURL = 'http://localhost:8089';

createApp(App).use(createPinia())
.use(router)

.use(vuetify).use( VueTelInput)
.mount('#app')
