import { createApp } from 'vue';

import '@styles/app.scss';

import App from './App.vue';
import {router} from './router';
import {pinia} from "./store";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
