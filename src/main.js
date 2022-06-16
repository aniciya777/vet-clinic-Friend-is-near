import { createApp } from 'vue'
import App from './App.vue'
import routers from './routes';

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css"
import "bootstrap";

import "@/assets/scss/main.scss";

const app = createApp(App);
app.use(routers);
app.mount('#app')
