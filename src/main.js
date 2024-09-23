// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Import Vuetify instance

createApp(App)
  .use(vuetify) // Use Vuetify
  .mount('#app');
