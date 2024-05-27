import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import IconPark from '@/utils/icons'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/style/index.css';

const app = createApp(App);

app.use(router);
app.use(IconPark);
app.mount('#app');