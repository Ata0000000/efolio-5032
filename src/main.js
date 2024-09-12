import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';



// 创建 Vue 应用
const vueApp = createApp(App);

vueApp.component('DataTable', DataTable);
vueApp.component('Column', Column);

vueApp.use(PrimeVue, { theme: { preset: Aura } });
vueApp.use(router);

vueApp.mount('#app');
