import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const app = createApp(App)
app.component('DataTable', DataTable);
app.component('Column', Column);
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
