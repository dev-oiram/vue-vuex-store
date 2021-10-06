import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import globalstore from '@/globalstore'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).provide('globalstore', globalstore).use(store).mount('#app')
