import { createApp } from 'vue';
import './style.css';
import Router from './router';
import store from './store';
import App from './App.vue';

createApp(App).use(Router).use(store).mount('#app');
